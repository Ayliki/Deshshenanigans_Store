import { Product } from '../../types/product'
import cl from './styles.module.css'

interface IProductCards{
    products: Product[];
}

const ProductCard = ({products}: IProductCards) => {
    
    return (
        <div className={cl.productsContainer}>
            {products.map((product: Product) => (
                <div key={product.id} className={cl.productCard}>
                    <img src={product.imageUrl} alt={product.name} className={cl.productImage} />
                    <h3>{product.name}</h3>
                    <p className={cl.productPrice}>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    )
}

export default ProductCard;