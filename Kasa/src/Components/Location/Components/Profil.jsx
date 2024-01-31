import PropTypes from 'prop-types';

function Profil({ dataLocation }) {
  return (
    <div className="profil">
      <span>{dataLocation.host.name}</span>
      <img src={dataLocation.host.picture} alt={dataLocation.host.name} />
    </div>
  );
}

Profil.propTypes = {
  dataLocation: PropTypes.shape({
    host: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
  }),
};

export default Profil;
