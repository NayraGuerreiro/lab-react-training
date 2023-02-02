import img1 from './maxence.png';
import img2 from './maxence-glasses.png';

import { useState } from 'react';

function ClikablePicture() {
  const [img, setImage] = useState(img1);

  function ChangeImage() {
    if (img === img1) {
      setImage(img2);
    } else {
      setImage(img1);
    }
  }

  return (
    <div>
      <h2> Pictures </h2>
      <img alt="foto" src={img} onClick={ChangeImage} className="style-img" />
    </div>
  );
}

export default ClikablePicture;
