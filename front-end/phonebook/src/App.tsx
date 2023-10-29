import React, { useEffect, useState } from "react";
import "./App.css";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import AlphabetAZ from "./assets/imagens/sort-alpha-down.svg";
import AlphabetZA from "./assets/imagens/sort-alpha-up.svg";
import DoubleArrow from "./assets/imagens/chevron-double-right.svg";
import List from "./components/ContactList";
import Style from "./App.module.css";
import Main from "./components/Main";
import Skeletons from "./components/Skeletons";


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
  const [isLoading, setIsLoading] = useState<boolean>(true);
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

  // 

  function searchList(searchInput: string) {
    const filtered = data.filter(contact => contact.name.toLowerCase().includes(searchInput.toLowerCase()));
    return filtered;
  }

  useEffect(() => {
    setOrder(null);
    setData(contacts);
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loading);
    }
  }, [searchInput, alphabet, setOrder, contacts]);

  function changeAlphabet() {
    setAlphabet(!alphabet);
  }

  return (
    <Main search={true}>
      <section className={Style.sectionList}>
        <div className={Style.path}>
          <p><i className={Style.double_arrow}><img src={DoubleArrow} alt="" /></i><a href="./">Lista de contatos</a> / All</p>
          <i onClick={changeAlphabet} className={Style.alphabet}><img src={alphabet ? AlphabetAZ : AlphabetZA} alt="" /></i>
        </div>
        <>
          {isLoading ? 
            <Skeletons/> 
            : 
            <List contacts={searchInput === "" ? data : searchList(searchInput)} />
          }
        </>
        
      </section>
    </Main>
  );
}

export default App;