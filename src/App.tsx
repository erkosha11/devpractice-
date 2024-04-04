import { Route, Routes } from "react-router-dom";
import { Landing } from "./pages/Landing/Landing";
import AppReactPage from "./pages/Courses/components/2/generalReactPage/AppReactPage";
import AppPythonPage from "./pages/Courses/components/1/generalPythonPage/AppPythonPage";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Landing />} />
      <Route path={"/python"} element={<AppPythonPage />} />
      <Route path={"/react"} element={<AppReactPage />} />
    </Routes>
  );
}

export default App;
