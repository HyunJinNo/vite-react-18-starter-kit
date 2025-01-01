import "./styles/App.css";
import Layout from "./Layout";
import FirstPage from "./pages/first/FirstPage";
import HomePage from "./pages/home/HomePage";
import SecondPage from "./pages/second/SecondPage";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Route>
    </Routes>
  );
};

export default App;
