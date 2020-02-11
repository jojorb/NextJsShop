import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import MainFrame from '../components/layouts/MainFrame';
// import LayoutPage from '../components/layouts/LayoutPage';
import withData from '../lib/withData';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // let pageAsPath = ctx.pathname;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
    // return { pageProps, pageAsPath };
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    // const { pageAsPath } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <MainFrame>
            {/* <LayoutPage page={pageAsPath}> */}
            <Component {...pageProps} />
            {/* </LayoutPage> */}
          </MainFrame>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withData(MyApp);
