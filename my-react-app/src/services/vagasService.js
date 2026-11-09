const BASE_URL = '/api';

const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

export async function buscarVagas() {
  await esperar(800); // só para enxergar o loading
  const res = await fetch(`${BASE_URL}/vagas.json`);
  if (!res.ok) {
    throw new Error('Não foi possível carregar as vagas.');
  }
  return res.json();
}

export async function buscarVaga(id) {
  const vagas = await buscarVagas();
  const vaga = vagas.find((v) => v.id === Number(id));
  if (!vaga) throw new Error(`Vaga #${id} não encontrada.`);
  return vaga;
}
