import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

interface SingupInputs {
    name: string;
    email: string;
    phone_no: string;
    address: string;
    password: string;
}

export const Signin = () => {
    const navigate = useNavigate();

    const [signupInputs, setSignupInputs] = useState<SingupInputs>({
        name: "",
        email: "",
        phone_no: "",
        address: "",
        password: "",

    })

    const RedirectToHome = (): void => {
        navigate('/home');
    }

    const RedirectToLogin = (): void => {
        navigate('/login');
    }

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSignupInputs({ ...signupInputs, name: event.target.value });
    }

    const handleEmailChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignupInputs({ ...signupInputs, email: event.target.value });
    }

    const handlePhoneNo = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSignupInputs({ ...signupInputs, phone_no: event.target.value });
    }

    const handleAdderess = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSignupInputs({ ...signupInputs, address: event.target.value });
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSignupInputs({ ...signupInputs, password: event.target.value });
    }

    const SinginBackendCall = async () => {
        try {
            const response = await axios.post("https://shoppr.onrender.com/api/v1/signup", {
                name: signupInputs.name,
                email: signupInputs.email,
                phone_no: signupInputs.phone_no,
                address: signupInputs.address,
                password: signupInputs.password
            });

            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem("token", token);

            navigate('/home');
        }
        catch(error){
            console.error(`Error during signup ${error}`);
        }
    }

    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center mt-20">
            <div className="h-[600px] w-96 bg-white rounded-3xl border-2 border-gray-300">

                <div className="flex items-center pt-5 border-b-2 pb-2 border-gray-200 mx-2 hover:text-red-600 ">
                    <div className="pl-4 hover:text-red-600 " onClick={RedirectToHome}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>
                    <div className="text-xl font-semibold text-gray-600 font-mono pl-24 hover:text-pink-600">Register</div>
                </div>

                <div className="flex items-center text-base mt-3 ml-24 cursor-pointer mb-10">
                    <div> Already a user</div>
                    <div className="pl-2 text-blue-600" onClick={RedirectToLogin}>Login?</div>
                </div>

                <div className="">
                    <input type="text"
                        placeholder="Name"
                        className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200"
                        onChange={handleNameChange} />
                </div>
                <div className="mt-8">
                    <input type="e-mail"
                        placeholder="E-mail"
                        className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200"
                        onChange={handleEmailChanges} />
                </div>
                <div className="mt-8">
                    <input type="Number"
                        placeholder="Phone-No"
                        className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200"
                        onChange={handlePhoneNo} />
                </div>
                <div className="mt-8">
                    <input type="Addres"
                        placeholder="Address"
                        className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200"
                        onChange={handleAdderess} />
                </div>
                <div className="mt-8">
                    <input type="password"
                        placeholder="Password"
                        className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200"
                        onChange={handlePassword} />
                </div>

                <div>
                    <button className="bg-pink-500 text-white ml-20 px-20 py-2 rounded-md mt-16 hover:text-black" onClick={SinginBackendCall}>Register</button>
                </div>

            </div>
        </div>
    )
}
