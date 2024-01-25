import PropTypes from 'prop-types';
import TogglePanel from "../../TogglePanel/TogglePanel";

function GroupTogglePanel({ dataLocation }) {

  // Fonction pour générer les équipements du TogglePanel
  function handleEquipement() {
    return dataLocation.equipments.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }

  return (
    <div className="bloc-three flex">
      <TogglePanel title={'Description'} text={dataLocation.description} />
      <TogglePanel title={'Équipements'} text={handleEquipement()} />
    </div>
  );
}

GroupTogglePanel.propTypes = {
  dataLocation: PropTypes.shape({
    description: PropTypes.string,
    equipments: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default GroupTogglePanel;
