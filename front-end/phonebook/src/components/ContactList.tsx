import Style from "./style-components/ContactList.module.css";
import ContactItem from "./ContactItem";

interface Contact {
    id: number;
    name: string;
    phone: string;
    tag: Tag[];
}
  
interface Tag {
    name: string;
}
function ContactList({contacts} : {contacts: Contact[]}) {
    return(
        <>
            <ul className={Style.list}>
                {contacts.map((contact, index) => (
                    <ContactItem key={index} order={index} contact={contact} />
                ))}
            </ul>
        </>
    )
} 

export default ContactList