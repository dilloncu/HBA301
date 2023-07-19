import { useState } from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  const [favs, setFavs] = useState(0);

  function handleFavs() {
    setFavs(favs + 1);
  }

  return (
    <div className="hornedbeastsec">
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="img" src={imgUrl} alt={description} />
      <h2>
        <span className="touch" onClick={handleFavs}>
          Select
        </span>
        {favs}
      </h2>
    </div>
  );
}
