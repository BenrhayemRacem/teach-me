import {Navbar} from "../navbar/Navbar";
import './app.css'
import {Introduction} from "../introduction/Introduction";
import {Banner} from "../banner/Banner";

function App() {
  return (
    <>
      <Banner/>
    <Navbar/>
      <Introduction/>

    </>
  );
}

export default App;
