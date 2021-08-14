import React, { useState, useEffect } from "react";
import MenuComponent from "./MenuComponent";
import TableComponent from "./TableComponent";
import "./Mystyle.css";

const MainPageComponent = () => {
  const [content, setcontent] = useState([]);
  const [uniquePlatform, setuniquePlatform] = useState([]);
  const [details, setdetails] = useState([]);

  const filterTheDetails = (platform) => {
    const detailOfPlat = content.filter((cur, index) => {
      return cur.site == platform;
    });
    setdetails(detailOfPlat);
  };
  //   console.log(details);
  //   useEffect(() => {}, [de]);

  const getTheContent = async () => {
    let response = await fetch("https://kontests.net/api/v1/all");
    response = await response.json();

    setcontent(response);
  };
  useEffect(() => {
    getTheContent();
  }, []);
  useEffect(() => {
    if (content.length > 0) {
      const arr = [
        ...new Set(
          content.map((cur) => {
            return cur.site;
          })
        ),
      ];
      setuniquePlatform(arr);
    }
  }, [content]);

  //   console.log("hello", uniquePlatform);

  return (
    <>
      <div className="page">
        <div className="all-menu">
          <MenuComponent
            uniquePlatform={uniquePlatform}
            filterTheDetails={filterTheDetails}
            className="menu"
          ></MenuComponent>
        </div>
        <div className="styled-table ">
          {" "}
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Site</th>
                <th>Start</th>
                <th>End</th>
                <th>Duration</th>
                <th>URL</th>
              </tr>
            </thead>
            <TableComponent
              //   className="table1"
              details={details}
            ></TableComponent>
          </table>{" "}
        </div>
      </div>
    </>
  );
};
export default MainPageComponent;
