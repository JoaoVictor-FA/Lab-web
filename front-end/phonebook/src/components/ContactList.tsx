import Style from "./style-components/ContactList.module.css";
import ContactItem from "./ContactItem";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

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
function ContactList({contacts} : {contacts: IContact[]}) {
    const {order} = useContext(GlobalContext);

    return(
        <>
            <ul className={Style.list}>
                {contacts.map((contact, index) => (
                    <ContactItem key={index} order={index} contact={contact} show={(order === index) ? true : false}/>
                ))}
            </ul>
        </>
    )
} 

export default ContactList