import { createContext } from "react";
import useFetch from "../hooks/useFetch";


const CategoriesContext = createContext();

export function CategoriesProvider({children}){
    const { data: categories, loading, error } = useFetch('https://gist.githubusercontent.com/AstaRem/6f16284ce89a1dfef971a576ba587d76/raw/f9ea0d7ae0f515e4cc4853066bdc89c2e056cafd/data-category.json', 
        'categories', 
        'fileName');
const value = {categories, loading, error};

return (
    <CategoriesContext.Provider value={value}> {children}</CategoriesContext.Provider>
)
}



export default CategoriesContext;