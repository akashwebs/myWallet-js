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