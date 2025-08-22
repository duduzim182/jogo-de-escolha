function escolha(opcao){
    let titulo = document.getElementById("title");
    let imagem = document.getElementById("scene-img");
    let historia = document.getElementById("story");
    let botoes = document.querySelectorAll(".choice");
    if (opcao === 'acordo') {
        titulo.innerText = " Aliança com a China";
        imagem.src = "maos.png";
        historia.innerText = "voce se alia a china";
        botoes[0].innerText = "mandar um presente ao pais.";
        botoes[0].setAttribute("onclick", "escolha('acordo2')");
        botoes[1].innerText = " trair e roubar 127 bilhoens de dolares!";
        botoes[1].setAttribute("onclick", "escolha('trair')");
    }
    else if (opcao === "bomba"){
         titulo.innerText = " Bomba na China";
        imagem.src = "bomba.png";
        historia.innerText = "A Bomba falhou";
        botoes[0].innerText = " jogar a bomba novamente";
        botoes[0].setAttribute("onclick", "escolha('bomba2')");
        botoes[1].innerText = "deixar para la.";
        botoes[1].setAttribute("onclick", "escolha('deixar')");
    }
    else if (opcao === "acordo2"){
        titulo.innerText = "Acordo feito"
        imagem.src = "acordo.png"
        historia.innerText =" vocês se tornam as 2 maiores potências mundiais, e dominam o MUNDO!"
        botoes.forEach(botao => botao.style.display = "none");
    }
        else if (opcao === "trair"){
        titulo.innerText = "trair"
        imagem.src = "paisagrm.png"
        historia.innerText ="o presidente da china está furioso! E diz “ou você me devolve ou haverá consequências severas.!"
        botoes.forEach(botao => botao.style.display = "none");
    }
      else if (opcao === "bomba2"){
        titulo.innerText = "voce matou todos"
        imagem.src = "bandeira e paisagem.png"
        historia.innerText ="Voce matou um monte de pessoas inocentes e começou uma guerra!"
        botoes.forEach(botao => botao.style.display = "none");
    }
          else if (opcao === "deixar"){
        titulo.innerText = "Voce salvou todos"
        imagem.src = "presidente.jpg"
        historia.innerText ="A china se alia a voce de volta e juntos voces tornam o mundo um lugar melhor"
        botoes.forEach(botao => botao.style.display = "none");
    }
}