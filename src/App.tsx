import { HashRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Paczka } from "./pages/Paczka";
import { Rozne } from "./pages/Rozne";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/paczka" element={<Paczka />} />
          <Route path="/rozne" element={<Rozne />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;