import HornedBeast from "../HornedBeast/HornedBeast";
import React from "react";
import "./Main.css"

export default function Main({ data, handleModal }) {
  return (
    <main>
      {data.map((beast, key) => {
        return (
          <HornedBeast
            key={beast._id}
            beastObject={beast}
            title={beast.title}
            imgUrl={beast.image_url}
            description={beast.description}
            handleModal={handleModal}
          />
        );
      })}
    </main>
  );
}

// }
//     // <div className="main-div">
//     //  <HornedBeast title={data[0].title} imgUrl={data[0].image_url} description={data[0].description} />
//     //   <HornedBeast title={data[1].title} imgUrl={data[1].image_url} description={data[1].description} />
//     //   <HornedBeast title={data[2].title} imgUrl={data[2].image_url} description={data[2].description} />
//     //   <HornedBeast title={data[3].title} imgUrl={data[3].image_url} description={data[3].description} />
//     //   <HornedBeast title={data[4].title} imgUrl={data[4].image_url} description={data[4].description} />
//     //   <HornedBeast title={data[5].title} imgUrl={data[5].image_url} description={data[5].description} />
//     // </div>
//   );
// }