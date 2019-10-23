import { testingView, subjectSelectionView, VTList } from './Interactable';
import showTestingView from './Testing';

function showSubjectSelectionView(){
    console.log("Show Subject Selection View");
    testingView.style.display = "none";
    subjectSelectionView.style.display = "inline";
}

let NUM_ELEMS = 10;

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
        showTestingView();
      };
    }
  }
};

// VTList.length must be set AFTER VTList.delegate
VTList.length = NUM_ELEMS;
