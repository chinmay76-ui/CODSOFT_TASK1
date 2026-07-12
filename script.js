const words = [

"Java Developer",

"Spring Boot Developer",

"SAP ABAP Developer",

"Web Developer"

];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type(){

if(charIndex < words[wordIndex].length){

typing.textContent += words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(type,120);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(charIndex>0){

typing.textContent=words[wordIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(erase,60);

}

else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(type,300);

}

}

document.addEventListener("DOMContentLoaded",type);