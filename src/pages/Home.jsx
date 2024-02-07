import Banner from "../components/Home/Banner";
import Cards from "../components/Home/Cards";

export default function Home({annonces}) {

  return (
    <div id="home">
      <Banner />
      <Cards annonces={annonces}/>
    </div>
  );
}