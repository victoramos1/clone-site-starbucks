import styles from './App.module.css'
import starbucksLogo from './img/starbucks-nav-logo.svg'
import imgHistoriasLatinas from './img/img-historias-latinas.svg'
import pin from './img/pin.png'
import img1 from './img/img1.jpg'
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


function App() {
  return (
    <div>
      <header>
        <nav>
          <div className={styles.div1}>
            <img src={starbucksLogo} alt="Starbucks Logo"/>
            <ul>
              <li>Menu</li>
              <li>Rewards</li>
              <li>Nosso café</li>
              <li>Impacto social</li>
            </ul>
          </div>
          <div className={styles.div2}>
            <img src={imgHistoriasLatinas} className={styles.historias_latinas} alt="Logo Histórias Latinas"/>
            <div className={styles.encontreUmaLoja}>
              <img src={pin} alt="Pin em alusão a localização"/>
              <p>Encontre uma loja</p>
            </div>
            <button className={styles.btn_entrar}>Entrar</button>
            <button className={styles.btn_participe}>Participe agora</button>
          </div>
        </nav>
      </header>
      <div className={styles.corpo}>
        <div className={styles.carrossel}>
          <img src={img1} alt="Imagem Carrossel"/>
        </div>
        <div className={styles.div_verde}>
          <p>Conforme abrimos nossas lojas, permanecemos no compromisso com a saúde e bem-estar de nossos partners e consumidores.</p>
          <button>Saiba mais</button>
        </div>
        <div className={styles.div_dividida}>
          <div>
            <img src={foto_copo} alt="Copo com produto Starbucks"/>
          </div>
          <div className={styles.reaproveitavel}>
            <h3>Voltando ao que amamos juntos</h3>
            <p>Queridos clientes, partners e amigos, estamos acompanhando a situação atual do Brasil em relação ao COVID-19, focados na segurança e bem estar dos nossos partners (como chamamos os nossos colaboradores) e clientes. Seguimos os critérios de quarentena de cada munícipo que temos lojas. As lojas abertas ou com entrega via delivery, através do nosso parceiro Rappi, estão seguindo as orientações das autoridades de saúde.</p>
            <button>Baixe nosso App e verifique nossas lojas em funcionamento</button>
          </div>
        </div>
        <div className={styles.div_repetida}>
          <div className={styles.reaproveitavel}>
            <h3>Saboreie uma pausa</h3>
            <p>Saboreie uma pausa com uma de nossas bebidas</p>
            <button>Saiba mais</button>
          </div> 
          <div>
            <img src={drinks} alt="Copos com produtos Starbucks"/>
            </div>
          </div>
          <div className={styles.div_repetida}>
            <div className={styles.reaproveitavel}>
              <h3>Esperança e união</h3>
              <p>Em parceria com ONGs, Partners da Starbucks se mobilizam para entregar café às comunidades.</p>
              <button>Saiba mais</button>
            </div> 
            <div>
              <img src={funcionarios} alt="Funcionários Starbucks"/>
            </div>
          </div>
          <div className={styles.div_repetida}>
            <div className={styles.reaproveitavel}>
              <h3>Coisas boas estão acontecendo</h3>
              <p>Um gesto de carinho àqueles que estão na linha de frente <br/>todos os dias.</p>
              <button>Saiba mais</button>
            </div> 
            <div>
              <img src={quadros} alt="Funcionários Starbucks dentro de fotográfias"/>
            </div>
          </div>
          <footer>
          <div className={styles.rodape}>
            <div></div>
              <div className={styles.formatacao_rodape}>
                <h3>Sobre nós</h3>
                <p>Nossa empresa</p>
                <p>Nosso café</p>
                <p>Atendimento ao cliente</p>
                <p>Compliance e privacidade</p>
                <p>Código de Ética e Conduta <br/>SouthRock</p>
              </div>
              <div className={styles.formatacao_rodape}>
                <h3>Carreira</h3>
                <p>Central de carreiras</p>
              </div>
              <div className={styles.formatacao_rodape}>
                <h3>Impacto social</h3>
                <p>Comunidade</p>
                <p>Meio Ambiente</p>
                <p>Fornecimento ético</p>
                <p>Histórias Starbucks</p>
              </div>
              <div className={styles.formatacao_rodape}>
                <h3>Starbucks Rewards</h3>
                <p>Baixe o aplicativo</p>
                <p>Termos & Condições do<br/> Starbucks Card</p>
                <p>Termos & Condições do<br/> Starbucks Rewards</p>
                <p>Termos & Condições do<br/> Gift Card</p>
                <p>Termos & Condições de<br/> Promoções Starbucks</p>
                <p>Termos & Condições Peça<br/> e Pague pelo Celular e Retire<br/> na Loja</p>
              </div>
              <img src={imgHistoriasLatinas} className={styles.historias_latinas} alt="Logo Histórias Latinas"/>
          </div>
          <hr/>
          <div className={styles.redes_sociais}>
            <img src={spotify} alt="Logo Spotify"/>
            <img src={facebook} alt="Logo Facebook"/>
            <img src={linkedin} alt="Logo Linkedin"/>
            <img src={instagram} alt="Logo Instagram"/>
            <img src={youtube} alt="Starbucks Youtube"/>
            <img src={twitter} alt="Logo Twitter"/>
          </div>
          <div className={styles.politicas}>
            <p>Política de privacidade</p> | <p>Política de troca de produto</p> | <p>Termos de uso</p> | <p>Política de cookies</p>
          </div>
          <h3 className={styles.corporation}>© 2023 Starbucks Coffee Company. Todos os direitos reservados.</h3>
        </footer>
      </div>
    </div> 
      
  );
}

export default App;