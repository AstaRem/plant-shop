import { createContext } from "react";
import useFetch from "../hooks/useFetch";


const PlantsContext = createContext();

export function PlantsProvider({children}){
    const { data: plants, loading, error } = useFetch('https://gist.githubusercontent.com/AstaRem/0b8abd33af2b3abcd949af3636778cfe/raw/f3c0f4a60cd7febc45a81546917b38e906a7c289/plant.json','plants','image');
const value = {plants, loading, error};
console.log(value)
console.log(plants)
return (
    <PlantsContext.Provider value={value}> {children}</PlantsContext.Provider>
)
}



export default PlantsContext;