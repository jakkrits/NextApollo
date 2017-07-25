import Helmet from 'react-helmet';
import App from '../components/App';
import NavHeader from '../components/NavHeader';
import Submit from '../components/Submit';
import PostListContainer from '../components/PostListContainer';
import Footer from '../components/Footer';
import withData from '../lib/withData';
import pagePropTypes from '../lib/pagePropTypes';
import Info from '../components/Info';

const AppPage = props => (
  <App>
    <Helmet>
      <title>ChewLounge Timesheet</title>
    </Helmet>
    <NavHeader pathname={props.url.pathname} />
    <Info />
    <PostListContainer />
    <Submit />
    <Footer />
  </App>
);

AppPage.propTypes = pagePropTypes;


export default withData(AppPage);
