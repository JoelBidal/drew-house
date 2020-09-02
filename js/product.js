// Botón en product.html para agregar al carrito
let agregarCarrito = document.getElementById('addCart');

agregarCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  let contador = document.getElementById('cart-price');
  let valorActual = contador.innerHTML;
  contador.innerHTML = parseInt(valorActual) + 1;
});
