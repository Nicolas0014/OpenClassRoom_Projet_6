import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Layout from  './components/Layout/Layout'
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import Error404 from "./pages/Error404";

export default function App() {

    const [annonces, setAnnonces] = useState([]);

    useEffect(() => {
        fetch('/datas/annonces.json')
          .then(response => response.json())
          .then(data => setAnnonces(data))
          .catch(error => console.error('Erreur lors de la récupération des annonces', error));
    }, []);


    return (
        <Router>
            <Layout>
            <Routes>
                <Route path="/" element={<Home annonces={annonces} />} />
                <Route path="/fiche_logement/:id" element={<FicheLogement annonces={annonces} />} />
                <Route path="/a_propos" element={<APropos />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            </Layout>
        </Router>
    );
  }


