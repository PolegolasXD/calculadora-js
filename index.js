const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        /* Objeto que esta sendo mostrado na tela*/
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        /* esse valor é o que esta sendo digitado no momento*/ 
        this.currentOperation = "";
    }


    /*adicionando o digito na calculadora */
    addDigit(digit) {
        console.log(digit);
        /**checando a operação pra ver se existe um ponto, por que nao existem dois pontos em casas numericas*/
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        
    }
    /* operações da calculadora, *, -, +, /, del, C, Ce*/ 
    processOperation(operation) {
        if (this.currentOperationText.innerText === "" && operation !== "C") {
            if (this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }

        let operationValue;
        let previous = +this.previousOperationText.innerText.split(" ")[0];
        let current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(operationValue, operation, current, previous);
                break;
            case "DEL":
                this.processDelOperator();
                break;
            case "CE":
                this.processClearCurrentOperator();
                break;
            case "C":
                this.processClearOperator();
                break;
            case "=":
                this.processEqualOperator();
                break;
            default:
                return;
        }
    }

    /**função que atualiza a tela de acordo com a interação do usuario */
    updateScreen(
        operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            /**checando o valor e adicionando 0 */
            if (previous === 0) {
                operationValue = current;
            }
            /* adicionando o valor para a previa */ 
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }

    changeOperation(operation) {
        const mathOperations = ["*", "-", "+", "/"];

        if (!mathOperations.includes(operation)) {
            return;
        }

        this.previousOperationText.innerText =
            this.previousOperationText.innerText.slice(0, -1) + operation;
    }

    processDelOperator() {
        this.currentOperationText.innerText =
            this.currentOperationText.innerText.slice(0, -1);
    }

    processClearCurrentOperator() {
        this.currentOperationText.innerText = "";
    }

    processClearOperator() {
        this.currentOperationText.innerText = "";
        this.previousOperationText.innerText = "";
    }

    processEqualOperator() {
        /**recebendo apenas valor para nao receber NaN com erro no array */
        let operation = this.previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const value = event.target.innerText;  /*comparação se esta sendo clicado em digitos numericos (01, 02, 03), em operações numericas (/, *, -, +) */
        
        if (+value >= 0 || value === ".") {
            console.log(value);
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});