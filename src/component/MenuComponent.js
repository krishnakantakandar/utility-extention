import React from "react";
import "./Mystyle.css";

const MenuComponent = ({ uniquePlatform, filterTheDetails }) => {
  uniquePlatform.forEach((element) => {
    console.log(element);
  });
  return (
    <>
      {uniquePlatform.map((cur, index) => {
        return (
          <div
            onClick={() => {
              filterTheDetails(cur);
            }}
            className="menu-item"
            key={index}
          >
            {cur}
          </div>
        );
      })}
    </>
  );
};
export default MenuComponent;
