import { ChangeEvent } from 'react';
import cl from './styles.module.css';

interface IProps {
    onSortChange: (sortType: string) => void;
}

const SortDropdown = ({ onSortChange }: IProps) => {
    const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const sortValue = e.target.value;
        onSortChange(sortValue);
    };

    return (
        <div className={cl.sortDropdown}>
            <label htmlFor="sort">Sort By: </label>
            <select id="sort" onChange={handleSortChange} className={cl.dropdown}>
                <option value="default">Default</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
                <option value="name-desc">Name: Z-A</option>
            </select>
        </div>
    );
};

export default SortDropdown;