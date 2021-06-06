import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jsonData from "../restaurants.json";

import React, { useEffect } from "react";
import DATA_ACTIONS from "../redux/data/action";

const { setJson } = DATA_ACTIONS;

function Home(props) {
  // console.log("data",props.data)
  useEffect(() => {
    props.setJson(jsonData);
  }, []);
  return (
    <div>
      <input type="text" placeholder="search address" />

      {props.data?.restaurants?.map((element) => (
        <Link to={{ pathname: "/details", data: element }} className="details">
          <h1>{element.name}</h1>
          <p>{element.neighborhood}</p>
          <img src={element.photograph} alt="restaurentImage" />
          <p>{element.address}</p>
        </Link>
      ))}
    </div>
  );
}

export default connect(
  (state) => ({
    data: state.default.data.get("data"),
  }),
  { setJson }
)(Home);
