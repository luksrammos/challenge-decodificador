function criptografar() {
    limparOutrosBotoes();
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let pesquisador = document.getElementById("pesquisador");

    // Verifica se o texto está vazio
    if (texto === "") {
        swal("Oooops!", "Você deve escrever um texto", "warning");
        return;
    }

     // Verifica se o texto contém apenas letras minúsculas sem acentos
     if (/^[a-z\s.,;!?\"']+$/.test(texto)) {
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

        document.getElementById("texto").value = textoCifrado;
        tituloMensagem.textContent = "Texto criptografado com sucesso!";
        paragrafo.textContent = "";
        pesquisador.src = "./image/homem-megafono.jpg";

        // Transforma o botão de criptografar em botão de limpar
        let btnCriptografar = document.querySelector(".btn-criptografar");
        btnCriptografar.textContent = "Limpar";
        btnCriptografar.classList.add("limpar-btn");
        btnCriptografar.onclick = limparTexto;
        btnCriptografar.style.backgroundColor = "red";

        // Remove a cor vermelha do botão descriptografar
        let btnDescriptografar = document.querySelector(".btn-descriptografar");
        btnDescriptografar.style.backgroundColor = "";
        
    } else {
        // Se o texto contém caracteres inválidos, exibe uma mensagem de aviso
        pesquisador.src = "./image/figura-com-lupa.jpg";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite o texto que deseja criptografar ou descriptografar";
        swal("Oooops!", "Lembre-se: O texto deve ser apenas letras minúsculas e sem acentos", "warning");

        // Ativa o botão de limpar
        let btnLimpar = document.querySelector(".btn-criptografar");
        btnLimpar.textContent = "Limpar";
        btnLimpar.classList.add("limpar-btn");
        btnLimpar.onclick = limparTexto;
        btnLimpar.style.backgroundColor = "red";

         // Remove a cor vermelha do botão descriptografar
         let btnDescriptografar = document.querySelector(".btn-descriptografar");
         btnDescriptografar.style.backgroundColor = "";
    }
}

function descriptografar() {
    limparOutrosBotoes();
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let pesquisador = document.getElementById("pesquisador");

    // Verifica se o texto está vazio
    if (texto === "") {
        swal("Oooops!", "Você deve escrever um texto", "warning");
        return;
    }

    // Verifica se o texto contém apenas letras minúsculas sem acentos
    if (/^[a-z\s.,;!?\"']+$/.test(texto)) {
    let textoDescriptografado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

        document.getElementById("texto").value = textoDescriptografado;
        tituloMensagem.textContent = "Texto descriptografado com sucesso!";
        paragrafo.textContent = "";
        pesquisador.src = "./image/figura-moderna.png";

        // Transforma o botão de descriptografar em botão de limpar
        let btnDescriptografar = document.querySelector(".btn-descriptografar");
        btnDescriptografar.textContent = "Limpar";
        btnDescriptografar.classList.add("limpar-btn");
        btnDescriptografar.onclick = limparTexto;
        btnDescriptografar.style.backgroundColor = "red"; 

        // Remove a cor vermelha do botão criptografar
        let btnCriptografar = document.querySelector(".btn-criptografar");
        btnCriptografar.style.backgroundColor = "";

    } else {
        // Se o texto contém caracteres inválidos, exibe uma mensagem de aviso
        pesquisador.src = "./image/figura-com-lupa.jpg";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite o texto que deseja criptografar ou descriptografar";
        swal("Oooops!", "Lembre-se: O texto deve ser apenas letras minúsculas e sem acentos", "warning");

         // Ativa o botão de limpar
         let btnLimpar = document.querySelector(".btn-descriptografar");
         btnLimpar.textContent = "Limpar";
         btnLimpar.classList.add("limpar-btn");
         btnLimpar.onclick = limparTexto;
         btnLimpar.style.backgroundColor = "red";

         // Remove a cor vermelha do botão criptografar
        let btnCriptografar = document.querySelector(".btn-criptografar");
        btnCriptografar.style.backgroundColor = "";
    }
}

function limparTexto() {
    document.getElementById("texto").value = "";
    document.getElementById("titulo-mensagem").textContent = "Nenhuma mensagem foi encontrada";
    document.getElementById("paragrafo").textContent = "Digite o texto que deseja criptografar ou descriptografar";
    document.getElementById("pesquisador").src = "./image/figura-com-lupa.jpg";

    // Transforma o botão de limpar de volta para criptografar ou descriptografar
    let btnCriptografar = document.querySelector(".btn-criptografar");
    btnCriptografar.textContent = "Criptografar";
    btnCriptografar.onclick = criptografar;
    btnCriptografar.style.backgroundColor = "";

    let btnDescriptografar = document.querySelector(".btn-descriptografar");
    btnDescriptografar.textContent = "Descriptografar";
    btnDescriptografar.onclick = descriptografar;
    btnDescriptografar.style.backgroundColor = ""; 
}

function limparOutrosBotoes() {
    let btnCriptografar = document.querySelector(".btn-criptografar");
    let btnDescriptografar = document.querySelector(".btn-descriptografar");

    // Se o botão de criptografar estiver no estado de "Limpar", retorna ao estado original
    if (btnCriptografar.textContent === "Limpar") {
        btnCriptografar.textContent = "Criptografar";
        btnCriptografar.onclick = criptografar;
    }

    // Se o botão de descriptografar estiver no estado de "Limpar", retorna ao estado original
    if (btnDescriptografar.textContent === "Limpar") {
        btnDescriptografar.textContent = "Descriptografar";
        btnDescriptografar.onclick = descriptografar;
    }
}