window.onload = function() {
  if (localStorage.getItem('datosUsuario') != null){
    console.log('Este e-mail ya existe :)');
    var datosUsuario = localStorage.getItem('datosUsuario');
     
    var nombreUsuario = datosUsuario.split('@')[0]; 
    document.getElementById('name').innerText = nombreUsuario;
    console.log(nombreUsuario);
  }
  else{
  // Modal de bienvenida
  setTimeout(function() {
  document.getElementById('welcome-modal').style.display='flex';
  }, 600);
}

const enviarUsuario = document.getElementById('enviar');

enviarUsuario.addEventListener("click", function(event){
  event.preventDefault()
  datosUsuario = document.getElementById('email').value;
  document.getElementById('welcome-modal').style.display='none';
  localStorage.setItem('datosUsuario', datosUsuario)

  //Split para obtener el nombre sin arroba
  var nombreUsuario = datosUsuario.split('@')[0]; 
  document.getElementById('name').innerText = nombreUsuario;
  console.log(nombreUsuario);
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