const character = document.getElementById('character');
const block = document.getElementById('block');
var counter=0;
var speed = 2000;
 function jump() {
    if (character.classList == 'jump') {return}
    character.classList.add('jump')
    setTimeout(() => {
        character.classList.remove('jump')
    }, 500);
}

var checkDead = setInterval(function() {
let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        speed=2000;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter+=10;
        speed-=1;
        block.style.animation = `block ${speed}ms infinite linear`;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);