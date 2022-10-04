const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");
const $team1score = document.getElementById("score-team1");
const $team1Wicket = document.getElementById("wickets-team1");
const $team2Score = document.getElementById("score-team2");
const $team2Wickets = document.getElementById("wickets-team2");
const possibleOutcome=[0,1,2,3,4,5,6,'W'];
const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

var team1Score=0;
var team1Wicket=0;
var team2Score=0;doc
var team2Wicket=0;
var team1BallFaced=0;
var team2BallFaced=0;
var turn = 1;

function updateScore()
{
    $team1score.textContent=team1Score;
    $team2Wicket.textContent=team2Wicket;
    
    $team2Score.textContent=team2Score;
    $team2Wicket.textContent=team2Wicket;
}

resetButton.onclick=()=>{
    window.location.reload();
};

function gameOver()
{ gameOverAudio.play();
    if(team1Score>team2Score)
    alert('India wins');
    else if(team2Score>team2Score)
    alert('Pak wins');
    else 
    alert("fuck it's a tie");

}

strikeButton.onclick=()=>{
    strikeAudio.pause();
    strikeAudio.currentTime=0;
    strikeAudio.play();
    const randomElement=possibleOuctcome[Math.floor(Math.random()*possibleOutcome.length)];
    if(turn==2)
    {
        team2BallFaced++;
        document.querySelector(`#team2-superover div:nth-child(${team2Ballfaced})`).textContent=randomElement;
        if(randomElement==='W')
            team2Wickets++;
        else
        team2Score+=randomElementl;

        if(team2BallFaced===6 || team2Wickets===2 || team2Score>team1Score)
        {
            turn=3;
        }
    }
    
    if(turn==1)
    {
        team1BallFaced++;
        document.querySelector(`#team1-superover div:nth-child(${team1Ballfaced})`).textContent=randomElement;
        if(randomElement=='W')
        team1Wicket++;
        else
        team1Score+=randomElement;
        
        if(team1BallFaced===6 || team1Wickets===2)
        {
            turn=2;
        }
    }
    updateScore();
        
    }

