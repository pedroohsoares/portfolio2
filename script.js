// --------- Revela seções ao rolar ---------
function revelarAoScroll() {
    const elementos = document.querySelectorAll("section");

    for (let el of elementos) {
        const topoElemento = el.getBoundingClientRect().top;
        const alturaJanela = window.innerHeight;

        if (topoElemento < alturaJanela - 100) {
            el.classList.add("ativo");
        } else {
            el.classList.remove("ativo");
        }
    }
}

window.addEventListener("scroll", revelarAoScroll);
revelarAoScroll(); // mostra elementos visíveis ao carregar

// --------- Efeito de digitação ---------
const texto = "Técnico em Marketing";
const elemento = document.getElementById("typing");
let i = 0;

function digitar() {
    if (i < texto.length) {
        elemento.innerHTML += texto.charAt(i);
        i++;
        setTimeout(digitar, 100); 
    }
}
digitar();

function alternarTema() {
    document.body.classList.toggle("dark-mode");
}
