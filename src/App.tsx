import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/courses"} element={<></>} />
    </Routes>
  );
}

export default App;
