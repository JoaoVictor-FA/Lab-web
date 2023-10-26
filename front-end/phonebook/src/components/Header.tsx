import { Link } from "react-router-dom";
import Style from "./style-components/Header.module.css";
import PhoneAdd from "../assets/imagens/telephone-plus-fill.svg";
function Header() {
    return (
        <>
        <header className={Style.header}>
            <h1 className={Style.title}>Phonebook</h1>
            <Link to="/contacts/register">
            <button type="button" className={`${Style.buttonAdd}`}>
                <i><img src={PhoneAdd} alt="" /></i>
                Add contact
            </button>
            </Link>
        </header>
        </>
    );
}

export default Header;