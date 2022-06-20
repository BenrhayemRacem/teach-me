import {Navbar} from "../navbar/Navbar";
import './app.css'
import {Introduction} from "../introduction/Introduction";
import {Banner} from "../banner/Banner";
import {Product} from "../product/Product";
import {Client} from "../client/Client";
import {Contact} from "../contact/Contact";

function App() {
  return (
    <>
      <Banner/>
    <Navbar/>
      <Introduction/>
      <Client/>
      <Product/>
      <Contact/>

    </>
  );
}

export default App;
