import { useEffect, useState } from 'react';
import Data from '../../Data/Data.json';
import Banner from '../Global/Banner/Banner';
import './Accueil.css';
import Card from './Components/Card_location';

function Accueil() {
  
  const [dataLocation, setDataLocation] = useState([]);

  useEffect(() =>{
      setDataLocation(Data)
  },[]);


  return (
    <>
        <Banner 
        component={"accueil"} 
        titre={"Chez vous, partout et ailleurs"}
        />
        <div className="container-location">
          {dataLocation.map((data, id) => {
              return <Card key={id} titre={data.title} img={data.cover} id={data.id}/>})
          }
        </div>

    </>
  )
}
export default Accueil