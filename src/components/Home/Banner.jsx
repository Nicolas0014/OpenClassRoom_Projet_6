import './Banner.scss';
import BackgroundBanner from '../../images/BackgroundBanner.png'

export default function Banner() {
    
    return (
        <section className='banner' style={{ backgroundImage: `url(${BackgroundBanner})` , backgroundPosition: 'center'}}>
            <h1 className='title'>Chez vous,<br /> partout et ailleurs</h1>
        </section>
    )
}
