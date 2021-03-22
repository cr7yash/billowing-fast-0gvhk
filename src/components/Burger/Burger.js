import React from "react";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.css";

const Burger = (props) => {
  //Convert object to array so that I can map over the values.
  //Map over the keys to obtain the length of the array which is the initial number of ingredients.(See the state)
  const transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredients key={igKey + i} type={igKey} />;
    });
  });

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
