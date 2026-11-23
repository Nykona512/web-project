const CHAVE_VAGAS = 'openboard-vagas';

// Se ainda não houver cadastros, devolve uma lista vazia.
export function listarVagasSalvas() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_VAGAS) || '[]');
    return Array.isArray(dados) ? dados : [];
  } catch {
    // Um dado inválido no navegador não deve impedir a exibição da API.
    return [];
  }
}

export function salvarVagaLocal(vaga) {
  const vagas = listarVagasSalvas();
  // Criamos um novo array, sem modificar o anterior.
  localStorage.setItem(CHAVE_VAGAS, JSON.stringify([...vagas, vaga]));
}
