import {async} from 'regenerator-runtime';
import { API_URL } from './config';
import { AJAX } from './views/helpers';
import { RES_PER_AGE ,  KEY } from './config';
export const state={
    recipe:{},
    search:{
      query:'',
      results:[],
      page:1,
      resultPerPage:RES_PER_AGE,
    },
    bookmarks:[],
};
const createRecipeObject=function(data){
  const {recipe}=data.data;
  return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...(recipe.key && { key: recipe.key}),
  };
}

export const loadRecipe=async function(id){
   try{ 
    // const data=await AJAX(`${API_URL}/${id}`);
      const data=await AJAX(`${API_URL}/${id}?key=${KEY}`);
      let { recipe } = data.data;
      console.log(recipe.servings);
      state.recipe=createRecipeObject(data);
      console.log(state.recipe);
      if(state.bookmarks.some(bookmark=>bookmark.id===id)){
        state.recipe.bookmarks=true;
      }
      else state.recipe.bookmarks =false;
    }
    catch(err){
       console.error(`${err}`);
       throw err;
    }
}

export const loadSearchResults=async function(query){
  try{
    state.search.query=query;
      // const data=await AJAX(`${API_URL}?search=${query}`);
      const data=await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
      console.log(data)
      state.search.results=data.data.recipes.map(rec=>{
        return {
          id : rec.id,
          title:rec.title,
          publisher: rec.publisher,
          image: rec.image_url,
          ...(rec.key && { key: rec.key}),
        }
      });
      console.log(state.search.results);
      state.search.page=1;
  }
  catch(err){
    console.error('Error hx');
    throw err;
  }
}

export const getSearchResultsPage = function(page=state.search.page){
  state.search.page=page;
  const start=(page-1)*state.search.resultPerPage;
  const end=page*state.search.resultPerPage;
  return state.search.results.slice(start,end);
}

export const updateServings=function(newServings){
  state.recipe.ingredients.forEach(ing=> {
    ing.quantity=(ing.quantity*newServings)/state.recipe.servings;
  });
  console.log(newServings)
  console.log('Here Serving :' , state.recipe.servings);
  state.recipe.servings=newServings;
  console.log(state.recipe);
  // console.log(state.recipe.servings);  
}
const persistBookmarks=function(){
  localStorage.setItem('bookmarks',JSON.stringify(state.bookmarks))
}
export const addBookmark=function(recipe){
  //addd bookmark
  state.bookmarks.push(recipe);

  //Mark current recipe as bookmark
  if(recipe.id===state.recipe.id)
  state.recipe.bookmarks=true;
  persistBookmarks();
}

export const deleteBookmark=function(id){
  //delete bookmark
  const index=state.bookmarks.findIndex(el=>el.id===id);
  state.bookmarks.splice(index,1);
  if(id===state.recipe.id)
  state.recipe.bookmarks=false;
  persistBookmarks();
}

const init=function(){
 const storage= localStorage.getItem('bookmarks')
 if(storage)
  state.bookmarks=JSON.parse(storage);
}
init();

const clearBookmarks=function(){
  localStorage.clear('bookmarks');  
}
// clearBookmarks();

export const uploadRecipe=async function(newRecipe){
  try{
  console.log(newRecipe);
  const ingredients=Object.entries(newRecipe)
    .filter(entry=>entry[0].startsWith('ingredient') && entry[1]!=='')
    .map(ing=>{
      const ingArr=ing[1].split(',').map(el=>el.trim());
      // const ingArr=ing[1].replaceAll(' ','').split(',');
      if(ingArr.length!==3 )
      throw new Error('wrong ingredient format! Please use the correct format :');
      const [quantity,unit,description]=ing[1].replaceAll('',' ').split(',');
      return {quantity:quantity?+quantity : null,unit,description};
    });
    const recipe={
      title: newRecipe.title,
      sourceUrl:newRecipe.sourceUrl,
      image_url:newRecipe.image,
      publisher:newRecipe.publisher,
      cookingTime:+newRecipe.cookingTime,
      servings:+newRecipe.servings,
      ingredients,
    };
  console.log(ingredients);
  console.log(recipe);
  const data= await AJAX(`${API_URL}?key=${KEY}`,recipe);
  console.log(data);
  state.recipe=createRecipeObject(data);
  addBookmark(state.recipe);
  }
  catch(err){
    throw err;
  }
 
}
