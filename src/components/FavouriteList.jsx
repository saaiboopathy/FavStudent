import { Context } from "./StudentContext"
import { useState } from "react"
import { useContext } from "react"

function FavouriteList(){
    const { myfavlist } = useContext(Context); 
    return (
        <div>
            <h1 className="text-red-300 font-bold">Favourite Students</h1>
            {myfavlist.length === 0 ? ( 
                <p>No favourite students added yet!</p>
            ) : (
                myfavlist.map((item, index) => ( 
                    <h2 key={index} className="text-blue-500">
                        {index + 1}. {item}
                    </h2>
                ))
            )}
        </div>
    );
}

export default FavouriteList