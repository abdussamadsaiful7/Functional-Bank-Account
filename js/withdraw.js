
//add withdraw button event handler,
document.getElementById('btn-withdraw').addEventListener('click', function(){

//get withdraw amount by using getInputValueById function
    const newWithdrawAmount = getInputValueById('withdraw-field');

//get previous withdraw amount by using getTextElementValueById function,
const previousWithdrawAmount = getTextElementValueById('withdraw-total');

//calculate new withdraw Total and set the value;
const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

//set new withdraw total by using  setTextElementValueById function
setTextElementValueById('withdraw-total', newWithdrawAmount);

//get previous balance total by using  getTextElementValueById function,
const previousBalanceTotal = getTextElementValueById('balance-total');

//calculate new balance total
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

//set balance total using setTextElementValueById
setTextElementValueById('balance-total', newBalanceTotal);
});