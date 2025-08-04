const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const checkResult = document.getElementById("checkResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    if (myCheckbox.checked) {
        checkResult.textContent = `You are Checked!`;
    } else {
        checkResult.textContent = `You are not Checked`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with Master Card`
    } else if (payPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`
    } else {
        paymentResult.textContent = `You must select a payment type`
    }
}