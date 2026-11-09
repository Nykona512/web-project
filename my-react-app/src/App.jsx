import './App.css';
import { Routes, Route } from 'react-router';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import VagaPage from './pages/VagaPage';
import NaoEncontradaPage from './pages/NaoEncontradaPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/vagas/:id" element={<VagaPage />} />
        <Route path="*" element={<NaoEncontradaPage />} />
      </Route>
    </Routes>
  );
}

export default App;
