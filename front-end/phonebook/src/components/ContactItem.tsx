import Style from "./style-components/ContactItem.module.css";
import Edit from "../assets/imagens/edit.svg";
import Trash from "../assets/imagens/trash.svg";
import Tag from "./Tag";
import Copy from "./Copy";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import axios from "../axios";

interface IContact {
    id: number;
    name: string;
    phone: string;
    email: string;
    photo: string;
    tags: ITag[];
}
interface ITag {
    name: string;
}


function ContactItem( props : {order: number, contact: IContact, show: boolean} ) {
    const {showOrder} = useContext(GlobalContext);

    function deleteContact(id: number) {
        axios.delete('', {
            data : {
                id: id,
            }
        })
        window.location.reload();
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
                                    {props.contact.tags?.map((tag, index) => (
                                        <Tag key={index} name={tag.name} />
                                    ))}
                                </div>
                            </div>
                            <span>
                                <p>Phone:</p>
                                <p>{props.contact.phone}<Copy data={props.contact.phone} /></p>                                
                            </span>
                            <span>
                                <p>E-mail:</p>
                                <p>{props.contact.email}<Copy data={props.contact.email} /></p>
                                
                            </span>
                        </div>
                    </div>
                    <div className={Style.iconsShowDetails}>
                        <i>
                            <Link to={`/contacts/edit/${props.contact.id}`}>
                                <img src={Edit} alt="" />
                            </Link>
                        </i>
                        <i className={Style.delete} onClick={() => deleteContact(props.contact.id)}>
                            <img src={Trash} alt="" />
                        </i>
                    </div>

                </li>
            </>
        )
    } else {
        return (
            <>
                <li className={` ${Style.contact} ${props.order%2 === 0 ? Style.order_even : Style.order_odd}`}>
                    <div className={Style.perfil}>
                        <figure style={{backgroundImage: `url(${props.contact.photo})`,}} className={Style.photo} onClick={() => showOrder(props.order)}/>
                        <div className={Style.name_tag}>
                            <p onClick={() => showOrder(props.order)}>{props.contact.name}</p>
                            <div className={Style.tags}>
                                {props.contact.tags?.map((tag, index) => (
                                    <Tag key={index} name={tag.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={Style.number}>
                        <p>{props.contact.phone}</p>
                        <Copy data={props.contact.phone} />
                    </div>
                </li>
            </>
        );
    }
}

export default ContactItem