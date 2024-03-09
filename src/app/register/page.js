"Use client";

import { useState } from "react"

export default function Register(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    return(       
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Register
            </h1>

            <form className="block max-w-sm mx-auto">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password"/>
                <button type="submit">Register</button>
                <div className="my-4 text-center text-gray-500">Or </div>
                <button className="flex gap-3 justify-center text-xl">
                    <img src="/google.png" alt="" width={24} height={24}  /> 
                    Long in with Google
                </button>
            </form>
            
        </section>
    )
}