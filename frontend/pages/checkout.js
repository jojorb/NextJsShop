import CheckoutHeader from '../components/checkout/CheckoutHeader';
import CheckoutOverlay from '../components/checkout/CheckoutOverLay';
import { ContainerGrid } from '../components/styled/global';

const Checkout = () => (
  <ContainerGrid>
    <CheckoutHeader />
    <CheckoutOverlay />
  </ContainerGrid>
);
export default Checkout;
