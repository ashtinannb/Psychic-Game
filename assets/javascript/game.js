//alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessed = 0;

//generate random letter
var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];
console.log("The Computer Chooses" + computerChoice);

//reset
function reset(){
    guessLeft= 10;
    guessed= [];
}

//keyup event
document.addEventListener("keyup", function(event){
    console.log(event.key)
})

//user selects letter

//check to see if letter matches computer choice

//if the user gets the right letter
