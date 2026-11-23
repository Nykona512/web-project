import { useEffect, useState } from 'react';
import VagaCard from './VagaCard';

const TIPOS = ['Efetivo', 'Estágio', 'Temporário'];
const AREAS = ['Engenharia', 'Design', 'Gestão'];

function Vagas({ vagas }) {
  const [tiposMarcados, setTiposMarcados] = useState([]);
  const [areasMarcadas, setAreasMarcadas] = useState([]);

  // Marca/desmarca um item sempre criando um array novo (spread / filter)
  function alternar(lista, setLista, valor) {
    if (lista.includes(valor)) {
      setLista(lista.filter((item) => item !== valor));
    } else {
      setLista([...lista, valor]);
    }
  }

  function limpar() {
    setTiposMarcados([]);
    setAreasMarcadas([]);
  }

  // Dentro de um grupo vale "ou"; entre grupos vale "e". Grupo vazio = sem filtro.
  const vagasFiltradas = vagas.filter((vaga) => {
    const passaTipo = tiposMarcados.length === 0 || tiposMarcados.includes(vaga.tipo);
    const passaArea = areasMarcadas.length === 0 || areasMarcadas.includes(vaga.area);
    return passaTipo && passaArea;
  });

  useEffect(() => {
    document.title = `${vagasFiltradas.length} vagas | OpenBoard`;
  }, [vagasFiltradas.length]);

  return (
    <>
      <section className="vagas">
        <div className="vagas__header">
          <h2>Últimas Vagas</h2>
          <span aria-live="polite">{vagasFiltradas.length} vagas - Atualizado agora</span>
        </div>

        {vagasFiltradas.length === 0 && <p role="status">Nenhuma vaga encontrada</p>}

        {vagasFiltradas.map((vaga) => (
          <VagaCard key={vaga.id} {...vaga} />
        ))}
      </section>

      <aside className="filtros">
        <div className="filtros__header">
          <h3>Filtros</h3>
          <button type="button" className="filtros__limpar" onClick={limpar}>
            limpar
          </button>
        </div>

        <div className="filtros__itens">
          <p>Tipo de vaga</p>
          {TIPOS.map((tipo) => (
            <label key={tipo}>
              <input
                type="checkbox"
                checked={tiposMarcados.includes(tipo)}
                onChange={() => alternar(tiposMarcados, setTiposMarcados, tipo)}
              />{' '}
              {tipo}
            </label>
          ))}
        </div>

        <div className="filtros__itens">
          <p>Área</p>
          {AREAS.map((area) => (
            <label key={area}>
              <input
                type="checkbox"
                checked={areasMarcadas.includes(area)}
                onChange={() => alternar(areasMarcadas, setAreasMarcadas, area)}
              />{' '}
              {area}
            </label>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Vagas;
