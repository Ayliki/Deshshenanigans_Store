import React from "react";
import cl from "./styles.module.css";
import { Product } from "../../types/product";

interface WishlistProps {
  wishlistItems: Product[];
  onRemoveFromWishlist: (productId: number) => void;
}

const Wishlist: React.FC<WishlistProps> = ({ wishlistItems, onRemoveFromWishlist }) => {
  return (
    <div className={cl.wishlistContainer}>
      <h2>Your Wishlist</h2>
      {wishlistItems.length > 0 ? (
        <ul className={cl.wishlistItems}>
          {wishlistItems.map((item) => (
            <li key={item.id} className={cl.wishlistItem}>
              <img src={item.imageUrl} alt={item.name} className={cl.itemImage} />
              <div className={cl.itemDetails}>
                <h3>{item.name}</h3>
                <p className={cl.itemPrice}>${item.price.toFixed(2)}</p>
                <button onClick={() => onRemoveFromWishlist(item.id)} className={cl.removeButton}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={cl.emptyWishlist}>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;