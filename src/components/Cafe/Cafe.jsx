// Gmaps URL example: `https://www.google.com/maps/search/?api=1&query=Starbucks Meguro,Tokyo`;

// /// Card example data ///
// picture: "https://laptopfriendly.co/images/places/tokyo/ddsk-saigon-kitchen/ddsk-saigon-kitchen--tokyo.jpg",
// title: "DDSK SAIGON KITCHEN",
// address: "ss, 135-0061, Tokyo",
// criteria: ["Power sockets", "Quiet"]

import "./Cafe.css";
import React from 'react';

function Cafe({cafe}) {

  return (
    <div className="cafe-card">
      <img src={cafe.picture} alt="" />
      <div>
        <h5>{cafe.title}</h5>
        <p>
          {/* <span>{cafe.criteria[0]}</span>
          <span>{cafe.criteria[1]}</span> */}
          {cafe.criteria.map(criterion => <span key={criterion}>{criterion}</span>)}
        </p>
        <a href="">Show the map</a>
      </div>
    </div>
  );
}

export default Cafe;
