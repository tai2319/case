
let first = document.getElementById('numberA');
let second = document.getElementById('numberb');
let addBtn = document.getElementById('sumbtn');
let truNumber = document.getElementById('trubtn');
let tichNumber = document.getElementById('tichbtn');
let thuongNumber = document.getElementById('thuongbtn');
let resultBtn = document.getElementById('result');

addBtn.addEventListener('click',function(){
    
    let firstNumber  = +first.value;
    let secondNumber = +second.value;
    let result = firstNumber + secondNumber;
    resultBtn.innerHTML = `<b>${firstNumber} + ${secondNumber} = ${result} </b>`;
});
truNumber.addEventListener('click',function(){
    let firstNumber  = +first.value;
    let secondNumber = +second.value;
    let result = firstNumber - secondNumber;
    resultBtn.innerHTML = `<b>${firstNumber} - ${secondNumber} = ${result} </b>`;
});
tichNumber.addEventListener('click',function(){
    let firstNumber  = +first.value;
    let secondNumber = +second.value;
    let result = firstNumber * secondNumber;
    resultBtn.innerHTML = `<b>${firstNumber} * ${secondNumber} = ${result} </b>`;
})
thuongNumber.addEventListener('click',function(){
    let firstNumber  = +first.value;
    let secondNumber = +second.value;
    let result = firstNumber / secondNumber;
    resultBtn.innerHTML = `<b>${firstNumber} / ${secondNumber} = ${result} </b>`;
})
