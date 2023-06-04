import React from "react";
import data from "../mainPages/data";

export default function People() {
  return (
    <div className="peopleMain">
      {data.people.map((people) => (
        <div className="peopleCard">
          <img src={people.profilePicture} alt={people.username} />
          <h4>{people.username}</h4>
        </div>
      ))}
    </div>
  );
}
