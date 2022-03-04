let usuario;
let peso;
let actividad;
let calculo;
let parrafo;
let parrafoDos;
let identificador;
let boton;
let user;
let ternario;
let ternarioDos;
calculo = document.getElementById("boton");
let cambioPag = document.getElementById("cambio");

calculo.onclick = function () {
  boton = document.getElementById("boton");
  usuario = document.getElementById("nombre").value;
  localStorage.setItem("usuario", usuario);
  user = localStorage.getItem("usuario");
  ternarioDos = usuario == "" ? alert("Introduce usuario") : user;
  parrafo = document.getElementById("texto");
  parrafoDos = document.getElementById("textoDos");
  peso = document.getElementById("peso").value;
  actividad = document.getElementsByName("activo");
  for (deporte of actividad) {
    if (deporte.checked == true) {
      identificador = deporte.id;
    }
  }
  ternario = peso > 50 ? elegirPeso() : elegirPesoDos();
  resultado = ternario;
  boton.classList.toggle("active");

  siguente();
};

function elegirPeso() {
  switch (identificador) {
    case "muy":
      return "290 gramos";
      break;
    case "poco":
      return "190 gramos";
      break;
    case "normal":
      return "90 gramos";
      break;
    case "nada":
      return "590 gramos";
      break;
    default:
      return " SIN DATOS";
      break;
  }
}
function elegirPesoDos() {
  switch (identificador) {
    case "muy":
      return "90 gramos";
      break;
    case "poco":
      return "80 gramos";
      break;
    case "nada":
      return "70 gramos";
      break;
    case "normal":
      return "10 gramos";
      break;
    default:
      return "SIN DATOS";
      break;
  }
}
function siguente() {
  if (user != "") {
    cambioPag.outerHTML = `<h1 class = "estiloCalculo"> HOLA  ${user.toUpperCase()}, </h1>  <p  class = "resultadoDatos"> Debes de consumir <br> ${resultado} de proteína <br> diariamente según tus <br> datos personales</p>`;
  }
}
