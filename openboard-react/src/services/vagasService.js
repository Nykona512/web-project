import { listarVagasSalvas } from '../utils/vagasStorage';

const BASE_URL = '/api';

const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

export async function buscarVagas() {
  await esperar(800); // mantém o carregamento visível para o teste do RF2(a)

  try {
    const res = await fetch(`${BASE_URL}/vagas.json`);

    if (!res.ok) {
      throw new Error('Não foi possível carregar as vagas.');
    }

    // O Vite pode devolver index.html (status 200) quando o JSON não existe.
    // Verificamos o tipo antes de tentar interpretar a resposta como JSON.
    const tipo = res.headers.get('content-type') || '';
    if (!tipo.includes('application/json')) {
      throw new Error('Não foi possível carregar as vagas.');
    }

    const vagas = await res.json();
    if (!Array.isArray(vagas)) {
      throw new Error('Não foi possível carregar as vagas.');
    }

    return vagas;
  } catch {
    // Erro de rede, 404, HTML no lugar do JSON ou JSON inválido.
    throw new Error('Não foi possível carregar as vagas.');
  }
}

export async function buscarVaga(id) {
  const vagas = await buscarVagas();
  const todasAsVagas = [...vagas, ...listarVagasSalvas()];
  const vaga = todasAsVagas.find((v) => v.id === Number(id));
  if (!vaga) throw new Error(`Vaga #${id} não encontrada.`);
  return vaga;
}
