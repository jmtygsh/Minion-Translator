let btnTranslator = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outPut = document.querySelector("#output");
let clearBtnAll = document.querySelector("#btn-clear-all");
let clearBtn = document.querySelector("#btn-clear");


let serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}


//Translate 
btnTranslator.addEventListener("click", clickHandler);

function clickHandler() {
    var gettingText = txtInput.value

    fetch(getTranslationUrl(gettingText))
        .then(response => response.json())
        .then(json => {
            outPut.innerText = json.contents.translated;
        })
        .catch(errorHandler)
};


//Server Error Handler 
function errorHandler(error) {
    console.log("Error", error)
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
