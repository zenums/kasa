import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Stars({ dataLocation }) {
  // Fonction pour générer des étoiles
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;

    for (let i = 1; i <= maxStars; i++) {
      const starClassName = i <= rating ? 'star-red' : 'star-gray';
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className={`star ${starClassName}`} />);
    }
    return stars;
  };

  return (
      <div className="rating">{renderStars(dataLocation.rating)}</div>
  );
}

Stars.propTypes = {
  dataLocation: PropTypes.shape({
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default Stars;
