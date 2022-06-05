import Lottie from 'lottie-react';

const Card = ({ title, number, description }) => {
  return (
    <div className="card">
      <div className="card-number">
        <Lottie loop={true} autoplay={true} animationData={number} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
