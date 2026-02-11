function renderAssuntos(el, lista) {
  for (let i = 0; i < lista.length; i++) {
    const opt = document.createElement("option");
    opt.innerText = lista[i].nome;
    opt.classList.add("text-sm");
    opt.value = i;
    el.appendChild(opt);
  }
}

const renderizarEquipe = (integrantes) => {
  const container = document.querySelector("#cards-container");
  if (!container) return;

  const htmlGerado = integrantes
    .map((membro) => {
      const links = membro.contatos || membro.contato || [];

      const redesSociais = links
        .map(
          (link) => `
            <a href="${link.url}" target="_blank" class="hover:scale-110 transition-transform flex flex-col items-center gap-1 group/item">
                <i class="${link.iconClass} text-2xl text-gray-400 group-hover/item:text-blue-500"></i>
                <span class="text-[9px] font-medium text-gray-400 group-hover/item:text-blue-500">${link.rede}</span>
            </a>
        `,
        )
        .join("");

      return `
            <div class="group h-100 w-64 perspective-[1000px]">
                <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 transform-3d group-hover:[transform:rotateY(180deg)]">
                    
                    <div class="absolute inset-0 h-full w-full [backface-visibility:hidden] hover:z-0">
                        <img class="h-full w-full rounded-xl object-cover shadow-lg" src="${membro.foto}" alt="${membro.nome}" />
                    </div>

                    <div class="absolute inset-0 h-full w-full rounded-xl bg-white border border-gray-200 px-6 text-center text-gray-900 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center z-10">
                        <h5 class="text-xl font-bold mb-1">${membro.nome}</h5>
                        <p class="text-[11px] text-gray-500 italic mb-6 leading-tight">${membro.funcao}</p>
                        
                        <div class="flex flex-wrap justify-center gap-4 hover:z-20">
                            ${redesSociais}
                        </div>
                    </div>

                </div>
            </div>
        `;
    })
    .join("");

  container.innerHTML = htmlGerado;
};

export { renderAssuntos, renderizarEquipe };
