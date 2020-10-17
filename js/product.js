// Busca el producto elegido en Local Storage para seguidamente mostrarlo en pantalla
const product = JSON.parse(localStorage.getItem('product'));
(function(obj){
  let productTop = document.getElementById('product-top')
// Imprimo el producto
  return productTop.innerHTML = 
          `
          <div class="col-left">
              <div class="box-image-product">
                  <img class="first-img" src="${obj.imagen}" alt="${obj.nombre}">
              </div>
            </div>
            <div class="col-right">
              <h1>${obj.nombre}</h1>
              <span id="priceProduct">$${obj.precio},00</span>
              <div class="form">
              <label for="volume">volume:</label>
              <select name="volume" id="volume">
                  <option value="0">1</option>
                  <option value="1">2</option>
                  <option value="2">3</option>
                  <option value="3">4</option>
                  <option value="4">5</option>
              </select> <br>
              <label for="size">size:</label>
              <select name="size" id="size">
                  <option value="0">XS</option>
                  <option value="1">S</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                  <option value="4">XL</option>
              </select> <br>
              <label for="color">color:</label>
              <select name="color" id="color">
                  <option value="0">white</option>
                  <option value="1">beige</option>
                  <option value="2">black</option>
                  <option value="3">red</option>
                  <option value="4">blue</option>
              </select>
              <div class="buttons">
                  <a href="#" id="addCart">add to cart</a>
                  <a href="form.html" onclick='buyNow(event)' id="buyNow">buy now</a>
              </div>
            </div>
          </div>
            `
  })(product)

  window.onload = () => {
// Botón en product.html para agregar al carrito
let agregarCarrito = document.getElementById('addCart');
// Box con los productos del carrito
var itemsOnCart = document.getElementById('itemsOnCart');

// Agregar al carrito
agregarCarrito.addEventListener("click", (e) => {
  e.preventDefault();
  let contador = document.getElementById('cart-price');
  let valorActual = contador.innerHTML;
  contador.innerHTML = parseInt(valorActual) + 1;
});
}
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