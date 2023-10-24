import { createContext, useState } from "react";

export const GlobalContext = createContext({} as Props);

type Props = {
    order: number | null,
    showOrder: (order: number | null) => void
}

export const GlobalProvider = ({ children } : {children: React.ReactNode}) => {
    const [order, setOrder] = useState<number | null>(null);
    function showOrder(order : number | null) {
        order || order === 0 ? setOrder(order) : setOrder(null);
    }
    return (
        <GlobalContext.Provider value={{order, showOrder}}>
            {children}
        </GlobalContext.Provider>
    )
}