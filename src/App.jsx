import { Route, Routes } from "react-router-dom";
import Home from "./sections/Home";
import Boards from "./sections/Boards";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teams/" element={<Boards />} />
    </Routes>
  );
};

export default App;
