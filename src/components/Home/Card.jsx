import './Cards.scss';
import { Link } from 'react-router-dom';

export default function Card({annonce}) {

    const backgroundWithGradient = `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${annonce.cover})`;

    return (
        <Link to={`/fiche_logement/${annonce.id}`} className='card' style={{ backgroundImage: backgroundWithGradient , backgroundPosition: 'center'}}>
            <h2 className='title'>{annonce.title}</h2>
        </Link>
    )
}
