import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './Location.css';
import Data from '../../Data/Data.json';
import Loader from '../Loader/Loader';
import Slider from './Components/Slider';
import Head from "./Components/Header";
import Stars from "./Components/Stars";
import GroupTogglePanel from "./Components/GroupTogglePanel";
import GroupTag from "./Components/GroupTag";
import Profil from "./Components/Profil";

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
            <div className="header-location">
              <div className="bloc-one flex">
                <Head dataLocation={dataLocation}/> 
                <GroupTag dataLocation={dataLocation}/>
              </div>
              <div className="bloc-two flex">
                <Profil dataLocation={dataLocation}/>
                <Stars dataLocation={dataLocation}/>
              </div>
            </div>
            <GroupTogglePanel dataLocation={dataLocation}/>
          </div>
       </>
  );
}

export default Location;
