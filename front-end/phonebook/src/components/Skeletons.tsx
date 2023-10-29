import Style from "./style-components/Skeletons.module.css";

function Skeletons(){

    return (
        <>
            <li className={` ${Style.contact} ${Style.order_even}`}>
                <div className={Style.perfil}>
                    <figure className={`${Style.skeleton} ${Style.photo}`}/>
                    <div>
                        <div className={`${Style.skeleton} ${Style.name}`}></div>
                        <div className={`${Style.tags}`}>
                            <div className={`${Style.skeleton} ${Style.tag}`}></div>
                            <div className={`${Style.skeleton} ${Style.tag}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${Style.skeleton} ${Style.number}`}>
                </div>
            </li>
            <li className={` ${Style.contact} ${Style.order_odd}`}>
                <div className={Style.perfil}>
                    <figure className={`${Style.skeleton} ${Style.photo}`}/>
                    <div>
                        <div className={`${Style.skeleton} ${Style.name}`}></div>
                        <div className={`${Style.tags}`}>
                            <div className={`${Style.skeleton} ${Style.tag}`}></div>
                            <div className={`${Style.skeleton} ${Style.tag}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${Style.skeleton} ${Style.number}`}>
                </div>
            </li>
            <li className={` ${Style.contact} ${Style.order_even}`}>
                <div className={Style.perfil}>
                    <figure className={`${Style.skeleton} ${Style.photo}`}/>
                    <div>
                        <div className={`${Style.skeleton} ${Style.name}`}></div>
                        <div className={`${Style.tags}`}>
                            <div className={`${Style.skeleton} ${Style.tag}`}></div>
                            <div className={`${Style.skeleton} ${Style.tag}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${Style.skeleton} ${Style.number}`}>
                </div>
            </li>
        </>
    )
}

export default Skeletons