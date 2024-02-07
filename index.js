import menuArray from './javascript/data.js'
import getMenuHtml from './javascript/getMenuHtml.js'
const menusOrdered = []
const modal = document.getElementById("modal")
const orderSection = document.getElementById("order-section")

document.addEventListener('click', e => {
  const dataSet = e.target.dataset

  if (dataSet.add) {
    pushOrderInMenusOrdered(dataSet.add)
    totalPrice()
    renderOrder()
  }
  e.target.id==='add-btn-el' ? orderSection.style.display="block" : ''

  if(dataSet.remove){
    removeOrder(dataSet.remove)
  }

  e.target.id === 'complete-order-btn' ? modal.style.display="block" : ''

  e.target.id === 'modal-close-btn' ? modal.style.display="none" : ''
})

document.addEventListener('submit', e => {
  e.preventDefault()
  const payForm = new FormData(document.getElementById('payment-form'))
  const formName = payForm.get('form-name')
  orderSection.innerHTML = `
  <div class="payment-confirmation">
    <p>Thanks ${formName}! Your order is on its way!</p>
  </div>
  `
  modal.style.display="none"
})


function pushOrderInMenusOrdered(orderId){
  const targetOrderObj = menuArray.filter( orderItem => {
    return orderItem.id === Number(orderId)
  })[0]
  menusOrdered.push({
    name: `${targetOrderObj.name}`,
    price: targetOrderObj.price,
    id: `${orderId}`
  })
}

function removeOrder(orderId){
  const indexOfItemToRemove = menusOrdered.findIndex( item => item.id === orderId)
    menusOrdered.splice(indexOfItemToRemove, 1)
    totalPrice()
    renderOrder()
    !menusOrdered.length ? orderSection.style.display="none" : ''
}

function renderOrder(){
  const orderHtml = menusOrdered.map(order => {
    return `
    <div class="your-order">
      <div class="order-label">
            <p>${order.name}</p>
            <button class="remove-btn" data-remove="${order.id}">remove</button>
      </div>
      <p class="order-price">$${order.price}</p>
    </div>
    `
  }).join('')
  document.getElementById('order-details').innerHTML = orderHtml
}

function totalPrice(){
  const discount = document.getElementById('order-discount')
  const totalPrice = document.getElementById('order-total-price')
  const orderTotalPrice = menusOrdered.reduce((total, current) =>{
    return total + current.price
  }, 0)

  menusOrdered.length > 1 ? document.getElementById('discount').style.display="block" : ''

  if (menusOrdered.length >= 5) {
    totalPrice.innerText = `$${(orderTotalPrice * 0.5).toFixed(2)}`
    discount.innerText = "(Discount: 50%) 🎁"
  } else if (menusOrdered.length >= 4) {
    totalPrice.innerText = `$${(orderTotalPrice * 0.6).toFixed(2)}`
    discount.innerText = "(Discount: 40%) 🎁"
  } else if (menusOrdered.length >= 3) {
    totalPrice.innerText = `$${(orderTotalPrice * 0.7).toFixed(2)}`
    discount.innerText = "(Discount: 30%) 🎁"
  } else if (menusOrdered.length >= 2) {
    totalPrice.innerText = `$${(orderTotalPrice * 0.9).toFixed(2)}`
    discount.innerText = "(Discount: 10%) 🎁"
  } else {
    totalPrice.innerText = `$${orderTotalPrice}`
    document.getElementById('discount').style.display="none"
  }

}
document.getElementById('container').innerHTML = getMenuHtml(menuArray)
