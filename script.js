'use strict';
// selecting elements 
const player0el=document.querySelector('.player--0');
const player1el=document.querySelector('.player--1');
const score0el=document.querySelector('#score--0');
const score1el=document.querySelector('#score--1');
const currentscoree0=document.getElementById('current--0')
const currentscoree1=document.getElementById('current--1')
const diceel=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new')
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
const btnhelp=document.querySelector('.btn--help');
// starting conditions
let scores,currentscore,activeplayer,playing;

const init=function(){
    scores=[0,0];
    currentscore=0;
    activeplayer=0;
    playing=true;
    
    score0el.textContent=0;
    score1el.textContent=0;
    currentscoree0.textContent=0;
    currentscoree1.textContent=0;  

    diceel.classList.add('hidden')
    player0el.classList.remove('player--winner');
      player1el.classList.remove('player--winner');  
      player0el.classList.add('player--active');
      player1el.classList.remove('player--active');  
    
};

init();
// switching players>>>>>>>>>>>>>>>>>

const switchplayer=function(){
    currentscore=0;
    activeplayer=activeplayer===0 ? 1: 0;
  player0el.classList.toggle('player--active');
  player1el.classList.toggle('player--active');
};
// rolling dice functionality
btnroll.addEventListener('click',function(){
    if(playing){
//   generating random diceroll>>>>>>>>>>>>>>>
    const dice=Math.trunc(Math.random()*6)+1;
    // console.log(dice);
//   dispaly the dice roll
diceel.classList.remove('hidden');
diceel.src=`dice-${dice}.png`;/*>>>>>>>>>>>>>>>>>>>>>> */
// if not rolled one add to current score otherwise switch to next palyer 
if(dice!==1){
    // currentscore=currentscore+dice;
     currentscore+=dice;
     document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    //  currentscoree0.textContent=currentscore;   
}else{
    // setting current score to 0>>>>>>
    document.getElementById(`current--${activeplayer}`).textContent=currentscore;
    // switch to the next player
    switchplayer();
    }
}
});
//   hold button>>>>>>>>>>>
   btnhold.addEventListener('click',function(){
//  add current and active player score>>>>>>>>>>>>
 if(playing){   scores[activeplayer]+=currentscore;
    document.getElementById(`score--${activeplayer}`)
    .textContent=scores[activeplayer];
    //  check if players score is >=100>>>>>>>>>>>>>>>>
    if(scores[activeplayer]>=20){
        playing=false;
        document.querySelector('body').style.backgroundColor='#E10978'
        document.querySelector(`.player--${activeplayer}`)
       .classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    }else{
        //  switch player>>>>>>>>>>
        switchplayer();
        
    }
}
});
//    new game button>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    btnnew.addEventListener('click',init);
        
    
    //new button of help  >>>>>>>>>>>>>>>>>>>>>>>>
    btnhelp.addEventListener('click',function(){
       score0el.textContent=20;  
       currentscoree0.textContent=20;
       score1el.textContent='player 2 lost';  
        document.querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
    })