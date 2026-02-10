import './App.css'
import FaleConosco from './components/fale-conosco/FaleConosco';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import QuemSomos from './components/quem-somos/QuemSomos';
function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <QuemSomos />
        <FaleConosco />
      </main>
      <Footer />
    </>
  )
}

export default App
