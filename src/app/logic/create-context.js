import { createContext } from "react";

export const AppContext = createContext({
    nightMode: false,
    changeNightMode: undefined, // functon
    onGetSubmit: undefined, // functon
    todo: {},
    todos: [],
    onPostSubmit: undefined, // functon
});