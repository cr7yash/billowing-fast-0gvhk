import React from "react";

import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.css";

const Burger = (props) => {
  //Convert object to array so that I can map over the values.
  //Map over the keys to obtain the length of the array which is the initial number of ingredients.(See the state)
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])] //Returns the length of the array
        .map((_, i) => {
          return <BurgerIngredients key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
