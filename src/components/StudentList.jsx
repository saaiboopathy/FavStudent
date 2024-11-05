import { Context } from "./StudentContext"
import { useState } from "react"
import { useContext } from "react"

function StudentList() {

    const { mylist, myfavlist, setmyfavlist } = useContext(Context)
    const addedtofav = {}

    myfavlist.forEach((item) => {
        addedtofav[item] = true
    })

    const handleChange = (item) => {
        if (!addedtofav[item]) {
            setmyfavlist([...myfavlist, item])
            addedtofav[item] = true
        }
    }

    return (
        <div>
            {
                mylist.map((item, index) => {
                    return <div className="mb-5 p-2">
                        <div >
                            <h1 key={index}> {index + 1}.{item}
                            </h1>
                        </div>
                        <div>
                            <button onClick={() => handleChange(item)} className={`bg-red-400 border border-black rounded-md
                        ${addedtofav[item] ? "opacity-50 cursor-not-allowed" : ""}`} disabled={addedtofav[item]}> Add to favourites </button>

                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default StudentList