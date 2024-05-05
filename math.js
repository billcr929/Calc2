btns = document.querySelectorAll('button');
outPutText = document.getElementById('displayText')
console.log(btns);
let numString = '0';

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // console.log(btn.id);

        console.log(numString);


        switch (btn.id) {
            case 'divide': console.log(btn.id); break;
            case 'multiply': console.log(btn.id); break;
            case 'add': console.log(btn.id); break;
            case 'subtract': console.log(btn.id); break;
            case 'equal': {console.log(btn.id);   break;}
            case 'clear': {
                console.log(btn.id);
                numString = '0';
                break;
            }
            case 'dec':{
                if(numString === '0') {numString='0.'}
                break;
            }

            default: {
                console.log('default');
                if (numString === '0') {
                    numString = btn.innerText
                }
                else { numString = numString + btn.id; }

            }
        }

        outPutText.innerText = numString;





    })

});