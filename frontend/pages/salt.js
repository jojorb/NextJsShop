import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import HeadMeta from '../components/head/HeadMeta';
import SaltQuery from '../components/salt/SaltQuery';

const Salt = props => (
  <div>
    <HeadMeta
      title="sels de nicotine  | Juice Avenue Distribution"
      description="Une séléction des meilleurs sel de nicotine sur le marcher Français."
      url="http://www.juice-avenue.com/salt"
      ogImage=""
    />
    <PageTitle title="e-liquide sel de nicotine" />
    <SaltQuery page={parseFloat(props.query.page) || 1} />
  </div>
);

// Salt.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default Salt;
