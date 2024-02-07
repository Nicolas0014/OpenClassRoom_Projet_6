import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
// import { AnnoncesProvider } from './contexts/AnnoncesContext';
import Layout from  './components/Layout/Layout'
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import Error404 from "./pages/Error404";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <AnnoncesProvider> */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche_logement" element={<FicheLogement />} />
            <Route path="/a_propos" element={<APropos />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      {/* </AnnoncesProvider> */}
    </Router>
  </React.StrictMode>
);
