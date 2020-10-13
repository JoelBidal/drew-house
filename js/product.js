var productosJSON;

class producto {
  constructor(nombre, precio, imagen, categoria, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.categoria = categoria;
    this.id = id;
  }
}

var productos;
var productosMap = new Map();

window.onload = () => {
  let datosJSON = JSON.parse(productosJSON);
  productos = datosJSON.map((object) => {
    return new producto(object.nombre, object.precio, object.imagen, object.categoria, object.id);
  });
}

// productos.forEach(producto => { productosMap.set(producto, 0) })

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

  productosMap.set(producto, productosMap.get(producto)+1)

  console.log(productosMap)
  let productCard = document.createElement('div');
  productCard.innerHTML = producto.nombre;

  itemsOnCart.appendChild(productCard);  
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


