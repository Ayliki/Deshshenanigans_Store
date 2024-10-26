import { Product } from "../../types/product";
import cl from './styles.module.css';

interface ProductCardProps {
    products: Product[];
    wishlist: Product[];
    onAddToWishlist: (product: Product) => void;
    onRemoveFromWishlist: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ products, wishlist, onAddToWishlist, onRemoveFromWishlist }) => {
    const isInWishlist = (product: Product) => wishlist.some(item => item.id === product.id);

    return (
        <div className={cl.productsContainer}>
            {products.map((product) => (
                <div key={product.id} className={cl.productCard}>
                    <img src={product.imageUrl} alt={product.name} className={cl.productImage} />
                    <h3>{product.name}</h3>
                    <p className={cl.productPrice}>${product.price.toFixed(2)}</p>
                    <button
                        onClick={() => 
                            isInWishlist(product) ? onRemoveFromWishlist(product.id) : onAddToWishlist(product)
                        }
                        className={cl.wishlistButton}
                    >
                        {isInWishlist(product) ? "Remove from Wishlist" : "Add to Wishlist"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;