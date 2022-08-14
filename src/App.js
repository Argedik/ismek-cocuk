import EducationForKids from "./components/pages/EducationForKids";
import Educations from "./components/pages/Educations";
import Home from "./components/pages/Home";
import Info from "./components/pages/Info";
import Footer from "./components/pages/shared/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Home />
      <Educations />
      <EducationForKids />
      <Info />
      <Footer />
    </>
  );
}

export default App;
