function buscar(){
    let section = document.getElementById('resultados-pesquisa') // Obtém a seção HTML onde os resultados serão exibidos

 // Inicializa uma string vazia para armazenar o HTML dos resultados

    let campoPesquisa = document.getElementById('campo-pesquisa').value;
    // ,value -> o texto da pesquisa
    
    if (campoPesquisa == ''){
        section.innerHTML = "<p>Digite o nome de um jogo de SNES!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = '';
    let titulo = '';
    let descricao = '';
    let tags = '';

    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
        <div class="item-resultado">
        
            <h2>
                <a href='#' target="_blank">${dado.titulo}</a>
            </h2>
        
            <p class="descricao-meta">${dado.descricao}</p>
        
            <a href=${dado.link} target="_blank">Página Oficial</a>
    
            </div>
        `
        }

        if (!resultados){
            resultados = "<p>Jogo não encontrado!</p>"
        }

        // Constrói o HTML de um item de resultado
        
    }
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados
}



