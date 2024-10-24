import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface CartItem {
    productId: number
}

export const CartDisplay = () => {
    const { id } = useParams<{ id: string }>();
    const [cartId, setCartId] = useState<number | null>(null);
    const [cartItem, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        const getCartId = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/cart/cartid/${id}`);

                if (response) {
                    setCartId(response.data.cartId.id);
                } else {
                    console.error('Invalid response format:', response);
                }
            } catch (error) {
                console.error("Error fetching cart ID", error);
            }
        };

        if (id) {
            getCartId();
        }
    }, [id]);

    useEffect(() => {
        const getProductsData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/cart/cartItem/${cartId}`);

                if (response) {
                    console.log(response.data.cartItems[0].productId);
                    setCartItems(response.data.cartItems);
                }
            } catch (error) {
                console.error(`error fetching the product id's ${error}`);

            }
        };

        getProductsData();
    }, [cartId]);



    return (
        <div>
            <span className='bg-gray-800 '>
                <div className='flex  border rounded-lg  border-gray-300 py-4 mx-5 w-[850px] mt-3 cursor-pointer'>
                    <div className='pl-10'><img src="https://imgs.search.brave.com/CxSddFIVMvHAbq_ai9YYglj1reC0nSqEnUevIsQd_LM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNk1pTWl6/Q3FacjFEam1vQThN/MnBSNy9hYjUyZmEz/M2U5YjNjMjAyNjEy/ZDMxYWRmZTUyMWQy/ZS9JcmlkZWNlbnQt/VGh1bWJuYWlsLmpw/Zw" alt="hello" className='h-[130px] w-[180px]' /></div>
                    <div className='pl-5'>
                        <div className='text-base font-medium text-gray-600'>VBUYZ Women Kurwjvbrhjvbjvbwbbvhjwbvjhbrwhvbhjvbrhvjwta Pant Set</div>
                        <div className='text-sm mt-2 text-gray-400 font-medium font-sans'>  Size: M</div>
                        <div className='flex items-center mt-2'>
                            <div className='text-base font-medium pr-2'>₹9000</div>
                            <div className='text-sm font-normal text-gray-400 line-through pr-2'>₹400</div>
                            <div className='text-green-600'>75% off</div>
                        </div>
                        <div className='text-gray-600 mt-1 font-medium'>Catageory :- Dress</div>
                        <div className='ml-80'><button className='bg-pink-400  px-20 py-1 rounded-2xl'>Order now</button></div>
                    </div>
                </div>
            </span>
            
        </div>
    );
};