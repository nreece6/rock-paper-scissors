confirm("Let's play Rock, Paper, Scissors!")

var userChoice = prompt("Do you choose R, P, or S")

var computerChoice = Math.random()

console.log(userChoice)
console.log(computerChoice)

//turn random number into actual choice
if (computerChoice <= 0.33) {
    computerChoice = "R"
} else if (computerChoice <= 0.67) {
    computerChoice = "P"
} else {
    computerChoice = "S"
}

function game () {
    if (userChoice.toUpperCase === computerChoice) {
        alert( "Draw" )
    }
    else if ()
}
