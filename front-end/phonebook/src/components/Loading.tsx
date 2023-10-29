import Style from "./style-components/Loading.module.css";
function Loading() {
    return (
        <section className={Style.container}>
            <div className={Style.loading}></div>
        </section>
    );
}

export default Loading