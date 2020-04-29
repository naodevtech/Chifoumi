var prompt = require('prompt')
var colors = require('colors')

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
})
var computerScore = 0
var userScore = 0
var count = 3

function game(){
    
    prompt.start();
    var mode = ["Pierre", "Feuille", "Ciseaux"]
    for(var i = 0; i < 1; i++){
        var random = Math.floor(Math.random() * mode.length)
    }
    var computerChoice = mode[random]
    prompt.get(['choice'], function (err, result) {
    var userChoice = result.choice
        if(userChoice === computerChoice){
            console.log("Égalité, rejouez !".yellow)
            console.log(`Votre choix a été : ${userChoice}`.input)
            console.log(`L'ordinateur à joué : ${computerChoice}`.input)
            Counter()
        } else if (userChoice === "Ciseaux" && computerChoice === "Feuille" || userChoice === "Pierre" && computerChoice === "Ciseaux" || userChoice === "Feuille" && computerChoice === "Pierre"){
            console.log("Vous avez gagné !".green)
            console.log(`Votre choix a été : ${userChoice}`.input)
            console.log(`L'ordinateur à joué : ${computerChoice}`.input)
            userScore++
            count--
            Counter()
        } else if (userChoice === "Feuille" && computerChoice === "Ciseaux" || userChoice === "Ciseaux" && computerChoice === "Pierre" || userChoice === "Pierre" && computerChoice === "Feuille"){
            console.log("L'ordinateur a gagné !".red)
            console.log(`Votre choix a été : ${userChoice}`.input)
            console.log(`L'ordinateur à joué : ${computerChoice}`.input)
            computerScore++
            count--
            Counter()
        } else {
            console.log("Je ne comprends votre choix!".error)
            Counter()
        }
    });
}
game()

function Counter(){
    if (count === 1){
        if(userScore === 2){
            return console.log("Vous avez remporté la partie".info)
        } else if(computerScore === 2){
            return console.log("L'ordinateur à remporté la partie".error)
        }
        else{
            game()
        }
    } else if(count > 0){
        console.log(`Il vous reste ${count} coups à jouer !`.info)
        game()
    } else if(count === 0){
        if(userScore > computerScore){
            console.log("Vous avez remporter la partie ! !".info)
        } 
        else {
            console.log("T'es nul, t'as perdu !".error)
        }
    }
}