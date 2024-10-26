import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Pagination/Pagination";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import productsData from "../../data/products";
import { useWishlist } from "../../context/WishlistContext";
import cl from './styles.module.css';
import { Product } from "../../types/product";

const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedProducts, setSortedProducts] = useState<Product[]>(productsData);
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
    const productsPerPage = 6;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleSortChange = (sortType: string) => {
        const productsCopy = [...productsData];
        if (sortType === "price-low-high") {
            productsCopy.sort((a, b) => a.price - b.price);
        } else if (sortType === "price-high-low") {
            productsCopy.sort((a, b) => b.price - a.price);
        } else if (sortType === "name-asc") {
            productsCopy.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortType === "name-desc") {
            productsCopy.sort((a, b) => b.name.localeCompare(a.name));
        }
        setSortedProducts(productsCopy);
        setCurrentPage(1);
    };

    return (
        <div className={cl.shopContainer}>
            <h2>Shop All Products</h2>
            <SortDropdown onSortChange={handleSortChange} />
            <Pagination
                totalProducts={productsData.length}
                productsPerPage={productsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            >
                <ProductCard
                    products={currentProducts}
                    wishlist={wishlist}
                    onAddToWishlist={addToWishlist}
                    onRemoveFromWishlist={removeFromWishlist}
                />
            </Pagination>
        </div>
    );
};

export default ShopPage;