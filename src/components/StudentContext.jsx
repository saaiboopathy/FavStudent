import { createContext } from "react";
import { useState } from "react";
import React from "react";

const Context = createContext()

function StudentContext({ children }) {

    const [mylist, setmylist] = useState(["Alice", "Bob", "Charles", "David", "Emma"])
    const [myfavlist, setmyfavlist] = useState([])

    return (
        <Context.Provider value={{ mylist, myfavlist, setmyfavlist }}>
            {children}
        </Context.Provider>
    )
}

export default StudentContext
export { Context }