import './Cards.scss';
import { Link } from 'react-router-dom';

export default function Card({annonce}) {


    return (
        <Link to={`/fiche_logement/${annonce.id}`} className='card' style={{ backgroundImage: `url(${annonce.cover})` , backgroundPosition: 'center'}}>
            <h2 className='title'>{annonce.title}</h2>
        </Link>
    )
}
