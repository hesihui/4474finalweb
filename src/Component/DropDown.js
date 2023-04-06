import { useEffect, useState } from "react";
import ascalonImage from "./assets/ascalon.jpg";
import krytaImage from "./assets/kryta.jpg";
import mistsImage from "./assets/mists.jpg";
import silverpeakImage from "./assets/silverpeak.jpg";
import southsunImage from "./assets/southsun.jpg";

export default function DropDown() {
  const [map, setMap] = useState("selectYourMap");

  const [ascalonContentVisible, setAscalonContentVisible] = useState(false);
  const [krytaContentVisible, setKrytaContentVisible] = useState(false);
  const [mistsContentVisible, setMistsContentVisible] = useState(false);
  const [silverpeakContentVisible, setSilverpeakContentVisible] =
    useState(false);
  const [southsunContentVisible, setSouthsunContentVisible] = useState(false);

  useEffect(() => {
    map === "Ascalon"
      ? setAscalonContentVisible(true)
      : setAscalonContentVisible(false);
    map === "Kryta"
      ? setKrytaContentVisible(true)
      : setKrytaContentVisible(false);
    map === "Mists"
      ? setMistsContentVisible(true)
      : setMistsContentVisible(false);
    map === "Shiverpeak"
      ? setSilverpeakContentVisible(true)
      : setSilverpeakContentVisible(false);
    map === "SouthSun"
      ? setSouthsunContentVisible(true)
      : setSouthsunContentVisible(false);
  }, [map]);

  const handleOnChange = (e) => {
    setMap(e.target.value);
  };

  const makeFirstLetterCapital = (str) => {
    return "Current Map: " + str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    map === "selectYourMap"
      ? (result = "Please Select Your Map")
      : (result = makeFirstLetterCapital(map));
    return result;
  };

  return (
    <div className="container mt-3">
      <div>
        <p> {renderResult()}</p>
      </div>
      <div className="mt-4">
        <select className="form-select" value={map} onChange={handleOnChange}>
          <option value="selectYourMap">Select your map</option>
          <option value="Ascalon">Ascalon</option>
          <option value="Kryta">Kryta</option>
          <option value="Mists">Mists</option>
          <option value="Shiverpeak">ShiverPeak</option>
          <option value="SouthSun">SouthSun</option>
        </select>
      </div>

      {ascalonContentVisible && (
        <img width="60%" className="Img" src={ascalonImage} alt="Ascalon" />
      )}

      {krytaContentVisible && (
        <img width="60%" className="Img" src={krytaImage} alt="Kryta" />
      )}
      {mistsContentVisible && (
        <img width="60%" className="Img" src={mistsImage} alt="Mists" />
      )}
      {silverpeakContentVisible && (
        <img
          width="60%"
          className="Img"
          src={silverpeakImage}
          alt="Silverpeak"
        />
      )}
      {southsunContentVisible && (
        <img width="60%" className="Img" src={southsunImage} alt="Southsun" />
      )}
    </div>
  );
}
