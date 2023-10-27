import "./App.scss";
import Card from "./components/Card";
import SideBar from "./components/SideBar";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <SideBar />
      <main>
        <div className="publication">
          <nav>
            <li>For You</li>
            <li>Following</li>
          </nav>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="right-side">
          <input type="search" />
          <Trending />
        </div>
      </main>
    </>
  );
}

export default App;
