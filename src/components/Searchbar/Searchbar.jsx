// Backend API endpoint: https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=

import React from 'react';
import './Searchbar.css';

function Searchbar({setCafes}) {

  function hanldeUpKey(event) {
    console.log(event.currentTarget.value);
    const keyword = event.currentTarget.value
    const url = `https://matcha-and-keyboard-f549965e60e7.herokuapp.com/api/v1/cafes?title=${keyword}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        setCafes(data);
      });
  }

  return (
    <div className="searchbar input-group">
      <span className="input-group-text"><i className="fa-solid fa-magnifying-glass"></i></span>
      <input onKeyUp={hanldeUpKey} placeholder="Starbucks" type="text" className="form-control" />
    </div>
  );
}

export default Searchbar;
