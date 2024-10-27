import { useCart } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import cl from './styles.module.css';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, calculateTotal } = useCart();

    return (
        <div className={cl.cartContainer}>
            <h2>Your Cart</h2>
            {cart.length > 0 ? (
                <div className={cl.cartItems}>
                    {cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onRemove={removeFromCart}
                            onUpdateQuantity={updateQuantity}
                        />
                    ))}
                </div>
            ) : (
                <p className={cl.emptyCart}>Your cart is empty.</p>
            )}
            <div className={cl.totalContainer}>
                <h3 className={cl.totalText}>Total: ${calculateTotal().toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default CartPage;