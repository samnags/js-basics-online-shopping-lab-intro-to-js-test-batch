var cart = []

function getCart() {
  return cart
}

function setCart(new_cart) {
  cart = new_cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var object = {};
  object[item] = price;
  cart.push(object)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
    if (cart.length == 0) {
      console.log('Your shopping cart is empty.')
    } else {
      var itemsAndPrice = [];
      for (var i = 0; i < cart.length; i++) {
        itemAndPriceObj = cart[i]
        item = Object.keys(itemAndPriceObj)[0]
        price = itemAndPriceObj[item]
        itemsAndPrice.push(`${item} at \$${price}`)
      }
      console.log(`In your cart, you have ${itemsAndPrice.join(', ')}.`)
    }
}

function removeFromCart(item) {
  let itemInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      delete cart[i]
      itemInCart = true
      }
    }
    if (!itemInCart) {
      console.log("That item is not in your cart.")
    }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.")
  }
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
}





function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
