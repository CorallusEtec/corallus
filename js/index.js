
import { renderAssuntos, renderizarEquipe, Carrosel } from './visual.js';

const copy = document.querySelector("#copy");
const selectEl = document.querySelector("#assunto");
const dataAtual = new Date();

if (copy) {
    copy.innerText = copy.innerText + " " + dataAtual.getFullYear();
}

// 2. Seleção de elementos do Carrossel
const carroselBox = document.querySelector("#carroselBox");
const btnProx = document.querySelector('#btnProx');
const btnPrev = document.querySelector('#btnPrev');
const progCarrosel = document.querySelector('#progCarrosel');
const descProj = document.querySelector('#descProj');


async function converterJson(arquivo) {
    const response = await fetch(arquivo);
    if (response.ok) {
        return await response.json();
    }
    return null;
}


const jsonConvertido = await converterJson('./js/info.json');

if (jsonConvertido) {
  
    if (selectEl) {
        renderAssuntos(selectEl, jsonConvertido.assuntos);
    }

    
    renderizarEquipe(jsonConvertido.integrantes);
}