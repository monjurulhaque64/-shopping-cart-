
function updatephoneNumber(isIncrese){
    const phoneNumberFeild = document.getElementById('phone-feild');
    const phoneNumberString = phoneNumberFeild.value;
    const perviusphoneNumber = parseInt(phoneNumberString);

    let newphoneNumber ;
    
    if(isIncrese){
        newphoneNumber = perviusphoneNumber + 1;
    }
    else{
        newphoneNumber = perviusphoneNumber - 1;
    }
    phoneNumberFeild.value =newphoneNumber;

    return newphoneNumber;
}

function updatephoneTotalPrice(newphoneNumber){
    const phoneTotalPrice = newphoneNumber*1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText=phoneTotalPrice;
};


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newphoneNumber = updatephoneNumber(true);
    updatephoneTotalPrice(newphoneNumber);
    calculateSubTotal();
    calculateSubTotal();
});


document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newphoneNumber = updatephoneNumber(false);
    updatephoneTotalPrice(newphoneNumber);
    calculateSubTotal();
    calculateSubTotal();
});