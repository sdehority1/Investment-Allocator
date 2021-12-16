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
    if (investmentArr.length > 0) {
        output.innerHTML = "";
        investmentArr = [];
        investmentAmt(document.getElementById("investmentamount").value, amounts);
        childFunc();
    } else {
        investmentAmt(document.getElementById("investmentamount").value, amounts);
        childFunc();
    }
});

//CALCULATE INVESTMENT AMOUNTS
function investmentAmt(cash, arr) {
    for (let i = 0; i < arr.length; i++) {
        investmentArr.push(`${tickers[i]}${(cash * arr[i]).toFixed(2)}`);
    }
}

