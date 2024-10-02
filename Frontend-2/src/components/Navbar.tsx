import ECom from "../assets/Ecom.png"
import { useNavigate } from "react-router-dom"

export const Navbar = () => {
    const navigate = useNavigate();
    const redirect = (): void => {
        navigate('/signup');
    }
    return (
        <div className="border-b-4 border-gray-300 flex items-center h-16 ">
            <div className="flex items-center ml-10">
                <div>
                    <img src={ECom} alt="E-commerce" className='h-10 w-13 ' />
                </div>
                <div className="flex pl-8">
                    <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">Catagories</div>
                    <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">Brands</div>
                    <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">Beauty Advice</div>
                </div>
                <div className="flex items-center bg-gray-100  pl-2  rounded-md ml-44">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 pt-1 mr-2 border-non hover:text-pink-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="search" id="search" name="search" placeholder="Type here to search..." className="bg-gray-100 pl-3 pr-16 py-2 border-none hover:bg-gray-200 text-pink-500" />
                </div>
            </div>
            <div className="ml-4 flex items-center">
                <div>
                    <button className="bg-pink-600 text-base text-white font-semibold px-3 py-2 border-gray-400 border rounded-md" onClick={redirect}>Sign in</button>
                </div>
                <div className="ml-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}