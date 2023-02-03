const form = document.getElementById('form-principal')
const inputUm = document.getElementById('input-1');
const inputDois = document.getElementById('input-2');

let valorTotal = 0;

function sum() {
    let valorTotalSum = parseInt(inputUm.value) + parseInt(inputDois.value);
    console.log(valorTotalSum);
    return valorTotal = valorTotalSum;
}

function subtraction() {
    let valorTotalSubtraction = parseInt(inputUm.value) - parseInt(inputDois.value);
    console.log(valorTotalSubtraction);
    return valorTotal = valorTotalSubtraction;
}

function multiplication() {
    let valorTotalMultiplication = parseInt(inputUm.value) * parseInt(inputDois.value);
    console.log(valorTotalMultiplication);
    return valorTotal = valorTotalMultiplication;
}

function division() {
    let valorTotalDivision = parseInt(inputUm.value) / parseInt(inputDois.value);
    console.log(valorTotalDivision);
    return valorTotal = valorTotalDivision;
}

function clear() {
    inputUm.value = "";
    inputDois.value = "";
    return valorTotal = 0;
}

function equal() {
    console.log(valorTotal)
    const element = document.getElementById('div-receber').innerHTML = `o valor da operação é ${valorTotal}`;
}


/*configurações botoes*/ 

// const buttonUm = document.getElementById('number-1')
// const buttonDois = document.getElementById('number-2')
// const buttonTres = document.getElementById('number-3')
// const buttonQuatro = document.getElementById('number-4')
// const buttonCinco = document.getElementById('number-5')
// const buttonSeis = document.getElementById('number-6')
// const buttonSete = document.getElementById('number-7')
// const buttonOito = document.getElementById('number-8')
// const buttonNove = document.getElementById('number-9')
// const buttonZero = document.getElementById('number-0')


// function selectNumberUm(){
//     inputUm.value = 1;
// }
// buttonUm.addEventListener('click', selectNumberUm);
// buttonDois.addEventListener('click', selectNumberUm);
// buttonTres.addEventListener('click', selectNumberUm);
// buttonQuatro.addEventListener('click', selectNumberUm);
// buttonUm.addEventListener('click', selectNumberUm);
// buttonUm.addEventListener('click', selectNumberUm);
// buttonUm.addEventListener('click', selectNumberUm);
// buttonUm.addEventListener('click', selectNumberUm);
// buttonUm.addEventListener('click', selectNumberUm);
// buttonUm.addEventListener('click', selectNumberUm);


/*-------------------------------------------------------------------------------------------------------------*/
const buttonSum = document.querySelector('#sum-operation')
const buttonSubtraction = document.querySelector('#subtraction-operation')
const buttonMultiplication = document.querySelector('#multiplication-operation')
const buttonDivision = document.querySelector('#division-operation')
const buttonClear = document.querySelector('#clear-operation')
const buttonEqual = document.querySelector('#equal-operation')

buttonSum.addEventListener('click', sum);
buttonSubtraction.addEventListener('click', subtraction);
buttonMultiplication.addEventListener('click', multiplication);
buttonDivision.addEventListener('click', division);
buttonClear.addEventListener('click', clear);
buttonEqual.addEventListener('click', equal);

