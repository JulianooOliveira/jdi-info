
// Função para abrir o popup
document.getElementById("loginButton").onclick = function() {
    document.getElementById("loginPopup").style.display = "flex";
};

// Função para fechar o popup
function closePopup() {
    document.getElementById("loginPopup").style.display = "none";
}

// Fechar o popup ao clicar fora dele
window.onclick = function(event) {
    var popup = document.getElementById("loginPopup");
    if (event.target == popup) {
        popup.style.display = "none";
    }
};

