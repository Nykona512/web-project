import { Link } from 'react-router';

function Header(){
    return (
        <>
        <header>
            <h1>OpenBoard</h1>
            <div>
                <a id="link-google" href="http://google.com">Entrar</a>
                <Link className="btn" to="/publicar">Publicar vaga $299</Link>
            </div>
        </header>
        </>
    )
}

export default Header