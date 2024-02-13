import './Slideshow.scss';
import { useEffect, useState } from 'react';
import arrowLeft from '../../images/arrow_left.svg';
import arrowRight from '../../images/arrow_right.svg';

export default function Slideshow({pictures}) {

    const [isMultiplePictures, setIsMultiplePictures] = useState(false);

    useEffect(() => {
        setIsMultiplePictures(pictures && pictures.length > 1 );
    }, [pictures]);

    const [currentBackgroundImage, setCurrentBackgroundImage] = useState('');

    useEffect(() => {
        setCurrentBackgroundImage(pictures && pictures[0]);
    }, [pictures]);

    const [currentPicturePosition, setCurrentPicturePosition] = useState(0);

    function picturesNavigation(direction) {
        let newPosition;

        if (direction === 'left') {
            newPosition = (currentPicturePosition - 1 + pictures.length) % pictures.length;
        } else if (direction === 'right') {
            newPosition = (currentPicturePosition + 1) % pictures.length;
        }
    
        setCurrentPicturePosition(newPosition);
        setCurrentBackgroundImage(pictures[newPosition]);
    }

    return currentBackgroundImage && (
        <div className="slideshow" style={{ backgroundImage: `url(${currentBackgroundImage})` , backgroundPosition: 'center', backgroundSize: 'cover'}}>
            {isMultiplePictures &&
                <>
                    <img className="arrow left" onClick={() => picturesNavigation('left')} src={arrowLeft} alt="Flèche gauche"/>
                    <img className="arrow right" onClick={() => picturesNavigation('right')} src={arrowRight} alt="Flèche droite"/>
                    <p className='numerotation'>{(currentPicturePosition+1) + '/' + (pictures.length)}</p>
                </>
            }
        </div>
        
    );
}