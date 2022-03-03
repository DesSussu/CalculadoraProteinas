// pagina dos
let proteinasPro = document.getElementsByName("comida");
let nombreElemento;

class productos {
  constructor(nombre, proteinas) {
    this.nombre = nombre;
    this.proteinas = parseInt(proteinas);
  }
}

const alimentos = [];
alimentos.push(new productos("pollo", "8"));
alimentos.push(new productos("pulpo", "10"));
alimentos.push(new productos("gamba", "7"));
alimentos.push(new productos("ternera", "14"));
alimentos.push(new productos("atún", "15"));
alimentos.push(new productos("salchicha", "4"));
alimentos.push(new productos("pescado", "11"));
alimentos.push(new productos("salmón", "13"));
alimentos.push(new productos("jamón", "12"));
alimentos.push(new productos("huevo", "20"));

for (elementos of proteinasPro) {
  document.getElementById(elementos.id).onclick = function () {
    nombreElemento = this.id;
    for (producto of alimentos) {
      if (this.id == producto.nombre) {
        console.log(producto.proteinas);
      }
    }
  };
}
