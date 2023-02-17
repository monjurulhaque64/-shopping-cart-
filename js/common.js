function getTextElementByID(elementID){
    const phoneTotalElement = document.getElementById(elementID);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementbyId(elementID, value){
    const subTotalElement = document.getElementById(elementID);
    subTotalElement.innerText = value;
}
function calculateSubTotal (){
    const currentPhoneTotal = getTextElementByID('phone-total');
    const currentcaseTotal = getTextElementByID('case-total');
    const cureentsubTotal = currentPhoneTotal + currentcaseTotal;

    setTextElementbyId('sub-total', cureentsubTotal);

    const taxAmmunt = parseFloat(cureentsubTotal*0.1).toFixed(2);
    setTextElementbyId('tax-ammount', taxAmmunt);
    const final = taxAmmunt + cureentsubTotal;
    setTextElementbyId('final-total', final);
}