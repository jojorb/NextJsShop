import PropTypes from 'prop-types';
import ProductCategory from '../components/productCat/ProductCategory';

const Category = props => (
  <ProductCategory
    id={props.query.id}
    page={parseFloat(props.query.page) || 1}
  />
);

// Category.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default Category;
