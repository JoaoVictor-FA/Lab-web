import React, { useEffect, useState } from "react";
import "./App.css";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import DoubleArrow from "./assets/imagens/chevron-double-right.svg";
import List from "./components/ContactList";
import Style from "./App.module.css";
import Main from "./components/Main";
import Skeletons from "./components/Skeletons";
import axios from "./axios";


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

function App() {
  
  const { setOrder, searchInput} = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    setOrder(null);
  }, [setOrder]);

  React.useEffect(() => {
    setIsLoading(true);
    axios.get("").then((response) => {
      let newTags: any[] = []
      response.data.forEach((e:any)=>{
        e.tags.forEach((l:any)=>newTags.push({name:l}))
        e.tags = newTags
        newTags = []
      })
      setContacts(response.data);
      setIsLoading(false);
    });
  }, []);

  // 

  function searchList(searchInput: string) {
    const filtered = contacts.filter(contact => contact.name.toLowerCase().includes(searchInput.toLowerCase()));
    return filtered;
  }

  return (
    <Main search={true}>
      <section className={Style.sectionList}>
        <div className={Style.path}>
          <p><i className={Style.double_arrow}><img src={DoubleArrow} alt="" /></i><a href="./">Lista de contatos</a> / All</p>
        </div>
        <>
          {isLoading ? 
            <Skeletons/> 
            : 
            <List contacts={searchInput === "" ? contacts : searchList(searchInput)} />
          }
        </>
        
      </section>
    </Main>
  );
}

export default App;