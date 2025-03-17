let listaAmigos = [];

// Funcion para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let amigo = input.value.trim();
    if (amigo !== "") {
        listaAmigos.push(amigo);
        // Mostramos amigo agregado
        imprimeAmigo();
        input.value = "";
    }
}

function imprimeAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        // Obtenemos Nombre del amigo
        let amigo = listaAmigos[i];
        let li = document.createElement('li');
        // Asignamos el nombre al contenido del listaDeAmigos
        li.innerText = amigo;
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    // Indice aleatorio
    let indice = Math.floor((new Date().getTime() * Math.random()) % listaAmigos.length);
    let amigoGanador = listaAmigos[indice];
    // Mostramos el resultado en el elemento con id "resultado"
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "<li>El amigo sorteado es: " + amigoGanador + "</li>";
    
    return amigoGanador;
}
