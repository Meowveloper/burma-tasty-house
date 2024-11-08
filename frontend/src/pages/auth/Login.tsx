import { Icon } from "@iconify/react/dist/iconify.js";
import axios from '../../utilities/axios';
import { useState } from "react";

export default function Login()
{
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    return (
        <div>
            <div className="px-3 mt-[50px]">
                <div className="text-h1 font-bold mb-5 text-center">Burma Tasty House</div>
                <div className="space-y-3">
                    <input onChange={ (e : React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); } } value={email} className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" placeholder="email" type="email" />
                    <input onChange={ (e : React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); } } value={password} className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" placeholder="password" type="text" />
                    <div className="text-center">
                        <button onClick={ normalLogin } className="dark:bg-dark-elevate disabled:bg-dark-bg hover:dark:bg-dark-card w-[140px] h-[40px] rounded-small">
                            Login
                        </button>
                    </div>
                </div>
                <div className="flex my-3 justify-center items-center w-full gap-2">
                    <div className="w-full h-[2px] dark:bg-dark-border"></div>
                    <div>or</div>
                    <div className="w-full h-[2px] dark:bg-dark-border"></div>
                </div>
                <div>
                    <div className="text-h3 font-bold text-center">Login with</div>
                    <div className="flex justify-center items-center gap-7 mt-5">
                        <Icon icon="flat-color-icons:google" width="2.2em" height="2.2em" />
                        <Icon icon="logos:facebook" width="2.2em" height="2.2em" />
                    </div>
                </div>
                <div className="text-center mt-5">
                    does not have an account? Register
                    <span className="font-bold text-dark-text-highlight cursor-pointer"> here</span>.
                </div>            
            </div>
        </div>
    );

    function normalLogin () 
    {
        console.log(axios);
    }
}
