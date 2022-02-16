// common function for get id
function elementesId(idName) {
    return document.getElementById(idName);
}

//  get input value

function getInputValue(idName) {
    const inputField = document.getElementById(idName).value;
    const inputValue = parseInt(inputField.value);
    return inputValue;
}


// calculate button event handeler
document.getElementById('calculate-button').addEventListener('click', function() {


})