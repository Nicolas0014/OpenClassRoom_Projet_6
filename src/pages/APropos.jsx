import BackgroundBanner from '../images/BackgroundBannerAPropos.png';
import Banner from "../components/reusables/Banner";
import FAQ from "../components/APropos/FAQ";

export default function APropos() {

  return (
    <div className="a_propos">
      <Banner BackgroundBanner={BackgroundBanner} isHomePage={false}/>
      <FAQ />
    </div>
  );
}