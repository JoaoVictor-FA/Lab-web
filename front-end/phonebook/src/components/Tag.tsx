import { useCallback, useEffect, useState } from "react";
import Style from "./style-components/Tag.module.css";

function Tag({name} : {name: string}) {
    const [styleButton, setStyleButton] = useState<string>("default");
    const changeStyleButton = useCallback(() => {
        switch (name) {
            case "Work":
                setStyleButton("work");
                break;
            case "Family":
                setStyleButton("family");
                break;
            case "Friend":
                setStyleButton("friend");
                break;
            case "Colleague":
                setStyleButton("colleague");
                break;
            default:
                setStyleButton("default");
                break;
        }
        
    }, [name]);
    useEffect(() => {
        changeStyleButton();
    }, [changeStyleButton]);
    return(
        <>
            <span className={`${Style.tag} ${Style[styleButton]}`}>{name}</span>
        </>
    )
}

export default Tag