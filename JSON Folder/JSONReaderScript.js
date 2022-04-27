let JSONObj = {};
let charNum = 1;
let chars = 5;

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

loadCharacters();

function init(){
    nextButton.onclick = nextButtonPress;
}

let nextButton = document.getElementById("sub");
document.getElementById("charName").innerHTML = JSONObj[charNum].name;

function nextButtonPress(eventObj){
    if(charNum === chars){
        charNum = 1;
    }else {
        charNum++;
    }
}

