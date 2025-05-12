import './ComponentsStyle/CategoriesList.scss'
import DataHandler from '../utils/DataHandler';
import CategoryCard from './CategoryCard';
import useCategories from '../hooks/useCategories';

export default function CategoriesList() {

    const {categories, loading, error } = useCategories();


    return (
        <div className="categories-list">
            <DataHandler
                loading={loading}
                error={error}
            >
                {categories.map(elem => (
                    <CategoryCard imageSrc={elem.imageSrc} title={elem.title} key={elem.id}></CategoryCard>
                ))}
            </DataHandler>
        </div>
    );
}