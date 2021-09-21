import React from "react";
import mealsImage from '../../assets/meals_02.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>OnlineMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}> {/* WE can non use dot(-) notation here */}
          <img src={mealsImage} alt='A table full of food!' />
      </div>
    </React.Fragment>
  );
}
