import DepoimentoCard from './DepoimentoCard';

function Depoimentos({ depoimentos }) {
  return (
    <section className="depoimentos">
      <h2>Quem já usa o OpenBoard</h2>
      <p>Depoimentos de recrutadores e candidatos que já fecharam vaga por aqui.</p>

      <div className="depoimentos__list">
        {depoimentos.map((depoimento) => (
          <DepoimentoCard key={depoimento.id} {...depoimento} />
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;
