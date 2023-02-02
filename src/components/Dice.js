import dadovazio from '../assets/images/dice-empty.png';
import dado1 from '../assets/images/dice1.png';
import dado2 from '../assets/images/dice2.png';
import dado3 from '../assets/images/dice3.png';
import dado4 from '../assets/images/dice4.png';
import dado5 from '../assets/images/dice5.png';
import dado6 from '../assets/images/dice6.png';

import { useState } from 'react';

function Dice() {
  const [img, setImage] = useState(dadovazio);

  const dices = [dado1, dado2, dado3, dado4, dado5, dado6];

  function ChangeImage() {
    if (img === dadovazio) {
      let item = dices[Math.floor(Math.random() * dices.length)];
      setImage(item);
    } else {
      let item = dices[Math.floor(Math.random() * dices.length)];
      setImage(dadovazio);
      setTimeout(() => {
        setImage(item);
      }, 1000);
    }
  }

  return (
    <div>
      <h2> Dice </h2>
      <img alt="dice" src={img} onClick={ChangeImage} className="dice-style" />
    </div>
  );
}

export default Dice;
