import ECom from "../assets/Ecom.png"

export const Navbar = () => {
    return (
        <div className="border-b-2 flex items-center h-14 ">
            <div className="flex items-center ml-10">
                <div>
                    <img src={ECom} alt="E-commerce" className='h-10 w-13 ' />
                </div>
                <div className="flex pl-8">
                    <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">Catagories</div>
                    <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">Brands</div>
                    <div className="text-base text-black font-semibold  m-0 p-8 hover:text-pink-500">Beauty Advice</div>
                </div>
                <div className="flex bg-gray-100  pl-2  rounded-md ml-44">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 pt-1 mr-2 border-non hover:text-pink-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="search" id="search" name="search" placeholder="Type here to search..." className="bg-gray-100 pl-3 pr-20 py-1 border-none hover:bg-gray-200" />
                </div>
            </div>
            <div>
                <div>
                    <button className="bg-pink">sign in</button>
                </div>
            </div>
        </div>
    )
}