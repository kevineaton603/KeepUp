import * as messaging from 'messaging';
import { vibration } from 'haptics';
import { testingView, stopButton, subjectSelectionView } from './Interactable';

const timeout = 5000; // Replace with random number

// List of possible vibration patterns
const vibrationPatterns = {
  a: ['ring', 'confirmation-max'], 
  b: [ 'confirmation-max', 'ring'],
};

let start = null; 
let end = null;

let subject = {};

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
  console.log(subject._id);
  /**
   * Sets Timeout until the vibration occurs
   * Executes code after timeout
   */
  setTimeout(() => {
    start = new Date();
    vibration.start(vibrationPatterns[subject.group][subject.tests.length]);
  }, timeout);
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
    vibration.stop();
    end = new Date();
    console.log('Reaction of ', end - start, ' ms');
  }
};

// Send a message to the peer
function postTest(pattern, time) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send the data to peer as a message
    messaging.peerSocket.send({ command: 'submitTest',  });
  }
}

// Listen for the onopen event
messaging.peerSocket.onopen = () => {
  // Ready to send or receive messages
  fetchSubjectData();
};

// Listen for the onerror event
messaging.peerSocket.onerror = (err) => {
  // Handle any errors
  console.log(`Connection error: ${err.code} - ${err.message}`);
};

// Listen for messages from the companion
messaging.peerSocket.onmessage = (evt) => {
  if (evt.data) {
    console.log(evt.data[0]._id);
  }
};

export default showTestingView;
