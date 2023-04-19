import './Slider.css'
import { useEffect, useState } from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'

export default function Slider(){

    const [valorTranslate, setValorTranslate] = useState('0px')
    
    function proximaImagem(){
        if(valorTranslate === '0px'){
            setValorTranslate('-1440px')
        } else if(valorTranslate === '-1440px'){
            setValorTranslate('-2880px')
        } else if(valorTranslate === '-2880px'){
            setValorTranslate('-4320px')
        } else if(valorTranslate === '-4320px'){
            setValorTranslate('0px')
        }
    }

    let ulStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '5760px',
        transform: `translateX(${valorTranslate})`,
        transition: '0.25s ease'
    }

    useEffect(()=>{
        setInterval(()=>{
            proximaImagem()
        }, 2000)
    })    

    return(
        <div className='container-principal'>
            <ul style={ulStyle}>
            <li><img src={img1} alt="Imagem 1"/></li>    
            <li><img src={img2} alt="Imagem 1"/></li>
            <li><img src={img3} alt="Imagem 1"/></li>
            <li><img src={img4} alt="Imagem 1"/></li> 
            </ul>
            <button onClick={proximaImagem}>Mudar Imagem</button>
        </div>
    )
}