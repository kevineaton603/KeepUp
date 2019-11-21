import document from 'document';
import { display } from 'display';
import showSubjectSelectionView from './VTList';
import { testingView } from './Interactable';

display.autoOff = false;

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
