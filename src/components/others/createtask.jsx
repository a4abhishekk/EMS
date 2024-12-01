import React from "react";

const Createtask = () =>{
    return(
        <div className="p-6 bg-gray-800 mt-7 rounded-lg shadow-lg">
                <form className="flex flex-wrap w-full items-start justify-between">
                    <div className="w-full md:w-1/2 pr-4">
                        <div className="mb-6">
                            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
                            <input
                                className="text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-gray-700 border border-gray-600 focus:border-emerald-500 focus:bg-gray-600 transition duration-300"
                                type="text"
                                placeholder="Make an UI design"
                            />
                        </div>
                        <div className="mb-6">
                            <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
                            <input
                                className="text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-gray-700 border border-gray-600 focus:border-emerald-500 focus:bg-gray-600 transition duration-300"
                                type="text"
                                placeholder="Employee name"
                            />
                        </div>
                        <div className="mb-6">
                            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
                            <input
                                className="text-sm py-2 px-3 w-full md:w-4/5 rounded outline-none bg-gray-700 border border-gray-600 focus:border-emerald-500 focus:bg-gray-600 transition duration-300"
                                type="text"
                                placeholder="design,ui,ux,editing..."
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 pl-4">
                        <div className="mb-6">
                            <h3 className="text-sm text-gray-300 mb-1">Description</h3>
                            <textarea
                                className="w-full h-40 text-sm py-2 px-3 rounded outline-none bg-gray-700 border border-gray-600 focus:border-emerald-500 focus:bg-gray-600 transition duration-300"
                                placeholder="Enter task description..."
                            ></textarea>
                        </div>
                        <button className="bg-emerald-500 py-3 px-6 rounded text-sm w-full hover:bg-emerald-600 transition duration-300 shadow-md">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default Createtask