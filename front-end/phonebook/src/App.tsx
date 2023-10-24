import React, { useState } from "react";
import "./App.css";

import PhoneAdd from "./assets/imagens/telephone-plus-fill.svg";
import AlphabetAZ from "./assets/imagens/sort-alpha-down.svg";
import AlphabetZA from "./assets/imagens/sort-alpha-up.svg";
import DoubleArrow from "./assets/imagens/chevron-double-right.svg";
import Search from "./components/Search";
import Footer from "./components/Footer";
import List from "./components/ContactList";
import Style from "./App.module.css";

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
  const [alphabet, setAlphabet] = useState<boolean>(true);
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

  function changeAlphabet() {
    setAlphabet(!alphabet);
  }

  return (
    <main className={Style.main}>
      <header className={Style.header}>
        <h1 className={Style.title}>Phonebook</h1>
        <button type="button" className={Style.buttonAdd}>
          <i><img src={PhoneAdd} alt="" /></i>
          Add contact
        </button>
      </header>
      <>
        <Search />
      </>
      <section className={Style.sectionList}>
        <div className={Style.path}>
          <p><i className={Style.double_arrow}><img src={DoubleArrow} alt="" /></i><a href="./">Lista de contatos</a> / All</p>
          <i onClick={changeAlphabet} className={Style.alphabet}><img src={alphabet ? AlphabetAZ : AlphabetZA} alt="" /></i>
        </div>
        <>
          <List contacts={contacts} />
        </>
        
      </section>
      <>
        <Footer/>
      </>
    </main>
  );
}

export default App;