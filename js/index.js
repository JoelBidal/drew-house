// Una vez cargado el sitio verifico si en Local Storage existe el e-mail del usuario
window.onload = function() {
  if (localStorage.getItem('datosUsuario') != null){
    // console.log('Este e-mail ya existe :)');
    var datosUsuario = localStorage.getItem('datosUsuario');
     
    var nombreUsuario = datosUsuario.split('@')[0]; 
    document.getElementById('name').innerText = nombreUsuario;
    // console.log(nombreUsuario);
  }
  else{
  // Muestro el modal de bienvenida en el caso de que el usuario no exista
  setTimeout(function() {
  document.getElementById('welcome-modal').style.display='flex';
  }, 600);
}

const enviarUsuario = document.getElementById('enviar');
// Guardo el nombre del usuario en Local Storage y lo imprimo en la pantalla como mensaje de bienvenida
enviarUsuario.addEventListener("click", function(event){
  event.preventDefault()
  datosUsuario = document.getElementById('email').value;
  document.getElementById('welcome-modal').style.display='none';
  localStorage.setItem('datosUsuario', datosUsuario)

  //Split para obtener el nombre sin arroba
  var nombreUsuario = datosUsuario.split('@')[0]; 
  document.getElementById('name').innerText = nombreUsuario;
  // console.log(nombreUsuario);
})
};

// Abrir carrito
$("#box-cart").click(function() {
  $("#cart").toggle();
});
  // Cerrar carrito
$("#continue").click(function() {
  $("#cart").toggle(300);
});