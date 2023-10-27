import Header from "./Header";
import Style  from "./style-components/RegisterComponent.module.css";
import DoubleArrow from "../assets/imagens/chevron-double-right.svg";
import Illustration from "../assets/imagens/illustration.png";
import Footer from "./Footer";
import { SyntheticEvent, useState } from "react";
import TagRegister from "./TagRegister";
import { Link } from "react-router-dom";

interface ITag {
    name: string;
    checked: boolean;
}

function RegisterComponent() {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [photo, setPhoto] = useState<string>("");
    const [tags, setTags] = useState<ITag[]>([
        {
            name: "Work",
            checked: false
        }, 
        {
            name: "Family",
            checked: false    
        },
        {
            name: "Friend",
            checked: false
        },
        {
            name: "Colleague",
            checked: false
        },
        {
            name: "Emergency",
            checked: false  
        }
    ]);
    

    function changeNewRegisterTags(index: number){
        const newTags = [...tags];
        newTags[index].checked = !newTags[index].checked;
        setTags(newTags);
    }

    function sendRegister(e : SyntheticEvent){
        e.preventDefault();
        console.log("Submit");
    }

    return(
        <>
            <main className={Style.main}>
                <>
                    <Header />  
                </>
                <section className={Style.section}>
                    <div className={Style.path}>
                        <p><i className={Style.double_arrow}><img src={DoubleArrow} alt="" /></i>Add new contact</p>
                    </div>
                </section>
                <section className={Style.section_register}>
                    <form className={Style.form} onSubmit={(e : SyntheticEvent) => sendRegister(e)}>
                        <label>
                            <p>Nome<span className={Style.required}>*</span>:</p>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Add a name..." />
                        </label>
                        <label>
                            <p>Categoria:</p>
                            <div className={Style.tags}>
                                {tags.map((tag, index) => (
                                    <div onClick={() => changeNewRegisterTags(index)} key={index}>
                                        <TagRegister name={tag.name} checked={tag.checked} />
                                    </div>
                                ))}
                            </div>
                        </label>
                        <label>
                            <p>Phone<span className={Style.required}>*</span>:</p>
                            <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="(xx) x xxxx-xxxx" />
                        </label>
                        <label>
                            <p>E-mail<span className={Style.required}>*</span>:</p>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Add a e-mail..." />
                        </label>
                        <label>
                            <p>Photo:</p>
                            <input onChange={(e) => setPhoto(e.target.value)} type="text" placeholder="Add a image url..." />
                        </label>
                        <label>
                            <Link to={"../../"}><button type="button" id="cancel" className={`${Style.button} ${Style.cancel}`}>Cancel</button></Link>
                            <button type="submit"  id ="add" className={`${Style.button} ${Style.add}`}>Add</button>
                        </label>
                    </form>
                    <div className={Style.imagem}>
                        <figure>
                            <img src={Illustration} alt="" />
                        </figure>
                    </div>
                </section>
                <>
                    <Footer/>
                </>
            </main>
        </>
    );
}

export default RegisterComponent;