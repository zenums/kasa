import PropTypes from 'prop-types';

function Head({ dataLocation }) {
  return (
    <div className="bloc-one flex">
      <div className="info-head ">
        <h1>{dataLocation.title}</h1>
        <span>{dataLocation.location}</span>
      </div>
      <div className="profil">
        <span>{dataLocation.host.name}</span>
        <img src={dataLocation.host.picture} alt={dataLocation.host.name} />
      </div>
    </div>
  );
}

Head.propTypes = {
  dataLocation: PropTypes.shape({
    title: PropTypes.string,
    location: PropTypes.string,
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
  }),
};

export default Head;
