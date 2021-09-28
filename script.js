let button = document.getElementById("btn");

//Images
let player1_image = document.getElementById("image1");
let player2_image = document.getElementById("image2");

//Scores div
let player1_score = document.getElementById("score1");
let player2_score = document.getElementById("score2");

//player scores
let score1 = 0;
let score2 = 0;

//turn
let turn = true;


//player name
let playername=document.getElementById("player-name")

button.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * 6) + 1;
  updatePlayer()
  updateImage(randomNum);
  updateScore(randomNum);

  turn = !turn;
});


function updatePlayer(){
    if(turn==true){
       playername.innerText="Player 2"
    }else{
        playername.innerText="Player 1"
    }
}

function updateScore(score){
    if(turn==true){
        score1=score1+score;
        player1_score.innerHTML=score1;
    }else{
        score2=score2+score;
        player2_score.innerHTML=score2;
    }
}

function updateImage(i) {
  if (turn == true) {
    player1_image.style.backgroundImage = `url("assets/${i}.svg")`;
  } else {
    player2_image.style.backgroundImage = `url("assets/${i}.svg")`;
  }
}
