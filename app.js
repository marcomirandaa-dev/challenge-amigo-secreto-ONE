let ListaDeAmigos = [];

function adicionarAmigo(){
    let amigo = document.querySelector('input').value;
    if (amigo == ''){
        alert("Por favor, insira um nome.");
    } else{
        ListaDeAmigos.push(amigo);
        document.querySelector('input').value = '';
    }
}