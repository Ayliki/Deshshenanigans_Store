import { Product } from "../../types/product";
import cl from './styles.module.css';

interface CartItemProps {
    item: Product & { quantity: number };
    onRemove: (id: number) => void;
    onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
    return (
        <div className={cl.cartItem}>
            <img src={item.imageUrl} alt={item.name} className={cl.itemImage} />
            <div className={cl.itemDetails}>
                <h3 className={cl.itemName}>{item.name}</h3>
                <p className={cl.itemPrice}>${item.price.toFixed(2)}</p>
                <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
                    className={cl.quantityInput}
                />
                <button onClick={() => onRemove(item.id)} className={cl.removeButton}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;