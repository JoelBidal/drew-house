// Modal de bienvenida
setTimeout(function() {
  document.getElementById('welcome-modal').style.display='flex';
}, 600);


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
