import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Location.css';
import Data from '../../Data/Data.json';
import Loader from '../Loader/Loader';
import Slider from './Components/Slider';
import Head from "./Components/Header";
import Stars from "./Components/Stars";
import GroupTogglePanel from "./Components/GroupTogglePanel";

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

  if(loading) return <Loader />

  return (
        <>
          <Slider data={dataLocation}/>
          <div className="container-info-location">
            <Head dataLocation={dataLocation}/>
            <Stars dataLocation={dataLocation}/>
            <GroupTogglePanel dataLocation={dataLocation} title="Equipements"/>
          </div>
       </>
  );
}

export default Location;
