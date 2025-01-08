import React from "react";

const Buttons = (menuItems) => {
  return (
    <div>
      {menuItems.map((val) => (
        <button className="btn1">{val}</button>
      ))}
      <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold">
        All
      </button>
    </div>
  );
};

export default Buttons;
