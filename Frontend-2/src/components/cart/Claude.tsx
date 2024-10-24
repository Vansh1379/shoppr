import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface CartItem {
  productId: number;
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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // First API call: Get cart ID
  useEffect(() => {
    const getCartId = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/cart/cartid/${id}`);
        if (response?.data?.cartId?.id) {
          setCartId(response.data.cartId.id);
        } else {
          setError('Invalid cart ID response');
        }
      } catch (error) {
        setError('Error fetching cart ID');
        console.error("Error fetching cart ID", error); 
      }
    };

    if (id) {
      getCartId();
    }
  }, [id]);

  // Second API call: Get cart items
  useEffect(() => {
    const getProductsData = async () => {
      if (!cartId) return;

      try {
        const response = await axios.get(`http://localhost:3000/api/v1/cart/cartItem/${cartId}`);
        if (response?.data?.cartItems) {
          setCartItems(response.data.cartItems);
        } else {
          setError('Invalid cart items response');
        }
      } catch (error) {
        setError('Error fetching cart items');
        console.error(`Error fetching the product IDs:`, error);
      }
    };

    if (cartId) {
      getProductsData();
    }
  }, [cartId]);

  // Third API call: Get product details for each cart item
  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const productPromises = cartItems.map(item =>
          axios.get(`http://localhost:3000/api/v1/pro/product/${item.productId}`)
        );

        const productResponses = await Promise.all(productPromises);
        const productDetails = productResponses.map(response => response.data);
        setProducts(productDetails);
        setLoading(false);
      } catch (error) {
        setError('Error fetching product details');
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    if (cartItems.length > 0) {
      getProductDetails();
    }
  }, [cartItems]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (loading) {
    return <div>Loading cart items...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow-sm">
            <div className="flex items-center space-x-4">
              {product.img && (
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded"
                />
              )}
              <div>
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-2">
                  <span className="font-bold">₹{product.price}</span>
                  {product.orignalPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      ₹{product.orignalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="text-green-500 ml-2">
                      {((product.orignalPrice! - product.price) / product.orignalPrice! * 100).toFixed(0)}% off
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{product.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};