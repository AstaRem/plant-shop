import './ComponentsStyle/CategoriesList.scss';
import useFetch from '../hooks/useFetch';

export default function CategoriesList(){

    const data  = useFetch('https://gist.githubusercontent.com/AstaRem/6f16284ce89a1dfef971a576ba587d76/raw/f9ea0d7ae0f515e4cc4853066bdc89c2e056cafd/data-category.json', 'categories', 'fileName' )
    console.log(data);

    return (
        <div className="categories-list">

        </div>
    )
}