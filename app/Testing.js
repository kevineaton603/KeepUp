import * as messaging from 'messaging';
import { vibration } from 'haptics';
import { testingView, stopButton, subjectSelectionView } from './Interactable';

const timeout = 5000; // Replace with random number

// List of possible vibration patterns
const vibrationPatterns = {
  a: ['ring', 'confirmation-max'],
  b: ['confirmation-max', 'ring'],
};

let start = null;
let end = null;

let subject = {};
let pattern = '';

/**
 * Show Testing View
 * Vibration will be based of number passed
 * to function.
 * @param {Number} sub
 */
const showTestingView = (sub) => {
  console.log('Show Testing View');
  testingView.style.display = 'inline';
  subjectSelectionView.style.display = 'none';
  subject = sub;
  start = null;
  end = null;
  /**
   * Sets Timeout until the vibration occurs
   * Executes code after timeout
   */
  setTimeout(() => {
    start = new Date();
    pattern = vibrationPatterns[subject.group][subject.tests.length];
    vibration.start(pattern);
  }, timeout);
};

// Send a message to the peer
function postTest(time) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send({ command: 'submitTest', subject, test: { pattern, time } });
  }
}

// Listen for the onerror event
messaging.peerSocket.onerror = (err) => {
  // Handle any errors
  console.log(`Connection error: ${err.code} - ${err.message}`);
};

/**
 * Controls functionality of the stop button
 * Once start is set then end can be set.
 * TODO:
 * After end is set, send POST request to database
 */
stopButton.onclick = (evt) => {
  if (start === null);
  else {
    console.log(`${end - start}  ms`);
    vibration.stop();
    end = new Date();
    postTest(end - start);
  }
};

export default showTestingView;
