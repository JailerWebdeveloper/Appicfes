import { BrowserRouter,Route,Routes ,Link, Navigate } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
