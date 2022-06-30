var iteration = 0; 
if (document.URL.includes("Rubbert.html") ) {
    var dialogue = {"button" : {"1a":'Looks good!', "2a":'What even is this', "3a":"Chug the drink", '1c':'...', '2c':'continue','3c':"...",'1d':'...','2d':'continue','3d':'...','1e':'...',"2e":'continue',"3e":"...", '1g':'yes?', '2g':'yes!', '3g':'no',}, 
    "dia" : {"a" : "Sigh... start off with the godforsaken mixture: 1 cl of dubious water sourced from outside and top that off with some dirt", "c":"Glad you enjoyed. Ill go help another customer while you enjoy your 'drink' over here.","d":"What you ordered sir. Ill go help another customer while you enjoy your 'drink' over here." ,"e":"Glad you enjoyed. Ill go help another customer while you enjoy your 'drink' over here.", "g":"Ribbit Ribbit? (Hello do you like money?)"}
    ,"bottom" : {"a" : 22, "b" : 22, "c": 22}, "letters" : {1:"a", 2:"b", 3:"c", 4:"d", 5:"e", 6:"f", 7:"g", 8:"h", 9:"i", 10:"j", 11:"k", 12:"l", 
    13:"m",14:"n", 15:"o",16:"p",17:"q",18:"r",19:"s",20:"t",21:"u",22:"v",23:"w",24:"x",25:"y",26:"z"}}
}
else{
    console.log('hi')
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo(option, letterChar) {
    for (let i = 0; i < 3; i++) {
        console.log(`Waiting ${i} seconds...`);
        await sleep(i * 1000);
    }
    document.body.style.backgroundImage = "url('Images/SecondStage.png')";
    document.getElementById('op1').style.display = 'block';
    document.getElementById('op2').style.display = 'block';
    document.getElementById('op3').style.display = 'block';
    document.getElementById('name').style.display = 'block';
    document.querySelectorAll(".dialogue").forEach(a=>a.style.display = "block");
    document.getElementById('name').innerText = 'Rubbert';
    music(2);
    nb = document.querySelector(cass+'1').innerHTML = dialogue.button[`${option}${letterChar}`];
    nb = document.querySelector(cass+'2').innerHTML = dialogue.button[`${option+1}${letterChar}`];
    nb = document.querySelector(cass+'3').innerHTML = dialogue.button[`${option+2}${letterChar}`];
}

function music(id){
    if (id==1) {
        var bgmusic = new Audio("Sounds/Let'sGetTogetherNow!.mp3");
        bgmusic.play();
        bgmusic.loop = true;
    }
    if (id==2){
        let croak = new Audio('Sounds/ribbit.mp3');
        croak.currentTime = 0;
        croak.play();
    }
}

 function chooseDialogue(option=0, cass, letterChange=0) { 
     if (option > 0) {
        letter = (iteration * 3) + letterChange;
        let letterChar = dialogue.letters[letter.toString()];
        console.log(letterChar)
        nb = document.querySelector(cass+'1').innerHTML = dialogue.button[`${option}${letterChar}`];
        nb = document.querySelector(cass+'2').innerHTML = dialogue.button[`${option+1}${letterChar}`];
        nb = document.querySelector(cass+'3').innerHTML = dialogue.button[`${option+2}${letterChar}`];
    }
    else {
        letter = (iteration * 3) + letterChange;
        let letterChar = dialogue.letters[letter.toString()];
        console.log(letterChar)
        nb = document.querySelector(cass).innerHTML = dialogue.dia[`${letterChar}`];
        document.getElementById('name').style = "position:absolute; bottom:"+dialogue.bottom[`${letterChar}`]+"%";
        if(iteration == 0) {
            music(1);
            document.getElementById('op1').style.display = 'block';
            document.getElementById('op3').style.display = 'block';
        }
        if(iteration == 1){
            document.getElementById('op1').style.display = 'none';
            document.getElementById('op3').style.display = 'none';
        }
        if(iteration == 2){
            document.getElementById('op1').style.display = 'none';
            document.getElementById('op2').style.display = 'none';
            document.getElementById('op3').style.display = 'none';
            document.getElementById('name').style.display = 'none';
            document.querySelectorAll(".dialogue").forEach(a=>a.style.display = "none");
            document.body.style.backgroundImage = "url('Images/intro.png')";
            demo(option,letterChar)
        }
        if(iteration == 3){
            music(2)
        }
        iteration++;
        console.log(iteration)
    }
} 
