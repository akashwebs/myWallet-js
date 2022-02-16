//common function for get id

function elementesId(idName) {
    return document.getElementById(idName);
}
//get input value

function getInputValue(idName) {
    const inputField = document.getElementById(idName);
    const inputValue = parseInt(inputField.value);
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

        // display amount of total expenses
        totalExpensesCost.innerText = totalIncomeExpenses;
        // display total balance
        totalBalance.innerText = incomeAmountValue - totalIncomeExpenses;


    })
    // event handeler for save button for saving amount
elementesId('save-button').addEventListener('click', function() {
    // total income
    const incomeAmountValue = getInputValue('income');
    // input percent of  saving amount 
    const savingAmountPercent = getInputValue('percent-input');
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