import view from './view.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
class ResultsViews extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage='NO recipes found for your query! Please try again';
  _Message='';
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result,false)).join('');
  }
} 

export default new ResultsViews();
