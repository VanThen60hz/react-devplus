import PropTypes from "prop-types";

import "./card.scss";

const Card = ({ car }) => {
  return (
    <div className="card">
      <p className="car__name">Name: {car.name}</p>
      <p className="car__year">Year: {car.year}</p>
      <div className="card__thumbnail">
        <img src={car.thumbnailURL} alt={car.name} />
      </div>
    </div>
  );
};

Card.propTypes = {
  car: PropTypes.object.isRequired,
};

export default Card;
