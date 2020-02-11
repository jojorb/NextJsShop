import NProgress from 'nprogress';
import { ThemeProvider } from 'styled-components';
import { trackPageview } from '../../lib/analytics';
import '../../lib/fontawesome';
import RouterEvents from '../../lib/routerevents';
import Head from '../head/Head';
import MainLayout from './MainLayout';
import { ThemeClear } from './theme_clear';

RouterEvents.on('routeChangeStart', url => {
  NProgress.start();
});
RouterEvents.on('routeChangeComplete', url => {
  NProgress.done();
  trackPageview(url);
});
RouterEvents.on('routeChangeError', url => {
  NProgress.done();
});

const MainFrame = props => (
  <ThemeProvider theme={ThemeClear}>
    <>
      <Head />

      {/* {this.props.page === '/checkout' //&& this.props.page === '/user'
        &&
        <SimpleLayout>{props.children}</SimpleLayout>}

        {this.props.page != '/checkout' //&& this.props.page != '/user'
        && <MainLayout>{props.children}</MainLayout>} */}

      <MainLayout>{props.children}</MainLayout>
    </>
  </ThemeProvider>
);

export default MainFrame;
