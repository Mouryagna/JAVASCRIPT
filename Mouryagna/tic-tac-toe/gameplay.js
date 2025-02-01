let playervalue=document.querySelector('.js-player');
playervalue.innerHTML='player 1';
let player=(value) => {
        const playerMove=document.querySelector(`.${value}`);
        if(playervalue.innerHTML === 'player 1' && playervalue.innerHTML==='') {
            playerMove.innerHTML=`X`;
            playerMove.classList.add('x-button');
            playervalue.innerHTML='player 2';
        }
        else if(playervalue.innerHTML === 'player 2' && playervalue.innerHTML==='') {
            playerMove.innerHTML=`O`;
            playerMove.classList.add('o-button');
            playervalue.innerHTML = 'player 1';
        }
}
document.querySelector('.a1').addEventListener('click',()=> {
    player('a1'); 
    result();
});
document.querySelector('.a2').addEventListener('click',()=> {
    player('a2');
    result();
});
document.querySelector('.a3').addEventListener('click',()=> {
    player('a3');
    result();
});
document.querySelector('.a4').addEventListener('click',()=> {
    player('a4');
    result();
});
document.querySelector('.a5').addEventListener('click',()=> {
    player('a5');
    result();
});
document.querySelector('.a6').addEventListener('click',()=> {
    player('a6');
    result();
});
document.querySelector('.a7').addEventListener('click',()=> {
    player('a7');
    result();
});
document.querySelector('.a8').addEventListener('click',()=> {
    player('a8');
    result();
});
document.querySelector('.a9').addEventListener('click',()=> {
    player('a9');
    result();
});
let playerLastMove = () => {
    const p1=document.querySelector('.a1').innerHTML;
    const p2=document.querySelector('.a2').innerHTML;
    const p3=document.querySelector('.a3').innerHTML;
    const p4=document.querySelector('.a4').innerHTML;
    const p5=document.querySelector('.a5').innerHTML;
    const p6=document.querySelector('.a6').innerHTML;
    const p7=document.querySelector('.a7').innerHTML;
    const p8=document.querySelector('.a8').innerHTML;
    const p9=document.querySelector('.a9').innerHTML;
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
    let winner='';
    if(value ==='player1') {
        winner='Player 1 Won';
        win(winner);
    }
    else if(value === 'player2') {
        winner='Player 2 Won';
        win(winner);
    }
    
    
}
reset= ()=> {
    for(let i=1;i<=9;i++) {
        document.querySelector(`.a${i}`).classList.remove('x-button');
        document.querySelector(`.a${i}`).classList.remove('o-button');
        document.querySelector(`.a${i}`).innerHTML='';
    }
    playervalue.innerHTML='player 1';
}
document.querySelector('.reset').addEventListener('click',()=> {
    reset();  
});
let win=(winner) => {
    
    document.querySelector('.box').innerHTML=`
        <p>${winner}</p>
        <div>
            <button onclick="playAgain();" class="play-again">Play again</button>
            <a href="index.html">
                <button class="exit">Exit</button>    
            </a>
        </div>
    `;
    document.querySelector('.background').classList.add('normal');
    document.querySelector('.box').classList.add('winning-box');
    
}
function playAgain() {
    document.querySelector('.box').innerHTML='';
    document.querySelector('.winning-box').classList.remove('winning-box');
    document.querySelector('.normal').classList.remove('normal');
    reset();
}