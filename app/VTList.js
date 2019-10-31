import * as messaging from 'messaging';
import { testingView, subjectSelectionView, VTList } from './Interactable';
import showTestingView from './Testing';

// Send a message to the peer
function fetchSubjectData() {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    // Send the data to peer as a message
    messaging.peerSocket.send({ command: 'getData' });
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
/**
 * Shows The subject selection view
 */
function showSubjectSelectionView() {
  console.log('Show Subject Selection View');
  testingView.style.display = 'none';
  subjectSelectionView.style.display = 'inline';
}

/**
 * Number of Elements in list
 * TODO:
 * In the full application this number will be controlled
 * By an API call to our database
 */
const NUM_ELEMS = 4;

/**
 * Configures out list view with gui
 * Pass alongs information to testing
 * about subject.
 */
VTList.delegate = {
  getTileInfo(index) {
    return {
      type: 'my-pool',
      value: 'Subject ',
      index,
    };
  },
  configureTile(tile, info) {
    if (info.type == 'my-pool') {
      tile.getElementById('text').text = `${info.value} ${info.index}`;
      const touch = tile.getElementById('touch-me');
      touch.onclick = (evt) => {
        showTestingView(1, info.index);
      };
    }
  },
};

// VTList.length must be set AFTER VTList.delegate
VTList.length = NUM_ELEMS;

export default showSubjectSelectionView;
