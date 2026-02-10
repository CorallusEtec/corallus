export default function Footer() {
  return (
    <section id="footer">
      <div className="bg-(--rosado) w-full p-5 text-white">
        <div className="flex justify-between">
          <h2 className="text-xl">Precisa de suporte?</h2>
          <h2 className="text-xl">Siga-nos</h2>
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <div className="flex flex-col text-3xl gap-1">
              <a href="">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="">
                <i className="bi bi-envelope-fill"></i>
              </a>
              <a href="">
                <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <img
              src="src/assets/image/logo-vet.png"
              alt="Logo"
              className="max-h-28"
            />
          </div>

          <div className="col-span-1">
            <div className="flex flex-col items-end text-3xl gap-1">
              <a href="">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-between border-t-2 border-white mt-5">
          <a href="" className="text-xs font-semibold">
            Políticas de privacidade
          </a>
          <a href="" className="text-xs font-semibold" id="copy">
            Todos os direitos reservados - Corallus
          </a>
        </div>
      </div>
    </section>
  );
}
