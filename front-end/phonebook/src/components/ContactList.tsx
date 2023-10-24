import Style from "./style-components/ContactList.module.css";
import ContactItem from "./ContactItem";
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
function ContactList({contacts} : {contacts: IContact[]}) {
    const [orderNumber, setOrderNumber] = useState<number|null>(null);
    function showContact(order: number) {
        setOrderNumber(order);
    }

    return(
        <>
            <ul className={Style.list}>
                {contacts.map((contact, index) => (
                    <ContactItem key={index} order={index} contact={contact} show={orderNumber === index ? true : false} showContact={showContact} />
                ))}
            </ul>
        </>
    )
} 

export default ContactList