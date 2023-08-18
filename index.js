let display = document.getElementById("display");
let onScreen = parseInt(display.innerText);

let temp = 0

let ops = 0

function add() {
    onScreen = display.innerText;
    if(temp == 0) {
        temp = parseInt(onScreen)
    }
    else {
        temp += parseInt(onScreen)
    }
    display.textContent = temp
    console.log(temp)
    ops = 1
}

function sub() {
    onScreen = display.innerText;
    if(ops == 1) {
        return;
    }
    if(temp == 0) {
        temp = parseInt(onScreen)
    }
    else {
        temp -= parseInt(onScreen)
    }
    display.textContent = temp
    console.log(temp)
    ops = 1
}

function mul() {
    onScreen = display.innerText;
    if(temp == 0) {
        temp = parseInt(onScreen)
    }
    else {
        temp *= parseInt(onScreen)
    }
    display.textContent = temp
    console.log(temp)
    ops = 1
}

function div() {
    onScreen = display.innerText;
    if(temp == 0) {
        temp = parseInt(onScreen)
    }
    else {
        temp /= parseInt(onScreen)
    }
    display.textContent = temp
    console.log(temp)
    ops = 1
}

function AC() {
    display.textContent = "0"
    temp = 0
}

function one() {
    if(ops == 1) {
        display.textContent = 1
    }
    else {
        display.textContent += 1
    }
    ops = 0
}

function two() {
    if(ops == 1) {
        display.textContent = 2
    }
    else {
        display.textContent += 2
    }
    ops = 0

}

function three() {
    if(ops == 1) {
        display.textContent = 3
    }
    else {
        display.textContent += 3
    }
    ops = 0
}

function four() {
    if(ops == 1) {
        display.textContent = 4
    }
    else {
        display.textContent += 4
    }
    ops = 0
}

function five() {
    if(ops == 1) {
        display.textContent = 5
    }
    else {
        display.textContent += 5
    }
    ops = 0
}

function six() {
    if(ops == 1) {
        display.textContent = 6
    }
    else {
        display.textContent += 6
    }
    ops = 0
}

function seven() {
    if(ops == 1) {
        display.textContent = 7
    }
    else {
        display.textContent += 7
    }
    ops = 0
}

function eight() {
    if(ops == 1) {
        display.textContent = 8
    }
    else {
        display.textContent += 8
    }
    ops = 0
}

function nine() {
    if(ops == 1) {
        display.textContent = 9
    }
    else {
        display.textContent += 9
    }
    ops = 0
}

function zero() {
    if(ops == 1) { 
        display.textContent = 0 
    }
    else {
        display.textContent += 0
    }
    ops = 0
}