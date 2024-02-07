import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AnnoncesProvider } from './contexts/AnnoncesContext';
// import Layout from  './components/Layout/Layout'
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import Error404 from "./pages/Error404";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <AnnoncesProvider> */}
        {/* <Layout> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche_logement" element={<FicheLogement />} />
            <Route path="/a_propos" element={<APropos />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        {/* </Layout> */}
      {/* </AnnoncesProvider> */}
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
