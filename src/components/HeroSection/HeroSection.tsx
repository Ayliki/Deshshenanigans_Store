import { useNavigate } from 'react-router-dom';
import cl from './styles.module.css'

const HeroSection = () => {
    const navigate = useNavigate();
    const handleShopNowClick = () => {
        navigate('/shop')
    }
    return (
        <div className={cl.hero}>
            <h1>Wacky Office Supplies You Never Knew You Needed!</h1>
            <p>Your place for weird and wacky office supplies!</p>
            <button
                className={cl.ctaBtn}
                onClick={handleShopNowClick}
            >
                Shop Now
            </button>
        </div>
    )
};

export default HeroSection;