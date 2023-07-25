import imgHistoriasLatinas from '../img/img-historias-latinas.svg'
import './ListDropdown.css'
import { useState } from "react"

export default function ListDropdown() {

    const itens = [
        {
            titulo: 'Sobre nós',
            conteudo: <ul>
                <li>Nossa empresa</li>
                <li>Nosso café</li>
                <li>Atendimento ao cliente</li>
                <li>Compliance e privacidade</li>
                <li>Código de Ética e Conduta SouthRock</li>
            </ul>
        },
        {
            titulo: 'Carreira',
            conteudo: <ul>
                <li>Central de carreira</li>
            </ul>
        },
        {
            titulo: 'Impacto Social',
            conteudo: <ul>
                <li>Comunidade</li>
                <li>Meio Ambiente</li>
                <li>Fornecimento ético</li>
                <li>Histórias Starbucks</li>
            </ul>
        },
        {
            titulo: 'Starbucks Rewards',
            conteudo: <ul>
                <li>Baixe o aplicativo</li>
                <li>Termos & Condições do Starbucks Card</li>
                <li>Termos & Condições do<br /> Starbucks Rewards</li>
                <li>Termos & Condições do<br /> Gift Card</li>
                <li>Termos & Condições de<br /> Promoções Starbucks</li>
                <li>Termos & Condições Peça<br /> e Pague pelo Celular e Retire na Loja</li>
            </ul>
        }
    ]

    const [selecionado, setSelecionado] = useState(null)

    function cliqueBotao(index) {
        if (selecionado === index) {
            return setSelecionado(null)
        } else {
            setSelecionado(index)
        }
    }

    return (
        <div>
            <div className='rodape'>
                <div className='formatacao_rodape'>
                    <h3>Sobre nós</h3>
                    <p>Nossa empresa</p>
                    <p>Nosso café</p>
                    <p>Atendimento ao cliente</p>
                    <p>Compliance e privacidade</p>
                    <p>Código de Ética e Conduta <br />SouthRock</p>
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
                    <p>Termos & Condições do<br /> Starbucks Card</p>
                    <p>Termos & Condições do<br /> Starbucks Rewards</p>
                    <p>Termos & Condições do<br /> Gift Card</p>
                    <p>Termos & Condições de<br /> Promoções Starbucks</p>
                    <p>Termos & Condições Peça<br /> e Pague pelo Celular e Retire<br /> na Loja</p>
                </div>
                <img src={imgHistoriasLatinas} className='historias_latinas' alt="Logo Histórias Latinas" />
            </div>
            {/*Versão mobile*/}
            <div className="rodape_mobile">
                <section>
                    {itens.map((item, index) =>
                        <div className='main-container' key={index}>
                            <div className='container-titulo'>
                                <h3>{item.titulo}</h3>
                                <button onClick={() => cliqueBotao(index)}>{selecionado === index ? "˄" : '˅'}</button>
                            </div>
                            <div className={selecionado === index ? 'container-visivel' : 'container-escondido'}>
                                <p>{item.conteudo}</p>
                            </div>
                        </div>
                    )}
                    <img src={imgHistoriasLatinas} className='historias_latinas' alt="Logo Histórias Latinas" />
                </section>
            </div>
        </div>
    )
}