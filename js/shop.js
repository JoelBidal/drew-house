// Datos con los productos de la tienda
var productosJSON = `[
  {"nombre":"secret ss tee -white", "precio":48.00, "imagen":"../assets/img/clothes/00.jpg", "categoria": "shirts"},
  {"nombre":"corduroy ss shirt - chocolate", "precio":148.00, "imagen":"../assets/img/clothes/01.jpg", "categoria": "shirts"},
  {"nombre":"corduroy shorts - chocolate", "precio":138.00, "imagen":"../assets/img/clothes/02.jpg", "categoria": "jeans"},
  {"nombre":"striped mascot socks - black/golden", "precio":20.00, "imagen":"../assets/img/clothes/03.jpg", "categoria": "accessories"},
  {"nombre":"distressed jean - vintage indigo", "precio":278.00, "imagen":"../assets/img/clothes/04.jpg", "categoria": "jeans"},
  {"nombre":"mascot skate deck - iceberg roses", "precio":58.00, "imagen":"../assets/img/clothes/05.jpg", "categoria": "accessories"},
  {"nombre":"mixed media trucker jacket - bleached", "precio":448.00, "imagen":"../assets/img/clothes/06.jpg", "categoria": "hoodies"},
  {"nombre":"drew house space sticker sheet", "precio":10.00, "imagen":"../assets/img/clothes/07.jpg", "categoria": "accessories"},
  {"nombre":"dinodrew skate deck - burnt oronge", "precio":58.00, "imagen":"../assets/img/clothes/08.jpg", "categoria": "accessories"}
]`;

class producto {
  constructor(nombre, precio, imagen, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.categoria = categoria;
  }
}
  
var productos;

window.onload = () => {
  let datosJSON = JSON.parse(productosJSON);
  productos = datosJSON.map((object) => {
    return new producto(object.nombre, object.precio, object.imagen, object.categoria);
  });
  
  const sortBy = document.getElementById('sortBy');
  const selected = document.getElementById('selectFild');

  const productosColeccion = document.getElementById('products');
  
  productos.forEach((producto) => {
    productosColeccion.innerHTML += crearProducto(producto);
  });

  sortBy.addEventListener('change', event => {
  event.preventDefault();
    
  let resultadoFiltro = selected.value;
  console.log(resultadoFiltro)
  let productosElegidos = productos.filter(producto =>{
    return producto.categoria.toLowerCase().includes(resultadoFiltro.toLowerCase)
  })

  productosColeccion.innerHTML = '';
  productosElegidos.forEach(producto => {productosColeccion.innerHTML += crearProducto(producto);})
  console.log(productosElegidos)
  })
};

// Agregando los productos al HTML
function crearProducto(producto) {
  return `<div class="product-00 unity">
  <a href="../views/product.html"><img src="${producto.imagen}" alt="short"></a>
  <h2 class="name-product">${producto.nombre}</h2>
  <span class="price-product">$${producto.precio}.00</span>
  </div>`;
}