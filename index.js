let display = document.getElementById("display"); //Storing the Main Calculator display
let onScreen;

let temp = 0; //to store the current calculation value

let ops = false; //Flag indicating operation button is on
let addOp = false;
let subOp = false;
let mulOp = false;
let divOp = false;

function setOp() {
    ops = true
}

function set(operation) {
  switch (operation) {
    case "add":
      addOp = true;
      subOp = false;
      mulOp = false;
      divOp = false;
      break;

    case "sub":
      addOp = false;
      subOp = true;
      mulOp = false;
      divOp = false;
      break;

    case "mul":
      addOp = false;
      subOp = false;
      mulOp = true;
      divOp = false;
      break;

    case "div":
      addOp = false;
      subOp = false;
      mulOp = false;
      divOp = true;
      break;
  }
}

function unset() {
  ops = false;
}

function change() {
    onScreen = display.innerText;
    onScreen = onScreen * -1;
    display.innerText = onScreen;
}

function add() {
    set("add");
    console.log(addOp,subOp,mulOp,divOp)
    onScreen = display.innerText;
    if (ops == 1) {
        return;
    }
    if (temp == 0) {
        temp = parseInt(onScreen);
    } else {
        temp += parseInt(onScreen);
    }
    setOp();
    display.textContent = temp;
    console.log(temp);
    
}

function sub() {
    set("sub");
    console.log(addOp,subOp,mulOp,divOp)
  onScreen = display.innerText;
  if (ops == 1) {
    return;
  }
  if (temp == 0) {
    temp = parseInt(onScreen);
  } else {
    temp -= parseInt(onScreen);
  }
  setOp();
  display.textContent = temp;
  console.log(temp);
}

function mul() {
    set("mul");
    console.log(addOp,subOp,mulOp,divOp)
  onScreen = display.innerText;
  if (ops == 1) {
    return;
  }
  if (temp == 0) {
    temp = parseInt(onScreen);
  } else {
    temp *= parseInt(onScreen);
  }
  setOp();
  display.textContent = temp;
  console.log(temp);
}

function div() {
    set("div");
    console.log(addOp,subOp,mulOp,divOp)
  onScreen = display.innerText;
  if (ops == 1) {
    return;
  }
  if (temp == 0) {
    temp = parseInt(onScreen);
  } else {
    temp /= parseInt(onScreen);
  }
  setOp();
  display.textContent = temp;
  console.log(temp);
}

function equal() {
    console.log(addOp,subOp,mulOp,divOp)
  if (addOp) {
    add();
  }
  if (subOp) {
    sub();
  }
  if (mulOp) {
    mul();
  }
  if (divOp) {
    div();
  }
  display.textContent = temp;
}

function AC() {
  display.textContent = "0";
  temp = 0;
}

function one() {
  if (ops == 1) {
    display.textContent = 1;
  } else {
    display.textContent += 1;
  }
  unset();
}

function two() {
  if (ops == 1) {
    display.textContent = 2;
  } else {
    display.textContent += 2;
  }
  unset();
}

function three() {
  if (ops == 1) {
    display.textContent = 3;
  } else {
    display.textContent += 3;
  }
  unset();
}

function four() {
  if (ops == 1) {
    display.textContent = 4;
  } else {
    display.textContent += 4;
  }
  unset();
}

function five() {
  if (ops == 1) {
    display.textContent = 5;
  } else {
    display.textContent += 5;
  }
  unset();
}

function six() {
  if (ops == 1) {
    display.textContent = 6;
  } else {
    display.textContent += 6;
  }
  unset();
}

function seven() {
  if (ops == 1) {
    display.textContent = 7;
  } else {
    display.textContent += 7;
  }
  unset();
}

function eight() {
  if (ops == 1) {
    display.textContent = 8;
  } else {
    display.textContent += 8;
  }
  unset();
}

function nine() {
  if (ops == 1) {
    display.textContent = 9;
  } else {
    display.textContent += 9;
  }
  unset();
}

function zero() {
  if (ops == 1) {
    display.textContent = 0;
  } else {
    display.textContent += 0;
  }
  unset();
}
