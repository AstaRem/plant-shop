
import './ComponentsStyle/bestList.scss';
import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';
import BestCard from './BestCard';

export default function BestList(){


    const { data: bestCards, loading, error } = useFetch('https://gist.githubusercontent.com/AstaRem/ca1a60fe316cac793a611ed17e30ae6c/raw/335666548b104e84e1f8ba8716f6303f778405d3/bestSelling.json','bestSelling','fileName');


    return (
        <div className='bestList'>
            <DataHandler>
                {bestCards.map(card => (
                    <BestCard key={card.id} imageSrc={card.imageSrc} title={card.title} />
                ))
            }

            </DataHandler>

        </div>
    )
}