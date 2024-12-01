import React from "react";
import Header from "../others/Header";
import Createtask from "../others/createtask";
import AllTask from "../others/AllTask";

const AdminDashboard = () => {
    return (
        <div className="h-screen w-full p-7 bg-gray-900 text-white">
            <Header />
            <Createtask/>
            <AllTask/>
        </div>
    );
}

export default AdminDashboard;
