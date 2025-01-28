let playervalue=document.querySelector('.js-player');
playervalue.innerHTML='player 1';
let player=(value) => {
        const playerMove=document.querySelector(`.${value}`);
        if(playervalue.innerHTML === 'player 1') {
            playerMove.innerHTML=`X`;
            playerMove.classList.remove('o-button');
            playerMove.classList.add('x-button');
            playervalue.innerHTML='player 2';
        }
        else if(playervalue.innerHTML === 'player 2') {
            playerMove.innerHTML=`O`;
            playerMove.classList.remove('x-button');
            playerMove.classList.add('o-button');
            playervalue.innerHTML = 'player 1';
        }
        return playerMove.innerHTML;
}
document.querySelector('.a').addEventListener('click',()=> {
    player('a'); 
    
    result();
});
document.querySelector('.b').addEventListener('click',()=> {
    player('b');
    
    result();
});
document.querySelector('.c').addEventListener('click',()=> {
    player('c');
    
    result();
});
document.querySelector('.d').addEventListener('click',()=> {
    player('d');
    
    result();
});
document.querySelector('.e').addEventListener('click',()=> {
    player('e');
    
    result();
});
document.querySelector('.f').addEventListener('click',()=> {
    player('f');
    
    result();
});
document.querySelector('.g').addEventListener('click',()=> {
    player('g');
    
    result();
});
document.querySelector('.h').addEventListener('click',()=> {
    player('h');
    
    result();
});
document.querySelector('.i').addEventListener('click',()=> {
    player('i');
    
    result();
});
let playerLastMove = () => {
    const p1=document.querySelector('.a').innerHTML;
    const p2=document.querySelector('.b').innerHTML;
    const p3=document.querySelector('.c').innerHTML;
    const p4=document.querySelector('.d').innerHTML;
    const p5=document.querySelector('.e').innerHTML;
    const p6=document.querySelector('.f').innerHTML;
    const p7=document.querySelector('.g').innerHTML;
    const p8=document.querySelector('.h').innerHTML;
    const p9=document.querySelector('.i').innerHTML;
    if(p1===p2 && p1===p3 && p1=== 'X') {
        return 'player1';
    }
    else if(p4===p5 && p4===p6 && p4=== 'X') {
        return 'player1';
    }
    else if(p7===p8 && p7===p9 && p7=== 'X') {
        return 'player1';
    }
    else if(p1===p4 && p1===p7 && p7=== 'X') {
        return 'player1';
    }
    else if(p2===p5 && p2===p8 && p2=== 'X') {
        return 'player1';
    }
    else if(p3===p6 && p3===p9 && p3=== 'X') {
        return 'player1';
    }
    else if(p1===p5 && p1===p9 && p1=== 'X') {
        return 'player1';
    }
    else if(p3===p5 && p7===p3 && p7=== 'X') {
        return 'player1';
    }

    if(p1===p2 && p1===p3 && p1=== 'O') {
        return 'player2';
    }
    else if(p4===p5 && p4===p6 && p4=== 'O') {
        return 'player2';
    }
    else if(p7===p8 && p7===p9 && p7=== 'O') {
        return 'player2';
    }
    else if(p1===p4 && p1===p7 && p7=== 'O') {
        return 'player2';
    }
    else if(p2===p5 && p2===p8 && p2=== 'O') {
        return 'player2';
    }
    else if(p3===p6 && p3===p9 && p3=== 'O') {
        return 'player2';
    }
    else if(p1===p5 && p1===p9 && p1=== 'O') {
        return 'player2';
    }
    else if(p3===p5 && p7===p3 && p7=== 'O') {
        return 'player2';
    }
}
let result=() => {
    let value=playerLastMove();
    let winner=document.querySelector('.js-result');
    if(value ==='player1') {
        winner.innerHTML='Player 1 Won';
    }
    else if(value === 'player2') {
        winner.innerHTML='Player 2 Won';
    }
}