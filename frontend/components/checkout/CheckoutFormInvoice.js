import React, { PureComponent } from 'react';
import CheckoutNav from './CheckoutNav';
import CheckoutTotal from './CheckoutTotal';
import User from '../UserQuery';
import { CheckoutContent } from '../styled/checkout';
import CheckoutTotalPay from './CheckoutTotalPay';

export default class CheckoutFormInvoice extends PureComponent {
  render() {
    const data = this.props;
    return (
      <>
        <CheckoutNav prevStep={data.prevStep} prevStepAll={data.prevStepAll} />
        <CheckoutContent>
          <div>
            <User>
              {({ data: { me } }) => {
                if (!me) return null;
                return (
                  <>
                    <CheckoutTotal me={me} shipping={data.values} />
                    <CheckoutTotalPay
                      handleChange={data.handleChange}
                      shipping={data.values}
                    />
                  </>
                );
              }}
            </User>
          </div>
        </CheckoutContent>
      </>
    );
  }
}
