import { useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import cl from './styles.module.css'
import productsData from "../../data/products";
import Pagination from "../../components/Pagination/Pagination";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import { Product } from "../../types/product";

const ShopPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedProducts, setSortedProducts] = useState<Product[]>(productsData);
    const productsPerPage = 6;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleSortChange = (sortType: string) => {
        const productsCopy = [...productsData]; // Start with a fresh copy of the original data

        if (sortType === "price-low-high") {
            productsCopy.sort((a, b) => a.price - b.price);
        } else if (sortType === "price-high-low") {
            productsCopy.sort((a, b) => b.price - a.price);
        } else if (sortType === "name-asc") {
            productsCopy.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortType === "name-desc") {
            productsCopy.sort((a, b) => b.name.localeCompare(a.name));
        }

        setSortedProducts(productsCopy); // Update sorted products
        setCurrentPage(1); // Reset to the first page after sorting
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
                <ProductCard products={currentProducts} />
            </Pagination>
        </div>
    )
}

export default ShopPage