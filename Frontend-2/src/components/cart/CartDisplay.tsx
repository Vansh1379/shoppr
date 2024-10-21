import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const CartDisplay = () => {
    const { id } = useParams<{ id: string }>();
    const [cartId, setCartId] = useState<number | null>(null);

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
                    console.log(response.data.cartItems);
                }
            } catch (error) {
                console.error(`error fetching the product id's ${error}`);

            }
        };

        getProductsData();
    }, [cartId]);

    return (
        <div>
            <p>Cart ID: {cartId !== null ? cartId : 'Loading...'}</p>
        </div>
    );
};