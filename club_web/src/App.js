import "./Stylesheets/Root.css";
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import Achievements from "./Pages/Achievements";

function App() {
  return (
    <>
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