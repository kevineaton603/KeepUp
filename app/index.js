import document from 'document';
import showSubjectSelectionView from './VTList';

showSubjectSelectionView();

/**
 * Controls the actions of the button on the right hand
 * side of the watch
 */
document.onkeypress = (evt) => {
    if(evt.key === 'back'){
        if(testingView.style.display === 'inline'){
          showSubjectSelectionView();
          evt.preventDefault();
        }
    }
}

console.log("Starting Application");

