btns = document.querySelectorAll('button');
outPutText = document.getElementById('displayText')
console.log(btns);
let numStringActive = '0';
let numStringHold = '';
let operatorActive = '';
let deci = false;
let equalBool = false;

document.addEventListener('keydown', (event) => {
    console.log(event.key);
    //add in function to do all the math in the btn listener
    //also create a bool for the decimal point. There can only be 1!!
    if (Number.isInteger(+event.key))  {buttonPressed(event.key,'number')}
    if (event.key == '-' || event.key == '+' || event.key == '*' || event.key == '/') {buttonPressed(event.key,'operator');}
    if (event.key == '='|| event.key == '.'||event.key == 'clear') {buttonPressed(event.key,'other')}
    
})

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        buttonPressed(btn.innerText,btn.className)
        
    })

});

function letsDoMath() {
    console.log(operatorActive);
    if (operatorActive == '+') {
        numStringActive = +numStringActive + +numStringHold;
    } else if (operatorActive == '-') {
        numStringActive = +numStringActive - +numStringHold;
    } else if (operatorActive == '*') {
        console.log(operatorActive);
        numStringActive = parseFloat(numStringActive) * parseFloat(numStringHold);
    } else if (operatorActive == '/') {
        if (numStringActive == '0') {
            numStringHold = '';
            operatorActive = ''
            numStringActive = 'divide by ZERO dickhead'; return;
        }
        else { numStringActive = +numStringActive / +numStringHold; }
    }

    numStringHold = '';
    operatorActive = ''
}

function buttonPressed(buttonID,buttonClass){
    console.log(buttonID +'  '+buttonClass)
    if (equalBool) {
        numStringActive = '';
        equalBool = false;
    }
    // console.log(btn.id);

    // the following code checks the className and compares it to 'operator' or 'number'
    // it then changes the corresponding variable if neccessary 
    if (operatorActive === '' && buttonClass == 'operator') {
        console.log('op time!');
        numStringHold = numStringActive;
        numStringActive = '';
        deci = false;

        switch (buttonID) {
            case '/': operatorActive = buttonID; break;
            case '*': operatorActive = buttonID; break;
            case '+': operatorActive = buttonID; break;
            case '-': operatorActive = buttonID; break;

        }
    } else if (buttonClass === 'number') {
        console.log(buttonID);
        if (numStringActive === '0') {
            numStringActive = buttonID
        }
        else { numStringActive = numStringActive + buttonID; }

    }



    switch (buttonID) {
        case '=': { letsDoMath(); deci = false; equalBool = true; break; }
        case 'clear': {
            console.log(buttonID);
            numStringActive = '0';
            numStringHold = ''
            operatorActive = ''
            break;
        }
        case '.': {
            if (!deci) {
                if (numStringActive === '0' || numStringActive === '') { numStringActive = '0.' }
                else { numStringActive = numStringActive + '.'; }
            }
            deci = true;
            break;
        }
    }

    outPutText.innerText = numStringHold + operatorActive + numStringActive;


}