import { useState } from "react";
import Hero from "./Hero";

function News() {
  const [email, setEmail] = useState('');
  const [erro, setErro] = useState('');
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const emailTratado = email.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTratado);

    if (!emailValido) {
      setErro('Digite um e-mail válido.');
      return;
    }

    setErro('');
    setEmail(emailTratado);
    setEnviado(true);
  }

  return (
    <Hero
      titulo="Vagas novas, toda quinta-feira"
      subtitulo="Um resumo curto das melhores vagas em startups direto no seu inbox."
    >
      {enviado ? (
        <p className="sucesso" role="status">
          Pronto! Enviaremos para {email}.
        </p>
      ) : (
        <div className="cadastro">
          <form onSubmit={handleSubmit} noValidate>
            <input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder="seu@mail.com"
              aria-label="Seu e-mail"
              aria-invalid={Boolean(erro)}
              aria-describedby={erro ? 'newsletter-erro' : undefined}
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErro('');
              }}
            />
            <button type="submit" className="btn">Assinar</button>
          </form>
          {erro && <p id="newsletter-erro" className="erro" role="alert">{erro}</p>}
        </div>
      )}
    </Hero>
  );
}

export default News;
