import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";

const App = () => (

      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<Index />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
);

export default App;
