import './Accueil.css';
import { useState,useEffect } from 'react';
import Card from './Components/Card_location'
import Data from '../../Data/Data.json'

function Accueil() {
  
  const [dataLocation, setDataLocation] = useState([]);

  useEffect(() =>{
      setDataLocation(Data)
  },[]);


  return (
    <>
        <div className="banner accueil">
            <div className="bg-sombre">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
        <div className="container-location">
          {dataLocation.map((data, id) => {
              return <Card key={id} titre={data.title} img={data.cover} id={data.id}/>})
          }
        </div>

    </>
  )
}
export default Accueil