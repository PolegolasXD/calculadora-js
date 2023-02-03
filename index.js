const form = document.getElementById('form-principal')
const inputUm = document.getElementById('input-1');
const inputDois = document.getElementById('input-2');


const buttonSum = document.querySelector('#sum-operation')
const buttonSubtraction = document.querySelector('#subtraction-operation')
const buttonMultiplication = document.querySelector('#multiplication-operation')
const buttonDivision = document.querySelector('#division-operation')
const buttonClear = document.querySelector('#clear-operation')
const buttonEqual = document.querySelector('#equal-operation')

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
}


buttonSum.addEventListener('click', sum);
buttonSubtraction.addEventListener('click', subtraction);
buttonMultiplication.addEventListener('click', multiplication);
buttonDivision.addEventListener('click', division);
buttonClear.addEventListener('click', clear);
buttonEqual.addEventListener('click', equal);

