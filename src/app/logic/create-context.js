import { createContext } from "react";

export const AppContext = createContext({
    nightMode: false,
    changeNightMode: undefined, // () => void
    onGetSubmit: undefined, // () => void
    todo: {},
    todos: [],
    onPostSubmit: undefined, // () => void
});