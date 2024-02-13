import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Slideshow from "../components/FicheLogement/Slideshow";

export default function FicheLogement({annonces}) {

  const { id } = useParams();
  const navigate = useNavigate();

  const [currentAnnonce, setCurrentAnnonce] = useState({});
  useEffect(() => {
    const selectedAnnonce = annonces.find((annonce) => annonce.id === id);
    if (!selectedAnnonce && annonces.length) {    // On vérifie qu'aucune annonce ne correspond à un id de nos données ET que le fichier .json ait été chargé au préalable (asynchrone) pour rediriger vers une 404
      navigate("/*")
    } else {
      setCurrentAnnonce(selectedAnnonce);
    }
  }, [id, annonces]);


    return currentAnnonce && (
      <div id="fiche_logement">
        <Slideshow pictures={currentAnnonce.pictures}/>
      </div>
    );
  }