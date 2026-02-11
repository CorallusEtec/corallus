
function renderAssuntos(el, lista) {
  for (let i = 0; i < lista.length; i++) {
    const opt = document.createElement("option");
    opt.innerText = lista[i];
    opt.classList.add("text-sm");
    opt.value = i;
    el.appendChild(opt);
  }
}



export { renderAssuntos }