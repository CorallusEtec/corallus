export default function FaleConosco() {
  return (
    <section id="fale-conosco">
      <div className="flex justify-center">
        <div className="bg-(--maisRosa) m-3 text-white rounded-sm p-5 w-6/12">
          <div className="flex justify-center p-3">
            <h1 className="text-6xl font-semibold">Fale Conosco</h1>
          </div>
          <div className="flex flex-col bg-(--bege) p-5 rounded-sm">
            <form>
              {/* Nome */}
              <div className="flex flex-col mb-5">
                <label htmlFor="nome" className="text-(--rosado) font-semibold">
                  Nome Completo:
                </label>
                <input
                  placeholder="Nome"
                  id="nome"
                  name="nome"
                  type="text"
                  className="fd max-w-6/12 bg-white rounded-md p-1 border-2 border-(--rosado) outline-0 text-stone-500 font-semibold"
                />
              </div>
              {/* Email e Assunto */}
              <div className="grid grid-cols-3 items-center mb-5">
                {/* Email */}
                <div className="flex flex-col col-span-2">
                  <label htmlFor="email" className="text-(--rosado) font-semibold">
                    Email:
                  </label>
                  <input
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    className="fd max-w-9/12 bg-white rounded-md p-1 border-2 border-(--rosado) outline-0 text-stone-500 font-semibold"
                  />
                </div>
                {/* Assunto */}
                <div className="flex flex-col col-span-1 gap-1">
                  <label htmlFor="assunto" className="text-(--rosado) font-semibold">
                    Assunto:
                  </label>
                  <select
                    name="assunto"
                    id="assunto"
                    className="fd bg-white rounded-md p-1 border-2 border-(--rosado) outline-0 text-stone-500 font-semibold"
                  >
                    <option value="" className="text-sm">
                      Selecione
                    </option>
                  </select>
                </div>
              </div>
              {/* Mensagem */}
              <div className="flex flex-col mb-5">
                <label htmlFor="msg" className="text-(--rosado) font-semibold">
                  Mensagem:
                </label>
                <textarea
                  name="msg"
                  id="msg"
                  maxLength="700"
                  placeholder="Mensagem"
                  className="fd bg-white rounded-md min-h-28 max-h-44 p-1 border-2 border-(--rosado) outline-0 text-stone-500 font-semibold"
                ></textarea>
              </div>
              {/* Botões */}
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 grid grid-cols-2">
                  <button
                    type="reset"
                    className="col-start-2 hover:bg-stone-100 cursor-pointer border-2 text-(--rosado) border-(--rosado) bg-white p-1.5"
                  >
                    Limpar
                  </button>
                </div>

                <button
                  className="col-span-1 border cursor-pointer p-1.5 bg-(--rosado) border-red-800 hover:bg-(--rosadoHover)"
                  type="submit"
                  id="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
