import "./App.css";
import DemoChatPage from "./pages/DemoChatPage";
import DemoThreePage from "./pages/DemoThereePage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="demo">
          <Route path="three" element={<DemoThreePage />} />
          <Route path="chat" element={<DemoChatPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
