import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";

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

function Edit({ params } : {params: {contactId: string}}) {
    // const [contact, setContact] = useState<IContact>({} as IContact);
    const [teste, setTeste] = useState<string>("");

    useEffect(() => {
        setTeste(params.contactId);
    },[]);

    return (
        <div>
            Edit Contact: {teste}
        </div>
    )
}

export default Edit