import { Carousel } from 'react-responsive-carousel';
import { howWeWork } from '../../data';
import Card from './card';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const CarouselCards = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} className="cards-container">
      {howWeWork.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          number={item.number}
        />
      ))}
    </Carousel>
  );
};

export default CarouselCards;
