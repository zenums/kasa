import PropTypes from 'prop-types';

function Head({ dataLocation }) {
  return (
      <div className="info-head ">
        <h1>{dataLocation.title}</h1>
        <span>{dataLocation.location}</span>
      </div>
  );
}

Head.propTypes = {
  dataLocation: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
  }),
};

export default Head;
