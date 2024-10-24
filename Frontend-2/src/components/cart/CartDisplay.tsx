import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


interface CartItem {
    productId: number
}

interface Product {
    id: number;
    name: string;
    description: string;
    catageory: string;
    price: number;
    orignalPrice?: number;
    quantity?: string;
    discount?: number;
    img?: string;
}

export const CartDisplay = () => {
    const { id } = useParams<{ id: string }>();
    const [cartId, setCartId] = useState<number | null>(null);
    const [cartItem, setCartItems] = useState<CartItem[]>([]);
    const [product, setProduct] = useState<Product[]>([]);
    const [isCartItemsLoaded, setIsCartItemsLoaded] = useState(false);
    
    

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
                    // console.log(response.data.cartItems[0].productId);
                    setCartItems(response.data.cartItems);
                    setIsCartItemsLoaded(true);
                }
            } catch (error) {
                console.error(`error fetching the product id's ${error}`);
            }
        };

        if (cartId) {
            setIsCartItemsLoaded(false);
            getProductsData();
        }
    }, [cartId]);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const productPromise = cartItem.map(items =>
                    axios.get(`http://localhost:3000/api/v1/pro/product/${items.productId}`)
                );

                const productResponse = await Promise.all(productPromise);
                const productDetail = productResponse.map(response => response.data.getProductById);
                console.log(productDetail);
                setProduct(productDetail);

            } catch (error) {
                console.error(`error in fetching product detail ${error}`);
            }
        }

        if (isCartItemsLoaded && cartItem.length > 0) {
            getProductDetails();
        }
    }, [cartItem, isCartItemsLoaded]);

    const handleRemoveCartItem = async () => {

    }


    return (
        <div>
            {product.map((product) => (
                <span key={product.id} className='bg-gray-800'>
                    <div className='flex  border rounded-lg  border-gray-300 py-4 mx-5 w-[850px] mt-3 cursor-pointer'>
                        <div className='pl-10'><img src={product.img} alt="hello" className='h-[130px] w-[180px]' /></div>
                        <div className='pl-5'>
                            <div className='text-base font-medium text-gray-600'>{product.name}</div>
                            <div className='text-sm mt-2 text-gray-400 font-medium font-sans'>{product.quantity}</div>
                            <div className='flex items-center mt-2'>
                                <div className='text-base font-medium pr-2'>₹{product.price}</div>
                                <div className='text-sm font-normal text-gray-400 line-through pr-2'>₹{product.orignalPrice}</div>
                                <div className='text-green-600'>{product.discount}% off</div>
                            </div>
                            <div className='text-gray-600 mt-1 font-medium'>Catageory :- {product.catageory}</div>
                            <div className='flex '>
                                <div className='pl-72'><button className='bg-pink-500  px-20 py-1 rounded-2xl text-white hover:border-2 border-black'>Order now</button></div>
                                <div className='text-red-400 text-lg font-sans font-medium pl-7 pr-3' onClick={handleRemoveCartItem}>REMOVE</div>
                            </div>
                        </div>
                    </div>
                </span>
            ))}
        </div>
    );
};