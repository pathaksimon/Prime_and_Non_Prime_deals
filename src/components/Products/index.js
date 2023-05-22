import AllProductsSection from '../AllProductsSection'

import Header from '../Header'

import './index.css'
import PrimeDealsSection from '../PrimeDealsSection'

const Products = () => (
  <>
    <Header />
    <div className="product-sections">
      <PrimeDealsSection />
      <AllProductsSection />
    </div>
  </>
)

export default Products
