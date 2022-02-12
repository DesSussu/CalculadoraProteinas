/*let nombreIngresado;
let edad;

do {
  nombreIngresado = prompt("Ingresar nombre");
  edad = prompt("Cual es tu edad?");

  if (nombreIngresado != "" || edad != "") {
    alert("Hola " + nombreIngresado);
  } else {
    alert("Error: Ingresar nombre y edad");
  }
} while (nombreIngresado == "" || edad == "");

let peso = prompt("Indica tu peso");
let actividad = prompt("Eres: muy activo, activo, poco activo o sedentario");

if (peso < 50) {
  switch (actividad) {
    case "muy activo":
      alert("Tu consumo de proteinas diarias debe ser 90g");
      break;
    case "activo":
      alert("Tu consumo de proteinas diarias debe ser 90g");
      break;
    case "poco activo":
      alert("Tu consumo de proteinas diarias debe ser 90g");
      break;
    case "sedentario":
      alert("Tu consumo de proteinas diarias debe ser 90g ");
      break;
    default:
      alert("Rellena los campos de peso y actividad");
      break;
  }
} else if (peso >= 50) {
  switch (actividad) {
    case "muy activo":
      alert("Tu consumo de proteinas diarias debe ser 40g");
      break;
    case "activo":
      alert("Tu consumo de proteinas diarias debe ser 40g");
      break;
    case "poco activo":
      alert("Tu consumo de proteinas diarias debe ser 40g");
      break;
    case "sedentario":
      alert("Tu consumo de proteinas diarias debe ser 40g ");
      break;
    default:
      alert("Rellena los campos de peso y actividad");
      break;
  }
} else {
  alert("Ingresa los campos correctamente");
}
*/
let totalProteinas = 0;
let gramos = 0;

class carnes {
  constructor(nombre, proteinas) {
    this.nombre = nombre.toUpperCase();
    this.proteinas = parseInt(proteinas);
  }
}

const alimentos = [];
alimentos.push(new carnes("pollo", "27"));
alimentos.push(new carnes("ternera", "10"));
alimentos.push(new carnes("cerdo", "7"));

let continuar = true;
do {
  producto = prompt("elige entre pollo, ternera y cerdo");

  gramos = parseInt(prompt("cuántos gramos?"));
  if (producto == 0 || producto == "") {
    continuar = false;
  }
  for (const carnes of alimentos) {
    if (carnes.nombre == producto.toUpperCase()) {
      let calcularProteinas = (carnes.proteinas / 100) * gramos;
      alert(calcularProteinas + " " + "gramos");
    }
  }
} while (continuar);
