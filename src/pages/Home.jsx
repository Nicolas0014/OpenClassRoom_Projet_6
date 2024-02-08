import BackgroundBanner from '../images/BackgroundBannerHome.png';
import Banner from "../components/reusables/Banner";
import Cards from "../components/Home/Cards";

export default function Home({annonces}) {

  return (
    <div className="home">
      <Banner BackgroundBanner={BackgroundBanner} isHomePage={true}/>
      <Cards annonces={annonces}/>
    </div>
  );
}