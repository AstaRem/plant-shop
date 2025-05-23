import { useState } from 'react';
import useCategories from '../hooks/useCategories';
import './ComponentsStyle/categoryFilter.scss'

export default function CategoryFilter({ onCategoryChange, selectedCategories }) {

    const { categories } = useCategories();

    // const [selectedCategories, setSelectedCategories] = useState([]);

    const handleChange = (categoryId) => {
        if (categoryId == 'all') {
            // setSelectedCategories([]);
            onCategoryChange([]);
            return;
        }
        const updateCategories = selectedCategories.includes(categoryId) 
            ? selectedCategories.filter(id => id !== categoryId)
            : [...selectedCategories, categoryId];
            // setSelectedCategories(updateCategories);
            onCategoryChange(updateCategories);
    };

    return (

        <div className="category-filter">
            <details>
                <summary>
                    By categories:
                </summary>

                <div className="category-dropdown">
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCategories.length === 0}
                            onChange={() => handleChange('all')}
                        />
                        All
                    </label>
                    {
                        categories.map(category => (
                            <label key={category.id}>
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category.id)}
                                    onChange={() => handleChange(category.id)}

                                />
                                {category.title}
                            </label>

                        ))
                    }
                </div>
            </details>
        </div>

    )
}