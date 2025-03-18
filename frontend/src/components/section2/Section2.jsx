import React from "react";
import './Section2.css'
import FlexCard from "../FLEXCARD/flexCard";
import Users from "../list/List";

function Section2() {
  return (
    <div className="conatiner">
      <div className="grid">
        {Users.map((i) => {
          return <FlexCard icon={i.icon} name={i.name} text={i.text} />;
        })}
      </div>
    </div>
  );
}

export default Section2;
