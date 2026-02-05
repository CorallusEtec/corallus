import { API_KEY } from "./env.js";
import emailjs from "@emailjs/browser";
const btnEnviar = document.querySelector("#submit");

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  const fields = document.querySelectorAll(".fd");
  validarForm(fields);
});

function validarForm(campos) {
  let valido = true;
  for (let i = 0; i < campos.length; i++) {
    if (campos[i].value.trim() === "") {
      valido = false;
      break;
    }
  }
  if (valido) {
    enviarEmail(API_KEY);
  } else {
    console.log("Campos Não Preenchidos");
  }
}

function renderAssuntos(el, lista) {
  for (let i = 0; i < lista.length; i++) {
    const opt = document.createElement("option");
    opt.innerText = lista[i];
    opt.classList.add("text-sm");
    opt.value = i;
    el.appendChild(opt);
  }
}

function enviarEmail(KEY) {
  (function(){
      emailjs.init({
        publicKey: KEY,
      });
   })();
}

export { validarForm, renderAssuntos, enviarEmail };
