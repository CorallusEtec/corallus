export default function Header() {
  return (
    <header className="bg-(--rosado) navbar font-bold z-20">
      <div className="flex items-center">
        <a href="#" className="mr-12">
          <img src="src/assets/image/logo-vet.png" alt="logo" className="max-h-20" />
        </a>
        <nav>
          <ul className="flex gap-8 text-white text-xl text-center p-3">
            <a href="#">
              <li>HOME</li>
            </a>
            <a href="#">
              <li>QUEM SOMOS</li>
            </a>
            <a href="#">
              <li>NOSSOS PROJETOS</li>
            </a>

            <a href="#">
              <li>PARCEIROS</li>
            </a>
            <a href="#">
              <li>FALE CONOSOCO</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}
