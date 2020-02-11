import PropTypes from 'prop-types';
import ProductSingleQuery from '../components/productSingle/ProductSingleQuery';

const viewproduct = props => <ProductSingleQuery id={props.query.id} />;

// viewproduct.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default viewproduct;
