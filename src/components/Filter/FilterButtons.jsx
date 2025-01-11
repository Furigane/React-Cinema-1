import React, { act } from "react";

function FilterButtons() {
  let categoryes = [
    "Movies",
    "Cinema",
    "Adventure",
    "Comedy",
    "Fantasy",
    "History",
    "Cartoon",
    "Detective",
    "Mysticism",
    "Drama",
  ];

  const [active, changeActive] = React.useState('Movies');

  return (
    <div className="filter__buttons">
      {categoryes.map((value, index) => (
        <button key={index} onClick={() => changeActive(value)} className={value === active ? "active" : ''}>{value}</button>
      ))}
    </div>
  );
}
export default FilterButtons;
