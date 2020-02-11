import PageTitle from '../components/PageTitle';
import PleaseSignIn from '../components/PleaseSignIn';
import UserOrdersLayout from '../components/user/UserOrdersLayout';
import UserPanel from '../components/user/UserPanel';
import UserQuery from '../components/UserQuery';

const Orders = () => (
  <>
    <PageTitle title="votre espace personnel" />
    <PleaseSignIn>
      <UserQuery>
        {({ data: { me } }) => (
          <>
            <UserPanel me={me} />
            <UserOrdersLayout me={me} />
          </>
        )}
      </UserQuery>
    </PleaseSignIn>
  </>
);
export default Orders;
