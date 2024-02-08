import './Banner.scss';

export default function Banner({BackgroundBanner, isHomePage}) {
    const BackgroundBannerDark = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundBanner})`;

    return (
        <section className='banner' style={{ backgroundImage: BackgroundBannerDark , backgroundPosition: 'center'}}>
            {isHomePage && <h1 className='title'>Chez vous,<br /> partout et ailleurs</h1>}
        </section>
    )
}
