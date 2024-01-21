import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Location.css';
import Data from '../../Data/Data.json';
import Loader from '../Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import TogglePanel from '../TogglePanel/TogglePanel';
import Slider from './Components/Slider';

function Location() {
  const [dataLocation, setDataLocation] = useState();
  const [loading, setLoading] = useState(true);

  const { locationID } = useParams();
  const navigate = useNavigate(); 



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const foundData = Data.find(item => item.id === locationID);
        setDataLocation(foundData);
        console.log(foundData);

       if (!foundData) {
          navigate("NotFound");
      }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    };
    fetchData();
  }, []);

  
  // Fonction pour générer des étoiles
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
  
    for (let i = 1; i <= maxStars; i++) {
      const starClassName = i <= rating ? "star-red" : "star-gray";
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className={`star ${starClassName}`} />);
    }
    return stars;
  };

  // Fonction pour générer les équipements du TogglePanel
  function HandleEquipement() {
    return dataLocation.equipments.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Slider data={dataLocation}/>
          <div className="container-info-location">
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
            <div className="bloc-two flex">
              <ul className="list-tag">
                {dataLocation.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
              <div className="rating">
                {renderStars(parseInt(dataLocation.rating))}
              </div>
            </div>
            <div className="bloc-three flex">
                  <TogglePanel title={'Description'} text={dataLocation.description}/>
                  <TogglePanel title={'Équipements'} text={HandleEquipement()}/>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Location;
