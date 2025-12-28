import { useContext, useState } from "react";
import React  from 'react';
import userContext from "../context/userContext";


function Login(){
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {setUser} = useContext(userContext)

    const handleSumbit = (e) =>{
        e.preventDefault()
        setUser(username, password )
        
        
    }

    return(
        <div>
            <input
            value={username}
            placeholder="UserName"
            onChange={(e) => {setUsername(e.target.value)}}
            type="text" 
            className="bg-gray-500 text-left rounded-xl p-1 m-4 gap-4"
            />
            <input
            value={password}
            placeholder="Password"
            onChange={(e) => {setPassword(e.target.value)}}
            type='password' 
            className="bg-gray-500 text-left rounded-xl p-1 m-4"
            />
            
            <button
            className="m-5 bg-blue-700 outline-none"
            onClick={handleSumbit}>Sumbit</button>
        </div>
    )
};



export default Login ;