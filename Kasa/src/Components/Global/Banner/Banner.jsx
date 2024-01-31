import PropTypes from 'prop-types';
import './Banner.css';

function Banner({ component, titre }) {
  return (
    <div className={`banner ${component}`}>
      <div className="bg-sombre">
        <h1>{titre}</h1>
      </div>
    </div>
  );
}

Banner.propTypes = {
  component: PropTypes.string,
  titre: PropTypes.string,
};

export default Banner;
