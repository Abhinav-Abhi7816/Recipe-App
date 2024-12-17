import { createContext, useContext } from "react";

const DataContext = createContext({ recipesArr: [], setRecipesArr: () => { }, SearchItem: "", setSearchItem: () => { }, load: false, setLoad: () => { }, favArr: [], setFavArr: () => { }, handleFav: () => { }, });

export const DataContextProvider = DataContext.Provider;

export default function useDataContext() {
    return useContext(DataContext);
}