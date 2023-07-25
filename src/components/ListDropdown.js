import imgHistoriasLatinas from '../img/img-historias-latinas.svg'
import './ListDropdown.css'

export default function ListDropdown(){

    return(
        <div>
            <div className='rodape'>
                <div className='formatacao_rodape'>
                    <h3>Sobre nós</h3>
                    <p>Nossa empresa</p>
                    <p>Nosso café</p>
                    <p>Atendimento ao cliente</p>
                    <p>Compliance e privacidade</p>
                    <p>Código de Ética e Conduta <br/>SouthRock</p>
                </div>
                <div className='formatacao_rodape'>
                    <h3>Carreira</h3>
                    <p>Central de carreiras</p>
                </div>
                <div className='formatacao_rodape'>
                    <h3>Impacto social</h3>
                    <p>Comunidade</p>
                    <p>Meio Ambiente</p>
                    <p>Fornecimento ético</p>
                    <p>Histórias Starbucks</p>
                </div>
                <div className='formatacao_rodape'>
                    <h3>Starbucks Rewards</h3>
                    <p>Baixe o aplicativo</p>
                    <p>Termos & Condições do<br/> Starbucks Card</p>
                    <p>Termos & Condições do<br/> Starbucks Rewards</p>
                    <p>Termos & Condições do<br/> Gift Card</p>
                    <p>Termos & Condições de<br/> Promoções Starbucks</p>
                    <p>Termos & Condições Peça<br/> e Pague pelo Celular e Retire<br/> na Loja</p>
                </div>
                <img src={imgHistoriasLatinas} className='historias_latinas' alt="Logo Histórias Latinas"/>
            </div>
            {/*Versão mobile*/}
            <div className="rodape_mobile">
                <section>
                    <details>
                        <summary>Sobre nós</summary>
                        <ul>
                            <li>Nossa empresa</li>
                            <li>Nosso café</li>
                            <li>Atendimento ao cliente</li>
                            <li>Compliance e privacidade</li>
                            <li>Código de Ética e Conduta SouthRock</li>
                        </ul>
                    </details>
                    <details>
                        <summary>Carreira</summary>
                            <ul>
                                <li>Central de carreira</li>
                            </ul>
                    </details>
                    <details>
                        <summary>Impacto Social</summary>
                        <ul>
                            <li>Comunidade</li>
                            <li>Meio Ambiente</li>
                            <li>Fornecimento ético</li>
                            <li>Histórias Starbucks</li>
                        </ul>
                    </details>
                    <details>
                        <summary>Starbucks Rewards</summary>
                        <ul>
                            <li>Baixe o aplicativo</li>
                            <li>Termos & Condições do Starbucks Card</li>
                            <li>Termos & Condições do<br/> Starbucks Rewards</li>
                            <li>Termos & Condições do<br/> Gift Card</li>
                            <li>Termos & Condições de<br/> Promoções Starbucks</li>
                            <li>Termos & Condições Peça<br/> e Pague pelo Celular e Retire na Loja</li>
                        </ul>
                    </details>
                    <img src={imgHistoriasLatinas} className='historias_latinas' alt="Logo Histórias Latinas"/>
                </section>
            </div>
        </div>
    )
}