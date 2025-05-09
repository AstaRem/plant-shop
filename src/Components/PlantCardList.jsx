
import usePlants from '../hooks/usePlants';
import DataHandler from '../utils/DataHandler';
import './ComponentsStyle/PlantCardList.scss';
import PlantCard from './PlantCard';

export default function PlantCardList({ filterType='', limit=0 }) {

    const { plants, loading, error } = usePlants();
    const getFilteredPlants = plants => {
        let filtered = plants;
        if (filterType === 'hot') {
            filtered.sort((a, b) => 
                b.rating - a.rating
            )
        } else if (filterType === 'deals') {
            filtered.sort((a, b) => 
                b.discount - a.discount
            )
        } else if (filterType === 'price-high') {
            filtered.sort((a, b) => 
                b.price - a.price
            )
        } else if (filterType === 'price-low') {
            filtered.sort((a, b) => 
                a.price - b.price
            )
        }

        return limit ? filtered.slice(0, limit) : filtered;
    }

    const filteredPlants = getFilteredPlants(plants);
    console.log(filteredPlants);

    return (
        <div className="plant-card-list">
            <DataHandler loading={loading} error={error}>
                {
                    filteredPlants.map(p => (
                        <PlantCard key={p.id} imageSrc={p.imageSrc} title={p.title} price={p.price} discount={p.discount} plantId={p.id}/>
                    ))
                }
            </DataHandler>

        </div>

    )
}