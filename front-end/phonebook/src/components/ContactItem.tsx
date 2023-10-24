import Style from "./style-components/ContactItem.module.css";
import defaultImage from "../assets/imagens/default.png";

import Tag from "./Tag";

interface Contact {
    id: number;
    name: string;
    phone: string;
    tag: Tag[];
}
interface Tag {
    name: string;
}
function ContactItem( props : {order: number, contact: Contact} ) {
    return (
        <>
            <li className={`${Style.contact} ${props.order%2 === 0 ? Style.order_even : Style.order_odd}`}>
                <div className={Style.perfil}>
                    <figure>
                        <img src={defaultImage} alt="" />
                    </figure>
                    <div className={Style.name_tag}>
                        <p>{props.contact.name}</p>
                        <div className={Style.tags}>
                            {props.contact.tag.map((tag, index) => (
                                <Tag key={index} name={tag.name} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={Style.number}>
                    <p>{props.contact.phone}</p>
                    <i></i>
                </div>
            </li>
        </>
    );
}

export default ContactItem