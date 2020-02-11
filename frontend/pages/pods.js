import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import HeadMeta from '../components/head/HeadMeta';
import PodsQuery from '../components/Pods/PodsQuery';

const Pods = props => (
  <div>
    <HeadMeta
      title="hardware pods  | Juice Avenue Distribution"
      description="my description"
      url="http://www.juice-avenue.com/shortfills"
      ogImage=""
    />
    <PageTitle title="hardware pods">{/* <FilterBrands /> */}</PageTitle>
    <PodsQuery page={parseFloat(props.query.page) || 1} />
  </div>
);

// Pods.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default Pods;
