import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { buscarVaga } from '../services/vagasService';

function DetalhesVaga({ id }) {
  const [vaga, setVaga] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    let ativo = true;

    async function carregar() {
      try {
        const resultado = await buscarVaga(id);
        if (ativo) setVaga(resultado);
      } catch (err) {
        if (ativo) {
          setErro(err instanceof Error ? err.message : 'Não foi possível carregar a vaga.');
        }
      } finally {
        if (ativo) setLoading(false);
      }
    }

    carregar();

    // Evita atualizar um componente que já saiu da tela.
    return () => {
      ativo = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="pagina">
        <p role="status">Carregando vaga...</p>
      </main>
    );
  }

  if (erro) {
    return (
      <main className="pagina">
        <h2>Não foi possível abrir a vaga</h2>
        <p className="erro" role="alert">{erro}</p>
        <Link to="/">← Voltar para as vagas</Link>
      </main>
    );
  }

  return (
    <main className="pagina">
      <Link to="/">← Voltar para as vagas</Link>
      <div className="vaga__topo">
        <div className="vagas__avatar">{vaga.empresa[0]}</div>
        <div>
          <small>{vaga.empresa}</small>
          <h2>{vaga.cargo}</h2>
        </div>
      </div>
      <p>
        <span className="vagas__badge">{vaga.salario}</span>{' '}
        <span className="vagas__badge">{vaga.modelo}</span>
      </p>
      <p className="vaga__descricao">{vaga.descricao}</p>
    </main>
  );
}

function VagaPage() {
  const { id } = useParams();

  // Ao mudar /vagas/:id, o componente recomeça do estado de carregamento.
  return <DetalhesVaga key={id} id={id} />;
}

export default VagaPage;
