//common function for get id

function elementesId(idName) {
    return document.getElementById(idName);
}
//get input value

function getInputValue(idName) {
    const inputField = document.getElementById(idName);
    const inputValue = parseInt(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getTextValue(idName) {
    const inputField = document.getElementById(idName);
    const inputValue = parseInt(inputField.innerText);
    return inputValue;
}


// total expenses calculation 
function totalExpenses() {
    const foodExpense = getInputValue('food');
    const rentExpense = getInputValue('rent');
    const clothesExpense = getInputValue('clothes');

    const totalExpensesAmount = foodExpense + rentExpense + clothesExpense;
    return totalExpensesAmount;
}
// calculate button event handeler
document.getElementById('calculate-button').addEventListener('click', function() {


        const incomeAmountValue = getInputValue('income');
        const totalIncomeExpenses = totalExpenses();
        const totalExpensesCost = elementesId('total-expenses');
        const totalBalance = elementesId('total-balance');
        const totalMainBalance = incomeAmountValue - totalIncomeExpenses;
        // error handle for total expenses anad balance output if not a number 
        if (isNaN(totalIncomeExpenses) || isNaN(incomeAmountValue)) {
            totalExpensesCost.innerText = '0';
            totalBalance.innerText = '0';
            elementesId('error-alert').style.top = '46%';
            elementesId('messege').innerText = 'Your input is wrong!!'

        } else {
            elementesId('error-alert').style.top = '-100%';
            if (totalMainBalance < totalIncomeExpenses) {
                elementesId('total-balance').parentNode.style.color = 'red';
                elementesId('error-alert').style.top = "46%";
                elementesId('messege').innerText = "your main balance is low, you need more earning!";
            } else {

                elementesId('total-balance').parentNode.style.color = '#000';
            }
            totalExpensesCost.innerText = totalIncomeExpenses;
            // display total balance
            totalBalance.innerText = totalMainBalance;
        }


    })
    // event handeler for save button for saving amount
elementesId('save-button').addEventListener('click', function() {
    // total income
    let incomeAmountValue = getInputValue('income');
    // input percent of  saving amount 
    const savingAmountPercent = getInputValue('percent-input');
    if (isNaN(incomeAmountValue)) {
        incomeAmountValue = getTextValue('total-balance') + getTextValue('total-expenses');
    }
    const calculatePercent = (incomeAmountValue / 100) * savingAmountPercent;
    // saving amount display value
    const totalSavingAmount = elementesId('saving-amount');
    totalSavingAmount.innerText = calculatePercent;

    remainingBalance();
})

// remaining Balance
function remainingBalance() {
    const remainingBalance = elementesId('remaining-balance');
    const mainBalance = getTextValue('total-balance');
    const savingAmount = getTextValue('saving-amount');
    const totalRemainingBalance = mainBalance - savingAmount;
    remainingBalance.innerText = totalRemainingBalance;
}

const allInputTags = document.getElementsByTagName('input');
for (const tag of allInputTags) {
    tag.addEventListener('keyup', function(e) {
        const value = e.target.value;
        const error = elementesId('error-alert');
        if (isNaN(value)) {
            e.target.style.border = '2px solid red'
            error.style.top = "46%";
        } else {
            e.target.style.border = '0px solid red'
            error.style.top = "-46%";
        }
    })
}