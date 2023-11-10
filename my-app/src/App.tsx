import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FontDetailPage from "./Pages/FontDetailPage/FontDetailPage";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  const helmetContext = {};
  return (
    <div className="App">
      <HelmetProvider context={helmetContext}>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route
            path="/speciment/:family"
            element={<FontDetailPage></FontDetailPage>}
          ></Route>
        </Routes>
      </HelmetProvider>
    </div>
  );
}

export default App;
