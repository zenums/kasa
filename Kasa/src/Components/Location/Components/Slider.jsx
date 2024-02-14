import { useState } from 'react';
import ArrowLeft from '../../../assets/arrow-left.png';
import ArrowRight from '../../../assets/arrow-right.png';
import PropTypes from 'prop-types';

function Slider({ data }) {
  const [Currentpictures, setCurrentPictures] = useState(0);
  const NbPictures = data.pictures.length;

  // Fonction pour gérer la numérotation du carrousel
  function NBnumCaroussel() {
    if (NbPictures === 1) {
      return "";
    } else {
      return `${Currentpictures + 1}/${NbPictures}`;
    }
  }

  // Fonction pour gérer le carrousel
  function Slides(arrow) {
    const picturesData = data.pictures;

    if (arrow === 1) {
      if (Currentpictures === 0) {
        setCurrentPictures(picturesData.length - 1);
      } else {
        setCurrentPictures(Currentpictures - 1);
      }
    } else if (arrow === 2) {
      if (Currentpictures === picturesData.length - 1) {
        setCurrentPictures(0);
      } else {
        setCurrentPictures(Currentpictures + 1);
      }
    }

    return picturesData[Currentpictures];
  }

  return (
    <div className="banner-location">
      <img src={Slides()} alt="" className="img-pictures" />
      <img
        src={NbPictures === 1 ? "" : ArrowLeft}
        alt=""
        className="arrow left"
        onClick={() => Slides(1)}
      />
      <img
        src={NbPictures === 1 ? "" : ArrowRight}
        alt=""
        className="arrow right"
        onClick={() => Slides(2)}
      />
      <span className="numero-slide">{NBnumCaroussel()}</span>
    </div>
  );
}

Slider.propTypes = {
  data: PropTypes.shape({
    pictures: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default Slider;
