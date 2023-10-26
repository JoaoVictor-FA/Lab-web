import Style from "./style-components/Search.module.css";
import seachIcon from "../assets/imagens/search.svg";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Search() {
    const {setSearchInput} = useContext(GlobalContext);
    function changeSearchInput(input: string) {
        setSearchInput(input);
    }
    return (
        <>
            <section className={Style.search}>
                <input onChange={(e) => changeSearchInput(e.target.value)} className={Style.input} placeholder="Procurar..." type="text" name="" id=""/>
                <i className={Style.icon}><img src={seachIcon} alt="" /></i>
            </section>
        </>
    );
}

export default Search;

