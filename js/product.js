// Botón en product.html para agregar al carrito
let agregarCarrito = document.getElementById('addCart');

agregarCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  let contador = document.getElementById('cart-price');
  let valorActual = contador.innerHTML;
  contador.innerHTML = parseInt(valorActual) + 1;
});

// Abrir carrito
$("#box-cart").click(function() {
  $("#cart").toggle();
});
  // Cerrar carrito
$("#continue").click(function() {
  $("#cart").toggle(300);
});
  
// Back to the top 
$('.back-top').click( function(e) { 
  e.preventDefault();
  $('html, body').animate({
  scrollTop: $("#product-top").offset().top - "100"
  }, 1000);
} );