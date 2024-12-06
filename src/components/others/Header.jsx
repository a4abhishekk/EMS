import React from "react";

const Header =({data}) =>{

    
    return(
        <div className="flex items-end justify-between">
    <h1 className="text-2xl font-medium">Hello <br/><span className="text-3xl font-semibold">Abhishek 👋</span></h1>
    <button className="bg-red-600 text-white text-xl py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 shadow-md">Log Out</button>
</div>

    )
}

export default Header;