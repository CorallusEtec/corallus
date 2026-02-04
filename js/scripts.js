import { assuntos } from './info.js';
const copy = document.querySelector("#copy");
const selectEl = document.querySelector("#assunto")
const dataAtual = new Date();
copy.innerText = copy.innerText+" "+dataAtual.getFullYear();

function renderAssuntos(el, lista) {
    for(let i=0; i<lista.length; i++) {
        const opt = document.createElement('option');
        opt.innerText = lista[i];
        opt.classList.add("text-sm");
        opt.value = i;
        el.appendChild(opt);
    }
}

renderAssuntos(selectEl, assuntos);