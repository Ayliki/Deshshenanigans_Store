import cl from './styles.module.css'

interface IPagination {
    totalProducts: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    productsPerPage: number;
    children: React.ReactNode;
}

const Pagination = ({ totalProducts, currentPage, setCurrentPage, productsPerPage, children }: IPagination) => {
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className={cl.paginationContainer}>
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`${cl.pageButton} ${page === currentPage ? cl.active : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {children}

            <div className={cl.paginationContainer}>
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`${cl.pageButton} ${page === currentPage ? cl.active : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Pagination;