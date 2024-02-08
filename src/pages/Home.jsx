import Banner from "../components/reusables/Banner";
import Cards from "../components/Home/Cards";

export default function Home({annonces}) {

  return (
    <div className="home">
      <Banner />
      <Cards annonces={annonces}/>
    </div>
  );
}