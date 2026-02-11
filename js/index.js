import { renderAssuntos, renderizarEquipe } from './visual.js';
const copy = document.querySelector("#copy");
const selectEl = document.querySelector("#assunto");
const dataAtual = new Date();
copy.innerText = copy.innerText+" "+dataAtual.getFullYear();



async function converterJson(arquivo) {
    const data = await fetch(arquivo);
    if(data.ok) {
        const finalObj = await data.json();
        return finalObj
    }
    
}
/* jsonConvertido pega os dados do info.json e transforma em um objeto de fato,
 sendo possivel manipular no codigo*/
const jsonConvertido = await converterJson('./js/info.json');


/* Funções de renderização de componentes no HTML */
renderAssuntos(selectEl, jsonConvertido.assuntos);
renderizarEquipe(jsonConvertido.integrantes);

