let input = document.getElementById('input');
let button = document.getElementById('button');
let wrong = document.querySelector('.wrong');
let guesses = document.getElementById('guesses')

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

let numGuesses = 0;
button.addEventListener("click", () => {
    guessesNumber();
})

function guessesNumber() {
    if (input.value < 1 || input.value > 100 || isNaN(input.value))
        wrong.innerHTML = "Please Enter the Number between 1 to 100";

    else {
        numGuesses = numGuesses + 1;
        guesses.innerHTML = "Number of Guess : " + numGuesses;
        if (input.value > answer) {
            wrong.innerHTML = "You gueesed to high";
            input.value = "";
        }
        else if (input.value < answer) {
            wrong.innerHTML = "You guessed to Low";
            input.value = "";
        }
        else {
            wrong.innerHTML = "Congrates you perfectly guessed the correct number.";
            button.disabled = true;
            setTimeout(() => {
                resetGame();
            }, 5000)
        }
    }

    function resetGame() {
    numGuesses = 0;
    answer == Math.floor(Math.random() * 100) + 1;
    input.value = "";
    guessed.innerHTML = "No. of Guess: 0";
    }
}