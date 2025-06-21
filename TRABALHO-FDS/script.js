function mostrarMensagem() {
    const div = document.getElementById("Mensagem");

    div.innerHTML = "🌟 Você é capaz de transformar qualquer caminho em luz. Nunca subestime o seu brilho! 🌻";
    div.style.marginTop = "20px";
    div.style.padding = "10px";
    div.style.backgroundColor = "#fff8dc";
    div.style.border = "2px dashed #ff8c00";
    div.style.fontWeight = "bold";
    div.style.fontSize = "18px";
    div.style.transition = "all 0.5s ease-in-out";

    // Surpresa extra: muda o fundo da página
    document.body.style.backgroundColor = "#ffe4e1";
}