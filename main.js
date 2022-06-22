console.log("Online")
let letter = 0;
function play() {
    let croak = new Audio('Sounds/ribbit.mp3');
    croak.pause();
    croak.currentTime = 0;
    croak.play();
}
function chooseDialogue(option=0, cass) { 
    dialogue = {"button" : {"1a" : "Pond Water", "2a" : "Parsley Mojito", "3a" : "Martini"}, 
     "dia" : {"a" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nulla veniam perferendis eveniet molestias magnam culpa adipisci magni itaque vitae!", 
     "b":"I'm quite sure I could arrange that! pick your poison.", "c":"Not big on words, no matter I'm sure a drink will fix you up! what can I get for ya?"}
     ,"bottom" : {"a" : 27, "b" : 22, "c": 22}, "letters" : {1:"a", 2:"b", 3:"c", 4:"d", 5:"e", 6:"f", 7:"g",8:"h",9:"i",10:"j",11:"k",12:"l",13:"m"}}
    if (option == 0) {
      nb = document.querySelector(cass).innerHTML = dialogue.dia[`${letter}`];
      document.getElementById('name').style = "position:absolute; bottom:"+dialogue.bottom[`${letterChar}`]+"%";
      console.log(dialogue)
     }
     else {
        letter++;
        letterChar = dialogue.letters[letter.toString()]
        console.log(letterChar)
        nb = document.querySelector(cass+'1').innerHTML = dialogue.button[`${option}${letterChar}`];
        nb = document.querySelector(cass+'2').innerHTML = dialogue.button[`${option+1}${letterChar}`];
        nb = document.querySelector(cass+'3').innerHTML = dialogue.button[`${option+2}${letterChar}`];
     }
} 

//test function
function letterMaker() {
    letter++;
    let letterz = {"letters" : {"1":"a", "2":"b", "3":"c", "4":"d", "5":"e", "6":"f", "7":"g","8":"h","9":"i","10":"j","11":"k","12":"l","13":"m"}};
    letterChar = letterz.letters[letter.toString()]
}
