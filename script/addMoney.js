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
        alert(`Add Money Successful from ${bankAccount} at ${new Date()}`);
        setBalance(newBalance);

        //1. history container
        const history = document.getElementById("history-container");
        //2. new div create
        const newHistory = document.createElement("div");
        //3. new div innerHTML
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
                Added ${amount} Successfully from ${bankAccount}, acc-no ${accNo} at ${new Date()}
        </div>
        `
        //4. history container e new div append korbo
        history.append(newHistory);
    }else{
        alert("Invalid Pin");
        return;
    }
})