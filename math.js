btns = document.querySelectorAll('button');
outPutText = document.getElementById('displayText')
console.log(btns);
let numStringActive = '0';
let numStringHold = '';
let operatorActive = '';

document.addEventListener('keydown',(event)=>{
    console.log(event.key);
    //add in function to do all the math in the btn listener
    //also create a bool for the decimal point. There can only be 1!!

})

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // console.log(btn.id);

        // the following code checks the className and compares it to 'operator' or 'number'
        // it then changes the corresponding variable if neccessary 
        if (operatorActive === '' && btn.className == 'operator') {
            console.log('op time!');
            numStringHold = numStringActive;
            numStringActive = '';

            switch (btn.id) {
                case 'divide': operatorActive = btn.innerText; break;
                case 'multiply': operatorActive = btn.innerText; break;
                case 'add': operatorActive = btn.innerText; break;
                case 'subtract': operatorActive = btn.innerText; break;

            }
        } else if(btn.className === 'number'){
            console.log(btn.innerText);
                    if (numStringActive === '0') {
                        numStringActive = btn.innerText
                    }
                    else { numStringActive = numStringActive + btn.id; }

        }



            switch (btn.id) {
                case 'equal': { letsDoMath(); break; }
                case 'clear': {
                    console.log(btn.id);
                    numStringActive = '0';
                    numStringHold = ''
                    operatorActive = ''
                    break;
                }
                case 'dec': {
                    if (numStringActive === '0') { numStringActive = '0.' }
                    else{numStringActive=numStringActive+'.';}
                    break;
                }
            }

            outPutText.innerText = numStringHold + operatorActive + numStringActive;
        })

});

function letsDoMath(){
    console.log(operatorActive);
    if (operatorActive=='+'){
        numStringActive = +numStringActive + +numStringHold;
    }else if (operatorActive=='-'){
        numStringActive = +numStringActive - +numStringHold;
    }else if (operatorActive =='*'){
        console.log(operatorActive);
        numStringActive = parseFloat(numStringActive) * parseFloat(numStringHold);
    }else if(operatorActive=='/'){
        if(numStringActive=='0'){
            numStringHold='';
            operatorActive=''
            numStringActive = 'divide by ZERO dickhead'; return;}
        else{numStringActive = +numStringActive / +numStringHold;}
    }

    numStringHold='';
    operatorActive=''
}