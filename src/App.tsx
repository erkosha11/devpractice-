import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";
import Courses from "./pages/Courses/Courses";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/courses"} element={<Courses/>} />
    </Routes>
  );
}

export default App;
