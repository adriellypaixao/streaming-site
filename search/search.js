
const filmes = new Filmes();
const arrayFilmes = filmes.retornarFilmes();

var value = "";

document.getElementById('input-pesquisar').addEventListener('input', function() {
    var inputValue = this.value; // Captura o valor do input
    
    document.getElementById('result-bar').innerText = inputValue; // Atualiza o texto do resultado
});

