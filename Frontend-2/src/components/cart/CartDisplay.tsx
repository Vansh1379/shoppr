import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CartDisplay = () => {
    const { id } = useParams<{ id: string }>(); // Extract `id` from URL params
    const [cartId, setCartId] = useState<number | null>(null); // To store cartId

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

    return (
        <div>
            <p>Cart ID: {cartId !== null ? cartId : 'Loading...'}</p>
        </div>
    );
};