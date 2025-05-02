import './ComponentsStyle/sectionTestimonials.scss';
import TestimonialsList from './TestimonialsList';

export default function SectionTestimonials(){

    return(
        <section className="light-bg">
            <div className="wrapper test-section">
                <h2 className="test-title">Testimonials</h2>
                <p className="test-text">Plants parents love us</p>
                <TestimonialsList />
            </div>
        </section>
    )
}