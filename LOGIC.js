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
        investmentAmt(document.getElementById("investmentamount").value, [0.15, 0.20, 0.19, 0.26, 0.1, 0.1]);
        childFunc();
    } else {
        investmentAmt(document.getElementById("investmentamount").value, [0.15, 0.20, 0.19, 0.26, 0.1, 0.1]);
        childFunc();
    }
});

//CALCULATE INVESTMENT AMOUNTS
function investmentAmt(cash, arr) {
    for (let i = 0; i < arr.length; i++) {
        investmentArr.push(`${tickers[i]}${(cash * arr[i]).toFixed(2)}`);
    }
}

