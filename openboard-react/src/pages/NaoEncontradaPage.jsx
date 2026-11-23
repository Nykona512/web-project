import { Link } from 'react-router';

function NaoEncontradaPage() {
  return (
    <section className="pagina">
      <h2>404</h2>
      <p>Página não encontrada.</p>
      <Link to="/">Voltar para a home</Link>
    </section>
  );
}

export default NaoEncontradaPage;
