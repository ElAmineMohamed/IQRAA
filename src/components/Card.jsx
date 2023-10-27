import { useState } from "react";
import img2 from "../assets/profile-picture.jpeg";
import img1 from "../assets/photo-1575936123452-b67c3203c357.jpeg";
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsBookmarkCheck,
  BsFillExclamationCircleFill,
} from "react-icons/bs";

export default function Card() {
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [fav, setFav] = useState(false);
  const handelUp = () => {
    setUp(!up);
  };
  const handelDown = () => {
    setDown(!down);
  };
  const handelFav = () => {
    setFav(!fav);
  };
  return (
    <div className="p-Card">
      <div className="name">
        <div className="name-img">
          <img src={img2} alt="" />
          <p>Amine</p>
        </div>
        <div className="role-time">
          <p>school</p>
        </div>
      </div>
      <div className="status">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum,
          tenetur? Ea, animi ad? Fugit facilis odio pariatur maxime quia, eius,
          te
        </p>
      </div>
      <div className="p-img">
        <img src={img1} />
        <img src={img1} />
      </div>
      <div className="publication-items">
        <li>
          <BsArrowUpCircle
            size="22px"
            color={up ? "#1d9bf0" : "#ffff"}
            onClick={handelUp}
          />
          <span>10</span>
        </li>
        <li>
          <BsArrowDownCircle
            size="22px"
            color={down ? "#1d9bf0" : "#ffff"}
            onClick={handelDown}
          />{" "}
          <span>5</span>
        </li>
        <li>
          <BsBookmarkCheck
            size="22px"
            color={fav ? "#1d9bf0" : "#ffff"}
            onClick={handelFav}
          />
        </li>
        <li>
          <BsFillExclamationCircleFill size="22px" />
        </li>
      </div>
    </div>
  );
}
