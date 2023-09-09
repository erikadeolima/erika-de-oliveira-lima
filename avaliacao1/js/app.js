"use strict";
const teclas = document.querySelector(".teclado");
const display = document.getElementById("display");
let numsToCalculate = [];
let operatorsToCalculate = [];
function clearAll() {
    numsToCalculate.length = 0;
    operatorsToCalculate.length = 0;
    display.textContent = "0";
}
function clearDisplay() {
    display.textContent = "0";
}
function changeSignal() {
    const actualValue = display.innerHTML;
    const changedSignalvalue = (Number(actualValue) * -1).toString();
    switch (changedSignalvalue) {
        case '-0':
            return display.innerHTML = actualValue;
        default:
            return display.innerHTML = (changedSignalvalue);
    }
}
function addValues() {
    numsToCalculate.push(Number(display.textContent));
    operatorsToCalculate.push('+');
    clearDisplay();
}
function subtractValues() {
    numsToCalculate.push(Number(display.textContent));
    operatorsToCalculate.push('-');
    clearDisplay();
}
function multiplyValues() {
    numsToCalculate.push(Number(display.textContent));
    operatorsToCalculate.push('*');
    clearDisplay();
}
function splitValues() {
    numsToCalculate.push(Number(display.textContent));
    operatorsToCalculate.push('/');
    clearDisplay();
}
function squareRoot() {
    if (display.textContent === '0') {
        operatorsToCalculate.push('√');
        display.textContent = '√';
    }
    else {
        numsToCalculate.push(Number(display.textContent));
        operatorsToCalculate.push('√');
        display.textContent = '√';
    }
}
function calculateOperations(nums, operators) {
    let resultado = nums[0];
    if (nums.length === operators.length) {
        if (operatorsToCalculate[0] === '√') {
            resultado = Math.sqrt(nums[0]);
            return resultado;
        }
        throw new Error("Error");
    }
    if (nums.length !== operators.length + 1) {
        numsToCalculate.length = 0;
        operatorsToCalculate.length = 0;
        throw new Error("Error");
    }
    for (let position = 0; position < operators.length; position++) {
        const operador = operators[position];
        const proximoNumero = nums[position + 1];
        switch (operador) {
            case '+':
                resultado += proximoNumero;
                break;
            case '-':
                resultado -= proximoNumero;
                break;
            case '*':
                resultado *= proximoNumero;
                break;
            case '/':
                resultado /= proximoNumero;
                break;
            case '√':
                if (proximoNumero === undefined) {
                    resultado = Math.sqrt(resultado);
                }
                else {
                    resultado = resultado * Math.sqrt(proximoNumero);
                }
                break;
        }
    }
    ;
    return resultado;
}
function keysOperation(functionOfKey) {
}
function pressedKeys(keyContent) {
}
teclas.addEventListener("click", e => {
    const key = e.target;
    const functionOfKey = key.attributes.class.textContent;
    const keyContent = key.attributes.id.textContent;
    if (functionOfKey === 'tecla') {
        let displayedNum = display.textContent;
        if (keyContent === 'on') {
            clearAll();
        }
        else if (keyContent === 'raiz') {
            squareRoot();
        }
        else if (keyContent === 'igual') {
            numsToCalculate.push(Number(display.textContent));
            try {
                const resultado = calculateOperations(numsToCalculate, operatorsToCalculate);
                return display.textContent = resultado.toString();
            }
            catch (error) {
                return display.textContent = error.message;
            }
        }
        else if (keyContent === 'sign') {
            changeSignal();
        }
        else {
            if (keyContent === 'ponto') {
                if (displayedNum.indexOf('.') === -1) {
                    return display.textContent = displayedNum + '.';
                }
            }
            else {
                if (displayedNum === '0' || displayedNum === '√') {
                    display.textContent = keyContent;
                }
                else {
                    display.textContent = displayedNum + keyContent;
                }
            }
        }
    }
    else {
        if (functionOfKey === 'tecla suma') {
            console.log('soma');
            addValues();
        }
        if (functionOfKey === 'tecla multiplica') {
            console.log('multiplica');
            multiplyValues();
        }
        if (functionOfKey === 'tecla resta') {
            console.log('resta');
            subtractValues();
        }
        if (functionOfKey === 'tecla divide') {
            console.log('divide');
            splitValues();
        }
    }
});
