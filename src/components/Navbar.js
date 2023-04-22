import './Navbar.css'
import starbucksLogo from '../img/starbucks-nav-logo.svg'
import pin from '../img/pin.png'
import imgHistoriasLatinas from '../img/img-historias-latinas.svg'
import menu from '../img/menu.png'
import { useState, useEffect } from 'react'

export default function Navbar(){

  const [barraAtiva, setBarraAtiva] = useState(false)

  function mostrarEsconder(){
      setBarraAtiva(!barraAtiva)
  }

  function atualizarBarraAtiva() {
    if (window.innerWidth > 810) {
        setBarraAtiva(false)
    }
  }

  useEffect(() => {
      
      window.addEventListener('resize', atualizarBarraAtiva)

      return () => {
          window.removeEventListener('resize', atualizarBarraAtiva)
      }
  }, [])

    return(
        <header>
        <nav>
          <div className="div1">
              <img src={starbucksLogo} alt="Starbucks Logo"/>
              <ul>
                <li>Menu</li>
                <li>Rewards</li>
                <li>Nosso café</li>
                <li>Impacto social</li>
              </ul>
          </div>
          <div className="div2">
              <img src={imgHistoriasLatinas} className="historias_latinas" alt="Logo Histórias Latinas"/>
              <div className="encontreUmaLoja">
                <img src={pin} alt="Pin em alusão a localização"/>
                <p>Encontre uma loja</p>
              </div>
              <button className="btn_entrar">Entrar</button>
              <button className="btn_participe">Participe agora</button>
          </div>
        </nav>
        {/*Menu Hambúrguer*/}
        <div className='divPrincipal'>
                <div>
                    <img id="logo" src={starbucksLogo} alt="Starbucks Logo"/>
                </div>
                <div>
                    <button onClick={mostrarEsconder}><img id="menu" src={menu}  alt='imagem do menu hambúrguer'/></button>
                </div>
        </div>
            <div className={barraAtiva === false ? 'semBarra' : 'barraLateral'}>
                <div className='div_esquerda'>
                    <ul>
                    <li>Menu</li>
                    <li>Rewards</li>
                    <li>Nosso café</li>
                    <li>Impacto social</li>
                    </ul>
                </div>
                <div>
                    <div className='div_direita'>
                        <img src={imgHistoriasLatinas} className='historias_latinas2' alt="Logo Histórias Latinas"/>
                    <button className='btn_entrar2'>Entrar</button>
                    <button className='btn_participe2'>Participe agora</button>
                    </div>
                    <div className='encontreUmaLoja2'>
                        <img src={pin} alt="Pin em alusão a localização"/>
                        <p>Encontre uma loja</p>
                    </div>
                </div>
            </div>    
        </header>
    )
}