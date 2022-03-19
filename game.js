//var userChoice = window.prompt("Enter one of the following options: rock, paper, scissors");
var options = ["rock", "paper", "scissors"];
var cpuChoice = Math.floor(Math.random() * 3);
var userResult = 0;
var cpuResult = 0;

function getResult(userChoice) {
    if (userChoice == options[cpuChoice]) {
        userResult = userResult + 1;
        cpuResult = cpuResult + 1;
        document.getElementById('circle1').innerHTML = userResult;
        document.getElementById('circle2').innerHTML = cpuResult;
        setTimeout(function() {
            alert("Tie. You chose " + userChoice + " and the CPU chose " + options[cpuChoice]);
            cpuChoice = Math.floor(Math.random() * 3);
        }, 200);
        setTimeout(function() {
            verifyIfGameOver(userResult, cpuResult);
        }, 300);
    } else if ((userChoice == "rock" && cpuChoice == 1) || (userChoice == "paper" && cpuChoice == 2) || (userChoice == "scissors" && cpuChoice == 0)) {
        cpuResult = cpuResult + 1;
        document.getElementById('circle2').innerHTML = cpuResult;
        setTimeout(function() {
            alert("You lost. You chose " + userChoice + " and the CPU chose " + options[cpuChoice]);
        }, 200);
        setTimeout(function() {
                verifyIfGameOver(userResult, cpuResult);
                cpuChoice = Math.floor(Math.random() * 3);
        }, 300);
    } else if ((userChoice == "rock" && cpuChoice == 2) || (userChoice == "paper" && cpuChoice == 0) || (userChoice == "scissors" == cpuChoice == 1)) {
        userResult = userResult + 1;
        document.getElementById('circle1').innerHTML = userResult;
        setTimeout(function() {
            alert ("You win. You chose " + userChoice + " and the CPU chose " + options[cpuChoice])
        }, 200);
        setTimeout(function() {
            verifyIfGameOver(userResult, cpuResult);
            cpuChoice = Math.floor(Math.random() * 3);
        }, 300);
    }
}

function verifyIfGameOver(userPoints, cpuPoints) {
    if ((userPoints == 3) && (cpuPoints == 3)) {
        alert("Tie. Game Over");
        userResult = 0;
        cpuResult = 0;
        document.getElementById('circle1').innerHTML = userResult;
        document.getElementById('circle2').innerHTML = cpuResult;
    } else if (userPoints == 3) {
        alert("You win. Game over");
        userResult = 0;
        cpuResult = 0;
        document.getElementById('circle1').innerHTML = userResult;
        document.getElementById('circle2').innerHTML = cpuResult;
    } else if (cpuPoints == 3) {
        alert("You lost. Game over");
        userResult = 0;
        cpuResult = 0;
        document.getElementById('circle1').innerHTML = userResult;
        document.getElementById('circle2').innerHTML = cpuResult;
    }
}

//getResult(userChoice);