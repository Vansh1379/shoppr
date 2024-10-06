import { useNavigate } from "react-router-dom"

export const Signin = () => {
    const navigate = useNavigate();

    const RedirectToHome = (): void => {
        navigate('/home');
    }

    const RedirectToLogin = (): void => {
        navigate('/login');
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
                    <input type="text" placeholder="Name" className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200" />
                </div>
                <div className="mt-8">
                    <input type="e-mail" placeholder="E-mail" className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200" />
                </div>
                <div className="mt-8">
                    <input type="Number" placeholder="Phone-No" className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200" />
                </div>
                <div className="mt-8">
                    <input type="Addres" placeholder="Address" className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200" />
                </div>
                <div className="mt-8">
                    <input type="password" placeholder="Password" className="border-b-2 ml-10 text-base border-gray-200 w-72  focus:outline-none  hover:border-pink-200" />
                </div>
                
                <div>
                    <button className="bg-pink-500 text-white ml-20 px-20 py-2 rounded-md mt-16 hover:text-black">Register</button>
                </div>

            </div>
        </div>
    )
}
