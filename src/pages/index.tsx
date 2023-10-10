import Header from "../components/Header/header";
import Carrousel from "../components/Accueil/carrousel";
import Expertise from "../components/Accueil/expertise";
import Reference from "../components/Accueil/reference";
import Partenaire from "../components/Accueil/partenaire";

export default function Home() {
  return (
    <div>
      <Header />
      <Carrousel />
      <Expertise />
      <Reference />
      <Partenaire />
    </div>
  );
}
