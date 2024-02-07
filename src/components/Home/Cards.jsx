import './Cards.scss';
import Card from './Card';
import { useState, useEffect } from 'react';

export default function Cards() {

    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
        fetch('/datas/annonces.json')
          .then(response => response.json())
          .then(data => setAnnonces(data))
          .catch(error => console.error('Erreur lors de la récupération des annonces', error));
      }, []);

    return (
        <section className='cards'>
            <ul>
                {annonces.map((item) => (
                    <Card key={item.id} annonce={item} />
                ))}
            </ul>
        </section>
    )
}
