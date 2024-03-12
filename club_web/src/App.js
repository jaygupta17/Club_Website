import "./Stylesheets/Root.css";
import NavBar from "./Components/Navbar";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import Achievements from "./Pages/Achievements";

function App() {
  return (
    <>
        <NavBar />
      {/* <BrowserRouter>
        <Routes>
          <Route element={<Achievements />} path="/achievements" />
        </Routes>
      </BrowserRouter> */}
      <Achievements />
    </>
  );
}

export default App;