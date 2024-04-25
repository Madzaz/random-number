let attempts = 1;
let targetNumber = generateNumber();

function generateNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
console.log(targetNumber);

function guessNumber() {
  const userGuess = parseInt(document.getElementById("textBox").value);

  if (userGuess === targetNumber) {
    document.getElementById(
      "result"
    ).innerHTML = `BRAVO! Trebalo ti je ${attempts} pokusaja.`;
  } else {
    attempts++;
    document.getElementById("result").innerHTML = `Netacno! Trazeni broj je ${
      userGuess > targetNumber ? "manji" : "veci"
    }.`;
  }
}

function restart() {
  attempts = 1;
  targetNumber = generateNumber();
  document.getElementById("result").innerHTML = "Okusi svoju srecu!";
  document.getElementById("textBox").value = "1";
}
