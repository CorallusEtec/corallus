import { assuntos } from "./info.js";
const btnEnviar = document.querySelector("#submit");

// Botão de enviar do form
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

    enviarEmail(campos);
  } else {
    console.log("Campos Não Preenchidos");
  }
}

function enviarEmail(campos) {
  const doc = {
    nome: campos[0].value,
    email: campos[1].value,
    assunto: assuntos[Number(campos[2].value)],
    message: campos[3].value
  }
}

export { validarForm };
