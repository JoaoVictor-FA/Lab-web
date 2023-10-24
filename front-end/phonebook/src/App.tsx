import React, { useState } from "react";
import "./App.css";

import PhoneAdd from "./assets/imagens/telephone-plus-fill.svg";
import AlphabetAZ from "./assets/imagens/sort-alpha-down.svg";
import AlphabetZA from "./assets/imagens/sort-alpha-up.svg";
import DoubleArrow from "./assets/imagens/chevron-double-right.svg";
import Search from "./components/Search";
import List from "./components/ContactList";
import Style from "./App.module.css";

interface Contact {
  id: number;
  name: string;
  phone: string;
  tag: Tag[];
}

interface Tag {
  name: string;
}

function App() {
  const [alphabet, setAlphabet] = useState<string>(AlphabetAZ);
  const [contacts, setContacts] = useState<Contact[]>([{
    id: 1,
    name: "Anika Calzoni",
    phone: "(11) 98765-4321",
    tag: [{
            name: "Work",
          },],
    },
    {
      id: 2,
      name: "James Carder",
      phone: "(11) 98765-4321",
      tag: [],
    },
    {
      id: 3,
      name: "Desirae Baptista",
      phone: "(11) 98765-4321",
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
      phone: "(11) 98765-4321",
      tag: [{
        name: "Family",
      }],
    },
  ]);

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
          <p><i className={Style.double_arrow}><img src={DoubleArrow} alt="" /></i>Lista de contatos / All</p>
          <i className={Style.alphabet}><img src={AlphabetAZ} alt="" /></i>
        </div>
        <>
          <List contacts={contacts} />
        </>
        
      </section>
      <footer></footer>
    </main>
  );
}

export default App;