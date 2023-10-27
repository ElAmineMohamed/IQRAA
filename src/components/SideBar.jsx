import {
    FaPuzzlePiece,
    FaBook,
    FaCircleInfo,
    FaBell,
    FaHouseChimney,
  } from "react-icons/fa6";

export default function SideBar() {
  return (
    <header>
    <div className="icon">
      <div className="logo">IQRAA</div>
      <li>
        <FaHouseChimney size="40px" />
        <span>home</span>
      </li>
      <li>
        <FaPuzzlePiece size="40px" />
        puzzel
      </li>
      <li>
        <FaBook size="40px" /> Book
      </li>
      <li>
        <FaBell size="40px" /> Book
      </li>
      <li>
        <FaCircleInfo size="40px" />
        About
      </li>
      <button className="p-btn">public</button>
    </div>
    <div className="Profile">Profile</div>
  </header>
  )
}
