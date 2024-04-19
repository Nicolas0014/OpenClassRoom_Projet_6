import { Link } from "react-router-dom";
import './Error404.scss';

export default function Error404() {

  return (
    <div className="page error_page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}