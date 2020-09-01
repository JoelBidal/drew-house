// Modal de bienvenida
// setTimeout(function() {
//   document.getElementById('welcome-modal').style.display='flex';
// }, 1000);


// // Guardando datos en LocalStorage y creando la variable nombre de usuario para el Home
// var datosUsuario = {"nombre":""}

// const enviarUsuario = document.getElementById('enviar');

// enviarUsuario.addEventListener("click", function(event){
//   event.preventDefault()
//   datosUsuario.nombre = document.getElementById('nombre').value;
//   document.getElementById('welcome-modal').style.display='none';
//   localStorage.setItem('datosModal', JSON.stringify(datosUsuario))

//   var nombreUsuario = datosUsuario.nombre.toLowerCase() 
//   document.getElementById('name').innerText = nombreUsuario;
//   console.log(nombreUsuario);
// })


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

// Botón en product.html para agregar al carrito
let button = document.querySelector('#addCart');

button.addEventListener("click", () => {
  let counter = document.getElementById('cart-price');
  let currentValue = counter.innerHTML;
  counter.innerHTML = parseInt(currentValue) + 1;
});
