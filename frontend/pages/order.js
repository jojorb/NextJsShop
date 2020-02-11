import PropTypes from 'prop-types';
import PageTitle from '../components/PageTitle';
import PleaseSignIn from '../components/PleaseSignIn';
import UserOrderLayout from '../components/user/UserOrderLayout';
import UserQuery from '../components/UserQuery';

const Order = props => (
  <>
    <PageTitle title="votre espace personnel" />
    <PleaseSignIn>
      <UserQuery>
        {({ data: { me } }) => <UserOrderLayout me={me} id={props.query.id} />}
      </UserQuery>
    </PleaseSignIn>
  </>
);

// Order.propTypes = {
//   query: PropTypes.string.isRequired,
// };

export default Order;
