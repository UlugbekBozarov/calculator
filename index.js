let theme = "dark";
let firstNumber = "0";
let secondNumber = "0";
let action = "";

function handleChangeTheme() {
  const newTheme = theme === "dark" ? "light" : "dark";

  document.querySelector("html").setAttribute("data-theme", newTheme);

  theme = newTheme;
}

function handleChangeButton(symbol) {
  console.log("symbol: ", symbol);
  switch (symbol) {
    case "c": {
      firstNumber = "0";
      secondNumber = "0";
      action = "";
      innerResult(firstNumber);
      innerExpression("");
      break;
    }
    case "abs": {
      firstNumber = 0 - Number(firstNumber);
      innerResult(firstNumber);
      innerExpression("");
      break;
    }
    case "%": {
      if (firstNumber !== "0") {
        firstNumber = String(firstNumber / 100);
      }
      innerResult(firstNumber);
      innerExpression("");
      break;
    }
    case "dismemberment": {
      secondNumber = firstNumber;
      firstNumber = "0";
      action = "/";
      innerExpression("");
      break;
    }
    case "increase": {
      secondNumber = firstNumber;
      firstNumber = "0";
      action = "*";
      innerExpression("");
      break;
    }
    case "subtraction": {
      secondNumber = firstNumber;
      firstNumber = "0";
      action = "-";
      innerExpression("");
      break;
    }
    case "add": {
      secondNumber = firstNumber;
      firstNumber = "0";
      action = "+";
      innerExpression("");
      break;
    }
    case "backspace": {
      if (firstNumber.length > 1) {
        firstNumber = firstNumber.slice(0, -1);
      } else {
        firstNumber = "0";
      }
      innerResult(firstNumber);
      innerExpression("");
      break;
    }
    case "equality": {
      let result = "";
      switch (action) {
        case "+": {
          result = Number(secondNumber) + Number(firstNumber);
          break;
        }
        case "-": {
          result = Number(secondNumber) - Number(firstNumber);
          break;
        }
        case "*": {
          result = Number(secondNumber) * Number(firstNumber);
          break;
        }
        case "/": {
          result = Number(secondNumber) / Number(firstNumber);
          break;
        }
      }
      innerExpression(`${secondNumber} ${action} ${firstNumber}`);
      innerResult(result);
      firstNumber = result;
      break;
    }
    default: {
      if (symbol === "." && firstNumber.includes(".")) {
      } else if (symbol === ".") {
        firstNumber += ".";
        innerResult(firstNumber);
      } else if (firstNumber.includes(".")) {
        firstNumber += symbol;
        innerResult(firstNumber);
      } else {
        firstNumber = String(Number(firstNumber) * 10 + Number(symbol));
        innerResult(firstNumber);
      }
      innerExpression("");
    }
  }
}

function innerExpression(value = "") {
  document.getElementById("expression").innerText = value;
}

function innerResult(value = "") {
  document.getElementById("result").innerText = value;
}
