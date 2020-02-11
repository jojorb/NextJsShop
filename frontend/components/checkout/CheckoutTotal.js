import PropTypes from 'prop-types';
import calcTotalPrice from '../../lib/calcTotalPrice';
import formatMoney from '../../lib/formatMoney';
import { CheckYourtotal } from '../styled/checkout';

const CheckoutTotal = props => {
  const { me, shipping } = props;
  const MyDiscount = me.discount / 100;
  const MyCartVal = calcTotalPrice(me.cart);
  const MyDiscVal = formatMoney(MyCartVal * MyDiscount);
  const MyCartHT = formatMoney(MyCartVal - MyCartVal * MyDiscount);
  const HT = MyCartVal - MyCartVal * MyDiscount + shipping.livraison;
  const MyShipping = formatMoney(shipping.livraison);
  const MyTax = formatMoney((20 / 100) * HT);
  const TTC = HT + (20 / 100) * HT;
  const MyCartTTC = formatMoney(TTC);
  //   console.log('SUM : ', shipping);
  return (
    <CheckYourtotal>
      {MyDiscount > 0 && (
        <>
          <div className="disable">votre remise</div>
          <div className="disable">
            ({formatMoney(MyCartVal)} X {MyDiscount * 100}% = {MyDiscVal})
          </div>
        </>
      )}

      <div className="disable">Total HT</div>
      <div className="disable">{MyCartHT}</div>

      <div className="disable">frais de livraison</div>
      <div className="disable">
        {shipping.livraison === 0 ? (
          <span>offert</span>
        ) : (
          <span>{MyShipping}</span>
        )}
      </div>

      <div className="disable">TVA</div>
      <div className="disable">{MyTax}</div>

      <div>total ttc</div>
      <div>{MyCartTTC}</div>
    </CheckYourtotal>
  );
};

CheckoutTotal.propTypes = {
  me: PropTypes.object.isRequired,
  shipping: PropTypes.object,
};
export default CheckoutTotal;
