/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound

- generate all conversions when user clicks "convert"
- round numbers down to 3 decimal places
*/

const defaultNumbers = document.querySelectorAll(".number")
document.getElementById("convert").addEventListener("click", showNumbers)

function showNumbers() {
    let input = document.getElementById("userInput")
    let inputValue = input.value

    for (let i = 0; i < defaultNumbers.length; i++) {
        defaultNumbers[i].textContent = inputValue
    }

    document.querySelector(".feet").textContent = meterToFeet(inputValue)
    document.querySelector(".meters").textContent = feetToMeter(inputValue)
    document.querySelector(".gallons").textContent = litersToGallons(inputValue)
    document.querySelector(".liters").textContent = gallonsToLiters(inputValue)
    document.querySelector(".pounds").textContent = kilosToPounds(inputValue)
    document.querySelector(".kilos").textContent = poundsToKilos(inputValue)

    function meterToFeet(x) {
        let feet = x * 3.281
        return feet.toFixed(3)
    }

    function feetToMeter(x) {
        let meters = x / 3.281
        return meters.toFixed(3)
    }

    function litersToGallons(x) {
        let liters = x * 0.264
        return liters.toFixed(3)
    }

    function gallonsToLiters(x) {
        let gallons = x / 0.264
        return gallons.toFixed(3)
    }

    function kilosToPounds(x) {
        let kilos = x * 2.204
        return kilos.toFixed(3)
    }

    function poundsToKilos(x) {
        let pounds = x / 2.204
        return pounds.toFixed(3)
    }
}