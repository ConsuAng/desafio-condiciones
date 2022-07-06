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

//Parte 3 del desafío

const passButton = document.querySelector('.passButton');

const checkPass = () => {
  let select1 = document.querySelector('#first').value;
  let select2 = document.querySelector('#second').value;
  let select3 = document.querySelector('#third').value;
  let pass = select1+select2+select3;

  if (pass === '911') {
    console.log('password 1 correcto');
    document.querySelector('#response').textContent = "Password 1 correcto";
  } else if (pass === '714') {
    console.log('password 2 correcto');
    document.querySelector('#response').textContent = "Password 2 correcto";
  } else {
    console.log('password incorrecto');
    document.querySelector('#response').textContent = "Password incorrecto";

  }
}

passButton.addEventListener("click", checkPass);