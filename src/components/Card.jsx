import img1 from "../assets/photo-1575936123452-b67c3203c357.jpeg";
import {
  BsArrowUpCircle,
  BsArrowDownCircle,
  BsBookmarkCheck,
  BsFillExclamationCircleFill,
} from "react-icons/bs";

export default function Card() {
  return (
    <div className="p-Card">
      <div className="name">
        <div className="name-img">
          <img src="" alt="" />
          <h1></h1>
        </div>
        <div className="role-time">
          <p>sdfgasgfdasfdgh</p>
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
      </div>
      <div className="publication-items">
        <li>
          <BsArrowUpCircle size="22px" /> <span>10</span>
        </li>
        <li>
          <BsArrowDownCircle size="22px" /> <span>5</span>
        </li>
        <li>
          <BsBookmarkCheck size="22px" />
        </li>
        <li>
          <BsFillExclamationCircleFill size="22px" />
        </li>
      </div>
    </div>
  );
}
