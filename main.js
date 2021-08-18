function updateProduct(product, price, isIncrease){
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if(isIncrease == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update total

   const productTotal = document.getElementById(product + '-price');
   productTotal.innerText = productNumber * price;
calculateTotal();
  
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-input').value;
    return productInput;
}
function calculateTotal(){
    const phoneTotal = getInputValue('phone') *  1219;
    const caseTotal = getInputValue('case') *  59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    
}
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProduct('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProduct('phone', 1219, false );

})
document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct('case', 59, true);

})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProduct('case', 59, false);

})