const dynamicContent=document.getElementById("dynamic-text");

const phrases=["Software Developer...","Human Being at World...","Student at life...", ];
let phraseIndex=0;
let letterIndex=0;
const typingspeed=150;
const erasingspeed=75;

function printLetters(phrase){
    if(letterIndex==phrase.length){
        clearLetters();
    }
    else if (letterIndex<phrase.length){
        dynamicContent.textContent+=phrase.charAt(letterIndex);
        letterIndex+=1;
        setTimeout(function (){
            printLetters(phrase);
        }, typingspeed)
    }
}

function clearLetters(){
    if(letterIndex==-1){
        phraseIndex=(phraseIndex+1) % phrases.length;
        letterIndex=0;
        printLetters(phrases[phraseIndex]);
    }
    else if(letterIndex>-1){
        let updatedPhrase="";
        for (let index=0;index<letterIndex;index++){
            updatedPhrase+=phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent=updatedPhrase;
        letterIndex-=1;
        setTimeout(clearLetters, erasingspeed);
    }
}

printLetters(phrases[phraseIndex]);