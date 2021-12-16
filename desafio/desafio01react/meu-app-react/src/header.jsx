import './style/header.css';

function Header() {
    return (
        <header>
            <h1>Curiosidades de Tecnologia</h1>
            <p id='subtitulo'>
                Tudo aquilo que você sempre quis saber sobre o mundo Tech, em um único lugar
            </p>
            <a href="#">Home</a>
            <a href="#">Notícias</a>
            <a href="#">Curiosidades</a>
            <a href="#">Fale Conosco</a>
        </header> 
    );
}

export default Header;