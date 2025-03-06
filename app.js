let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Debe introducir 1 nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indice];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es ${amigoSecreto}</li>`;
}

