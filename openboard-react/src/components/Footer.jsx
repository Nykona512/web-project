import { Link } from 'react-router';

function Footer() {
  return (
    <footer>
      <p>
        <strong>OpenBoard</strong> 2026 - Todos os direitos reservados
      </p>

      <nav aria-label="Navegação do rodapé">
        {/* Apenas a página de publicação existe no projeto atualmente. */}
        <span>Entrar</span>
        <Link to="/publicar">Publicar vaga</Link>
        <span>Sobre</span>
        <span>Privacidade</span>
      </nav>
    </footer>
  );
}

export default Footer;
