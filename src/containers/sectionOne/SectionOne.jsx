import './sectionOne.css'
import IPhone from 'assets/iphone.png'
import video from 'assets/video.mp4'

export const SectionOne = () => {
  return (
    <>
      <section className='section-one-container'>
        <div className='h1-iphone-container'>
          <div className='h1-section'>
            <h1>Tu sitio web rapido, simple y en todos los dispositivos</h1>
          </div>
          <div className='iphone-section'>
            <video className='video' autoPlay loop muted playsInline>
              <source src={video} type='video/mp4' />
            </video>
            <img src={IPhone} className='iphone' />
          </div>
        </div>
      </section>
    </>
  )
}
