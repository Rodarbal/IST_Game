"use strict";

console.log("Online")
var letter = 0;
var iteration = 0;
function play() {
    croak.pause();
    let croak = new Audio('Sounds/ribbit.mp3');
    croak.currentTime = 0;
    croak.play();
}
function music(id){
    if (id==1) {
        let bgmusic = new Audio("Sounds/Let'sGetTogetherNow!.mp3");
        bgmusic.play();
        bgmusic.loop = true;
    }
}
// change letter change to letter
function chooseDialogue(option=0, cass, letterChange=0) { 
    let dialogue = {"button" : {"1a" : "Pond Water", "2a" : "Parsley Mojito", "3a" : "Martini", 
    "1b" : "Pond Water", "2b" : "Parsley Mojito", "3b" : "Martini", "1c" : "Pond Water", 
    "2c" : "Parsley Mojito", "3c" : "Martini"}, 
     "dia" : {"a" : "Nice meeting you too :) is there anything I can get for you to drink?", 
     "b":"I'm quite sure I could arrange that! pick your poison.", "c":"Not big on words, no matter I'm sure a drink will fix you up! what can I get for ya?"}
     ,"bottom" : {"a" : 22, "b" : 22, "c": 22}, "letters" : {1:"a", 2:"b", 3:"c", 4:"d", 5:"e", 6:"f", 7:"g",8:"h",9:"i",10:"j",11:"k",12:"l",13:"m",14:"n",15:"o",16:"p",17:"q",18:"r",19:"s",20:"t",21:"u",22:"v",23:"w",24:"x",25:"y",26:"z"}}
     if (option > 0) {
        letter = (iteration * 3) + letterChange;
        let letterChar = dialogue.letters[letter.toString()];
        nb = document.querySelector(cass+'1').innerHTML = dialogue.button[`${option}${letterChar}`];
        nb = document.querySelector(cass+'2').innerHTML = dialogue.button[`${option+1}${letterChar}`];
        nb = document.querySelector(cass+'3').innerHTML = dialogue.button[`${option+2}${letterChar}`];
    }
    else {
        letter = (iteration * 3) + letterChange;
        let letterChar = dialogue.letters[letter.toString()];
        nb = document.querySelector(cass).innerHTML = dialogue.dia[`${letterChar}`];
        document.getElementById('name').style = "position:absolute; bottom:"+dialogue.bottom[`${letterChar}`]+"%";
        if(iteration == 0) {
            music(1);
        }
        if(iteration == 1){
            if(letterChange == 1){
                document.body.style = "background-image: url(./Images/SecondStage.png);";
                let a = document.querySelector("#op1");
                a.setAttribute('href', 'Rubbert.html')
                document.getElementById('name').innerText = 'Rubbert';
                console.log(letter)
            }
        }
        iteration++;
    }
} 
