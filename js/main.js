// Modal de bienvenida
var nombre = prompt("Hi, type your name please! 😊")
alert("welcome home " + nombre + "!");


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

var productos = [producto1, producto2, producto3];