import './Rodape.css'

export const Rodape = () => {
    return (
      <footer className="rodape">
        <div className="container">
          <div className="redes-socias">
            <a href="https://www.facebook.com/AluraCursosOnline/?locale=pt_BR" target="_blank">
              <img src="/imagens/fb.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com/AluraOnline" target="_blank">
              <img src="/imagens/tw.png" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/aluraonline/" target="_blank">
              <img src="/imagens/ig.png" alt="Instagram" />
            </a>
          </div>
          <img src="/imagens/logo.png" alt="logo" />
          <p>Desenvolvido pela Alura.</p>
        </div>
      </footer>
    );
  }