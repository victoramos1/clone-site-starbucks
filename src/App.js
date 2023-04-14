import styles from './App.module.css'
import starbucksLogo from './img/starbucks-nav-logo.svg'
import imgHistoriasLatinas from './img/img-historias-latinas.svg'
import pin from './img/pin.png'
import img1 from './img/img1.jpg'
import foto_copo from './img/foto_copo.jpg'

function App() {
  return (
    <div>
      <header>
        <nav>
          <div className={styles.div1}>
            <img src={starbucksLogo} />
            <ul>
              <li>Menu</li>
              <li>Rewards</li>
              <li>Nosso café</li>
              <li>Impacto social</li>
            </ul>
          </div>
          <div className={styles.div2}>
            <img src={imgHistoriasLatinas} />
            <div className={styles.encontreUmaLoja}>
              <img src={pin} />
              <p>Encontre uma loja</p>
            </div>
            <button className={styles.btn_entrar}>Entrar</button>
            <button className={styles.btn_participe}>Participe agora</button>
          </div>
        </nav>
      </header>
      <div className={styles.corpo}>
        <div className={styles.carrossel}>
        <img src={img1}/>
        </div>
        <div className={styles.div_verde}>
          <p>Conforme abrimos nossas lojas, permanecemos no compromisso com a saúde e bem-estar de nossos partners e consumidores.</p>
          <button>Saiba mais</button>
        </div>
          <div className={styles.div_dividida}>
            <div>
              <img src={foto_copo}/>
            </div>
            <div className={styles.avisoCovid}>
              <h3>Voltando ao que amamos juntos</h3>
              <p>Queridos clientes, partners e amigos, estamos acompanhando a situação atual do Brasil em relação ao COVID-19, focados na segurança e bem estar dos nossos partners (como chamamos os nossos colaboradores) e clientes. Seguimos os critérios de quarentena de cada munícipo que temos lojas. As lojas abertas ou com entrega via delivery, através do nosso parceiro Rappi, estão seguindo as orientações das autoridades de saúde.</p>
              <button>Baixe nosso App e verifique nossas lojas em funcionamento</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
