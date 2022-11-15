let carticon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".closecart");


//open cart
carticon.onclick = () => {
  cart.classList.add("active");
};

//close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};


if (document.readyState == "loading"){
  document.addEventListener("DOMContentLoaded",ready);
} else {
  ready();
}

//functions

function ready(){
  //remove
  var removeCartButtons = document.getElementByClassName('cart-remove')
  console.log(removeCartButtons)
  for (var i = 0; i< removeCartButtons.length;i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
}

function removeCartItem(event){
  var buttonClicked = event.target
  buttonClicked.parentElement.remove();
}
