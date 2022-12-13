//define maxNum and call a function
let maxNum = get_max_number("Please provide a maximum number.");
console.log(maxNum);

//promts to max number, validates imput, rounds decimal
function get_max_number(prompt) {
  while (true) {
    const input = window.prompt(prompt);
    const maxNum = Math.floor(Number(input));

    if (!isNaN(maxNum) && maxNum > 0) {
      return maxNum;
    }
  }
}

//message asking to provide a guess number
document.getElementById("maxGuess").innerHTML =
  "Guess a number between 1 and " + maxNum;

//pick a random number
let num = Math.floor(Math.random() * maxNum) + 1;
console.log(num);

//define totalGuess
let totalGuess = [];

//validate guesses, track guesses, prevent suplicate guesses & numbers
function do_guess() {
  let guess = Math.floor(Number(document.getElementById("guess").value));
  let message = document.getElementById("message");

  if (isNaN(guess)) {
    message.innerHTML = "That is not a number!";
  } else if (guess <= 0 || guess > maxNum) {
    message.innerHTML = "That number is out of range, try again!";
  } else if (totalGuess.includes(guess)) {
    message.innerHTML = "That number has already been guessed, try again!";
  } else {
    totalGuess.push(guess);
    console.log(`${totalGuess.length} tries`);

    if (guess > num) {
      message.innerHTML = "No, try a lower number.";
    } else if (guess < num) {
      message.innerHTML = "No, try a higher number.";
    } else {
      message.innerHTML = `You got it! It took you ${totalGuess.length} tries and your guesses were ${totalGuess}`;

      console.log(totalGuess);

      totalGuess = [];
    }
  }
}
