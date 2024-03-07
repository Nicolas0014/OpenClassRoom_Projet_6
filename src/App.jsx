import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from  './components/Layout/Layout'
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import Error404 from "./pages/Error404";
import './App.scss';

export default function App() {

    return (
        <Router>
            <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fiche_logement/:id" element={<FicheLogement />} />
                <Route path="/a_propos" element={<APropos />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            </Layout>
        </Router>
    );
  }


