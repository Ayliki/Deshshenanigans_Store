import { useCart } from "../../context/CartContext";
import { Product } from "../../types/product";
import cl from './styles.module.css';

interface ProductCardProps {
    products: Product[];
    wishlist: Product[];
    onAddToWishlist: (product: Product) => void;
    onRemoveFromWishlist: (productId: number) => void;
}


const ProductCard: React.FC<ProductCardProps> = ({ products, wishlist, onAddToWishlist, onRemoveFromWishlist }) => {
    const { cart, addToCart } = useCart();
    const isInCart = (productId: number) => cart.some(item => item.id === productId);

    return (
        <div className={cl.productsContainer}>
            {products.map((product) => {
                const inWishlist = wishlist.some(item => item.id === product.id);
                const inCart = isInCart(product.id);

                return (
                    <div key={product.id} className={cl.productCard}>
                        <img src={product.imageUrl} alt={product.name} className={cl.productImage} />
                        <h3 className={cl.productTitle}>{product.name}</h3>
                        <p className={cl.productPrice}>${product.price.toFixed(2)}</p>
                        <button
                            onClick={() => inWishlist ? onRemoveFromWishlist(product.id) : onAddToWishlist(product)}
                            className={inWishlist ? cl.removeFromWishlistButton : cl.addToWishlistButton}
                        >
                            {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                        </button>
                        <button
                            onClick={() => addToCart(product)}
                            className={inCart ? cl.addedToCartButton : cl.addToCartButton}
                            disabled={inCart}
                        >
                            {inCart ? "Added to Cart" : "Add to Cart"}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductCard;