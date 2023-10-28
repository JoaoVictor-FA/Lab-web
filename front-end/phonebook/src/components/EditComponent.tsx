import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DoubleArrow from "../assets/imagens/chevron-double-right.svg";
import Trash from "../assets/imagens/trash.svg";
import Style from "./style-components/EditComponent.module.css";
import Main from "./Main";
import TagRegister from "./TagRegister";

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
  checked: boolean;
}

interface IContactData {
  id: number;
  name: string;
  phone: string;
  email: string;
  photo: string;
  tag: ITagData[];
}
interface ITagData {
  name: string;
}

function EditComponent() {
  // const [contact, setContact] = useState<IContact>({} as IContact);
  const { id } = useParams();
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
  const [contacts, setContacts] = useState<IContactData[]>([
    {
    id: 1,
    name: "Anika Calzoni",
    phone: "(11) 98765-4321",
    email: "anika@me.com",
    photo: "https://i.imgur.com/SMZTiqL.png",
    tag: [{
            name: "Work",
          },],
    },
    {
      id: 2,
      name: "James Carder",
      phone: "(11) 98765-4322",
      email: "james@me.com",
      photo: "https://i.imgur.com/SMZTiqL.png",
      tag: [],
    },
    {
      id: 3,
      name: "Desirae Baptista",
      phone: "(11) 98765-4323",
      email: "desirae@me.com",
      photo: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: [{
        name: "Friend",
      },
      {
        name: "Colleague",
      }],
    },
    {
      id: 4,
      name: "Emerson Siphron",
      phone: "(11) 98765-4324",
      email: "emerson@me.com",
      photo: "https://i.imgur.com/SMZTiqL.png",
      tag: [{
        name: "Family",
      }],
    },
  ]);

  function changeEditTags(index: number){
    const newTags = [...tags];
    newTags[index].checked = !newTags[index].checked;
    setTags(newTags);
  }

  function sendEdit(e : SyntheticEvent){
      e.preventDefault();
      console.log("Submit");
  }

  function checkTags(contact: IContactData){
    const newTags = [...tags];
    contact.tag.forEach((tag) => {
      newTags.map((newTag) => {
        if(newTag.name === tag.name){
          newTag.checked = true
        }
      })
    });
    setTags(newTags);
  }

  function deleteContact(){
    // função para deletar
  }

  useEffect(() => {
    const contact = contacts.find((contact) => contact.id === Number(id));
    if (contact) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setPhoto(contact.photo);
      checkTags(contact)
    }
  }, []);

  return (
    <Main search={false}>
      <>
        <section className={Style.section}>
          <div className={Style.path}>
            <p>
              <i className={Style.double_arrow}>
                <img src={DoubleArrow} alt="" />
              </i>
              Edit / {name}
            </p>
          </div>
        </section>
        <section className={Style.section_edit}>
                <div>
                    <figure style={{backgroundImage: `url(${photo})`,}} className={Style.photo}/>
                </div>
                <form className={Style.form} onSubmit={(e : SyntheticEvent) => sendEdit(e)}>
                    <label>
                        <p>Nome<span className={Style.required}>*</span>:</p>
                        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Add a name..." value={name}/>
                    </label>
                    <label>
                        <p>Categoria:</p>
                        <div className={Style.tags}>
                            {tags.map((tag, index) => (
                                <div onClick={() => changeEditTags(index)} key={index}>
                                    <TagRegister name={tag.name} checked={tag.checked} />
                                </div>
                            ))}
                        </div>
                    </label>
                    <label>
                        <p>Phone<span className={Style.required}>*</span>:</p>
                        <input onChange={(e) => setPhone(e.target.value)} type="text" placeholder="(xx) x xxxx-xxxx" value={phone}/>
                    </label>
                    <label>
                        <p>E-mail<span className={Style.required}>*</span>:</p>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Add a e-mail..." value={email} />
                    </label>
                    <label>
                        <p>Photo:</p>
                        <input onChange={(e) => setPhoto(e.target.value)} type="text" placeholder="Add a image url..." value={photo} />
                    </label>
                    <label>
                        <Link to={"../../"}><button type="button" id="cancel" className={`${Style.button} ${Style.cancel}`}>Cancel</button></Link>
                        <button type="submit"  id ="save" className={`${Style.button} ${Style.save}`}>Save</button>
                    </label>
                </form>
                <div>
                  <i className={Style.delete} onClick={deleteContact}><img src={Trash} alt="" /></i>
                </div>
        </section>
      </>
    </Main>
  );
}

export default EditComponent;
