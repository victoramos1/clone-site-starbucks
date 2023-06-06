import './Navbar.css'
import starbucksLogo from '../img/starbucks-nav-logo.svg'
import pin from '../img/pin.png'
import imgHistoriasLatinas from '../img/img-historias-latinas.svg'

function Navbar() {

  return (
    <header>
      <nav>
        <div className="div1">
          <img src={starbucksLogo} alt="Starbucks Logo" />
          <ul>
            <li>Menu</li>
            <li>Rewards</li>
            <li>Nosso café</li>
            <li>Impacto social</li>
          </ul>
        </div>
        <div className="div2">
          <img src={imgHistoriasLatinas} className="historias_latinas" alt="Logo Histórias Latinas" />
          <div className="encontreUmaLoja">
            <img src={pin} alt="Pin em alusão a localização" />
            <p>Encontre uma loja</p>
          </div>
          <button className="btn_entrar">Entrar</button>
          <button className="btn_participe">Participe agora</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar