import { Navbar } from "../components/Navbar"
import { ProductLanding } from "../components/ProductLanding"
import { useScrollbarStyles } from '../hooks/useScrollbarStyles'

export const Product = () => {
  useScrollbarStyles();

  return (
    <div className="overflow-hidden">
      <Navbar />
      <ProductLanding />
    </div>
  )
}