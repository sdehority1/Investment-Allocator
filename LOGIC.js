//STATIC DATA ON LOAD
let investmentArr = [];
const tickers = {
    0: "FBCVX: $",
    1: "FBGRX: $",
    2: "FNCMX: $",
    3: "FXAIX: $",
    4: "FCPGX: $",
    5: "FMCSX: $"
};

//INVESTMENT AMOUNT
const amounts = [0.18, 0.22, 0.25, 0.25, 0.0, 0.1];

//TEST SUM FUNC
const reducer = (initialVal, valTwo) => initialVal + valTwo;

//SUM OF TEST FUNC 
const arrSum = amounts.reduce(reducer); 

let childFunc = () => {
    for (let i = 0; i < investmentArr.length; i++) {
        var child = document.createElement("div");
        var copy = document.createTextNode(investmentArr[i]);
        child.className = "numbers";
        child.appendChild(copy);
        document.getElementById("output").appendChild(child);
    }
};

//ON-CLICK FUNCTION
button.addEventListener("click", function () {
    if (arrSum !== 1){
        alert (`Please refactor your array, the sum is not 100% of your investment`)
        } else {
    if (investmentArr.length > 0) {
        output.innerHTML = "";
        investmentArr = [];
        investmentAmt(document.getElementById("investmentamount").value, amounts);
        childFunc();
    } else {
        investmentAmt(document.getElementById("investmentamount").value, amounts);
        childFunc();
    }}
});

//CALCULATE INVESTMENT AMOUNTS
function investmentAmt(cash, arr) {
    for (let i = 0; i < arr.length; i++) {
        investmentArr.push(`${tickers[i]}${(cash * arr[i]).toFixed(2)}` + " " + `(${amounts[i]* 100}`+`%)`);
    }
}

