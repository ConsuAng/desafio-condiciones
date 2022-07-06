//Parte 2 del desafío
const checkButton = document.querySelector('.check');

const checkTotal = () => {
  let num1 = document.querySelector('#poke1').value;
  let num2 = document.querySelector('#poke2').value;
  let num3 = document.querySelector('#poke3').value;
  let num4 = document.querySelector('#poke4').value;
  let total = +num1 + +num2 + +num3 + +num4;

  if (total <= 10) {
      document.querySelector('#resultSticker').textContent = "Llevas " + total;
  } else {
      document.querySelector('#resultSticker').textContent = "Llevas demasiados stickers"
  }
}

checkButton.addEventListener("click", checkTotal);