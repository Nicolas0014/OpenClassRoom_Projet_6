import BackgroundBanner from '../images/BackgroundBannerHome.png';
import Banner from "../components/reusables/Banner";
import Cards from "../components/Home/Cards";
import { useState, useEffect } from 'react';

export default function Home() {

  const title = "Chez vous,<br /> partout et ailleurs";

  const [annonces, setAnnonces] = useState([]);
  const [waitingForDatas, setWaitingForDatas] = useState(false);

  useEffect(() => {
    if (!waitingForDatas) {
      setWaitingForDatas(true);
      fetch('/datas/annonces.json')
        .then(response => response.json())
        .then(data => {
          setAnnonces(data);
          setWaitingForDatas(false);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des annonces', error);
          setWaitingForDatas(false);
        });
    };
  }, []);

  return (
    <div className="page home">
      <Banner BackgroundBanner={BackgroundBanner} title={title}/>
      <Cards annonces={annonces}/>
    </div>
  );
}