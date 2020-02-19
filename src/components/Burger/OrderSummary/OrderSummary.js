import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = props => {
  const ingredientSumary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A decilicous burger with the following ingredients:</p>
      <ul>{ingredientSumary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
