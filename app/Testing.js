import { vibration } from 'haptics';
import { testingView, stopButton, subjectSelectionView } from './Interactable';

const timeout = 5000; //Replace with random number

// List of possible vibration patterns
const vibrationPatterns = ["nudge","nudge-max","confirmation","confirmation-max"];

let testId = Number();
let subjectId = Number();

let start = null, end = null;

/**
 * Show Testing View
 * Vibration will be based of number passed
 * to function.
 * @param {Number} subject 
 * @param {Number} test 
 */
const showTestingView = (subject, test) => {
    console.log("Show Testing View");
    testingView.style.display = "inline";
    subjectSelectionView.style.display = "none";
    
    testId = test;
    subjectId = subject;

    /**
     * Sets Timeout until the vibration occurs
     * Executes code after timeout
     */
    setTimeout(() => {
        start = new Date();
        vibration.start(vibrationPatterns[testId]);
    }, timeout);
}

/**
 * Controls functionality of the stop button
 * Once start is set then end can be set.
 */
stopButton.onclick = (evt) => {
    if(start === null);
    else{
        end = new Date();
        console.log(end - start);
        // Report Number to Back End
    }
}

export default showTestingView;