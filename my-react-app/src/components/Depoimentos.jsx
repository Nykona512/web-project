import DepoimentoCard from './DepoimentoCard';
import depoimentos from '../data/depoimentos';

function Depoimentos() {
  return (
    <section className="depoimentos">
      <h2>Quem já usa o OpenBoard</h2>
      <p>Depoimentos de recrutadores e candidatos que já fecharam vaga por aqui.</p>

      <div className="depoimentos__list">
        {depoimentos.map((d) => (
          <DepoimentoCard key={d.id} {...d} />
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;
