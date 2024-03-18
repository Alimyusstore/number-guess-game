let myGame = document.getElementById("myGame");
let mySubmit = document.getElementById("mySubmit");
let results = document.getElementById("results");


let minNumber = 50;
let maxNumber = 100;
let attempt = 0;
// let guess;
let running = true;
// let guessNumber = Math.floor(Math.random()* (maxNumber - minNumber + 1) + minNumber);
let number = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber
);

mySubmit.onclick = function () {
  // while (running) {
    // let guessNumber = window.prompt(`guess a number within 50 to 100`);
    // guessNumber = Number(guessNumber);
    let inputNumber = myGame.value;
    inputNumber = Number(inputNumber);
    if (isNaN(inputNumber)) {
      // if(isNaN(guessNumber)){
      results.textContent = `This is not a Number, Please enter a valid number`;
      // running = false;
      // window.alert(`This is not a Number, Please enter a valid number`)
    } else if (inputNumber < minNumber || inputNumber > maxNumber) {
      // } else if(guessNumber < minNumber || guessNumber > maxNumber){
      results.textContent = `Sorry, This is out of our required input`;
      // running = false;
      // window.alert(`Sorry, This is out of our required input`)
    } else {
      attempt++;
      if (inputNumber < number) {
        // if(guessNumber < number){
        results.textContent = `TOO LOW, try Again!`;
        // running = false;
        // window.alert(`TOO LOW, try Again!`)
      } else if (inputNumber == number) {
        results.textContent = `CORRECT! the answer is ${inputNumber}. it took ${attempt} attempts`;
        // window.alert(`CORRECT! the answer is ${guessNumber}. it took ${attempt} attempts`)
        // running = false;
      } else if (inputNumber > number) {
        // } else if (guessNumber > number) {
        // window.alert(`TOO HIGH, try Again!`)
        results.textContent = `TOO HIGH, try Again!`;
        // running = false;
      } else {
        results.textContent = `nothing like that`;
      }
    }

  }
// };
