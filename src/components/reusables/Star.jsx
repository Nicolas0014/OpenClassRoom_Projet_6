import StarActive from '../../images/star-active.svg'
import StarInactive from '../../images/star-inactive.svg'

import './Star.scss';

export default function Star({isActive}) {

    return (
        <img className='star' src={isActive ? StarActive : StarInactive} alt={isActive ? 'etoile active' : 'etoile neutre'}/>
    )
}
