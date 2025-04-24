import Button from './Button';
import './ComponentsStyle/bestCard.scss';

export default function BestCard({imageSrc, title}){

    return (
        <div className='bestCard'>
            <a href='#' className='bestCardLink'>
                <img src={imageSrc} alt={title}/>
                <div className='bestOverlay'>
                    <h3 className='bestTitle'>{title}</h3>
                </div>

            </a>
            <Button className='green-btn' children='Shop now'/>
        </div>
    )
}