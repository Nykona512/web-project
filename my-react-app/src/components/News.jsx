function News(){
    return (
        <>
        <section className="hero">
            <h2>Vagas novas, toda quinta-feira</h2>
            <p>Um resumo curto das melhores vagas direto no seu inbox</p>
            <form action="">
                <input className="form__input" type="email" name="email" id="email" placeholder="seu@email.com"/>
                <button className="btn" type="submit">Assinar</button>
            </form>
        </section>
        </>
    )
}

export default News
