let addform = document.getElementById("addform");
let paym = document.getElementById("paym");
let body = document.querySelector("body");
let itmvalue = document.getElementById("itmvalue");
let totalvalue = document.getElementById("totalvalue");
let cartdata = JSON.parse(localStorage.getItem("cartdata"));

itmvalue.innerText = `$${cartdata[0].price}`;
totalvalue.innerText = `$${cartdata[0].price}`;

console.log(cartdata[0]);
// form addeventlistner
let address = [];
addform.addEventListener("submit",(ele)=>{
    ele.preventDefault();
    let payment = document.getElementById("textchange");
    payment.innerText = `Select a payment method`;
    paym.append(payment);
    let mainhead = document.getElementById("mainhead");
    mainhead.innerText = "payment method";
    let state = document.getElementById("state");
    address.push(state.value);
    let name = document.getElementById("name");
    address.push(name.value);
    let number = document.getElementById("number");
    // address.push(number.push);
    let email = document.getElementById("email");
    address.push(email.value);
    let pin = document.getElementById("password");
    address.push(pin.value);
    let phoneno = document.getElementById("phoneno");
    address.push(phoneno.value);
    let textchange = document.getElementById("textchange");
    // address.push(textchange.value);
    // taking values of all inputs
    // console.log(address);

    addform.innerHTML = `<div id="html">
    <input type="radio"  name="payment" value="Pay_debit_card" class="msg">
    <label for="Pay_debit_card">Pay with Credit Card (on Delivery)</label>
    </div>
    <div id="css">
    <input type="radio"  name="payment" class="msg" value="Net_Banking">
    <label for="Net_Banking">Pay with Debit Card (on Delivery)</label><br>
    </div>
    <div id="javascript">
    <input type="radio"  name="payment" class="msg" value="cash">
    <label for="cash">Pay with Cash (on Delivery)</label><br>
    </div>
    <button id="continue">Use this payment method<button>`;  
    let continues = document.getElementById("continue");
    // console.log();

continues.innerText = "Confirm order";
if(continues.innerText == "Confirm order"){
continues.addEventListener("click",()=>{
        // window.location.replace("../frontend/home.html");
        body.innerHTML = `<div id="confirmation">
        <img src="../database/images/Checklist-Logo.png" alt="">
        <h2>Order confirmed!</h2>
        <p>Your order has been placed successfully !!</p>
        <p>Get delivery by tomorrow 9am</p>
        <a href="../frontend/products.html"><button>Continue shopping</button></a>
    </div>`;
let add_data = document.getElementsByClassName("msg").value;
    console.log(add_data.value);
});
}

// $("").hide();
});
