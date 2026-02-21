document.getElementById("add-money-btn").addEventListener('click', function(){
    // console.log('Add money btn clicked')

    // 1. bank account get
    const bankAccount = getValueFromInput("add-money-bank");
    // console.log(bankAccount)
    if(bankAccount === "Select Bank"){
        alert("Please select a bank");
        return;
    }

    // 2. get bank account number
    const accNo = getValueFromInput("add-money-number");
    if(accNo.length !=11){
        alert("Invalid Account no");
        return;
    }

    // 3. get amount
    const amount = getValueFromInput("add-money-amount");

    const newBalance = getBalance() + Number(amount);

    const pin = getValueFromInput("add-money-pin");
    if(pin === "2333"){
        alert("Add Money Successful");
        setBalance(newBalance);
    }else{
        alert("Invalid Pin");
        return;
    }
})