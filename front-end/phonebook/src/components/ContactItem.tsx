import Style from "./style-components/ContactItem.module.css";
import Copy from "../assets/imagens/copy.svg";
import Edit from "../assets/imagens/edit.svg";
import Trash from "../assets/imagens/trash.svg";
import Tag from "./Tag";
import { useState } from "react";

interface IContact {
    id: number;
    name: string;
    phone: string;
    email: string;
    photo: string;
    tag: ITag[];
}
interface ITag {
    name: string;
}
function ContactItem( props : {order: number, contact: IContact, show: boolean, showContact: (order : number) => void} ) {
    const hendlerShowContact = () => {
        props.showContact(props.order);
    }
    if(props.show) {
        return (
            <>
                <li className={`${Style.contactShowDetails} ${props.order%2 === 0 ? Style.order_even : Style.order_odd}`}>
                    <div className={Style.perfil}>
                        <figure style={{backgroundImage: `url(${props.contact.photo})`,}} className={Style.photoShowDetails}/>
                        <div className={Style.name_tagShowDetails}>
                            
                            <div>
                                <p className={Style.name}>{props.contact.name}</p>
                                <div className={Style.tags}>
                                    {props.contact.tag.map((tag, index) => (
                                        <Tag key={index} name={tag.name} />
                                    ))}
                                </div>
                            </div>

                            <span>
                                <p>Phone:</p>
                                <p>{props.contact.phone}<i onClick={() => navigator.clipboard.writeText(props.contact.phone)}><img src={Copy} alt="" /></i></p>
                                
                            </span>

                            <span>
                                <p>E-mail:</p>
                                <p>{props.contact.email}<i onClick={() => navigator.clipboard.writeText(props.contact.email)}><img src={Copy} alt="" /></i></p>
                            </span>

                        </div>
                    </div>
                    <div className={Style.iconsShowDetails}>
                        <i><img src={Edit} alt="" /></i>
                        <i><img src={Trash} alt="" /></i>
                    </div>

                </li>
            </>
        )
    } else {
        return (
            <>
                <li className={`${Style.contact} ${props.order%2 === 0 ? Style.order_even : Style.order_odd}`}>
                    <div className={Style.perfil}>
                        <figure className={Style.photo} onClick={() => hendlerShowContact()}>
                            <img src={props.contact.photo} alt="" />
                        </figure>
                        <div className={Style.name_tag}>
                            <p onClick={() => hendlerShowContact()}>{props.contact.name}</p>
                            <div className={Style.tags}>
                                {props.contact.tag.map((tag, index) => (
                                    <Tag key={index} name={tag.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={Style.number}>
                        <p>{props.contact.phone}</p>
                        <i onClick={() => navigator.clipboard.writeText(props.contact.phone)}><img src={Copy} alt="" /></i>
                    </div>
                </li>
            </>
        );
    }
}

export default ContactItem