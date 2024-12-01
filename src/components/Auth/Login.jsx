import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password);
        // console.log("Email is: ", email);
        // console.log("Password is: ", password);

        setEmail("");
        setPassword("");
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="border-2 border-red-600 p-8 rounded-lg shadow-lg bg-white max-w-md w-full">
                <form 
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className="flex flex-col items-center justify-center space-y-6"
                >
                    <input 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                        className="w-full outline-none bg-gray-100 border-2 border-gray-300 text-lg py-3 px-5 rounded-full placeholder-gray-500 text-black focus:border-blue-500 focus:bg-white transition duration-300"
                        type="email"
                        placeholder="Enter Your Email"
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                        className="w-full outline-none bg-gray-100 border-2 border-gray-300 text-lg py-3 px-5 rounded-full placeholder-gray-500 text-black focus:border-blue-500 focus:bg-white transition duration-300"
                        type="password"
                        placeholder="Enter Password"
                    />
                    <button className="w-full bg-blue-500 text-white text-lg py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300 shadow-md">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
