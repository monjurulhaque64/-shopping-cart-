

function updateCaseNumber(isIncrese){
    const caseNumberFeild = document.getElementById('case-number-feild');
    const caseNumberString = caseNumberFeild.value;
    const perviusCaseNumber = parseInt(caseNumberString);

    let newCaseNumber ;
    
    if(isIncrese){
        newCaseNumber = perviusCaseNumber + 1;
    }
    else{
        newCaseNumber = perviusCaseNumber - 1;
    }
    caseNumberFeild.value =newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber*59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText=caseTotalPrice;
};


document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});


document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    calculateSubTotal();
});


