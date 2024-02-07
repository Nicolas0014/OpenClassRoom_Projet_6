import './Cards.scss';
import Card from './Card';

export default function Cards({annonces}) {

    return (
        <section className='cards'>
            <ul className='container'>
                {(
                    annonces.map((item) => (
                        <Card key={item.id} annonce={item} />
                    ))
                )}
            </ul>
        </section>
    )
}
