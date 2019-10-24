import { testingView, subjectSelectionView, VTList } from './Interactable';
import showTestingView from './Testing';
import { getData } from '../companion/companion';

const data = getData();

/**
 * Shows The subject selection view 
 */
function showSubjectSelectionView(){
  console.log("Show Subject Selection View");
  testingView.style.display = "none";
  subjectSelectionView.style.display = "inline";
}

/**
 * Number of Elements in list 
 * TODO: 
 * In the full application this number will be controlled
 * By an API call to our database
 */
let NUM_ELEMS = 4;

/**
 * Configures out list view with gui
 * Pass alongs information to testing
 * about subject.
 */
VTList.delegate = {
  getTileInfo: function(index) {
    return {
      type: "my-pool",
      value: "Subject ",
      index: index
    };
  },
  configureTile: function(tile, info) {
    if (info.type == "my-pool") {
      tile.getElementById("text").text = `${info.value} ${info.index}`;
      let touch = tile.getElementById("touch-me");
      touch.onclick = evt => {
        showTestingView(1, info.index);
      };
    }
  }
};

// VTList.length must be set AFTER VTList.delegate
VTList.length = NUM_ELEMS;

export default showSubjectSelectionView;