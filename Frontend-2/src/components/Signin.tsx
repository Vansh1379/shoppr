import { useNavigate } from "react-router-dom"

export const Signin = () => {
    const navigate = useNavigate();

    const Redirect = (): void => {
        navigate('/home');
    }
    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center mt-20">
            <div className="h-[600px] w-96 bg-white rounded-3xl border-2 border-gray-300">

                <div className="flex items-center pt-5 border-b-2 pb-2 border-gray-200 mx-2 hover:text-red-600">
                    <div className="pl-4 hover:text-red-600 " onClick={Redirect}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    </div>
                    <div className="text-xl font-semibold text-gray-600 font-mono pl-24 hover:text-pink-600">
                        Register
                    </div>
                </div>

            </div>
        </div>
    )
}
