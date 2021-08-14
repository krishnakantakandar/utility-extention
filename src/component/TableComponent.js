import React from "react";
import "./Mystyle.css";

const TableComponent = ({ details }) => {
  console.log("det", details);

  return (
    <>
      <tbody>
        {details.map((curEle) => {
          return (
            <tr>
              <td>{curEle.name}</td>
              <td>{curEle.site}</td>
              <td>{curEle.start_time}</td>
              <td>{curEle.end_time}</td>
              <td>{curEle.duration}</td>
              <td>
                <a href={curEle.url} target="_blank">
                  click here
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </>
  );
};
export default TableComponent;
