import Header from "../components/Header/header";
import Carrousel from "../components/Accueil/carrousel";
import Expertise from "../components/Accueil/expertise";

export default function Home() {
  return (
    <div>
      <Header />
      <Carrousel />
      <Expertise />
    </div>
  );
}
