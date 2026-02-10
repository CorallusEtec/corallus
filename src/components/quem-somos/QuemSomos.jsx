import { integrantes } from "../../assets/js/info";

export default function QuemSomos() {
  function renderizarEquipe(membro) {
    return (
      <div
        key={membro.id}
        className="group h-[400px] w-64 [perspective:1000px]"
      >
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] hover:z-0">
            <img
              className="h-full backface-hidden w-full rounded-xl object-cover shadow-lg"
              src={membro.foto}
              alt={membro.nome}
            />
          </div>

          <div className="absolute inset-0 h-full w-full rounded-xl bg-white border border-gray-200 px-6 text-center text-gray-900 backface-hidden transform-[rotateY(180deg)] flex flex-col items-center justify-center z-10">
            <h5 className="text-xl font-bold mb-1">{membro.nome}</h5>
            <p className="text-[11px] text-gray-500 italic mb-6 leading-tight">
              {membro.funcao}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {membro.contatos.map((link) => {
                return (
                  <a
                  key={link.rede}
                    href={link.url}
                    target="_blank"
                    className="hover:scale-110 transition-transform flex flex-col items-center gap-1 group/item"
                  >
                    <i className={`${link.iconClass} text-4xl text-gray-400 group-hover/item:text-blue-500`}></i>
                    <span className="text-[9px] font-medium text-gray-400 group-hover/item:text-blue-500">
                      {link.rede}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-19 uppercase tracking-widest">
          Quem Somos
        </h2>

        <div
          id="cards-container"
          className="flex flex-wrap justify-center gap-10 mt-10"
        >
          {integrantes.map((membro) => renderizarEquipe(membro))}
        </div>
      </div>
    </section>
  );
}
