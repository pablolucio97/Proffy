import React, {useState, useEffect} from 'react'

import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHearIcon from '../../assets/images/icons/purple-heart.svg'

import './styles/styles.css'

import api from '../../services/api'

function Landing(){


    const [totalConnections, setTotalConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then( response => {
            const {total} = response.data
            setTotalConnections(total)
        })
    },[])

    return(
    <div id="page-landing">
        <div id="page-landing-content" className='container'>
        <div className="logo-container">
            <img src={logoImg} alt="proffy-logo"/>
            <h2>Sua plataforma de estudos online</h2>
        </div>
            <img src={landingImg} alt="proffy-landing"/>
            <div className="buttons-container">
                <Link to="/study" className='study'>
                    <img src={studyIcon} alt="estudar"/>
                    Estudar
                </Link>
                <Link  to="give-classes" className='give-classes'>
                    <img src={giveClassesIcon} alt="dar aulas"/>
                    Dar aulas
                </Link>
            </div>
            <span className="total-connections">
    Total de {totalConnections} conexões já realizadas <img src={purpleHearIcon} alt="coração-roxo"/>
            </span>
    </div>
    </div>
    )
}

export default Landing