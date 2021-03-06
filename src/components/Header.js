import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <h4 className="header__content__heading1">New Games & Accessories</h4>
        <h1 className="header__content__heading2">Monthly packages.</h1>
        <h1 className="header__content__heading2">
          Excitement delivered daily.
        </h1>
        <p className="header__content__text">
          What's the best way to shop for the latest video games and
          peripherals? How about never shopping at all? You'll get new stuff on
          your doorstep -- every month.
        </p>
        <button className="header__content__button">GET STARTED</button>
      </div>
    </div>
  );
}
