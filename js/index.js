import { renderAssuntos, renderizarEquipe } from './visual.js';
const copy = document.querySelector("#copy");
const selectEl = document.querySelector("#assunto");
const dataAtual = new Date();
copy.innerText = copy.innerText+" "+dataAtual.getFullYear();

async function converterJson(arquivo) {
    const data = await fetch(arquivo);
    const finalObj = await data.json();
    renderAssuntos(selectEl, finalObj.assuntos);
    renderizarEquipe(finalObj.integrantes);
}
converterJson('./js/info.json');





// Executa a função