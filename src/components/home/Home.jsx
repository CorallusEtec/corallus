export default function Home() {
  return (
    <section className="h-[calc(100vh-90px)] bg-[url('src/assets/image/fundoHomeCorallus.png')] bg-cover bg-right flex items-center justify-center text-white text-center">
      <div>
        <h1 className="text-6xl font-serif ">Corallus</h1>

        <p className="text-2xl mt-2">Juntos Inovando</p>

        <div className="mt-8 flex items-center gap-4 border-2 border-white rounded-full py-3 px-6 w-[400px]">
          <i className="text-black bi bi-search"></i>

          <input
            type="text"
            placeholder="Pesquisar"
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white"
          />

          <i className="bi bi-mic-fill"></i>
        </div>
      </div>
    </section>
  );
}
