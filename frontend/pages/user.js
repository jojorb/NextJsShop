import PageTitle from '../components/PageTitle';
import PleaseSignIn from '../components/PleaseSignIn';
import UserInfoLayout from '../components/user/UserInfoLayout';
import UserPanel from '../components/user/UserPanel';
import UserQuery from '../components/UserQuery';

const User = () => (
  <>
    <PageTitle title="votre espace personnel" />
    <PleaseSignIn>
      <UserQuery>
        {({ data: { me } }) => (
          <>
            <UserPanel me={me} />
            <UserInfoLayout me={me} />
          </>
        )}
      </UserQuery>
    </PleaseSignIn>
  </>
);
export default User;
