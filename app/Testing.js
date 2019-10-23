import document from 'document';
import {testingView, subjectSelectionView, VTList} from './Interactable';

function showTestingView() {
    console.log("Show Testing View");
    testingView.style.display = "inline";
    subjectSelectionView.style.display = "none";
    vibration.start("ring");
}

document.onkeypress = (evt) => {
    if(evt.key === 'back'){
        if(testingView.style.display === 'inline'){
          vibration.stop();
          showSubjectSelectionView();
          evt.preventDefault();
        }
    }
}

export default showTestingView;