let playervalue=document.querySelector('.js-player');
playervalue.innerHTML='player 1'
player=(value) => {
    let playerMove=document.querySelector(`.${value}`);
    if(playervalue.innerHTML === 'player 1') {
        playerMove.innerHTML=`<img src=images/x.png>`;
        playervalue.innerHTML='player 2';
    }
    else if(playervalue.innerHTML === 'player 2') {
        playerMove.innerHTML=`<img src=images/o.png>`;
        playervalue.innerHTML = 'player 1';
    }
    return playervalue.innerHTML;
}
document.querySelector('.a').addEventListener('click',()=> {
    let value=player('a');{
        if(value === '' ) {
            value;
        }
    }
});
document.querySelector('.b').addEventListener('click',()=> {
    player('b');
});
document.querySelector('.c').addEventListener('click',()=> {
    player('c');
});
document.querySelector('.d').addEventListener('click',()=> {
    player('d');
});
document.querySelector('.e').addEventListener('click',()=> {
    player('e');
});
document.querySelector('.f').addEventListener('click',()=> {
    player('f');
});
document.querySelector('.g').addEventListener('click',()=> {
    player('g');
});
document.querySelector('.h').addEventListener('click',()=> {
    player('h');
});
document.querySelector('.i').addEventListener('click',()=> {
    player('i');
});
