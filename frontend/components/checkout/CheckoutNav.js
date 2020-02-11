import React from 'react';
import { CheckoutNavStyle, NavitemChecked } from '../styled/checkout';

const CheckoutNav = props => {
  const nav = props;

  const back = e => {
    e.preventDefault();
    nav.prevStep();
  };

  const doubleback = e => {
    e.preventDefault();
    nav.prevStepAll();
  };
  return (
    <CheckoutNavStyle>
      <NavitemChecked>
        <div className="tal disable">
          <a onClick={doubleback}>commande</a>
        </div>
      </NavitemChecked>
      <NavitemChecked>
        <div className="tac disable">
          <a onClick={back}>adresses/livraison</a>
        </div>
      </NavitemChecked>
      <NavitemChecked>
        <div className="tar active">paiement</div>
      </NavitemChecked>
    </CheckoutNavStyle>
  );
};

export default CheckoutNav;
