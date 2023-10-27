import CopyIcon from "../assets/imagens/copy.svg";
import CopyIconSucess from "../assets/imagens/copySucess.svg";
import Style from "./style-components/Copy.module.css";
import { useState } from "react";

function Copy({data} : {data: string}) {
    const [copy, setCopy] = useState<boolean>(false);
    function copySucess (){
        setCopy(true);
        const timeout = setTimeout(() => {
            setCopy(false);
        }, 500);

        return () => {
            clearTimeout(timeout);
        }
    }
    return(
        <>
            <i className={Style.copy} onClick={() => {
                navigator.clipboard.writeText(data);
                copySucess();
                }}><img src={copy ? CopyIconSucess : CopyIcon} alt="" /></i>
        </>
    )
}

export default Copy