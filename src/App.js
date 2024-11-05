import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import StudentList from "./components/StudentList";
import FavouriteList from "./components/FavouriteList";
import StudentContext from "./components/StudentContext";

function App() {
  return (
    <div>
      <StudentContext>
        <BrowserRouter>
          <nav className="bg-blue-100 border border-black  p-2 text-center flex gap-10">
            <div>
              <Link to={'/'} className="font-bold">List of Students</Link>
            </div>
            <div>
              <Link to={'/favourites'} className="font-bold">Favourite Students</Link>
            </div>
          </nav>


          <Routes>
            <Route path="/" element={<StudentList></StudentList>}></Route>
            <Route path="/favourites" element={<FavouriteList></FavouriteList>}></Route>
          </Routes>
        </BrowserRouter>
      </StudentContext>
    </div>
  )
}

export default App