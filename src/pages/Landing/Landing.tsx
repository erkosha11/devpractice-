import { Footer } from "antd/es/layout/layout";
import Items1 from "../items1/items1";
import Items2 from "../items2/items2";
import Items3 from "../items3/items3";
import Items4 from "../items4/items4";
import Items5 from "../items5/items5";
import Items6 from "../items6/items6";
import Items7 from "../items7/items7";
import "../../App.css";


export const Landing =() => {
  return (
    <>
      <Items1 />
      <Items2 />
      <Items3 />
      <Items4 />
      <Items5 />
      <Items6 />
      <Items7 />
      <Footer />
    </>
  );
}
