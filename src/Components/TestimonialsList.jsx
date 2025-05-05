import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';
import './ComponentsStyle/testimonialsList.scss';
import TestimonialsCard from './TestimonialsCard';

export default function TestimonialsList() {

    const { data: testimonials, loading, error } = useFetch('https://gist.githubusercontent.com/AstaRem/b8cbfc1068ca52664948b21ce95fcc20/raw/d1fbb9623675ef0ed15c9e175a30fdfcf6461b0a/clients.json',
        'clients',
        'img');
    console.log(testimonials);
    return (
        <div className="test-list">
            <DataHandler loading={loading} error={error}>
                {
                    testimonials.map((card) => (
                        <TestimonialsCard
                        
                            key={card.id}
                            imageSrc={card.imageSrc}
                            name={card.name}
                            text={card.text}
                            rating={card.rating}


                        />
                    ))
                }
            </DataHandler>

        </div>
    )
}