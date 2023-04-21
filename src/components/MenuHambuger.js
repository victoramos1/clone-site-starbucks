import imgHistoriasLatinas from '../img/img-historias-latinas.svg'
import pin from '../img/pin.png'
import menu from '../img/menu.png'
import './MenuHamburguer.css'
import { useState, useEffect } from 'react'

export default function MenuHamburguer(){
    
    const [barraAtiva, setBarraAtiva] = useState(false)

    function mostrarEsconder(){
        setBarraAtiva(!barraAtiva)
    }

    useEffect(() => {
        function atualizarBarraAtiva() {
            if (window.innerWidth > 810) {
                setBarraAtiva(false)
            }
        }

        atualizarBarraAtiva()

        window.addEventListener('resize', atualizarBarraAtiva)

        return () => {
            window.removeEventListener('resize', atualizarBarraAtiva)
        }
    }, [])

    return(
        <div>
            <div className='divPrincipal'>
                <div>
                <button onClick={mostrarEsconder}><img src={menu}  alt='imagem do menu hambúrguer'/></button>
                </div>
            </div>
            <div className={barraAtiva === false ? 'semBarra' : 'barraLateral'}>
                <div className='div1'>
                    <ul>
                    <li>Menu</li>
                    <li>Rewards</li>
                    <li>Nosso café</li>
                    <li>Impacto social</li>
                    </ul>
                </div>
                <div>
                    <div className='div2'>
                        <img src={imgHistoriasLatinas} className='historias_latinas' alt="Logo Histórias Latinas"/>
                    <button className='btn_entrar'>Entrar</button>
                    <button className='btn_participe'>Participe agora</button>
                    </div>
                    <div className='encontreUmaLoja'>
                        <img src={pin} alt="Pin em alusão a localização"/>
                        <p>Encontre uma loja</p>
                    </div>
                </div>
            </div>    
        </div>    
    )
}