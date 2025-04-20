import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePublic from "./components/HomePublic";
import Home from "./components/Home";
import Login from "./components/Login";
import Empresa from "./components/Empresa";
import MiPerfil from "./components/MiPerfil";
import Meet from "./components/Meet";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePublic />} />
          <Route path="home" element={<Home />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="miperfil" element={<MiPerfil />} />
          <Route path="login" element={<Login />} />
          <Route path="/meet" element={<Meet />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
