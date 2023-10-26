import "./App.scss";
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae in
          quaerat consequuntur. Fugit eos architecto in qui reiciendis corrupti
          a accusantium, earum ipsa magnam provident similique iure aliquid
          neque cupiditate.
        </div>
        <Trending />
      </main>
    </>
  );
}

export default App;
