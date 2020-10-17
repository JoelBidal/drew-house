// Busca el producto elegido en Local Storage para seguidamente mostrarlo en pantalla
const product = JSON.parse(localStorage.getItem('product'));
(function(obj){
  let productDetail = document.getElementById('product-detail')
  // Imprimo el producto
  return productDetail.innerHTML = 
  `
    <div class="box-image-product-form">
        <img class="img-selected" src="${obj.imagen}" alt="${obj.nombre}">
    </div>
    <div class="detail">
        <h2>${obj.nombre}</h2>
        <span id="price">$${obj.precio},00</span>
        <h3>purchasing information</h3>
        <ul>
            <li>1 vol</li>
            <li>XL</li>
            <li>white</li>
        </ul>
    </div> 
  `
})(product)


// Imprimir número en la tarjeta de crédito 
function maxlengthNumber (obj){
  if (obj.value.length > obj.maxlength){
    obj.value = obj.value.slice(0, obj.maxlength);
  }
  console.log(obj.value);
  document.getElementById('card-number').innerText = obj.value;
}

// Imprimir nombre en la tarjeta de crédito 
function Name (obj2){
  if (obj2.value.length > obj2.name){
    obj2.value = obj2.value.slice(0, obj2.name);
  }
  console.log(obj2.value)
  document.getElementById('card-name').innerText = obj2.value;
}

// Imprimir fecha en la tarjeta de crédito 
function Date (obj3){
  if (obj3.value.length > obj3.date){
    obj3.value = obj3.value.slice(0, obj3.date);
  }
  console.log(obj3.value)
  document.getElementById('expire-date').innerText = obj3.value;
}

// Llamo a los campos y elementos que voy a manipular
securityCode = document.getElementById("security")
campos = document.getElementById('medium');
cardFront = document.getElementById("card-front");
cardBack = document.getElementById("card-back");

// Escucho el campo "codigo de seguridad" del formulario
securityCode.addEventListener("click", function(){
  cardFront.style.display='none';
  cardBack.style.display='flex';
})

// Escucho los demás campos del formulario que corresponden al frente de la tarjeta
campos.addEventListener("click", function(){
  cardFront.style.display='block';
  cardBack.style.display='none';
})

// Imprimir codigo en la tarjeta de crédito 
function Code (obj4){
  if (obj4.value.length > obj4.code){
    obj4.value = obj4.value.slice(0, obj4.code);
  }
  console.log(obj4.value)
  document.getElementById('security-code').innerText = obj4.value;
}

// Boton comprar ahora
const btnBuyNow = document.getElementById('buyNow')

// Abrir carrito
$("#box-cart").click(function() {
  $("#cart").toggle();
});
  // Cerrar carrito
$("#continue").click(function() {
  $("#cart").toggle(300);
});

// Abro el modal de felicitaciones por la compra e imprimo el nombre del usuario
btnBuyNow.addEventListener("click", function(e){
  e.preventDefault();
  document.getElementById('congrat-modal').style.display='flex';
  var datosUsuario = localStorage.getItem('datosUsuario');
  var nombreUsuario = datosUsuario.split('@')[0]; 
  document.getElementById('name').innerText = nombreUsuario;
})