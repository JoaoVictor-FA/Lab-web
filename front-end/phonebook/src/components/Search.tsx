import Style from "./style-components/Search.module.css";
import seachIcon from "../assets/imagens/search.svg";

function Search() {
    return (
        <>
            <section className={Style.search}>
                <input className={Style.input} placeholder="Procurar..." type="text" name="" id=""/>
                <i className={Style.icon}><img src={seachIcon} alt="" /></i>
            </section>
        </>
    );
}

export default Search;

