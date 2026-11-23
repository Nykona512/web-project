import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { buscarVagas } from '../services/vagasService';
import { listarVagasSalvas } from '../utils/vagasStorage';
import Hero from '../components/Hero';
import Vagas from '../components/Vagas';
import News from '../components/News';
import Depoimentos from '../components/Depoimentos';

function HomePage() {
  const [vagas, setVagas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    async function carregar() {
      try {
        const vagasDaApi = await buscarVagas();
        const vagasCadastradas = listarVagasSalvas();
        setVagas([...vagasDaApi, ...vagasCadastradas]);
      } catch (err) {
        setErro(err.message);
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []); // [] = só quando a página monta

  return (
    <>
      <Hero
        titulo="As melhores vagas em startups de tecnologia"
        subtitulo="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras."
      >
        <Link id="btn-hero" className="btn" to="/publicar">Publicar vaga $299</Link>
      </Hero>

      <main className="conteudo">
        {loading && (
          <p className="vagas__vazio">Carregando vagas...</p>
        )}
        {erro && <p className="erro">{erro}</p>}
        {!loading && !erro && <Vagas vagas={vagas} />}
      </main>

      <News />
      <Depoimentos />
    </>
  );
}

export default HomePage;
