import './Cards.scss';

export default function Card({annonce}) {


    return (
        <div className='card' style={{ backgroundImage: `url(${annonce.cover})` , backgroundPosition: 'center'}}>
            <h2 className='title'>{annonce.title}</h2>
        </div>
    )
}
