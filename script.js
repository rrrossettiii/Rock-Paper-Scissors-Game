// ROCK PAPER SCISSORS GAME
//
//

// Base score
//
var score = [0, "-", 0];
var rounds = 10;

// Welcome Alert
//
alert(
	"\t Welcome to Rock, Paper, Scissors! \n \n You will be playing 10 rounds against a computer. \n \n \n"
);

// Runs the game
//
for (rounds > 0; rounds--; ) {
	// R,P,S Array
	//
	var rps = ["r", "p", "s"];
	var rpsLiteral = ["Rock", "Paper", "Scissors"];

	// Prompt user choice
	//
	var rpsUser = prompt(
		`Rock, Paper, or Scissors? \n \t use "r", "p", or "s" \n \n \n`
	);
	var userChoice = `You chose "${rpsLiteral[rps.indexOf(rpsUser)]}". \n \n \n`;

	// Makes sure user slects correct value
	//
	while (rpsUser !== rps[0] && rpsUser !== rps[1] && rpsUser !== rps[2]) {
		alert(`Please type "r", "p", or "s" \n \n \n`);
		var rpsUser = prompt(
			`Rock, Paper, or Scissors? \n \t use "r", "p", or "s" \n \n \n`
		);
		var userChoice = `You chose "${
			rpsLiteral[rps.indexOf(rpsUser)]
		}". \n \n \n`;
	}

	// Computer's choice
	//
	var rpsCom = rps[Math.floor(Math.random() * 3)];
	var comChoice = `Computer chose "${rpsLiteral[rps.indexOf(rpsCom)]}"`;

	// Choice Display
	//
	var choices = [comChoice, userChoice];
	alert(choices.join("\n \t"));
	compare();

	// Total Score
	//
	if (rounds === 0) {
		if (score[0] === score[2]) {
			alert(`You Tied?  :o \n \n \t ${score.join(" ")} \n \n \n`);
		} else {
			if (score[0] > score[2]) {
				alert(`You Won!  :D \n \n \t ${score.join(" ")} \n \n \n`);
			} else {
				alert(`You Lost!  :[ \n \n \t ${score.join(" ")} \n \n \n`);
			}
		}
	}
}

// Rules for winning
//
function compare() {
	// Tie
	if (rpsUser === rpsCom) {
		tie();
	} else {
		// Rock
		if (rpsUser === "r") {
			if (rpsCom === "s") {
				win();
			} else {
				lose();
			}
		}

		// Paper
		if (rpsUser === "p") {
			if (rpsCom === "r") {
				win();
			} else {
				lose();
			}
		}

		// Scissors
		if (rpsUser === "s") {
			if (rpsCom === "p") {
				win();
			} else {
				lose();
			}
		}
	}
}

// Tie Function
//
function tie() {
	var tie = ["You Tied this round!   :/"];
	var scoreNew = [score[0], "-", score[2]];
	var scoreFormat = `\t \t ${scoreNew.join(" ")}`;
	var scoreDisplay = [
		tie,
		scoreFormat,
		`\n \n \t (${rounds} rounds left) \n \n`,
	];
	var scoreStatement = scoreDisplay.join("\n");
	alert(scoreStatement);
	// console.log(scoreStatement);
	score = scoreNew;
}
// console.log(tie());
// console.log(score);

// Win Function
//
function win() {
	var win = ["You Win this round!   :)"];
	var scoreNew = [score[0] + 1, "-", score[2]];
	var scoreFormat = `\t \t ${scoreNew.join(" ")}`;
	var scoreDisplay = [
		win,
		scoreFormat,
		`\n \n \t (${rounds} rounds left) \n \n`,
	];
	var scoreStatement = scoreDisplay.join("\n");
	alert(scoreStatement);
	// console.log(scoreStatement);
	score = scoreNew;
}
// console.log(winner());
// console.log(score);

// Lose Function
//
function lose() {
	var lose = ["You Lose this round!   :("];
	var scoreNew = [score[0], "-", score[2] + 1];
	var scoreFormat = `\t \t ${scoreNew.join(" ")}`;
	var scoreDisplay = [
		lose,
		scoreFormat,
		`\n \n \t (${rounds} rounds left) \n \n`,
	];
	var scoreStatement = scoreDisplay.join("\n");
	alert(scoreStatement);
	// console.log(scoreStatement);
	score = scoreNew;
}
// console.log(loser());
// console.log(score);
