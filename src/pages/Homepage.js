import React, { useState } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Homepage = () => {
  const auth = "563492ad6f917000010000012f336030dd0147558acab6f4d0459ee9";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let [data, setData] = useState(null);
  const search = async () => {
    const dataFetch = await fetch(initialURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
    console.log(parsedData.photos);
  };
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={search} />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} key={d.id} />;
          })}
      </div>
    </div>
  );
};

export default Homepage;
