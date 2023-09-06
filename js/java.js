function descobrirCDZ(){

    const texto = document.querySelector("h1");
    const data = document.querySelector('#data').value;
    const imagem = document.querySelector("img");
    const texto2 = document.querySelector ("p");
    
    if (data > '2023/03/21' && data < '2023/04/20') {
        texto.innerHTML = "Áries: Mu";
        texto2.innerHTML = " Elegante e tem personalidade pacífica. É o único capaz de restaurar armaduras."
        imagem.setAttribute("src","img/aries.png");
        imagem.setAttribute("width","700px");
    }
    else if (data > '2023/04/21' && data < '2023/05/20') {
        texto.innerHTML = "Touro: Aldebaran";
        texto2.innerHTML = "Possui físico admirável que não sofre impacto nenhum dos oponentes. Assim como Aeolia, concentra os golpes com os punhos."
        imagem.setAttribute("src","img/touro.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '2023/05/21' && data < '2023/06/20') {
        texto.innerHTML = "Gêmeos: Saga";
        texto2.innerHTML = " Possui duas personalidades, do bem e do mal. Tem experiências de lutas contínuas com seu lado mal instalado em seu corpo."
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '2023/06/21' && data < '2023/07/21') {
        texto.innerHTML = "Câncer: Máscara da Morte";
        texto2.innerHTML = "Tem como valor 'a definição da justiça muda com o passar do tempo' e já ajudou o Papa (Saga) que se converteu ao mal. Talvez o seu modo de viver possa ser descrito como humano dentre os Cavaleiros de Ouro."
        imagem.setAttribute("src","img/cancer.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '2023/07/22' && data < '2023/08/22') {
        texto.innerHTML = "Leão: Aiolia";
        texto2.innerHTML = "Tem a personalidade mais correta entre os Cavaleiros de Ouro e não gosta de trapaças. É um cavaleiro de honra que desfere abertamente golpes do tipo 'relâmpago' na velocidade da luz."
        imagem.setAttribute("src","img/leao.png");
        imagem.setAttribute("width","800px");
    }

    else if (data > '2023/08/23' && data < '2023/09/22') {
        texto.innerHTML = "Virgem: Shaka";
        texto2.innerHTML = "É o mais sensato entre os Cavaleiros de Ouro. Não se abala com qualquer coisa e avalia tudo com muita calma. Não é cego mas mantem os olhos fechados e se priva da visão para elevar seu cosmo ao extremo."
        imagem.setAttribute("src","img/virgem.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '2023/09/23' && data < '2023/10/22') {
        texto.innerHTML = "Libra: Dohko";
        texto2.innerHTML = "Originalmente é um Cavaleiro que luta com seus próprios punhos mas a armadura de libra é adaptada com equipamentos de espada e de lança."
        imagem.setAttribute("src","img/libra.png");
        imagem.setAttribute("width","500px");
    }

    else if (data > '2023/10/23' && data < '2023/11/21') {
        texto.innerHTML = "Escorpião: Milo";
        texto2.innerHTML = " É espontâneo e tem forte espírito de justiça. Tem muito orgulho por ser um Cavaleiro de Ouro."
        imagem.setAttribute("src","img/escorpiao.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '2023/11/22' && data < '2023/12/21') {
        texto.innerHTML = "Sagitário: Aiolos";
        texto2.innerHTML = "É um cavaleiro exemplar que dedicou sua vida na grande missão de proteger Atena mesmo desprezado pelos que o rodeavam. "
        imagem.setAttribute("src","img/sagitario.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '2023/12/22' && data < '2023/01/20') {
        texto.innerHTML = "Capricórnio: Shura";
        texto2.innerHTML = "Originalmente tinha grande lealdade à Deusa e no episódio de Hades, voltou à ativa lutando sob comando de Hades ao mesmo tempo em que, nas batalhas ao lados dos companheiros, deu a vida como Cavaleiro de Ouro de Atena."
        imagem.setAttribute("src","img/capricornio.png");
        imagem.setAttribute("width","700px");
    }

    else if (data > '2023/01/21' && data < '2023/02/19') {
        texto.innerHTML = "Aquário: Camus";
        texto2.innerHTML = "Por trás de sua aparente frieza, esconde uma alma quente. 'Em vez de julgar o bem e o mal, continua a lutar sem perder o foco.'"
        imagem.setAttribute("src","img/aquario.png");
        imagem.setAttribute("width","700px");
    }

    else if (data >'2023/02/20' && data < '2023/03/20') {
        texto.innerHTML = "Peixes: Afrodite";
        texto2.innerHTML = "É o mais belo de todas as 88 constelações e acredita fielmente que 'a força é a justiça'. Utiliza as características da rosa pelo Cosmo e aplica os golpes. "
        imagem.setAttribute("src","img/peixes.png");
        imagem.setAttribute("width","700px");
    }

    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","550px");
    }

}