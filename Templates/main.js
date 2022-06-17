console.log("Online")
function play() {
    let croak = new Audio('Sounds/ribbit.mp3');
    croak.pause();
    croak.currentTime = 0;
    croak.play();
}
function chooseDialogue(option=0) {
     dialogue = {button:{ "1a" : "test1", "2a" : "test2", "3a" : "test3"}, 
     dia : {"a" : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nulla veniam perferendis eveniet molestias magnam culpa adipisci magni itaque vitae!"}}
     let changer = document.querySelector("#op1").innerHTML = dialogue.button["1a"];
} 