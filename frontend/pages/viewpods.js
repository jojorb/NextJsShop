import PropTypes from 'prop-types';
import PodsSingleQuery from '../components/Pods/PodsSingleQuery';

const viewpods = props => <PodsSingleQuery id={props.query.id} />;

// viewpods.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default viewpods;
