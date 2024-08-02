

function tom1() {
    var audio = new Audio("/sounds/tom-1.mp3");
    audio.play();
    var button = document.getElementById('tom1');
    button.classList.add('animate');

    setTimeout(() => {
        button.classList.remove('animate');
    }, 250);
   
}
function tom2() {
    var audio = new Audio("/sounds/tom-2.mp3");
    audio.play();
    var button = document.getElementById('tom2');
    button.classList.add('animate');

    setTimeout(() => {
        button.classList.remove('animate');
    }, 250);
}
function tom3() {
    var audio = new Audio("/sounds/tom-3.mp3");
    audio.play();
    var button = document.getElementById('tom3');
    button.classList.add('animate');

    setTimeout(() => {
        button.classList.remove('animate');
    }, 250);
}
function tom4() {
    var audio = new Audio("/sounds/tom-4.mp3");
    audio.play();
    var button = document.getElementById('tom4');
    button.classList.add('animate');

    setTimeout(() => {
        button.classList.remove('animate');
    }, 250);
}
function kick() {
    var audio = new Audio("/sounds/kick-bass.mp3");
    audio.play();
    var button = document.getElementById('kick');
    button.classList.add('animate');

    setTimeout(() => {
        button.classList.remove('animate');
    }, 250);
}

function crash() {
    var audio = new Audio("/sounds/crash.mp3");
    audio.play();
    var button = document.getElementById('crash');
    button.classList.add('animate');

    setTimeout(() => {
        button.classList.remove('animate');
    }, 250);
}

function snare() {
    var audio = new Audio("/sounds/snare.mp3");
    audio.play();
    var button = document.getElementById('snare');
    button.classList.add('animate');

    setTimeout(() => {
        button.classList.remove('animate');
    }, 250);
}

