import React, { useState, useEffect } from "react";
import "./notePadStyle.css";

const NotePad = () => {
  let data = "";
  if (localStorage.getItem("autosave-data"))
    data = localStorage.getItem("autosave-data");
  const [text, settext] = useState(data);

  //   const let_check = (event) => {
  //     let text = document.getElementById("textarea");
  //     if (event.target.id.cheacked) {
  //       localStorage.setItem("autosave-data", text.value);
  //       setTimeout(let_check, 1000);
  //     }
  //   };

  useEffect(() => {
    localStorage.setItem("autosave-data", text);
  }, [text]);

  return (
    <>
      <div id="heading">
        <div className="title">Online Notepad</div>
        {/* <div className="check">
          Auto save{" "}
          <input type="checkbox" id="feature-flag" onClick={let_check} />
        </div> */}
      </div>
      <div>
        <textarea
          id="textarea"
          placeholder="Write your notes here"
          onChange={(event) => settext(event.target.value)}
        >
          {text}
        </textarea>
      </div>
    </>
  );
};

export default NotePad;
