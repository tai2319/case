let so1 = "";
let so2 = "";
let opt 
const resultInput = document.getElementById('result');
function buttonHandler(btn) {
    const pressValue = btn.innerText

    
    if(isNaN(pressValue)){
        if(pressValue== 'C'){
            so1 =""
            so2 = ""
            opt = undefined
            resultInput.value=""
            return;
        }
        if(pressValue == "="){
            const result = perform(so1,so2,opt);
            resultInput.value= result;
            so1 =""
            so2 = ""
            opt = undefined
        }else{
            opt = pressValue
        }
    }else{
        if (opt){
            so2 += pressValue
            resultInput.value = so2
        }
        else{
            so1 += pressValue
            resultInput.value = so1
        }
    }
}
function clearResult (){
    resultInput.value = ""
}

function perform(so1,so2,otor){
    so1 = Number(so1)
    so2 = Number(so2)
    switch(otor){
        case "+":
            return so1 + so2;
        break;
        case "-":
            return so1 -so2;
        break;
        case "*":
            return so1 * so2;
        break;
        case "/":
            return so1 / so2;
        break;
    }
}