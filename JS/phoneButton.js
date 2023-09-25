function plusMinusButtonPhone(isIncrease) {
    const inputFieldPhone = document.getElementById('phone-Number-field');
    const inputFieldPhoneString = inputFieldPhone.value;
    const inputFieldPhonePrev = parseInt(inputFieldPhoneString);

    let inputFieldPhoneNew;
    if (isIncrease === true) {
        inputFieldPhoneNew = inputFieldPhonePrev + 1;
    }
    else {
        inputFieldPhoneNew = inputFieldPhonePrev - 1;
    }
    inputFieldPhone.value = inputFieldPhoneNew;

    return inputFieldPhoneNew;

}

function totalCasePricePhone(inputFieldPhoneNew) {
    const casePrice = document.getElementById('phone-innertex');
    const caseTotalPrice = inputFieldPhoneNew * 1219;

    casePrice.innerText = caseTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const inputFieldPhoneNew = plusMinusButtonPhone(true);

    totalCasePricePhone(inputFieldPhoneNew);
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const inputFieldPhoneNew = plusMinusButton(false);

    totalCasePrice(inputFieldPhoneNew);
})