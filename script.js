let computerNum = generateRandomNum();
const result = document.getElementById("result");
let attempts = 0;

function guessNumber() {
  const textBox = document.getElementById("textBox").value;

  if (textBox < 1 || textBox > 100) {
    alert("Morate uneti vrednost između 1 i 100!");
  } else if (textBox > computerNum) {
    attempts++;
    result.textContent = `Uneli ste ${textBox}, traženi broj je MANJI!`;
  } else if (textBox < computerNum) {
    attempts++;
    result.textContent = `Uneli ste ${textBox}, traženi broj je VEĆI!`;
  } else {
    attempts++;
    result.textContent = `BRAVO! Traženi broj je bio ${computerNum}, trebalo vam je ${attempts} pokušaja.`;
  }
}

function restart() {
  computerNum = generateRandomNum();
  attempts = 0;
  result.textContent = "Okusi svoju srecu!";
  document.getElementById("textBox").value = 1;
}

function generateRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}
