import './Header.scss';
import LogoLarge from '../../images/Logo_Large.png'
import LogoSmall from '../../images/Logo_Small.png'
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function Header() {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [currentLogo, setCurrentLogo] = useState(LogoSmall);
    const location = useLocation();

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 
    useEffect (() => {
        setCurrentLogo(windowSize > 768 ? LogoLarge : LogoSmall)
    }, [windowSize]);

    return (
        <header>
            <Link to="/"><img src={currentLogo} alt="Logo"/></Link>
            <nav className='links-container'>
                <Link to="/" className={`link ${location.pathname === "/" && "active"}`}>Accueil</Link>
                <Link to="/a_propos" className={`link ${location.pathname === "/a_propos" && "active"}`}>A Propos</Link>
            </nav>
        </header>
    )
}
