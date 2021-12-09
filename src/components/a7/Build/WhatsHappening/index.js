import React, { useState } from "react";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  const dispatch = useDispatch();
  const [whatsHappening, setWhatsHappening] = useState("");

  const tweetClickHandler = () => {
    dispatch({ type: "create-tweet", content2: whatsHappening });
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <textarea
        style={{ width: "100%", background: "#000", color: "#fff" }}
        value={whatsHappening}
        onChange={(event) => setWhatsHappening(event.target.value)}
      />
      <button
        style={{
          background: "#2a9fd6",
          color: "#fff",
          float: "right",
          border: 0,
          width: 80,
          height: 30,
          lineHeight: "30px",
          borderRadius: 30,
        }}
        onClick={tweetClickHandler}
      >
        Tweet
      </button>
    </div>
  );
};
export default WhatsHappening;
