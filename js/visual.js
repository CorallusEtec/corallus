function renderAssuntos(el, lista) {
  for (let i = 0; i < lista.length; i++) {
    const opt = document.createElement("option");
    opt.innerText = lista[i].nome;
    opt.classList.add("text-sm", "font-medium");
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
    <div class="group h-95 w-full max-w-65 perspective-[1000px] mx-auto">
        <div class="relative h-full w-full rounded-2xl shadow-lg transition-all duration-500 transform-3d group-hover:[transform:rotateY(180deg)]">
            
            <div class="absolute inset-0 h-full w-full backface-hidden z-10">
                <img class="h-full w-full rounded-2xl object-cover border border-gray-100 shadow-sm" 
                    src="${membro.foto}" 
                    alt="${membro.nome}" />
            </div>

            <div class="absolute inset-0 h-full w-full rounded-2xl bg-white border border-gray-100 px-4 text-center backface-hidden transform-[rotateY(180deg)] flex flex-col items-center justify-center z-20">
                <h5 class="text-xl font-bold text-zinc-800 mb-1">${membro.nome}</h5>
                
                <p class="text-sm text-[--rosado] font-light mb-4 leading-tight">${membro.funcao}</p>
                
                <div class="w-10 h-px bg-gray-200 mb-6"></div>

                <div class="flex flex-wrap justify-center gap-4">
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

// Classe que controla as operações do carrosel de nossos projetos
function renderProjetos(container, projetos) {
  for(let i=0; i<projetos.length; i++) {
    const projeto = document.createElement('div');
    projeto.innerHTML =`
      <div class="flex flex-col border-stone-400 border">
        <img src="${projetos[i].img}" class="bg-cover"  />
        <div class="flex flex-col items-center p-1 py-3">
          <h3 class="font-medium text-3xl">${projetos[i].nome}</h3>
          <p class="text-center font-light">${projetos[i].desc}</p>
        </div>
      </div>`
    container.appendChild(projeto);
    projeto.classList.add('flex', 'max-w-1/4')
  }
}

class Carrosel {
  // Recebe as dependências e inicia o carrosel na view
  constructor(carroselWrapper, lista, indice, radioList) {
    this.carroselWrapper = carroselWrapper;
    this.radioList = radioList;
    this.lista = lista;
    this.indice = indice;
    this.initCarrosel();
  }

  // Configurações iniciais do carrosel
  initCarrosel() {
    this.loadImages();
    this.passoCarrosel = this.slideList[0].offsetWidth;
    this.move(-this.passoCarrosel*this.indice);
    this.addBlur();

    for(let i=0; i<this.radioList.length; i++) {
      this.radioList[i].addEventListener('click', ()=> {
        this.indice = i-1;
        this.addBlur()
        this.move(-this.passoCarrosel*this.indice);
      });
    }
  }
  // Realiza a operação de passar para a direita
  clickBtnProx() {
    this.indice++;
    if(this.indice > this.lista.length-2) {
      this.indice = -1;
      this.move(-this.indice*this.passoCarrosel);
    } else {
      this.move(-this.indice*this.passoCarrosel);
    }
    this.addBlur();
    this.atualizaRadio();
  }
  clickBtnPrev() {
    this.indice--;
    if(this.indice < -1) {
      this.indice = this.lista.length-2;
      this.move(-this.indice*this.passoCarrosel);
    } else {
      this.move(-this.indice*this.passoCarrosel);
    }
    this.addBlur();
    this.atualizaRadio();
  }
  move(valor) {
    this.carroselWrapper.style.transform = `translateX(${valor}px)`;
  }
  // Função que carrega todas as imagens do json para a div do carrosel
  loadImages() {
    for(let i=0; i<this.lista.length; i++) {
      const projeto = document.createElement('div');
      projeto.innerHTML = `
      <div class="flex flex-col border-stone-400 border h-100 ease-in-out duration-500 transition-all">
        <img src="${this.lista[i].img}" />
        <div class="flex flex-col items-center p-1 py-3">
          <h3 class="font-medium text-3xl">${this.lista[i].nome}</h3>
          <p class="text-center font-light">${this.lista[i].desc}</p>
        </div>
      </div>
      `
      projeto.classList.add('slide', 'max-w-1/4');
      projeto.alt = `Card do projeto ${this.lista[i].nome}`
      this.carroselWrapper.appendChild(projeto);
    }
    this.slideList = document.querySelectorAll('.slide');
  }
  addBlur() {
    const cards = this.slideList;
    for(let i=0; i<cards.length; i++) {
      cards[i].classList.remove('blur');
    }
    const atual = cards[this.indice+1];

    //atual.classList.add()

    for(let i=0; i<cards.length; i++) {
      if(cards[i] != atual) {
        cards[i].classList.add('blur');
      }
    }
  }
  atualizaRadio() {
    for(let i=0; i<this.radioList.length; i++) {
      this.radioList[i].checked = false;
    }
    this.radioList[this.indice+1].checked = true;
  }
}

const iScrollParceiros = (scroll, velocidade = 1) => {
  const items = Array.from(scroll.children);

  items.forEach(item => {
    scroll.appendChild(item.cloneNode(true));
  });
  let position = 0;
  const speed = velocidade;
  const animate = () => {
    position -= speed;

    if (position <= -scroll.scrollWidth / 2) {
      position = 0;
    }
    scroll.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  };

  animate();
};

export { renderAssuntos, renderizarEquipe, Carrosel, iScrollParceiros };