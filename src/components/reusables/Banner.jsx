import './Banner.scss';

export default function Banner({BackgroundBanner, title=""}) {
    const BackgroundBannerDark = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BackgroundBanner})`;

    return (
        <section className='banner' style={{ backgroundImage: BackgroundBannerDark , backgroundPosition: 'center'}}>
            {title && <h1 className='title' dangerouslySetInnerHTML={{ __html: title }} />}
        </section>
    )
}
