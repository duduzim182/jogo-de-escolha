function escolha(opcao){
    let titulo = document.getElementById("title");
    let imagem = document.getElementById("scene-img")
    let historia = document.getElementById("story")
    let botoes = document.querySelectorAll(".choice")
    if (opcao === 'acordo') {
    titulo.innerText = " Aliança com a China"
    imagem.src = "maos.png"
    historia.innerText = "voce se alia a china"
    botoes[0].innerText = "mandar um presente ao pais."
     botoes[0].setAttribute("onclick", "escolha('acordo")
     botoes[1].innerText = " trair e roubar 127 bilhoens de dolares!"
     botoes[1].setAttribute("onclick", "escolha('trair")
    }
}