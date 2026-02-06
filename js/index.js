import { assuntos } from './info.js';
import { renderAssuntos } from './visual.js';

const copy = document.querySelector("#copy");
const selectEl = document.querySelector("#assunto");
const dataAtual = new Date();
copy.innerText = copy.innerText+" "+dataAtual.getFullYear();



renderAssuntos(selectEl, assuntos);
