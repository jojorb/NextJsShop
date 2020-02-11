import PropTypes from 'prop-types';
import { H5 } from '../styled/global';
import { MethPay } from '../styled/checkout';
import MethWire from './MethWire';

const CheckoutTotalPay = props => {
  const { handleChange, shipping } = props;

  return (
    <div>
      <H5>sélectionner votre mode de paiement</H5>
      <MethPay>
        <label htmlFor="virement">
          <input
            id="virement"
            value="virement"
            name="paiement"
            type="radio"
            onChange={handleChange('paiement')}
            checked={shipping.paiement === 'virement'}
          />
          virement bancaire
        </label>
      </MethPay>
      {/*  //! RENDER VIREMENT */}
      {shipping.paiement === 'virement' && (
        <MethWire
          // invoiceAdr={shipping.address}
          // shippingAdr={shipping.addressx}
          shipping={shipping}
        />
      )}
      {/*  //! END RENDER VIREMENT */}
    </div>
  );
};

CheckoutTotalPay.propTypes = {
  handleChange: PropTypes.func,
  shipping: PropTypes.object,
};

export default CheckoutTotalPay;
