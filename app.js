let amigos = [];

function agregarAmigo() {
    let amigoAgregado = document.getElementById('amigo').value.trim();

    if (amigoAgregado === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(amigoAgregado.toLowerCase())) {
        alert("Este nombre ya está en la lista.");
        return;
    } 
    amigos.push(amigoAgregado);
    actualizarLista();
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector("#amigo").value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigoAgregado, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigoAgregado}`; // Agrega el número antes del nombre
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li> El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}