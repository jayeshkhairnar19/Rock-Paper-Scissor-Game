let Allimg = document.querySelectorAll(".image");

for (let i = 0; i < Allimg.length; i++) {
    Allimg[i].addEventListener('click', function (e) {
        const UserChoiceId = e.target.id;
        WinnerCondition(UserChoiceId);
    });
}

let userScore = 0;
let compScore = 0;

function WinnerCondition(UserChoiceId) {
    let msg = document.querySelector(".msg-container .msg");
    let userScore1 = document.querySelector(".score .userScore");
    let compScore1 = document.querySelector(".score .compScore");

    const arr = ["Rock", "Paper", "Scissor"];
    const compChoice = arr[Math.floor(Math.random() * 3)];

    if (UserChoiceId === compChoice) {
        msg.innerText = (`Your choice is ${UserChoiceId} and Computer's choice is ${compChoice}, which means the match is Draw`);
    } else if (UserChoiceId === "Rock") {
        // comp- Paper,Scissor
        if (compChoice === "Paper") {
            msg.innerText = (`Your choice is ${UserChoiceId} and Computer's choice is ${compChoice}, So Computer Wins!`);
            compScore++; // Increment the score
        } else if (compChoice === "Scissor") {
            msg.innerText = (`Your choice is ${UserChoiceId} and Computer's choice is ${compChoice}, So You Win!`);
            userScore++; // Increment the score
        }
    } else if (UserChoiceId === "Paper") {
        // comp = Rock, Scissor
        if (compChoice === "Rock") {
            msg.innerText = (`Your choice is ${UserChoiceId} and Computer's choice is ${compChoice}, So You Win!`);
            userScore++; // Increment the score
        } else if (compChoice === "Scissor") {
            msg.innerText = (`Your choice is ${UserChoiceId} and Computer's choice is ${compChoice}, So Computer Wins!`);
            compScore++; // Increment the score
        }
    } else if (UserChoiceId === "Scissor") {
        // comp = rock, paper
        if (compChoice === "Rock") {
            msg.innerText = (`Your choice is ${UserChoiceId} and Computer's choice is ${compChoice}, So Computer Wins!`);
            compScore++; // Increment the score
        } else if (compChoice === "Paper") {
            msg.innerText = (`Your choice is ${UserChoiceId} and Computer's choice is ${compChoice}, So You Win!`);
            userScore++; // Increment the score
        }
    }

    // Update scores
    userScore1.innerText = userScore.toString();
    compScore1.innerText = compScore.toString();
}
