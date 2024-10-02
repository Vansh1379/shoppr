import { Product } from "./Product"

export const LandingProduct = () => {
    return (
        <div>
            <div className="flex justify-evenly mt-10 mb-3">
                <div className="mr-40">
                    <div className="text-black text-3xl font-bold pr-80">
                        Hot List
                    </div>
                </div>
                <div className="flex items-center pl-80">
                    <button className="text-pink-500 text-lg font-bold">View List</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        className="size-5 text-pink-500 mx-2 font-bold">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
            <div className="border border-pink-500 h-7 w-10 bg-pink-100 font-medium text-pink-500 rounded-xl pl-2 ml-20">
                All
            </div>
            <div className="mt-10 ml-20">
                <Product />
            </div>
        </div>
    )
}
