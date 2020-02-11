import React, { PureComponent } from 'react';
import CheckoutFormAdr from './CheckoutFormAdr';
import CheckoutFormCart from './CheckoutFormCart';
import CheckoutFormInvoice from './CheckoutFormInvoice';

export default class CheckoutForm extends PureComponent {
  state = {
    step: 1,
    address: '',
    addressx: '',
    paiement: '',
    price: 0,
    livraison: 0,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Go back to double prev step
  prevStepAll = () => {
    const { step } = this.state;
    this.setState({
      step: step - 2,
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    console.log(this.state);
  };

  setPrice = () => {
    const { price } = this.state;
    this.setState({
      price,
    });
    console.log(this.state);
  };

  render() {
    const { step } = this.state;
    const { address, addressx, paiement, price, livraison } = this.state;
    const values = { address, addressx, paiement, price, livraison };

    switch (step) {
      default:
        return null;
      case 1:
        return (
          <CheckoutFormCart
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            setPrice={this.setPrice}
            values={values}
          />
        );

      case 2:
        return (
          <CheckoutFormAdr
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <CheckoutFormInvoice
            prevStep={this.prevStep}
            prevStepAll={this.prevStepAll}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}
