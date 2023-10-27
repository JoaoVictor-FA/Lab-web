import { useCallback, useEffect, useState } from "react";
import Style from "./style-components/Tag.module.css";

interface ITag {
    name: string;
    checked: boolean;
}
function TagRegister(props : ITag){
    const [styleButton, setStyleButton] = useState<string>("default");
    const changeStyleButton = useCallback(() => {
        switch (props.name) {
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
            case "Emergency":
                setStyleButton("emergency");
                break;
            default:
                setStyleButton("default");
                break;
        }
        
    }, [props.name]);
    useEffect(() => {
        changeStyleButton();
    }, [changeStyleButton]);
    return(
        <>
            <span className={`${Style.tag} ${props.checked ? Style[styleButton] : Style.default}`}>{props.name}</span>
        </>
    )
}

export default TagRegister