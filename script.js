let greyBtn = document.getElementById('cinza');
let redBtn = document.getElementById('vermelho');
let greenBtn = document.getElementById('verde');
let bike = document.getElementById('bike');

greyBtn.onclick = function() {
    bike.style.backgroundImage = "url(Imagem/motocinzaP.png)";
};

redBtn.onclick = function() {
    bike.style.backgroundImage = "url(Imagem/motovermelha.png)";
};

greenBtn.onclick = function() {
    bike.style.backgroundImage = "url(Imagem/motobrancaP.png)";
};
