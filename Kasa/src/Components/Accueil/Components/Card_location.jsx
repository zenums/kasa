import { Link } from "react-router-dom";

function Card_location({ titre, img, id }) {

  return (
    <Link to={`location/${id}`} className="card-location">
      <img src={img} alt={titre} />
      <div className="titre-card-location">
        <h4>{titre}</h4>
      </div>
    </Link>
  );
}

export default Card_location;
