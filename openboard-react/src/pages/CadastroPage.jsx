import { useState } from 'react';
import { Link } from 'react-router';
import VagaCard from '../components/VagaCard';
import { salvarVagaLocal } from '../utils/vagasStorage';

const CAMPOS_INICIAIS = {
  empresa: '',
  cargo: '',
  salario: '',
  modelo: '',
  tipo: '',
  area: '',
  descricao: '',
};

function CadastroPage() {
  const [campos, setCampos] = useState(CAMPOS_INICIAIS);
  const [erro, setErro] = useState('');
  const [vagaCriada, setVagaCriada] = useState(null);

  function alterarCampo(event) {
    const { name, value } = event.target;
    // Novo objeto: não modificamos diretamente o estado do React.
    setCampos((atual) => ({ ...atual, [name]: value }));
    setErro('');
  }

  function enviar(event) {
    event.preventDefault();

    // trim() impede que um campo apenas com espaços seja aceito.
    const dados = Object.fromEntries(
      Object.entries(campos).map(([chave, valor]) => [chave, valor.trim()]),
    );

    if (Object.values(dados).some((valor) => valor === '')) {
      setErro('Preencha todos os campos obrigatórios.');
      return; // Mantém os valores e não envia o formulário.
    }

    const novaVaga = {
      id: Date.now(),
      ...dados,
      publicada: 'agora',
    };

    try {
      salvarVagaLocal(novaVaga);
      setErro('');
      setVagaCriada(novaVaga);
    } catch {
      // Se o navegador bloquear o armazenamento, não mostramos sucesso falso.
      setErro('Não foi possível salvar a vaga. Verifique o armazenamento do navegador.');
    }
  }

  return (
    <main className="pagina cadastro-vaga">
      {vagaCriada ? (
        <section className="cadastro-vaga__confirmacao" aria-labelledby="cadastro-sucesso">
          <h2 id="cadastro-sucesso">Vaga cadastrada com sucesso!</h2>
          <p className="sucesso" role="status">Confira os dados da vaga que você cadastrou:</p>
          <VagaCard {...vagaCriada} mostrarDetalhes mostrarLink={false} />
          <Link to="/" className="cadastro-vaga__voltar">← Voltar para as vagas</Link>
        </section>
      ) : (
        <section aria-labelledby="cadastro-titulo">
          <h2 id="cadastro-titulo">Publicar uma vaga</h2>
          <p className="cadastro-vaga__introducao">Preencha os dados para cadastrar uma oportunidade no OpenBoard.</p>

          <form className="cadastro-vaga__formulario" onSubmit={enviar} noValidate>
            <div className="cadastro-vaga__campo">
              <label htmlFor="empresa">Empresa</label>
              <input id="empresa" name="empresa" type="text" required value={campos.empresa} onChange={alterarCampo} />
            </div>

            <div className="cadastro-vaga__campo">
              <label htmlFor="cargo">Cargo</label>
              <input id="cargo" name="cargo" type="text" required value={campos.cargo} onChange={alterarCampo} />
            </div>

            <div className="cadastro-vaga__campo">
              <label htmlFor="salario">Salário</label>
              <input id="salario" name="salario" type="text" required value={campos.salario} onChange={alterarCampo} placeholder="Ex.: R$ 5k-8k" />
            </div>

            <div className="cadastro-vaga__campo">
              <label htmlFor="modelo">Modelo</label>
              <select id="modelo" name="modelo" required value={campos.modelo} onChange={alterarCampo}>
                <option value="" disabled>Selecione o modelo</option>
                <option value="Remoto">Remoto</option>
                <option value="Híbrido">Híbrido</option>
                <option value="Presencial">Presencial</option>
              </select>
            </div>

            <div className="cadastro-vaga__campo">
              <label htmlFor="tipo">Tipo de vaga</label>
              <select id="tipo" name="tipo" required value={campos.tipo} onChange={alterarCampo}>
                <option value="" disabled>Selecione o tipo</option>
                <option value="Efetivo">Efetivo</option>
                <option value="Estágio">Estágio</option>
                <option value="Temporário">Temporário</option>
              </select>
            </div>

            <div className="cadastro-vaga__campo">
              <label htmlFor="area">Área</label>
              <select id="area" name="area" required value={campos.area} onChange={alterarCampo}>
                <option value="" disabled>Selecione a área</option>
                <option value="Engenharia">Engenharia</option>
                <option value="Design">Design</option>
                <option value="Gestão">Gestão</option>
              </select>
            </div>

            <div className="cadastro-vaga__campo cadastro-vaga__campo--largo">
              <label htmlFor="descricao">Descrição</label>
              <textarea id="descricao" name="descricao" rows="4" required value={campos.descricao} onChange={alterarCampo} placeholder="Descreva a oportunidade em uma ou duas frases." />
            </div>

            {erro && (
              <p id="cadastro-erro" className="erro cadastro-vaga__erro" role="alert">{erro}</p>
            )}

            <button type="submit" className="btn cadastro-vaga__enviar">Publicar vaga</button>
          </form>
        </section>
      )}
    </main>
  );
}

export default CadastroPage;
