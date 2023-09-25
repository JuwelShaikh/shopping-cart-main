function plusMinusButton(isIncrease) {
    const inputFieldCase = document.getElementById('Case-Number-field');
    const inputFieldCaseString = inputFieldCase.value;
    const inputFieldCasePrev = parseInt(inputFieldCaseString);

    let inputFieldCaseNew;
    if (isIncrease === true) {
        inputFieldCaseNew = inputFieldCasePrev + 1;
    }
    else {
        inputFieldCaseNew = inputFieldCasePrev - 1;
    }
    inputFieldCase.value = inputFieldCaseNew;

    return inputFieldCaseNew;

}

function totalCasePrice(inputFieldCaseNew) {
    const casePrice = document.getElementById('case-innertex');
    const caseTotalPrice = inputFieldCaseNew * 59;

    casePrice.innerText = caseTotalPrice;
}



document.getElementById('btn-case-plus').addEventListener('click', function () {
    const inputFieldCaseNew = plusMinusButton(true)

    totalCasePrice(inputFieldCaseNew);
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const inputFieldCaseNew = plusMinusButton(false)

    totalCasePrice(inputFieldCaseNew);
})