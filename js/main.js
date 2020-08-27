// Modal de bienvenida
setTimeout(function() {
    document.getElementById('welcome-modal').style.display='flex';
}, 1000);


// Guardando datos en LocalStorage y creando la variable nombre de usuario para el Home
var datosUsuario = {"nombre":""}

const enviarUsuario = document.getElementById('enviar');

enviarUsuario.addEventListener("click", function(event){
    event.preventDefault()
    datosUsuario.nombre = document.getElementById('nombre').value;
    document.getElementById('welcome-modal').style.display='none';
    localStorage.setItem('datosModal', JSON.stringify(datosUsuario))

    var nombreUsuario = datosUsuario.nombre.toLowerCase() 
    document.getElementById('name').innerText = nombreUsuario;
    console.log(nombreUsuario);
})

// Creando objetos
var colores = ['white', 'beige', 'black', 'red', 'blue'];
var talles = ['XS', 'S', 'M', 'L', 'XL'];

function Producto(talles, colores, stock){
    this.talles = talles;
    this.colores = colores;
    this.stock = stock;
} 

var producto1 = new Producto (talles, colores, true);
var producto2 = new Producto (talles, colores, true);
var producto3 = new Producto (talles, colores, true);
var producto4 = new Producto (talles, colores, true);
var producto5 = new Producto (talles, colores, true);
var producto6 = new Producto (talles, colores, true);
var producto7 = new Producto (talles, colores, true);
var producto8 = new Producto (talles, colores, true);
var producto9 = new Producto (talles, colores, true);

var productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9,];