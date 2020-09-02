// Datos con los productos de la tienda
var productosJSON = `[
  {"nombre":"secret ss tee -white", "precio":48.00, "imagen":"../assets/img/clothes/00.jpg"},
  {"nombre":"corduroy ss shirt - chocolate", "precio":148.00, "imagen":"../assets/img/clothes/01.jpg"},
  {"nombre":"corduroy shorts - chocolate", "precio":138.00, "imagen":"../assets/img/clothes/02.jpg"},
  {"nombre":"striped mascot socks - black/golden", "precio":20.00, "imagen":"../assets/img/clothes/03.jpg"},
  {"nombre":"distressed jean - vintage indigo", "precio":278.00, "imagen":"../assets/img/clothes/04.jpg"},
  {"nombre":"mascto skate deck - iceberg roses", "precio":58.00, "imagen":"../assets/img/clothes/05.jpg"},
  {"nombre":"mixed media trucker jacket - bleached", "precio":448.00, "imagen":"../assets/img/clothes/06.jpg"},
  {"nombre":"drew house space sticker sheet", "precio":10.00, "imagen":"../assets/img/clothes/07.jpg"},
  {"nombre":"dinodrew skate deck - burnt oronge", "precio":58.00, "imagen":"../assets/img/clothes/08.jpg"}
]`;

class Producto {
  constructor(nombre, precio, imagen) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
  }
}
  
var productos;

window.onload = () => {
  let datosJSON = JSON.parse(productosJSON);
  productos = datosJSON.map((object) => {
    return new Producto(object.nombre, object.precio, object.imagen);
  });
  
  const productosColeccion = document.getElementById('products');
  
  productos.forEach((producto) => {
    productosColeccion.innerHTML += crearProducto(producto);
  });
};

// Agregando los productos al HTML
function crearProducto(producto) {
  return `<div class="product-00 unity">
  <a href="../views/product.html"><img src="${producto.imagen}" alt="short"></a>
  <h2 class="name-product">${producto.nombre}</h2>
  <span class="price-product">$${producto.precio}.00</span>
  </div>`;
}

// Arrays con los productos de mi select > option
var all = [productos];
var shirts = ['secret ss tee -white', 'corduroy ss shirt - chocolate', ''];
var jeans = ['corduroy shorts - chocolate','distressed jean - vintage indigo'];
var hoodies = ['mixed media trucker jacket - bleached'];
var accessories = ['striped mascot socks - black/golden', 'mascto skate deck - iceberg roses', 'drew house space sticker sheet'];


// Seleccionando una catergoria desde el <select>
selected = document.getElementById('selectFild');

// Necesito mostrar mis categorias dependiendo cual seleccione el usuario
selected.addEventListener("click", function(){
  selected = this.value;
  console.log(selected);
  
  const productosColeccion = document.getElementById('products');
  
  if (selected == shirts){
    productosColeccion.innerHTML = shirts;
  }
  else{
    console.log('Sorry :(')
  }
});