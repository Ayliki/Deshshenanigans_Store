import { useWishlist } from "../../context/WishlistContext";
import Wishlist from "../../components/Wishlist/Wishlist";

const WishlistPage = () => {
    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <Wishlist
            wishlistItems={wishlist}
            onRemoveFromWishlist={removeFromWishlist}
        />
    );
};

export default WishlistPage;