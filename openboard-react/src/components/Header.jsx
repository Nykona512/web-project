import { useEffect, useState } from 'react';
import { Link } from 'react-router';

const CHAVE_TEMA = 'openboard-tema';

function Header() {
  const [modoEscuro, setModoEscuro] = useState(() => {
    try {
      return localStorage.getItem(CHAVE_TEMA) === 'escuro';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.tema = modoEscuro ? 'escuro' : 'claro';

    try {
      localStorage.setItem(CHAVE_TEMA, modoEscuro ? 'escuro' : 'claro');
    } catch {
      // O tema funciona na sessão mesmo se o armazenamento for bloqueado.
    }
  }, [modoEscuro]);

  return (
    <header>
      <h1>OpenBoard</h1>
      <div>
        <a id="link-google" href="http://google.com">Entrar</a>
        <button
          type="button"
          className="tema-botao"
          onClick={() => setModoEscuro((anterior) => !anterior)}
          aria-pressed={modoEscuro}
          aria-label={modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
          title={modoEscuro ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          <span aria-hidden="true">{modoEscuro ? '☀️' : '🌙'}</span>
          <span>{modoEscuro ? 'Modo claro' : 'Modo escuro'}</span>
        </button>
        <Link className="btn" to="/publicar">Publicar vaga $299</Link>
      </div>
    </header>
  );
}

export default Header;
