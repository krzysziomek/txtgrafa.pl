import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Index } from '@/pages/Index';
import { Paczka } from '@/pages/Paczka';
import { Rozne } from '@/pages/Rozne';
import { Helikopter } from '@/pages/Helikopter';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/paczka" element={<Paczka />} />
          <Route path="/rozne" element={<Rozne />} />
          <Route path="/helikopter" element={<Helikopter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;