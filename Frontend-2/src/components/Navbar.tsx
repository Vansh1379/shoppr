import ECom from "../assets/Ecom.png"

export const Navbar = () => {
    return (
        <div className="bg-black">
            <div>
                <div>
                    <img src={ECom} alt="E-commerce" className='h-10 w-15 ml-2' />
                </div>
            </div>
            <div></div>
        </div>
    )
}