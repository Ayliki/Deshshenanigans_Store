import cl from "./styles.module.css"
import products from "../../data/products"
import { useState } from "react";
import { Product } from "../../types/product";

const FeaturedProducts: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
    }

    const closeModal = () => {
        setSelectedProduct(null);
    }
    return (
        <div className={cl.featuredSection}>
            <h2>Featured Products</h2>
            <div className={cl.productsContainer}>
                {products.slice(0,4).map((product: Product) => (
                    <div
                        key={product.id}
                        className={cl.product}
                        onClick={() => openModal(product)}
                    >
                        <img src={product.imageUrl} alt={product.name} className={cl.productImage} />
                        <h3>{product.name}</h3>
                        <p className={cl.productPrice}>${product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>

            {/* Modal for product description */}
            {selectedProduct && (
                <div className={cl.modalOverlay} onClick={closeModal}>
                    <div
                        className={cl.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className={cl.modalImage} />
                        <h2>{selectedProduct.name}</h2>
                        <p>{selectedProduct.description}</p>
                        <p className={cl.modalPrice}>${selectedProduct.price.toFixed(2)}</p>
                        <button className={cl.closeButton} onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default FeaturedProducts;