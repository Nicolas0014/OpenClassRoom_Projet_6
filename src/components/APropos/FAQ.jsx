import './FAQ.scss';
import Collapse from '../reusables/Collapse';

export default function FAQ() {
    
  const collapsesList = [
    {
      headbandTitle: 'Fiabilité',
      content : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifies par nos équipes.",
      id: 'a-propos-1',
    },
    {
      headbandTitle: 'Respect',
      content : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      id: 'a-propos-2',
    },
    {
      headbandTitle: 'Service',
      content : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      id: 'a-propos-3',
    },
    {
      headbandTitle: 'Sécurité',
      content : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une notre aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      id: 'a-propos-4',
    },
  ]
    
    return (
        <section className='faq'>
            {collapsesList.map((element) => (
                <Collapse key={element.id} headbandTitle={element.headbandTitle} content={element.content}/>
            ))}
        </section>
    )
}
