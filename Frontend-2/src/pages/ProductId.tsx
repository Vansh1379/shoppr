import { ProductID } from "../components/ProductID"
import { useParams } from 'react-router-dom'

export const ProductId = () => {
    const { id } = useParams();
    
    return (
        <div className="bg-gray-300 overflow-hidden">
            <ProductID id={parseInt(id || '')} />
        </div>
    )
}