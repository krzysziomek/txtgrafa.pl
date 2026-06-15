import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Paczka } from "./pages/Paczka";
import { Rozne } from "./pages/Rozne";
import { Helikopter } from "./pages/Helikopter";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/paczka" element={<Paczka />} />
          <Route path="/rozne" element={<Rozne />} />
          <Route path="/helikopter" element={<Helikopter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;