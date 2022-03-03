import Styled from "./assets/Card.module.css";
import Image from "./Image";
import { useState } from "react";

export default function Card() {
  const [buttonColer, setbuttonColor] = useState("white");

  const colerPicker = () => {
    const colors = ["red", "green", "yellow", "blue", "white"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  };

  return (
    <div className={`${Styled.Card} margin`}>
      <h3 className={Styled.cardHading}>This is Styling React Component</h3>
      <Image className={Styled.imge} />
      <div>
        <button
          onClick={() => setbuttonColor(colerPicker())}
          className={Styled.Button}
        >
          React
        </button>
        <button className={Styled.Button}>Anguler</button>
      </div>
      <h1 style={{ color: buttonColer }}>Colore Change</h1>
    </div>
  );
}
