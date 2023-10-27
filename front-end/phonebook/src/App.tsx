import React, { useEffect, useState } from "react";
import "./App.css";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import AlphabetAZ from "./assets/imagens/sort-alpha-down.svg";
import AlphabetZA from "./assets/imagens/sort-alpha-up.svg";
import DoubleArrow from "./assets/imagens/chevron-double-right.svg";
import Search from "./components/Search";
import Footer from "./components/Footer";
import List from "./components/ContactList";
import Style from "./App.module.css";
import Header from "./components/Header";

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

function App() {
  
  const { setOrder ,searchInput } = useContext(GlobalContext);
  const [alphabet, setAlphabet] = useState<boolean>(true);
  const [data, setData] = useState<IContact[]>([]);
  const [contacts, setContacts] = useState<IContact[]>([
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
      photo: "https://i.imgur.com/SMZTiqL.png",
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

  // 

  function searchList(searchInput: string) {
    const filtered = data.filter(contact => contact.name.toLowerCase().includes(searchInput.toLowerCase()));
    return filtered;
  }

  useEffect(() => {
    setOrder(null);
    setData(contacts);
  }, [searchInput, alphabet, setOrder, contacts]);

  function changeAlphabet() {
    setAlphabet(!alphabet);
  }

  return (
    <main className={Style.main}>
      <>
        <Header />
      </>
      <>
        <Search />
      </>
      <section className={Style.sectionList}>
        <div className={Style.path}>
          <p><i className={Style.double_arrow}><img src={DoubleArrow} alt="" /></i><a href="./">Lista de contatos</a> / All</p>
          <i onClick={changeAlphabet} className={Style.alphabet}><img src={alphabet ? AlphabetAZ : AlphabetZA} alt="" /></i>
        </div>
        <>
          <List contacts={searchInput === "" ? data : searchList(searchInput)} />
        </>
        
      </section>
      <>
        <Footer/>
      </>
    </main>
  );
}

export default App;