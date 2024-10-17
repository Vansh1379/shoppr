import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const CartDisplay = () => {
    const { id } = useParams<{ id: string }>(); // Extract `id` from URL params
    const [cartid, setCartid] = useState<number | null>(null); // To store cartId

    useEffect(() => {
        const GetCartId = async () => {
            try {
                // Ensure async-await is properly handled
                const response = await axios.get("http://localhost:3000/api/v1/cart/cartid", {
                    params: {
                        userId: id // Send user ID as a query parameter
                    }
                });
                // Check if response and cartId exist
                if (response.data && response.data.cartId) {
                    console.log(response.data.cartId.id); // Log the cartId's 
                    setCartid(response.data.cartId.id);  // Store cartId's id in state
                } else {
                    console.error('Invalid response format:', response);
                }
            } catch (error) {
                console.error("Error fetching cart ID", error); // Log any potential errors
            }
        };

        // Only call GetCartId if the `id` exists
        if (id) {
            GetCartId();
        }
    }, [id]); // Add `id` as dependency to ensure correct behavior when it changes

    return (
        <div>
            <p>Cart ID: {cartid !== null ? cartid : 'Loading...'}</p>
        </div>
    );
};
