let ListaDeAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if (amigo == ''){
        alert("Por favor, insira um nome.");
    } else{
        ListaDeAmigos.push(amigo);
        document.querySelector('input').value = '';
    }
    atualizarListaDeAmigos()
}

function atualizarListaDeAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (i = 0; i<ListaDeAmigos.length; i++){

        let li = document.createElement('li');
        li.textContent = ListaDeAmigos[i];
        lista.appendChild(li);
    }
}