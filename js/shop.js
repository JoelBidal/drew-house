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

  sortBy.addEventListener('change', event => {
  event.preventDefault();
    
  let resultadoFiltro = selected.value;
  console.log(resultadoFiltro)
  let productosElegidos = productos.filter(producto =>{
    return producto.categoria.toLowerCase().includes(resultadoFiltro.toLowerCase())
  })

  productosColeccion.innerHTML = '';
  productosElegidos.forEach(producto => {productosColeccion.innerHTML += crearProducto(producto);})
  console.log(productosElegidos)
  })
};

// Agregando los productos al HTML
function crearProducto(producto) {
  return `<div class="product-00 unity">
  <a href="../views/product.html"><img class="img-producto" id="${producto.id}" src="${producto.imagen}" alt="short"></a>
  <h2 class="name-product">${producto.nombre}</h2>
  <span class="price-product">$${producto.precio}.00</span>
  </div>`;
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

// AJAX
$('#show').click( function(e) { 
  e.preventDefault()
  $('#show').toggle()
  $('#team').css("display", "flex")
    $.ajax({
      url: 'https://randomuser.me/api/?results=8',
      dataType: 'json',
      success: function(data) {
      // console.log(data);
      data.results.forEach(element => {
        $('#team').append(`
        <div class="box-users">
          <img src="${element.picture.large}" alt="User image"> 
          <div>
            <h4 class="name-user">${element.name.first}</h4>
            <p class="location-user">${element.location.country}</p>
          </div>
        </div>
        `)
      });
    }
  });
})
