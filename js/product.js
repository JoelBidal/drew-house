// Botón en product.html para agregar al carrito
let agregarCarrito = document.getElementById('addCart');

agregarCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  let contador = document.getElementById('cart-price');
  let valorActual = contador.innerHTML;
  contador.innerHTML = parseInt(valorActual) + 1;
});

// Abrir carrito
  cart = document.getElementById('box-cart')
  cart.addEventListener("click", function(c){
    document.getElementById('cart').style.display='block';
})

  closeCart = document.getElementById('continue')
  closeCart.addEventListener('click', function(){
    document.getElementById('cart').style.display='none';
})