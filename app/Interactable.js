import document from 'document';

// These are all elements that I want to interact with in the gui
const testingView = document.getElementById('testing-view');
const subjectSelectionView = document.getElementById('subject-selection-view');
const VTList = document.getElementById('my-list');
const stopButton = document.getElementById('stop-button');

export {
  testingView, subjectSelectionView, VTList, stopButton,
};
