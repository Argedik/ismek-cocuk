import "./index.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/pages/main";
import DetailsMain from "./components/details/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/egitimler" element={<DetailsMain />}></Route>

        {/* <Route path="/anasayfa" element={<Home />}></Route>
        <Route path="/hakkimizda" element={<Home />}></Route>
        <Route path="/egitimler" element={<Home />}></Route>
        <Route path="/cocuklaricin" element={<Home />}></Route>
        <Route path="/iletisim" element={<Home />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
