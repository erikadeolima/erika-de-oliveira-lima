import { IEvent} from "./types";

const teclas = document.querySelector(".teclado") as Element;
const display = document.getElementById("display") as Element;

let numsToCalculate: number[] = [];
let operatorsToCalculate: string[] = [];

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
function somarValores() {
  numsToCalculate.push(Number(display.textContent));
  operatorsToCalculate.push('+');
  clearDisplay();
}
function subtrairValores() {
  numsToCalculate.push(Number(display.textContent));
  operatorsToCalculate.push('-');
  clearDisplay();
}
function multiplicarValores() {
  numsToCalculate.push(Number(display.textContent));
  operatorsToCalculate.push('*');
  clearDisplay();
}
function dividirValores() {
  numsToCalculate.push(Number(display.textContent));
  operatorsToCalculate.push('/');
  clearDisplay();
}
function raizQuadrada() {
  if (display.textContent === '0') {
    operatorsToCalculate.push('√');
    display.textContent = '√';
    console.log(`🐞 ~ file: app.ts:51 ~ raizQuadrada ~ display.textContent:`, display.textContent);
  } else{
    numsToCalculate.push(Number(display.textContent));
    operatorsToCalculate.push('√');
    display.textContent = '√';
    console.log(`🐞 ~ file: app.ts:56 ~ raizQuadrada ~ display.textContent:`, display.textContent);
  }    
}
function calcularOperacoes(nums: number[], operators: string[]): number {
  let resultado = nums[0];
  if (nums.length === operators.length) {
    if(operatorsToCalculate[0] === '√') {
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
        } else {
            resultado = resultado * Math.sqrt(proximoNumero);
        }
        break;
    }
  };
  return resultado;
}
teclas.addEventListener("click", e => {
  const key = e.target as IEvent;
  const functionOfKey = key.attributes.class.textContent;
  const keyContent = key.attributes.id.textContent;
  if (functionOfKey === 'tecla') {
    let displayedNum = display.textContent as string;
    if (keyContent === 'on') {
      clearAll();
    } else if (keyContent === 'raiz') {
      raizQuadrada();
    } else if (keyContent === 'igual') {
      console.log('igual');
      numsToCalculate.push(Number(display.textContent));
      console.log(numsToCalculate);
      console.log(operatorsToCalculate);

      try {
        const resultado = calcularOperacoes(numsToCalculate, operatorsToCalculate);
        return display.textContent =  resultado.toString();
      } catch (error) {
        return display.textContent =  error.message;
      }
      
    } else if (keyContent === 'sign') {
      changeSignal();
    } else {
      if (keyContent === 'ponto') {
        if(displayedNum.indexOf('.') === -1) {
          return display.textContent = displayedNum + '.';
        }
      } else {
        if (displayedNum === '0' || displayedNum === '√') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
      }
    }
  }
  console.log('functionOfKey', functionOfKey)
  if (functionOfKey === 'tecla suma') {
    console.log('soma');
    somarValores();
  }
  if (functionOfKey === 'tecla multiplica') {
    console.log('multiplica');
    multiplicarValores();
  }
  if (functionOfKey === 'tecla resta') {
    console.log('resta');
    subtrairValores();
  }
  if (functionOfKey === 'tecla divide') {
    console.log('divide');
    dividirValores();
  }
})
