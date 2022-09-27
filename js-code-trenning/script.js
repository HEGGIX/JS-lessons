const nameInput = document.querySelector('.name-inp');
const numberInput = document.querySelector('.number-inp');
const dateInput = document.querySelector('.date-inp');
const cvvInput = document.querySelector('.cvv-inp');
const button = document.querySelector('.submit');

function getInfo() {
    console.log ("Name: " + nameInput.value);
    console.log ("Number Card: " + numberInput.value);
    console.log ("Date: " + dateInput.value);
    console.log ("Cvv: " + cvvInput.value);
}


button.addEventListener ("click", ()=> getInfo());
nameInput.addEventListener ("input",()=> console.log(nameInputValidation()));
numberInput.addEventListener ("input",()=> console.log(numberInputValidation()));
dateInput.addEventListener ("input",()=> console.log(dateInputValidation()));

function nameInputValidation () {
    const value = Array.from (nameInput.value);

    for (let i = 0; i < length-1; i++) {
        if (value [i] === " ") {
            return true;
        }
    }
    return false
}

function numberInputValidation () {
    const value = Array.from (numberInput.value);

    if(value.length - 1 === 15) return true;
    if(value.length - 1 < 15 || value.length > 15) return false;
}

function dateInputValidation () {
    const value = Array.from (dateInput.value);


}

function cvvInputValidation () {
    const value = Array.from (cvvInput.value);

    if(value.length - 1 === 2) return true;
    if(value.length - 1 < 2 || value.length > 2) return false;
}

