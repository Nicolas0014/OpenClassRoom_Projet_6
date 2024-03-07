import './LogementInfos.scss';
import Collapse from '../reusables/Collapse';
import Star from '../reusables/Star';

export default function LogementInfos({currentAnnonce}) {

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        const isActive = i <= currentAnnonce.rating;
        stars.push(<Star key={`star-`+i} isActive={isActive} />);
    }

    return (
        <section className='logement-infos'>
            <div className='upper-infos'>
                <div className='left'>
                    <h1 className='title'>{currentAnnonce.title}</h1>
                    <p className='location'>{currentAnnonce.location}</p>
                    <div className='tags-list'>
                        {currentAnnonce.tags && currentAnnonce.tags.map((tag) => (
                            <span key={tag} className='tag'>{tag}</span>
                        ))}
                    </div>
                </div>
                <div className='right'>
                    {currentAnnonce.host && (
                        <div className='host-infos'>
                            <p className='name'>{currentAnnonce.host.name}</p>
                            <img className='picture' src={currentAnnonce.host.picture} alt="Profil de l'hôte"/>
                        </div>
                    )}
                    <div className='rating'>{stars}</div>
                </div>
            </div>
            <div className='collapses-container'>
                <Collapse headbandTitle='Description' content={currentAnnonce.description} idAnnonce={currentAnnonce.id}/>
                <Collapse headbandTitle='Équipements' content={currentAnnonce.equipments} idAnnonce={currentAnnonce.id}/>
            </div>
        </section>
    )
}
