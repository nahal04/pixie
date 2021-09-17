import { ChangeEventHandler, FormEventHandler, useState } from "react";
import Navbar from "../components/Navbar";

export default function Signup() {
    // states
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [repassword, setRepassword] = useState<string>('');
    const [checking, setChecking] = useState<boolean>(false);

    const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

    }

    const usernameChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setUsername(e.target.value)
        // setTimeout(() => {
        //     setChecking(true);
        // }, 2000);
    }

    const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setPassword(e.target.value)
    }

    const repasswordChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        setRepassword(e.target.value)
    }

    return (
        < main className="h-screen flex flex-col bg-gray-900 justify-center items-center" >
            <Navbar />
            <section className="flex justify-center items-center flex-grow">
                <div className="bg-green-400 transform rounded-md rotate-6 shadow-md">
                    <form onSubmit={submitHandler} className="p-6 transform -rotate-6 bg-gray-800 rounded-md flex flex-col justify-center items-center gap-4 shadow-md" >
                        <div className="flex bg-white rounded focus-within:outline-green">
                            <input className="rounded-l text-md p-1 focus:outline-none border-none" placeholder="Username" onChange={usernameChangeHandler} value={username} />
                            <div className="bg-white rounded-r w-12 flex justify-end items-center">
                                <svg className={`-ml-1 mr-3 h-5 w-5 text-gray-800 ${ checking ? 'animate-spin' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                        </div>
                        <input className="rounded w-full text-md p-1 focus:outline-green" placeholder="Password" type="password" onChange={passwordChangeHandler} value={password} />
                        <input className="rounded w-full text-md p-1 focus:outline-green" placeholder="Retype Password" type="password" onChange={repasswordChangeHandler} value={repassword} />
                        <button type="submit" className="transition ease-out duration-300 rounded p-2 text-md text-white bg-green-500 hover:bg-green-600">Get Started</button>
                    </form>
                </div>
            </section>
        </main >
    )
}