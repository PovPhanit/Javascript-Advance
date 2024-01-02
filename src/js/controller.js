import * as model from './model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import bookmarkView from './views/bookmarkView.js';
import paginationView from './views/pagination.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

import 'core-js/stable';
import 'regenerator-runtime';
import {async} from 'regenerator-runtime';

if(module.hot){
  module.hot.accept();
}
const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const ControlRecipe = async function () {
  try {
    const id=window.location.hash.slice(1);
    console.log(id);
    if(!id) return;

    //spinner when wrong API(url)
    recipeView.renderSpinner();
    
    //0 update results view to mark selected search result
    resultView.update(model.getSearchResultsPage());
    
    //1 updating bookmarks view
    // debugger; 
    bookmarkView.update(model.state.bookmarks);


    // 2 loading recipe
    await model.loadRecipe(id);

    //3. Rendering Recipe
    recipeView.render(model.state.recipe);
 
  
    
    
  } catch (err) {
    recipeView.renderError();
  }
  
};



const controlSearchResult=async function(){
  try{
    resultView.renderSpinner();

    //get search query
    const query=searchView.getQuery();
    if(!query) return;

    //Load search results
    await model.loadSearchResults(query);

    //render results
    console.log(model.state.search.results)
    // resultView.render(model.state.search.results);
    resultView.render(model.getSearchResultsPage(1))

    //render install pagination buttons
    paginationView.render(model.state.search)
  }
  catch(err){
    console.log(err)
  }
}

const controlPagination=function(goTopage){
  console.log(goTopage);
  // resultView.render(model.state.search.results);
  resultView.render(model.getSearchResultsPage(goTopage))

  //render install pagination buttons
  paginationView.render(model.state.search)
}

const controlServings=function(newServings){
  //update the recipe serving (in state)
  // console.log(typeof(newServings));
  model.updateServings(newServings);
  //update the recipe view
  console.log(model.state.recipe);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
}

const controlAddBookmark=function(){
  //1 add/remove bookmark
  if(!model.state.recipe.bookmarks) 
  model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);
  console.log(model.state.recipe);

  //2 update recipe view   
  recipeView.update(model.state.recipe);

  //3 Render bookmarkss
  bookmarkView.render(model.state.bookmarks);
}
const contrlBoomarks=function(){
  bookmarkView.render(model.state.bookmarks);
}
const controlAddRecipe=async function(newRecipe){
  try{
  //show loading spinner
  addRecipeView.renderSpinner();
  console.log(newRecipe);
  //upload the new recipe data
  await model.uploadRecipe(newRecipe);
  //render recipe
  recipeView.render(model.state.recipe);
  //success message
  addRecipeView.renderMessage();
  //render bookmark view
  bookmarkView.render(model.state.bookmarks);

  //change ID in url
  window.history.pushState(null,'',`#${model.state.recipe.id}`);
  // window.history.back()
  //close form
  setTimeout(() => {
    addRecipeView.toggleWindow();
  },MODAL_CLOSE_SEC * 1000 );
  }
  catch(err){
    console.error('tt eror ');
    addRecipeView.renderError(err.message);
  }

  
}

//control function
const init =function(){
  bookmarkView.addHandlerRender(contrlBoomarks);
  recipeView.addHandlerrRender(ControlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandleClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);

}


init();



