import { attProgresso, initCarrosel, loadImage, renderAssuntos, renderDescProj, renderizarEquipe } from './visual.js';
const copy = document.querySelector("#copy");
const selectEl = document.querySelector("#assunto");
const dataAtual = new Date();
copy.innerText = copy.innerText+" "+dataAtual.getFullYear();

const imgCarrosel = document.querySelector("#imgCarrosel");
const btnProx = document.querySelector('#btnProx');
const btnPrev = document.querySelector('#btnPrev');
const progCarrosel = document.querySelector('#progCarrosel');
const descProj = document.querySelector('#descProj');

let contadorCarrosel = 0;

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
btnProx.addEventListener('click', () => {
    contadorCarrosel++;
    if(contadorCarrosel > jsonConvertido.projetos.length-1) { contadorCarrosel=0;}
    loadImage(imgCarrosel, jsonConvertido.projetos, contadorCarrosel);
    renderDescProj(descProj, jsonConvertido.projetos, contadorCarrosel);
    attProgresso(progCarrosel, contadorCarrosel);
});
btnPrev.addEventListener('click', ()=>{
    contadorCarrosel--;
    if(contadorCarrosel < 0) { contadorCarrosel=jsonConvertido.projetos.length-1;}
    loadImage(imgCarrosel, jsonConvertido.projetos, contadorCarrosel);
    renderDescProj(descProj, jsonConvertido.projetos, contadorCarrosel);
    attProgresso(progCarrosel, contadorCarrosel);
});
renderDescProj(descProj, jsonConvertido.projetos, contadorCarrosel);
initCarrosel(descProj, jsonConvertido.projetos, contadorCarrosel, progCarrosel);
renderAssuntos(selectEl, jsonConvertido.assuntos);
renderizarEquipe(jsonConvertido.integrantes);


