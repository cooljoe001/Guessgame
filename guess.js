  

 


let secretnumber = Math.trunc(Math.random()*20)+1;
let score =20; 
let highscore =0;
const displayMessage =(message)=>{
    document.querySelector('.message').textContent =message;


}




 const butt = document.querySelector('.check');
butt.addEventListener('click',()=>{

  //WHEN THERE IS NO INPUT
const guess = Number(document.querySelector('.guess').value);
if(!guess){
    displayMessage('⛔ No Number!')

     // WHEN A PLAYER WINS
}else if(guess ===secretnumber){
    displayMessage('🥇Correct Number!');

    document.querySelector('.number').textContent =secretnumber;

    document.querySelector('body').style.backgroundColor ='green';
    document.querySelector('.number').style.width ='40%';
 
    if(score>highscore){
        highscore =score;
        document.querySelector('.highscore').textContent =highscore;
    }

}else if(guess!==secretnumber){

    if(score >1){
        displayMessage((guess>secretnumber)?'📈 Too High !':'📊 Too low !')
     score--;
    document.querySelector('.score').textContent =score;
 
    }else{

        displayMessage('😟 You lost the game !')
      document.querySelector('.score').textContent = 0;

    }
    
} 


// WHEN INPUT IS GREATER THAN RANDOMLY GENERATED NUMBER
// }else if(guess>secretnumber){

//     if(score >1){
//         document.querySelector('.message').textContent ='📈 Too High !';
//     score--;
//     document.querySelector('.score').textContent =score;
 
//     }else{

//      document.querySelector('.message').textContent ='😟 You lost the game ! ';
//      document.querySelector('.score').textContent = 0;


//     }
    
// // WHEN INPUT IS LESS  THAN RANDOMLY GENERATED NUMBER

// }else if(guess<secretnumber){
//     if(score >1){
//          document.querySelector('.message').textContent='📊 Too Low !';
//         score--;
//         document.querySelector('.score').textContent=score;
    
 
//     }else{

//      document.querySelector('.message').textContent ='😟You lost the game !';
//      document.querySelector('.score').textContent = 0;


//     }
   
// }
// console.log( typeof guess);

})


const againbtn =document.querySelector('.again');
againbtn.addEventListener('click',()=>{
    score=20;
    secretnumber = Math.trunc(Math.random()*20)+1;
    displayMessage('Start guessing...');
     document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor ='#352F44';
    document.querySelector('.number').style.width ='15rem';


 



})
console.log(againbtn)
