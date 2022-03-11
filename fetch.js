const tabla = document.querySelector("#lista-alimentos tbody");

function cargarUsuarios() {
  fetch("talimentos.json")
    .then((respuesta) => respuesta.json())
    .then((usuarios) => {
      usuarios.forEach((usuario) => {
        const row = document.createElement("tr");
        row.innerHTML += `
                    <td>${usuario.alimento}</td>
                    <td>${usuario.medida}</td>
                    <td>${usuario.equivalencia}</td>
                    <td>${usuario.calorias}</td>
                `;
        tabla.appendChild(row);
      });
    })
    .catch((error) => console.log("Hubo un error : " + error.message));
}

cargarUsuarios();
