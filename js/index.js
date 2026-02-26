import { renderAssuntos, renderizarEquipe, Carrosel } from './visual.js';
const copy = document.querySelector("#copy");
const selectEl = document.querySelector("#assunto");
const dataAtual = new Date();
copy.innerText = copy.innerText+" "+dataAtual.getFullYear();

const carroselBox = document.querySelector("#carroselBox");
const btnProx = document.querySelector('#btnProx');
const btnPrev = document.querySelector('#btnPrev');
const progCarrosel = document.querySelector('#progCarrosel');
const descProj = document.querySelector('#descProj');


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

/* USAR NO NOVO CARROSEL DE PROJETOS
const carrosel = new Carrosel(carroselBox, jsonConvertido.projetos, descProj, progCarrosel, 0);
btnProx.addEventListener('click', () =>carrosel.clickBtnProx());
btnPrev.addEventListener('click', ()=>carrosel.clickBtnPrev());
*/

// USAR NO FORMULÁRIO DE FALE CONOSCO
/*renderAssuntos(selectEl, jsonConvertido.assuntos);*/

// USAR NOS CARDS DE EQUIPE
/*renderizarEquipe(jsonConvertido.integrantes);*/


