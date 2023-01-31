let pcScore = 0;
let userScore = 0;
const _material = document.querySelector('.user').children;
const _msg = document.querySelector('.masseg');


for (let i = 0; i < _material.length; i++) {
    _material[i].addEventListener('click', _game);
}


function _game() {
    let userChois = ((event.target).parentElement).getAttribute('id');
    let pcChois = (_material[(Math.random() * 2).toFixed()]).getAttribute('id');
    let _pc = document.querySelector(`#${pcChois}`).children[0].getAttribute('class');
    let _temp;


    if (userChois == pcChois) {
        _temp = 'Your Tie!';
        _remove();
        _msg.classList.add('bg-tie');
        document.querySelector(`#${userChois}`).children[0].classList.add('bg-lose-user');


    } else if ((userChois == 'rock' && pcChois == 'scissors') ||
        (userChois == 'paper' && pcChois == 'rock') ||
        (userChois == 'scissors' && pcChois == 'paper')
    ) {
        _temp = "Your Win!!";
        _remove();
        _msg.classList.add('bg-win');
        document.querySelector(`#${userChois}`).children[0].classList.add('bg-win-user');

        userScore++;
    } else {
        _temp = 'You Lose!!';
        _remove();
        _msg.classList.add('bg-lose');
        document.querySelector(`#${userChois}`).children[0].classList.add('bg-lose-user');

        pcScore++;


    }

    document.querySelector('#usescore').innerHTML = userScore;
    document.querySelector('#pcscore').innerHTML = pcScore;
    document.querySelector('#masseg').innerHTML = _temp;
    document.querySelector('#computer').classList.add('transform');

    setTimeout(() => {
        document.querySelector('#computer').innerHTML = `<span class='${_pc}' ><span/>`;
    }, 100);

    setTimeout(() => {
        document.querySelector('#alert').classList.add('alert-1');
    }, 400);

    for (let i = 0; i < _material.length; i++) {
        _material[i].classList.remove('anime-1');
    }

}


function _close() {
    document.querySelector('#alert').classList.remove('alert-1');
    document.querySelector('#computer').classList.remove('transform');
    document.querySelector('.container').style.background = `${_bg()}`;
    console.log(_bg())
    _remove();
    for (let i = 0; i < _material.length; i++) {
        _material[i].classList.add('anime-1');
        _material[i].children[0].classList.remove('bg-tie-user');
    }
}


function _remove() {
    for (let i = 0; i < _material.length; i++) {
        _material[i].children[0].classList.remove('bg-win-user');
        _material[i].children[0].classList.add('bg-tie-user');
        _material[i].children[0].classList.remove('bg-lose-user');
    }
    _msg.classList.remove('bg-win');
    _msg.classList.remove('bg-tie');
    _msg.classList.remove('bg-lose');
}

function _bg(){
    let color1 = '#';
    let color2 = '#';
    for(let i=0;i<6;i++){
        color1 += (Math.random()*9).toFixed();
        color2 += (Math.random()*9).toFixed();
    }
    let bgc = `linear-gradient(70deg,${color1},${color2})`;
    return bgc;
}