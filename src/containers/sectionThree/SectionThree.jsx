import CarouselCards from '../../components/Carousel/CarouselCards'
import './SectionThree.css'

export const SectionThree = () => {
  return (
    <section className='how-we-work-section'>
      <div className='title-section-container'>
        <h2 className='title-section'>HOW WE WORK</h2>
        <h4 className='subtitle-section'>All Steps Matter</h4>
      </div>

      <CarouselCards />
    </section>
  )
}
