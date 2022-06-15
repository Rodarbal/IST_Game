console.log("Online")
function play() {
    let croak = new Audio('Sounds/ribbit.mp3');
    croak.pause();
    croak.currentTime = 0;
    croak.play();
}
/*var audio = new Audio();
audio.src='Sounds/ribbit.mp3';
audio.oncanplaythrough = (event) => {
    var playedPromise = audio.play();
    if (playedPromise) {
        playedPromise.catch((e) => {
             console.log(e)
             if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') { 
                   console.log(e.name);
              }
         }).then(() => {
              console.log("playing sound !!!");
         });
    }
}*/