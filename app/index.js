import document from 'document';
import showSubjectSelectionView from './VTList';
import { testingView } from './Interactable';

showSubjectSelectionView();

/**
 * Controls the actions of the button on the right hand
 * side of the watch
 */
document.onkeypress = (evt) => {
  if (evt.key === 'back') {
    if (testingView.style.display === 'inline') {
      showSubjectSelectionView();
      evt.preventDefault();
    }
  }
};

console.log('Starting Application');
