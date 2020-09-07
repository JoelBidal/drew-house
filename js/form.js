// Boton comprar ahora
const btnBuyNow = document.getElementById('buyNow')
// Abro el modal de felicitaciones por la compra e imprimo el nombre del usuario
btnBuyNow.addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById('congrat-modal').style.display='flex';
  var datosUsuario = localStorage.getItem('datosUsuario');
  var nombreUsuario = datosUsuario.split('@')[0]; 
  document.getElementById('name').innerText = nombreUsuario;
})

// Abrir carrito
  cart = document.getElementById('box-cart')
  cart.addEventListener("click", function(c){
    document.getElementById('cart').style.display='block';
})

  closeCart = document.getElementById('continue')
  closeCart.addEventListener('click', function(){
    document.getElementById('cart').style.display='none';
})