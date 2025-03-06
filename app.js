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

    let amigosSorteo = [...amigos];
    let resultado = [];

    while (amigosSorteo.length > 1) {
        let indiceA = Math.floor(Math.random() * amigosSorteo.length);
        let amigoA = amigosSorteo.splice(indiceA, 1)[0];
        let indiceB = Math.floor(Math.random() * amigosSorteo.length);
        let amigoB = amigosSorteo.splice(indiceB, 1)[0];
        resultado.push(`${amigoA} → ${amigoB}`);
    }

    if (amigosSorteo.length === 1) {
        resultado.push(`${amigosSorteo[0]} → ${amigos[0]}`);
    }

    mostrarResultado(resultado);
}

function mostrarResultado(parejas) {
    const lista = document.getElementById("resultado");
    lista.innerHTML = "";
    parejas.forEach((pareja) => {
        const li = document.createElement("li");
        li.textContent = pareja;
        lista.appendChild(li);
    });
}
