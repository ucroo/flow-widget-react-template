import React from "react";
import icon from "../styles/assets/book.svg";
import "../styles/App.css";

function Book({ title }) {
  return (
      <p className="flex-grow">
				<img src={icon} alt="book icon" style={{ height: "22px" }} className="pr-8 align-center" />
        {title} 
     </p>
  );
}

export default Book;

