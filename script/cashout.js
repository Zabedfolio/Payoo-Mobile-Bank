document.getElementById('cashout-btn').addEventListener('click', function(){
    // 1. agent num validate
    const cashoutNum = getValueFromInput("cashout-number");
    if(cashoutNum.length != 11){
        alert("Invalid Number");
        return;
    }
    // console.log(cashoutNum)

    // 2. get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");

    // 3. get the current balance
    const currentBalance = getBalance();

    // 4. calculate balance
    const newBalance = currentBalance - Number(cashoutAmount);
    // console.log(newBalance)
    if(newBalance<0){
        alert("Invalid Amount");
        return;
    }

    // 5. pin validate
    const pin = getValueFromInput("cashout-pin");
    if(pin === '2333'){
        alert("Cashout Successful");
        setBalance(newBalance);
        //1. history container
        const history = document.getElementById("history-container");
        //2. new div create
        const newHistory = document.createElement("div");
        //3. new div innerHTML
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
                Cashout ${cashoutAmount}tk Successfully to ${cashoutNum} at ${new Date()}
        </div>
        `
        //4. history container e new div append korbo
        history.append(newHistory);
    }else{
        alert("Invalid Pin");
        return;
    }
})



// // console.log('cashout')

// document.getElementById('cashout-btn')
// .addEventListener('click', function(){
//     // 1. get the agent number & validdate

//     const cashoutNumInput = document.getElementById('cashout-number');
//     const cashoutNum = cashoutNumInput.value;
//     if(cashoutNum.length != 11){
//         alert("Invalid Agent Number");
//         return;
//     }
//     // console.log(cashoutNum);

//     //2. get the amount, validate, convert to number
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     // console.log(cashoutAmount)

//     //3. get current balance, validate, convert to number
//     const currentBalanceElement = document.getElementById('balance');
//     const balance = currentBalanceElement.innerText;
//     // console.log(balance);

//     //4. calculate new Balance
//     const newBalance = Number(balance)- Number(cashoutAmount);
//     // console.log(newBalance)

//     if(newBalance < 0){
//         alert("Invalid Amount");
//         return;
//     }
//     // console.log(newBalance)

//     //5. get the pin and verify
//     const cashoutPinInput = document.getElementById('cashout-pin');
//     const pin = cashoutPinInput.value;
//     if(pin === '2333'){
//         //5-1. true:: alert > set new balance
//         alert("Cashout successful");
//         currentBalanceElement.innerText = newBalance;
//     }else{
//         //5-2. false:: error alert > return
//         alert("Invalid pin");
//         return;
//     }
    
    
// })

