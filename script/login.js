// console.log('login')

document.getElementById('cashout-btn').addEventListener('click', function(){
    // console.log('login button clicked')
    // 1. get the mobile number
    const numberInput = document.getElementById('input-mobile');
    const contactNumber = numberInput.value;
    // console.log(contactNumber);
    // 2. get the pin
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    // console.log(pin)
    // 3. match mobile number & pin
    if(contactNumber === "01212121212" && pin === "2333"){
        // 3.1  if true>> alert>> homepage
        alert("Login successful");
        window.location.assign("/home.html")
    }else{
        // 3.2  else >> alert>> return
        alert("Login failed");
        return;
    }
    
})