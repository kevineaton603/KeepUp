import document from 'document';
import { HeartRateSensor } from "heart-rate";
import { user } from "user-profile";
import { me } from "appbit";
import {testingView, subjectSelectionView, VTList} from './Interactable';
import { vibration } from "haptics";


function showTestingView(){
    console.log("Show Testing View");
    testingView.style.display = "inline";
    subjectSelectionView.style.display = "none";
    vibration.start("ring");
}

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

document.onkeypress = (evt) => {
    if(evt.key === 'back'){
        if(testingView.style.display === 'inline'){
          vibration.stop();
          showSubjectSelectionView();
          evt.preventDefault();
        }
    }
}
