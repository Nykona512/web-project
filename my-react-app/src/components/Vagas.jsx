function Vagas(){
    return (
        <>
            <div className="conteudo__header">
                <h2>Últimas vagas</h2>
                <span>7 vagas - atualizado agora</span>
            </div>

            <div className="card">
                <div className="card__avatar">
                    V
                </div>
                <div className="card__text">
                    <p>Vercel</p>
                    <h3 className="card__title">Full-stack Enginner </h3>
                    <span className="card__badge">R$20k - R$30k</span>
                    <span className="card__badge">Remoto</span>
                </div>
                <div className="card__actions">
                    <span>2h</span>
                    <a href="">candidatar-se</a>
                </div>
            </div>

            <div className="card">
                <div className="card__avatar card__avatar--grey">
                    V
                </div>
                <div className="card__text">
                    <p>Vercel</p>
                    <h3 className="card__title">Full-stack Enginner </h3>
                    <span className="card__badge">R$20k - R$30k</span>
                    <span className="card__badge">Remoto</span>
                </div>
                <div className="card__actions">
                    <span>2h</span>
                    <a href="">candidatar-se</a>
                </div>
            </div>

            <aside>
                <div className="conteudo__header">
                    <h3>Filtros</h3>
                    <a href="">limpar</a>
                </div>

                <div className="conteudo__filter">
                    <p>Tipo de vaga</p>

                    <label htmlFor="ck-efetivo">
                        <input type="checkbox" name="ck-efetivo" id="ck-efetivo"/> Efetivo
                    </label>
                    <label htmlFor="ck-estagio">
                        <input type="checkbox" name="ck-estagio" id="ck-estagio"/> Estágio
                    </label>
                    <label htmlFor="ck-meio">
                        <input type="checkbox" name="ck-meio" id="ck-meio"/> Meio período
                    </label>
                </div>
                <div className="conteudo__filter">
                    <p>Área</p>

                    <label htmlFor="ck-engenharia">
                        <input type="checkbox" name="ck-engenharia" id="ck-engenharia"/> Engenharia
                    </label>
                    <label htmlFor="ck-design">
                        <input type="checkbox" name="ck-design" id="ck-design"/> Design
                    </label>
                    <label htmlFor="ck-gestao">
                        <input type="checkbox" name="ck-gestao" id="ck-gestao"/> Gestão
                    </label>
                </div>
                <div className="conteudo__filter">
                    <p>Localização</p>

                    <label htmlFor="ck-sp">
                        <input type="checkbox" name="ck-sp" id="ck-sp"/> São Paulo
                    </label>
                    <label htmlFor="ck-sc">
                        <input type="checkbox" name="ck-sc" id="ck-sc"/> Santa Catarina
                    </label>
                    <label htmlFor="ck-rs">
                        <input type="checkbox" name="ck-rs" id="ck-rs"/> Rio Grande do Sul
                    </label>
                </div>
            </aside>
        </>
    )
}

export default Vagas
