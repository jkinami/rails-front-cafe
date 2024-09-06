import "./CafeList.css";
import React from 'react';
import Cafe from '../Cafe/Cafe';

function CafeList({cafes}) {


  return (
    <div className="cafe-list">
      {cafes.map(cafe => <Cafe key={cafe.title} cafe={cafe}/>)}
    </div>
  );
}

export default CafeList;
