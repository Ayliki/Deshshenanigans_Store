import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "../types/product";

interface CartItem extends Product {
    quantity: number;
}

interface CartContextProps {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    calculateTotal: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart(prevCart => {
            const exisingItem = prevCart.find(item => item.id === product.id);
            if (exisingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }
    const removeFromCart = (productId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    }

    const updateQuantity = (productId: number, quantity: number) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === productId ? { ...item, quantity } : item
            )
        );
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, calculateTotal }}>
            {children}
        </CartContext.Provider>
    );
}


export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};