import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "../components/FicheLogement/Slideshow";
import LogementInfos from "../components/FicheLogement/LogementInfos";

export default function FicheLogement() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
      fetch('/datas/annonces.json')
        .then(response => response.json())
        .then(data => setAnnonces(data))
        .catch(error => console.error('Erreur lors de la récupération des annonces', error));
  }, []);

  const [currentAnnonce, setCurrentAnnonce] = useState({});
  useEffect(() => {
    const selectedAnnonce = annonces.find((annonce) => annonce.id === id);
    if (!selectedAnnonce && annonces.length) {    // On vérifie qu'aucune annonce ne correspond à un id de nos données ET que le fichier .json ait été chargé au préalable (asynchrone) pour rediriger vers une 404
      navigate("/404")
    } else {
      setCurrentAnnonce(selectedAnnonce);
    }
  }, [id, annonces]);


    return currentAnnonce && (
      <div id="fiche_logement">
        <Slideshow pictures={currentAnnonce.pictures}/>
        <LogementInfos currentAnnonce={currentAnnonce}/>
      </div>
    );
  }