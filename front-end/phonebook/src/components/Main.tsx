import Style from "./style-components/Main.module.css";

import Search from "./Search";
import Footer from "./Footer";
import Header from "./Header";

function Main ({children, search} : { children: React.ReactNode , search: boolean}) {

    return (
        <main className={Style.main}>
        <>
            <Header />
        </>
        <>
            {search && <Search />}
        </>
        { children }
        <>
            <Footer/>
        </>
        </main>
    );
}

export default Main;