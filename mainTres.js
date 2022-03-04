// pagina dos
let proteinasPro = document.getElementsByName("comida");
let nombreElemento;
let resultado;
let nombre;
let valor;
let nuevo;
let cantidad;

class productos {
  constructor(nombre, proteinas) {
    this.nombre = nombre;
    this.proteinas = parseInt(proteinas);
  }
}

const carnes = [];
carnes.push(new productos("pollo", "8"));
carnes.push(new productos("ternera", "14"));
carnes.push(new productos("salchicha", "4"));
carnes.push(new productos("jamón", "12"));
carnes.push(new productos("huevo", "20"));

const pescados = [];
pescados.push(new productos("pulpo", "10"));
pescados.push(new productos("gamba", "7"));
pescados.push(new productos("atún", "15"));
pescados.push(new productos("pescado", "11"));
pescados.push(new productos("salmón", "13"));

const alimentos = [...carnes, ...pescados];

for (elementos of proteinasPro) {
  document.getElementById(elementos.id).onclick = function () {
    nombreElemento = this.id;

    for (producto of alimentos) {
      if (this.id == producto.nombre) {
        nombre = localStorage.setItem("nombre", producto.nombre);
        valor = localStorage.setItem("valor", producto.proteinas);
        nuevo = document.getElementById(nombreElemento);
        nuevo.outerHTML = ` <form action="">
        <input  id="gramo"  type="text"  placeholder="0g"/>
      </form>`;
        document.getElementById("cesta").onclick = function () {
          cantidad = document.getElementById("gramo").value;
          console.log((producto.proteinas / 100) * cantidad);
        };
      }
    }
  };
}
