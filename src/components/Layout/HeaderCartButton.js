import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton(props) {

  const [btnIsHighlited, setBtnIsHighlited] = useState(false);

  const cartCtx = useContext(cartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${btnIsHighlited ? classes.bump: ''}`;

  const {items} = cartCtx;

  useEffect(() => {
    if(items.length === 0) return;

    setBtnIsHighlited(true)

    const timer = setTimeout(() => {
      setBtnIsHighlited(false)
    }, 300)

    return () => {
      clearTimeout(timer);
    }

  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}
