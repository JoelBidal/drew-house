// Modal de bienvenida
setTimeout(function() {
  document.getElementById('welcome-modal').style.display='flex';
}, 600);

window.onload = function() {
  var datosUsuario;
  if (localStorage.getItem(datosUsuario) == true){
    alert('existe')
  }
  
const enviarUsuario = document.getElementById('enviar');

enviarUsuario.addEventListener("click", function(event){
  event.preventDefault()
  datosUsuario = document.getElementById('nombre').value;
  document.getElementById('welcome-modal').style.display='none';
  localStorage.setItem('datosUsuario', datosUsuario)

  var nombreUsuario = datosUsuario.toLowerCase() 
  document.getElementById('name').innerText = nombreUsuario;
  console.log(nombreUsuario);
})
};



// window.onload = function() {
//   if('datosModal' in localStorage){
//   document.getElementById('welcome-modal').style.display='none';
//   } else {
//     document.getElementById('welcome-modal').style.display='flex';
//   }

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
// };