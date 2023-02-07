let btnTranslator = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outPut = document.querySelector("#output");
let clearBtnAll = document.querySelector("#btn-clear-all");
let clearBtn = document.querySelector("#btn-clear");


//Translate 
btnTranslator.addEventListener("click", clickHandler);

function clickHandler() {
    outPut.innerHTML = txtInput.value;
}


//clear button for all
clearBtnAll.addEventListener("click", clearFunAll);

function clearFunAll() {
    document.getElementById("txt-input").value = "";
    outPut.innerHTML = "";
}


//clear button for output
clearBtn.addEventListener("click", clearFun);

function clearFun() {
    outPut.innerHTML = "";
}


