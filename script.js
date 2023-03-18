var wins = 0
var ties = 0
var losses = 0

var options = ["R", "P", "S"]

var game = function() {
    confirm("Let's play Rock, Paper, Scissors!")

    var userChoice = window.prompt("Do you choose R, P, or S")

    if (!userChoice) {
        return
    }

    userChoice = userChoice.toUpperCase()
    var index = Math.floor(Math.random() * options.length)
    var computerChoice = options[index]

    window.alert("The computer chooses " + computerChoice)

    if (userChoice === computerChoice) {
        ties++
        window.alert("Tie!")
    } else if (
        (userChoice === "R" && computerChoice === "S") || 
        (userChoice === "P" && computerChoice === "R") || 
        (userChoice === "S" && computerChoice === "P") 
    ) {
        wins++
        window.alert("Win!")
    } else {
        losses++
        window.alert("Loss!")
    }
    console.log(userChoice)
    console.log(computerChoice)

    window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)

    var playAgain = window.confirm("Play again?")

    if (playAgain) {
        game()
    }
}

game()
