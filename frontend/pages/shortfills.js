import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import FilterBrands from '../components/filter/FilterBrands';
import HeadMeta from '../components/head/HeadMeta';
import ShotfillQuery from '../components/shortfill/ShortfillQuery';

const Shortfills = props => (
  <div>
    <HeadMeta
      title="eliquides shortfills  | Juice Avenue Distribution"
      description="my description"
      url="http://www.juice-avenue.com/shortfills"
      ogImage=""
    />
    <PageTitle title="e-liquide shortfills">
      <FilterBrands />
    </PageTitle>
    <ShotfillQuery page={parseFloat(props.query.page) || 1} />
  </div>
);

// Shortfills.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default Shortfills;
