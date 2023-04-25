import './App.css'
import foto_copo from './img/foto_copo.jpg'
import drinks from './img/drinks.jpg'
import funcionarios from './img/funcionarios.jpg'
import quadros from './img/quadros.jpg'
import facebook from './img/facebook.svg'
import spotify from './img/spotify.svg'
import instagram from './img/instagram.svg'
import youtube from './img/youtube.svg'
import twitter from './img/twitter.svg'
import linkedin from './img/linkedin.svg'
import Slider from './components/Slider'
import Navbar from './components/Navbar'
import ListDropdown from './components/ListDropdown'
import { useState, useEffect } from 'react'

function App() {

const[spot1, setSpot1] = useState(<div className='dimensionamentoCompartilhado estilo_compartilhado'>
                        <h3>Saboreie uma pausa</h3>
                        <p>Saboreie uma pausa com uma de nossas bebidas</p>
                        <button className='btn_compartilhado'>Saiba mais</button>
                        </div>)

const[spot2, setSpot2] = useState(<div className='divParaImagem2'>
                         <img src={drinks} alt="Copos com produtos Starbucks"/>
                         </div>)

const[spot3] = useState(<div className='divParaImagem2'>
                        <img src={funcionarios} alt="Funcionários Starbucks"/>
                        </div>)

const[spot4] = useState(<div className='dimensionamentoCompartilhado estilo_compartilhado' id='dimensionamento3'>
                        <h3>Esperança e união</h3>
                        <p>Em parceria com ONGs, Partners da Starbucks se mobilizam para entregar café às comunidades.</p>
                        <button className='btn_compartilhado'>Saiba mais</button>
                        </div>)

const[spot5, setSpot5] = useState(<div className='dimensionamentoCompartilhado estilo_compartilhado'>
                        <h3>Coisas boas estão acontecendo</h3>
                        <p>Um gesto de carinho àqueles que estão na linha de frente <br/>todos os dias.</p>
                        <button className='btn_compartilhado'>Saiba mais</button>
                        </div>)

const[spot6, setSpot6] = useState(<div className='divParaImagem2'>
                        <img src={quadros} alt="Funcionários Starbucks dentro de fotográfias"/>
                        </div>)

useEffect(()=>{
    function controle(){

            if(window.innerWidth < 769){
                setSpot1(<div className='divParaImagem2'>
                    <img src={drinks} alt="Copos com produtos Starbucks"/>
                        </div>)
                } else{
                    setSpot1(<div className='dimensionamentoCompartilhado estilo_compartilhado'>
                        <h3>Saboreie uma pausa</h3>
                         <p>Saboreie uma pausa com uma de nossas bebidas</p>
                         <button className='btn_compartilhado'>Saiba mais</button>
                         </div>)
                }

             if(window.innerWidth < 769){
                 setSpot2(<div className='dimensionamentoCompartilhado estilo_compartilhado'>
                         <h3>Saboreie uma pausa</h3>
                         <p>Saboreie uma pausa com uma de nossas bebidas</p>
                         <button className='btn_compartilhado'>Saiba mais</button>
                     </div>)
             } else{
                 setSpot2(<div className='divParaImagem2'>
                         <img src={drinks} alt="Copos com produtos Starbucks"/>
                         </div>)
             }

            if(window.innerWidth < 769){
                setSpot5(<div className='divParaImagem2'>
                        <img src={quadros} alt="Funcionários Starbucks dentro de fotográfias"/>
                        </div>)
            } else{
                setSpot5(<div className='dimensionamentoCompartilhado estilo_compartilhado'>
                        <h3>Coisas boas estão acontecendo</h3>
                        <p>Um gesto de carinho àqueles que estão na linha de frente <br/>todos os dias.</p>
                        <button className='btn_compartilhado'>Saiba mais</button>
                        </div>)
            }

            if(window.innerWidth < 769){
                setSpot6(<div className='dimensionamentoCompartilhado estilo_compartilhado'>
                        <h3>Coisas boas estão acontecendo</h3>
                        <p>Um gesto de carinho àqueles que estão na linha de frente <br/>todos os dias.</p>
                        <button className='btn_compartilhado'>Saiba mais</button>
                        </div>)
            } else{
                setSpot6(<div className='divParaImagem2'>
                        <img src={quadros} alt="Funcionários Starbucks dentro de fotográfias"/>
                        </div>)
            }
         
    }

     controle()

     window.addEventListener('resize', controle )

     return (()=>{
         window.removeEventListener('resize', controle )
     })

   }, [])


  return (
    <div>
      <Navbar/>
        <div className='corpo'>
          <Slider/>
          <div className='estilo_compartilhado' id='dimensionamento'>
              <p>Conforme abrimos nossas lojas, permanecemos no compromisso com a saúde e bem-estar de nossos partners e consumidores.</p>
              <button className='btn_compartilhado'>Saiba mais</button>
          </div>
          <div id='container_maior'>
              <div id='divParaImagem1'>
                  <img src={foto_copo} alt="Copo com produto Starbucks"/>
              </div>
              <div className='estilo_compartilhado' id='dimensionamento2'>
                  <h3>Voltando ao que amamos juntos</h3>
                  <p>Queridos clientes, partners e amigos, estamos acompanhando a situação atual do Brasil em relação ao COVID-19, focados na segurança e bem estar dos nossos partners (como chamamos os nossos colaboradores) e clientes. Seguimos os critérios de quarentena de cada munícipo que temos lojas. As lojas abertas ou com entrega via delivery, através do nosso parceiro Rappi, estão seguindo as orientações das autoridades de saúde.</p>
                  <button className='btn_maior'>Baixe nosso App e verifique as lojas em funcionamento</button>
              </div>
          </div>
              <div className='layout_compartilhado'>
                  {spot1}
                  {spot2}
              </div>
              <div className='layout_compartilhado'>
                  {spot3}
                  {spot4}
              </div>
              <div className='layout_compartilhado'>
                  {spot5}
                  {spot6}
              </div>
              <footer>
                  <ListDropdown/>
                  <hr/>
                      <div className='redes_sociais'>
                          <img src={spotify} alt="Logo Spotify"/>
                          <img src={facebook} alt="Logo Facebook"/>
                          <img src={linkedin} alt="Logo Linkedin"/>
                          <img src={instagram} alt="Logo Instagram"/>
                          <img src={youtube} alt="Starbucks Youtube"/>
                          <img src={twitter} alt="Logo Twitter"/>
                      </div>
                      <div className='politicas'>
                        <p>Política de privacidade</p><span>| </span><p>Política de troca de produto</p><span>| </span><p>Termos de uso</p><span>| </span><p>Política de cookies</p>
                      </div>
                      <h3 className='corporation'>© 2023 Starbucks Coffee Company. Todos os direitos reservados.</h3>
              </footer>
        </div>
    </div>  
  );
}

export default App;