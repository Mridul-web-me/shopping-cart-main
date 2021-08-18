function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById( product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber= parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const phonePriceText = document.getElementById(product + '-total');
    phonePriceText.innerText = productNumber * price;
    
}
/* function updateCaseNumber(isIncreasing){
    const inputText = document.getElementById('case-input');
    let inputTextValue = inputText.value;
    if(isIncreasing){
        inputTextValue= parseInt(inputTextValue) + 1;
    }
    else if(inputTextValue > 0){
        inputTextValue = parseInt(inputTextValue) - 1;
    }
    inputText.value = inputTextValue;
    const phonePriceText = document.getElementById('case-price');
    phonePriceText.innerText = inputTextValue * 59;
    
} */

document.getElementById('phone-plus').addEventListener('click', function(){
  updateProductNumber('phone', );
})

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', false);
 
})
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', true);
    
})

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber( 'case',false);
 
})

