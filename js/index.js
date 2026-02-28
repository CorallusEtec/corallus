
import { renderAssuntos, renderizarEquipe, Carrosel } from './visual.js';
const dataAtual = new Date();
const copy = document.querySelector("#copy");
copy.innerText = copy.innerText+" "+dataAtual.getFullYear();


const carroselBox = document.querySelector('#box');
const selectEl = document.querySelector("#assunto");
const radioButtons = document.getElementsByName('cardLevel');

if (copy) {
    copy.innerText = copy.innerText + " " + dataAtual.getFullYear();
}

// 2. Seleção de elementos do Carrossel
const btnProx = document.querySelector('#btnProx');
const btnPrev = document.querySelector('#btnPrev');

async function converterJson(arquivo) {
    const response = await fetch(arquivo);
    if (response.ok) {
        return await response.json();
    }
    return null;
}


const jsonConvertido = await converterJson('./js/info.json');

/* Funções de renderização de componentes no HTML */

/* USAR NO NOVO CARROSEL DE PROJETOS */
const carrosel = new Carrosel(carroselBox, jsonConvertido.projetos, -1, radioButtons);

btnProx.addEventListener('click', () =>carrosel.clickBtnProx());
btnPrev.addEventListener('click', ()=>carrosel.clickBtnPrev());

/* USAR NO FORMULÁRIO DE FALE CONOSCO */
renderAssuntos(selectEl, jsonConvertido.assuntos);
if (jsonConvertido) {
  
    if (selectEl) {
        renderAssuntos(selectEl, jsonConvertido.assuntos);
    }
    renderizarEquipe(jsonConvertido.integrantes);
}