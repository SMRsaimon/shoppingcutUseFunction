// $ means document.getElementById

function $(selectedIdName) {
    return document.getElementById(selectedIdName);
}

// phone price
// PlusBtn

$('plushButton').addEventListener('click', function() {
    productControl('phone', true);
});

$('minusButton').addEventListener('click', function() {
    productControl('phone', false);
});

$('casePlusButton').addEventListener('click', function() {
    productControl('case', true);
});

$('caseMinusButton').addEventListener('click', function() {
    productControl('case', false);
});

function productControl(productName, productQuantity) {
    const productInput = $(productName + '-count').value;
    const productCountNumber = parseInt(productInput);

    let newProductCountNumber = productCountNumber;
    if (productQuantity == true && newProductCountNumber > 0) {
        newProductCountNumber = productCountNumber + 1;
    }
    if (productQuantity == false && newProductCountNumber > 1) {
        newProductCountNumber = productCountNumber - 1;
    }
    $(productName + '-count').value = newProductCountNumber;

    let productPrice = 0;
    if (productName == 'phone') {
        productPrice = newProductCountNumber * 1219;
    }
    if (productName == 'case') {
        productPrice = newProductCountNumber * 59;
    }
    $(productName + 'Price').innerText = productPrice;

    productPriceCalculation();
}

function productPriceCalculation() {
    const phoneCount = productInputConvertToNumber('phone');
    const caseCount = productInputConvertToNumber('case');

    const totalPrice = phoneCount * 1219 + caseCount * 59;

    $('subTotal').innerText = totalPrice;

    const text = Math.round(totalPrice / 20);
    $('text').innerText = '$' + text;
    const grandTotal = text + totalPrice;
    $('inTotal').innerText = '$' + grandTotal;
}

// product input conveter to Number
function productInputConvertToNumber(product) {
    const productInput = $(product + '-count').value;
    const productcount = parseInt(productInput);

    return productcount;
}

// case price
// $('casePlusButton').addEventListener('click', function() {
//     const caseCount = $('case-count').value;
//     const caseCountNumber = parseInt(caseCount);
//     const caseNewCountNumber = caseCountNumber + 1;
//     $('case-count').value = caseNewCountNumber;

//     const caseCountPrice = 59 * caseNewCountNumber;
//     $('casePrice').innerText = caseCountPrice;

//     const subTotal = caseNewCountNumber * 59;
//     $('subTotal').innerText = subTotal;
// });

// $('caseMinusButton').addEventListener('click', function() {
//     const caseCount = $('case-count').value;
//     const caseCountNumber = parseInt(caseCount);
//     const caseNewCountNumber = caseCountNumber - 1;
//     $('case-count').value = caseNewCountNumber;

//     const caseCountPrice = 59 * caseNewCountNumber;
//     $('casePrice').innerText = caseCountPrice;
//     const subTotal = caseNewCountNumber * 59;
//     $('subTotal').innerText = subTotal;
// });

// const phoneCount = $('phone-count').value;
// const phoneCountNumber = parseInt(phoneCount);
// const newPhoneCountNumber = phoneCountNumber - 1;
// $('phone-count').value = newPhoneCountNumber;
// const phoneCountPrice = 1219 * newPhoneCountNumber;
// $('phonePrice').innerText = phoneCountPrice;