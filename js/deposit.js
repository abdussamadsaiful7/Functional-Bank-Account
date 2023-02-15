


document.getElementById('btn-deposit').addEventListener('click', function(){

const newDepositAmount = getInputValueById('deposit-field');

const previousDepositTotal = getTextElementValueById('deposit-total');

const newDepositTotal = previousDepositTotal + newDepositAmount;

setTextElementValueById('deposit-total', newDepositAmount);

const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById('balance-total', newBalanceTotal);


});








// function getInputValueById(inputFieldId){
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldValueString = inputField.value;
//     const inputFieldValue = parseFloat(inputFieldValueString);
//     inputField.value = '';
//     return inputFieldValue;
// };


// function getTextElementValueById(elementId){
//     const element = document.getElementById(elementId);
//     const elementValueString = element.innerText;
//     const elementValue = parseFloat(elementValueString);
//     return elementValue;
    
// }

// function setTextElementValueById( elementId, newValue){
//     const textElement = document.getElementById(elementId);
//     textElement.innerText = newValue;
// }
