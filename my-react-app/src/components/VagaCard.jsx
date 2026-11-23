import { Link } from 'react-router';

function VagaCard({ id, empresa, cargo, salario, modelo, publicada, tipo, area, descricao, mostrarDetalhes = false, mostrarLink = true }) {
  return (
    <div className="vagas__card">
      <div className="vagas__avatar">{empresa[0]}</div>
      <div className="vagas__body">
        <small>{empresa}</small>
        <p className="vagas__title">{cargo}</p>
        <span className="vagas__badge">{salario}</span>
        <span className="vagas__badge vagas__badge--highlight">
          {modelo}
        </span>
        {mostrarDetalhes && (
          <div className="vagas__detalhes">
            <p><strong>Tipo:</strong> {tipo}</p>
            <p><strong>Área:</strong> {area}</p>
            <p><strong>Descrição:</strong> {descricao}</p>
          </div>
        )}
      </div>
      <div className="vagas__actions">
        <span>{publicada}</span>
        {mostrarLink && <Link to={`/vagas/${id}`}>Ver vaga</Link>}
      </div>
    </div>
  );
}

export default VagaCard;
