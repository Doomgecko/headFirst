let JSONObj = {};
let chars = 4;
let charNum;

window.onload = init;

function loadCharacters(){
    let characterData = new XMLHttpRequest();
    characterData.onreadystatechange = function (){
        if (this.readyState === 4 && this.status === 200){
            JSONObj = JSON.parse(this.responseText);
        }
    };

    characterData.open("GET", "JSONExample.JSON", false);
    characterData.send();
}

function init(){
    loadCharacters();
    document.getElementById("sub").onclick = nextButtonPress;

    //TODO: Sort out why we can't use length yet
    charNum = JSONObj[charNum].length;
    nextButtonPress();
}

function nextButtonPress(eventObj){
    if(charNum === chars){
        charNum = 0;
    }else {
        charNum++;
    }
    let nextButton = document.getElementById("sub");
    document.getElementById("charName").innerHTML = JSONObj[charNum].name;
}



