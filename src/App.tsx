import "./App.css";
import ThreeDemoPage from "./pages/ThreeDemoPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="demo">
          <Route path="three" element={<ThreeDemoPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
