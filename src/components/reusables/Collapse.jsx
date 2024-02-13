import { useState } from "react";
import arrowBack from '../../images/arrow_back.svg';

import './Collapse.scss';

export default function Collapse({headbandTitle, content, idAnnonce}) {

    const type = Array.isArray(content) ? 'list' : 'text';
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    return (
        <div className="collapse">
            <div className={`headband ${isCollapseOpen && 'open' }`}>{headbandTitle}<img onClick={() => setIsCollapseOpen(!isCollapseOpen)} className={`arrow ${isCollapseOpen && 'down' }`} src={arrowBack} alt='Flèche pour ouvrir et fermer les informations' /></div>
            <div className={`informations ${!isCollapseOpen ? 'hidden' : 'visible'}`}>
                {type === 'list' ?
                    <ul>
                        {content.map((element, index) => (
                            <li key={idAnnonce+'-'+index}>{element}</li>
                        ))}
                    </ul>
                : type === 'text' && 
                    <p>{content}</p>
                }        
            </div>
        </div>
    );
}