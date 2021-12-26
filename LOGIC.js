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
    if (arrSum !== 1) {
        alert(`Please refactor your array, the sum is not 100% of your investment`)
    } else {
        if (investmentArr.length > 0) {
            output.innerHTML = "";
            investmentArr = [];
            investmentAmt(document.getElementById("investmentamount").value, amounts);
            childFunc();
        } else {
            investmentAmt(document.getElementById("investmentamount").value, amounts);
            childFunc();
        }
    }
});

//CALCULATE INVESTMENT AMOUNTS
//You could probably do this with a concat so you don't have to mutate the original array
function investmentAmt(cash, arr) {
    for (let i = 0; i < arr.length; i++) {
        investmentArr.push(`${tickers[i]}${(cash * arr[i]).toFixed(2)}` + " " + `(${amounts[i] * 100}` + `%)`);
    }
}

/* Need to create an object where you can push as many tickers as you want, along with the percentage of your cash that you want to allocate to that investment. 
Maybe it could build a table? So the tickers + percentages are listed in one table, and the investment account is listed in another table so at the end
you can see how much you allocated by percentage and where it went*/