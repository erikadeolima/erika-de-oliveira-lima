type IEvent = EventTarget & { attributes: { class: { textContent: string; }; id: { textContent: string; }; }; }

let displayValue: string = "0";
let numsToCalculate: number[] = [];
let operatorsToCalculate: string[] = [];

const buttons = document.querySelectorAll(".tecla") as unknown as Element[];
const display = document.getElementById("display") as HTMLSpanElement;

function clearAll() {
  numsToCalculate.length = 0;
  operatorsToCalculate.length = 0;
  displayValue = "0";
  return display.textContent = displayValue;
}
function clearDisplay() {
  displayValue = "0";
  return display.textContent = displayValue;
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
    inputDisplay('√');
  } else {
    numsToCalculate.push(Number(display.textContent));
    operatorsToCalculate.push('√');
    inputDisplay('√');
  }    
}
function calculateOperations(nums: number[], operators: string[]): number {
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
  switch (resultado) {
    case Infinity:
      throw new Error("Error");
    default:
      return resultado;
  }  
}
function inputDisplay(digit: string) {
  if (displayValue.length >= 8)
      return;
  if (displayValue === "0" || displayValue === "√")
      displayValue = '';
  if (digit.length >= 8){
    displayValue=digit.slice(0,9);
  } else {
    displayValue += digit;
  }  
  return display.textContent = displayValue;
};

buttons.forEach((button) => {  
  button.addEventListener("click", () => {
    const functionOfKey = button.getAttribute("class");
    const keyContent = button.getAttribute("alt");
    switch (keyContent) {
      case 'On':
        clearAll();
        break;
      case 'raiz':
        squareRoot();
        break;
      case 'signo':
        changeSignal();
        break;
      case 'ponto':
        if(displayValue.indexOf('.') === -1) {
          return inputDisplay('.');
        } 
      case 'mas':
        addValues();
        break;
      case 'por':
        multiplyValues();
        break;
      case 'menos':
        subtractValues();
        break;
      case 'dividido':
        splitValues();
        break;
      case 'igual':
        numsToCalculate.push(Number(displayValue));
        try {
          const resultado = calculateOperations(numsToCalculate, operatorsToCalculate);
          clearDisplay();
          return inputDisplay(resultado.toString());
        }
        catch (error: unknown) {
          return inputDisplay((error as Error).message);
        }
      default:
        let digit = keyContent?.toString() as string;
        inputDisplay(digit);
    }
  });
})