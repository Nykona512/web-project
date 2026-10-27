import DepoimentoCard from "./DepoimentoCard"

function Depoimentos({depoimentos}){
    return(
        <>
        <section className="depoimentos">
            <h2>Quem já usa o OpenBoard</h2>
            <p>Depoimentos de recrutadores e candidatos que ja fecharam vaga por aqui.</p>

            {depoimentos.map((depoimento) => (
                <DepoimentoCard
                    declaracao={depoimento.declaracao}
                    usuario={depoimento.usuario}
                    cargo={depoimento.cargo}
                ></DepoimentoCard>      
            ))}

            <div className="depoimentos__list">
                <div>
                    <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
                    {/* <img src="" alt="avatar"/> */}
                    <p>Lucas Vergara</p>
                    <span>Frontend engineer - Betha</span>
                </div>
                <div>
                    <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
                    {/* <img src="" alt="avatar"/> */}
                    <p>Lucas Vergara</p>
                    <span>Frontend engineer - Betha</span>
                </div>
                <div>
                    <p>"Encontrei minha vaga atual scrollando num sábado. Aplicação em dois cliques."</p>
                    {/* <img src="" alt="avatar"/> */}
                    <p>Lucas Vergara</p>
                    <span>Frontend engineer - Betha</span>
                </div>
            </div>
            
        </section>
        </>
    )
}

export default Depoimentos