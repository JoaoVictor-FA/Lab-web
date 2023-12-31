import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DoubleArrow from "../assets/imagens/chevron-double-right.svg";
import Style from "./style-components/EditComponent.module.css";
import Main from "./Main";
import TagComponent from "./TagComponent";
import Loading from "./Loading";
import axios from "../axios";

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
  tags: ITagData[];
}
interface ITagData {
  name: string;
}

function EditComponent() {
  // const [contact, setContact] = useState<IContact>({} as IContact);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [tags, setTags] = useState<ITag[]>([
    {
      name: "Work",
      checked: false,
    },
    {
      name: "Family",
      checked: false,
    },
    {
      name: "Friend",
      checked: false,
    },
    {
      name: "Colleague",
      checked: false,
    },
    {
      name: "Emergency",
      checked: false,
    },
  ]);
  const [contacts, setContacts] = useState<IContactData[]>([]);
  const navigate = useNavigate()

  function changeEditTags(index: number) {
    const newTags = [...tags];
    newTags[index].checked = !newTags[index].checked;
    setTags(newTags);
  }

  function checkTags(contact: IContactData) {
    const newTags = [...tags];
    contact.tags.forEach((tag) => {
      newTags.map((newTag) => {
        if (newTag.name === tag.name) {
          newTag.checked = true;
        }
      });
    });
    setTags(newTags);
  }

  function sendEdit(e: SyntheticEvent) {
    e.preventDefault();

    switch (true) {
      case !name:
        alert("Preencha o nome");
        break;
      case !phone:
        alert("Preencha o telefone");
        break;
      case !email:
        alert("Preencha o e-mail");
        break;
      default:
        break;
    }

    let sendTags : any[] = []
    tags.forEach(e => {e.checked && sendTags.push(e.name)})

    axios.put("", {
      id: id,
      name: name,
      phone: phone,
      email: email,
      photo: photo,
      tags: sendTags,
    })
    
    navigate("../../")
  }

  useEffect(() => {
    axios.get("").then((response) => {
      let newTags: any[] = []
      response.data.forEach((e:any)=>{
        e.tags.forEach((l:any)=>newTags.push({name:l}))
        e.tags = newTags
        newTags = []
      })
      setContacts(response.data);
    });
  }, []);
  
  useEffect(() => {
    setIsLoading(true);
    const contact = contacts.find((contact) => contact.id === Number(id));
    if (contact) {
      setName(contact.name);
      setPhone(contact.phone);
      setEmail(contact.email);
      setPhoto(contact.photo);
      checkTags(contact);
      setIsLoading(false);
    }
  }, [contacts]);


  if(isLoading) {
    return (
      <Main search={false}>
        <Loading/>
      </Main>
    );
  } else {
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
                <figure
                  style={{ backgroundImage: `url(${photo})` }}
                  className={Style.photo}
                />
              </div>
              <form
                className={Style.form}
                onSubmit={(e: SyntheticEvent) => sendEdit(e)}
              >
                <label>
                  <p>
                    Nome<span className={Style.required}>*</span>:
                  </p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Add a name..."
                    value={name}
                  />
                </label>
                <label>
                  <p>Categoria:</p>
                  <div className={Style.tags}>
                    {tags.map((tag, index) => (
                      <div onClick={() => changeEditTags(index)} key={index}>
                        <TagComponent name={tag.name} checked={tag.checked} />
                      </div>
                    ))}
                  </div>
                </label>
                <label>
                  <p>
                    Phone<span className={Style.required}>*</span>:
                  </p>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                    placeholder="(xx) x xxxx-xxxx"
                    value={phone}
                  />
                </label>
                <label>
                  <p>
                    E-mail<span className={Style.required}>*</span>:
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Add a e-mail..."
                    value={email}
                  />
                </label>
                <label>
                  <p>Photo:</p>
                  <input
                    onChange={(e) => setPhoto(e.target.value)}
                    type="text"
                    placeholder="Add a image url..."
                    value={photo}
                  />
                </label>
                <label>
                  <Link to={"../../"}>
                    <button
                      type="button"
                      id="cancel"
                      className={`${Style.button} ${Style.cancel}`}
                    >
                      Back
                    </button>
                  </Link>
                  <button
                    type="submit"
                    id="save"
                    className={`${Style.button} ${Style.save}`}
                  >
                    Save
                  </button>
                </label>
              </form>
            </section>
          </>
        </Main>
      );
  }
}

export default EditComponent;
