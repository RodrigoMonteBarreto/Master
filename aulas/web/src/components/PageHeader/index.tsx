import React from 'react'
import { Link } from 'react-router-dom';

import logoImg from '../../assests/images/logo.svg'
import backIcon from '../../assests/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps{
    title: string;

}

const PageHeader: React.FC<PageHeaderProps> = (props) =>{
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>
                <div className="header-content">
                    <strong>{props.title}</strong>

                    {props.children}
                </div>
           </header>
    );
}

export default PageHeader;