import Helmet from 'react-helmet';
import App from '../components/App';
import Header from '../components/Header';
import Submit from '../components/Submit';
import PostListContainer from '../components/PostListContainer';
import withData from '../lib/withData';

import pagePropTypes from '../lib/pagePropTypes';

const AppPage = props => (
  <App>
    <Helmet>
      <title>ChewLounge Timesheet</title>
    </Helmet>
    <Header pathname={props.url.pathname} />
    <Submit />
    <PostListContainer />
  </App>
);

AppPage.propTypes = pagePropTypes;


export default withData(AppPage);
