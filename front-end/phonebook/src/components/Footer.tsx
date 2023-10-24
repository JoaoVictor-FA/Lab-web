import Style from "./style-components/Footer.module.css";

function Footer (){
    return(
        <footer className={Style.footer}>
            <p>Copyright &copy; 2023 - Projeto realizado por <a href="https://github.com/elcarvalhogoncalves" target="_blank">Gabriel C. Gonçalves</a> e  <a href="https://github.com/JoaoVictor-FA" target="_blank">João Victor Florêncio</a>.</p>
        </footer>
    )
}

export default Footer