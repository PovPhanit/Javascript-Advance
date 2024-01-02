import view from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
import resultView from './resultView.js';
class bookmarkView extends view {

  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ';
  _Message = '';
  addHandlerRender(handler){
    window.addEventListener('load',handler)
  }
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(bookmark => previewView.render(bookmark,false)).join('');
  }
}

export default new bookmarkView();
