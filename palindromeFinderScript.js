String.prototype.palindrome = function(){
    let stringLength = this.length-1;
    for(let i = 0; i < stringLength/2; i++){
        if(this.charAt(i) !== this.charAt(stringLength-i)){
            return false;
        }

    }
    return true;

};

let phrases = ["wild", "wow", "radical", "mom", "dad", "mother", "racecar", "kayak","amanaplanacanalpanama"];

for(let i = 0; i < phrases.length; i++){
    let phrase = phrases[i];
    if(phrase.palindrome()){
        console.log("'" + phrase + "'" + " is a palindrome.");
    }else {
        console.log("'" + phrase + "'" + " is not a palindrome.");
    }
}