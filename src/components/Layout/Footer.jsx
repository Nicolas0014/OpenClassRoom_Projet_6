import './Footer.scss';
import LogoSmallWhite from '../../images/Logo_Small_White.png'
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <footer>
            <Link to="/"><img className="logo" src={LogoSmallWhite} alt="Logo"/></Link>
            <p className='copyright'>© 2020 Kasa. All <br/> rights reserved</p>
        </footer>
    )
}
