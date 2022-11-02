import React from "react";
import ReactDOM from "react-dom";

const picSum = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>

    {/* <ul>
      <li>Samosa</li>
      <li>Gulab Jamun</li>
      <li>Pani Puri</li>
    </ul> */}

    <div>
      <div>
        <img src={picSum} alt="random" />
      </div>
      <ul>
        <li>Samosa</li>
        <img
          className="food-img"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Samosachutney.jpg"
          alt="Samosa"
        />

        <li>Gulab Jamun</li>
        <img
          className="food-img"
          src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Gulab_jamun_%28Gibraltar%2C_November_2020%29.jpg"
          alt="Gulab Jamun"
        />

        <li>Pani Puri</li>
        <img
          className="food-img"
          src="https://www.funfoodfrolic.com/wp-content/uploads/2022/03/Kachori-Blog.jpg"
          alt="Kachori"
        />
      </ul>
    </div>
  </div>,
  document.getElementById("root")
);
