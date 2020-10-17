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

window.onload = () => {
  let datosJSON = JSON.parse(productosJSON);
  productos = datosJSON.map((object) => {
    return new producto(object.nombre, object.precio, object.imagen, object.categoria, object.id);
  });
  
  const sortBy = document.getElementById('sortBy');
  const selected = document.getElementById('selectFild');

  const productosColeccion = document.getElementById('products');
  
  productos.forEach((producto) => {
    productosColeccion.innerHTML += crearProducto(producto);
  });
// Filtro de productos en el Shop
  sortBy.addEventListener('change', event => {
  event.preventDefault();
    
  let resultadoFiltro = selected.value;
  console.log(resultadoFiltro)
  let productosElegidos = productos.filter(producto =>{
    return producto.categoria.toLowerCase().includes(resultadoFiltro.toLowerCase())
  })

  // Limpio el shop y luego imprimo los productos filtrados con el input
  productosColeccion.innerHTML = '';
  productosElegidos.forEach(producto => {productosColeccion.innerHTML += crearProducto(producto);})
  console.log(productosElegidos)
  })
};

// Agregando los productos al HTML
function crearProducto(producto) {
  return `<div class="product-00 unity">
  <a href="product.html"><img class="img-producto" onclick='viewMore("${producto.id}")' id="${producto.id}" src="${producto.imagen}" alt="short"></a>
  <h2 class="name-product">${producto.nombre}</h2>
  <span class="price-product">$${producto.precio}.00</span>
  </div>`;
}

// Escuchar el producto que el usuario selecciona en el Shop y luego guardarlo en Local Storage
function viewMore(id){
  const product = productos.filter(item => item.id === id)[0]
  const productToString = JSON.stringify(product);
// Envio el producto a Local Storage 
  localStorage.setItem('product', productToString);
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
  scrollTop: $("#shop-image").offset().top - "100"
  }, 1000);
} );
