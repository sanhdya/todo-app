import { createContext } from "react";
export const TodosContext = createContext(null);
export const TodosProvider = ({children}) => {
    return(
        <TodosContext.Provider value={'todos date'}>
            {children}
        </TodosContext.Provider>
    )
}