import React, { useState } from "react";
import "./Card.css";

function Card({ movie }) {
  const [activeCard, setActiveCard] = useState(false);
  const handleClickCard = () => {
    setActiveCard(true);
  };
  const desactiveCard = () => setActiveCard(false)
  return (
    <>
      <div
        className="card_container"
        onClick={handleClickCard}
      >
        <h3>{movie.title}</h3>
        <img src={movie.image_url} />
      </div>
      {activeCard?
        (<dialog open className="modal_active_card">
          <h1>holaaaa</h1>
          <button onClick={desactiveCard}>cerrar</button>
        </dialog>):''
      }
    </>
  );

  
}

export default Card;
