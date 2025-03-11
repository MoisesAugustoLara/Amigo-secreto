document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];

    agregarAmigo = function () {
        let input = document.getElementById("amigo");
        let nombre = input.value.trim();

        if (nombre === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }
        if (amigos.includes(nombre)) {
            alert("Este nombre ya está en la lista.");
            return;
        }

        amigos.push(nombre);
        actualizarLista();
        input.value = ""; // Limpiar el campo
    };

    function actualizarLista() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpiar la lista antes de actualizar

        amigos.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }

    sortearAmigo = function () {
        if (amigos.length === 0) {
            alert("No hay nombres para sortear.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let nombreSorteado = amigos[indiceAleatorio];

        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = `<li> El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
    };
});
