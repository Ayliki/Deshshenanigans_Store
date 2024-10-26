import { createContext, useState, useContext, ReactNode } from "react";
import { Product } from "../types/product";

interface WishlistContextProps {
    wishlist: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: number) => void;
}

const WishlistContext = createContext<WishlistContextProps | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
    const [wishlist, setWishlist] = useState<Product[]>([]);

    const addToWishlist = (product: Product) => {
        setWishlist((prevWishlist) => {
            const isInWishlist = prevWishlist.some(item => item.id === product.id);
            if (isInWishlist) return prevWishlist; // Avoid duplicates
            return [...prevWishlist, product];
        });
    };

    const removeFromWishlist = (productId: number) => {
        setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== productId));
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
};