import * as messaging from 'messaging';
import {
  testingView, subjectSelectionView, VTList,
} from './Interactable';
import showTestingView from './Testing';

let subjects = [];

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
    subjects = evt.data;
    /**
     * Configures out list view with gui
     * Pass alongs information to testing
     * about subject.
     */
    VTList.delegate = {
      getTileInfo(index) {
        return {
          type: 'my-pool',
          subject: subjects[index],
          index,
        };
      },
      configureTile(tile, { type, subject }) {
        if (type == 'my-pool') {
          // eslint-disable-next-line no-param-reassign
          tile.getElementById('text').text = `${subject.name} ${subject.uuid}`;
          const touch = tile.getElementById('touch-me');
          touch.onclick = (evt) => {
            showTestingView(subject);
          };
        }
      },
    };
    // VTList.length must be set AFTER VTList.delegate
    VTList.length = subjects.length;
  }
};
/**
 * Shows The subject selection view
 */
function showSubjectSelectionView() {
  console.log('Show Subject Selection View');
  testingView.style.display = 'none';
  subjectSelectionView.style.display = 'inline';
  fetchSubjectData();
}

export default showSubjectSelectionView;
