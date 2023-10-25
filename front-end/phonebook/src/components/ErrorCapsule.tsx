import Style from "./style-components/ErrorCapsule.module.css";

function ErrorCapsule({children}: {children: React.ReactNode}){

    return(
        <div className={Style.errorCapsule}>
            <section>{children}</section>
        </div>
    )
}

export default ErrorCapsule