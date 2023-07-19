import HornedBeast from "../HornedBeast/HornedBeast";
import data from "../../data.json"
import "./Main.css"

export default function Main() {
  return (
    <div className="main-div">
     <HornedBeast title={data[0].title} imgUrl={data[0].image_url} description={data[0].description} />
      <HornedBeast title={data[1].title} imgUrl={data[1].image_url} description={data[1].description} />
      <HornedBeast title={data[2].title} imgUrl={data[2].image_url} description={data[2].description} />
      <HornedBeast title={data[3].title} imgUrl={data[3].image_url} description={data[3].description} />
      <HornedBeast title={data[4].title} imgUrl={data[4].image_url} description={data[4].description} />
      <HornedBeast title={data[5].title} imgUrl={data[5].image_url} description={data[5].description} />
    </div>
  );
}