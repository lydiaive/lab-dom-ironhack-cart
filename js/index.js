// ITERATION 1

/* function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').getAttribute('value');
  console.log(price, quantity);
  let subtotal = product.querySelector('.subtotal span').innerHTML;
  subtotal = (price * quantity);
  console.log(subtotal);
} */

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');

  const quantity = product.querySelector('.quantity input');
  console.log(price, quantity);

  //for testing:
  //quantity.setAttribute('value', this.value)
  
  const subtotal = product.querySelector('.subtotal span');
  const subtotalValue = (price.innerHTML * quantity.value).toFixed(2);
  subtotal.textContent =  subtotalValue;
  return subtotalValue;
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // console.log(singleProduct)
  // end of test
  // ITERATION 2
  const productNodes = document.querySelectorAll('.product');
  console.log(productNodes)

  for (let i = 0; i < productNodes.length; i++) {
    updateSubtotal(productNodes[i]);
}
  // ITERATION 3
  
  const subtotalList = document.querySelectorAll('.subtotal span');
  const total = document.querySelector('#total-value span')
  let subtotalArr = [...subtotalList];
  const totalValue = subtotalArr.reduce((acc, curr) => {
    return acc + parseFloat(curr.innerHTML);
  },0)
  console.log(totalValue)
  total.textContent = totalValue.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentElement.parentElement.remove()
  calculateAll()
}

// ITERATION 5

function createProduct() {
  
  const newProductName = document.querySelector('.create-product-name').value;
  const newProductPrice = document.querySelector('.create-product-price').value;

  console.log(newProductName, newProductPrice);

  let newProductRow = `
      <td class="name">
        <span>${newProductName}</span>
      </td>
      <td class="price">$<span>${newProductPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `

  let newRow = document.querySelector("tbody").insertRow()
  newRow.innerHTML = newProductRow
  newRow.setAttribute('class', 'product')

  newRow.getElementsByClassName('btn-remove')[0].addEventListener('click', removeProduct);
}

/* function changeQuantity(event) {
  const target = event.currentTarget;
  console.log('The target in input is:', target);
} */

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductBtn = document.getElementsByClassName('btn-remove');
  console.log(removeProductBtn);
  

  for (let i = 0; i < removeProductBtn.length; i++) {
    let button = removeProductBtn[i];
    button.addEventListener('click', removeProduct);
  }


  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);

  /* const inputQuantity = document.getElementsByClassName('quantity');
  console.log(inputQuantity);

  for (let i = 0; i < inputQuantity.length; i++) {
    let input = inputQuantity[i];
    input.addEventListener('change', changeQuantity); 
  } */
});
