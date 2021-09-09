import React, { useState, useEffect, useLayoutEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Book from "./Book";
import "../styles/App.css";
import LoadingSpinner from "./LoadingSpinner";
import "simplebar/dist/simplebar.min.css";

function App(props) {
  const [userdata, setUserdata] = useState(null);
  const [measurement, setMeasurement] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const query = new URLSearchParams(props.location.search);
  const param = query.get("widgetid");

  useEffect(() => {
    setErrorMsg("");

    axios
      .get("data/dummyData.json")
      .then((res) => {
				setUserdata(res.data);
      })
      .catch((err) => {
        console.log("error", err);
        setErrorMsg(err.response);
      });
  }, []);

	var updateHeight = function(measurement){
		const newHeight = window.document.body.offsetHeight;
		window.CampusUI.updateHeight(newHeight);
	}

  useLayoutEffect(() => {
    if (measurement) {
			updateHeight();
			setTimeout(function(){
				updateHeight();
			},50); // this is to ensure that the complete height of the entire window is calculated, after any DOM insertions.
    }
  }, [userdata, errorMsg, param, measurement]);

  let elem = (
    <div
      ref={(d) => {
        setMeasurement(d);
      }}
      className="bg-white non-touch"
    >
      <div className=" mx-24">
        <div className="d-flex py-16">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  );

  if (userdata)
    elem = (
      <div
        ref={(d) => {
          setMeasurement(d);
        }}
        className="bg-white non-touch"
        style={{ padding: "12px" }}
      >
        <div className="px-4">
          <p className="text-md pb-12 text-quiet"><span>Username: </span>{userdata.name}</p>
          {userdata.overdueBooks
            .map((book) => {
              return <Book title={book.title} key={book.id} />;
            })}
        </div>
      </div>
    );
  return elem;
}

export default withRouter(App);
