let usuario;
let peso;
let actividad;
let calculo;
let parrafo;
let parrafoDos;
let identificador;
calculo = document.getElementById("boton");

calculo.onclick = function () {
  usuario = document.getElementById("nombre").value;
  parrafo = document.getElementById("texto");
  parrafoDos = document.getElementById("textoDos");
  peso = document.getElementById("peso").value;
  actividad = document.getElementsByName("activo");
  for (deporte of actividad) {
    if (deporte.checked == true) {
      console.log(deporte.id);
      identificador = deporte.id;
    }
  }
  resultado = elegirPeso();
  parrafo.innerText = "Hola " + usuario;
  parrafoDos.innerText = resultado;
};

function elegirPeso() {
  if (peso < 50) {
    switch (identificador) {
      case "muy":
        return "Tu consumo de proteinas diarias debe ser 290g";
        break;
      case "poco":
        return "Tu consumo de proteinas diarias debe ser 190g";
        break;
      case "normal":
        return "Tu consumo de proteinas diarias debe ser 090g";
        break;
      case "nada":
        return "Tu consumo de proteinas diarias debe ser 590g";
        break;
      default:
        return "Tu consumo de proteinas diarias debe ser 690g";
        break;
    }
  } else if (peso >= 50) {
    switch (identificador) {
      case "muy":
        return "Tu consumo de proteinas diarias debe ser 90g";
        break;
      case "poco":
        return "Tu consumo de proteinas diarias debe ser 80g";
        break;
      case "nada":
        return "Tu consumo de proteinas diarias debe ser 70g";
        break;
      case "normal":
        return "Tu consumo de proteinas diarias debe ser 10g";
        break;
      default:
        return "Tu consumo de proteinas diarias debe ser 90g";
        break;
    }
  }
}
