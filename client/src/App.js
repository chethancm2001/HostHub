import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginMain from "./pages/LoginMain";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<LoginMain />} />\
        <Route path="/register" exact element={<RegisterPage />} />
       
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
