const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert() {
    temp = textBox.value;
    temp = Number(temp);

    if (toFahrenheit.checked) {
        temp = ((9 / 5) * temp) + 32;
        result.textContent = temp.toFixed(1) + "°F";

    } else if (toCelcius.checked) {
        temp = (5 / 9) * (temp - 32);
        result.textContent = temp.toFixed() + "°C";

    } else {
        result.textContent = "Select a unit";
    }
}