import NavHeader from '../components/NavHeader';
import App from '../components/App';
import Footer from '../components/Footer';
import withData from '../lib/withData';
import pagePropTypes from '../lib/pagePropTypes';

const UserProfile = props => (
  <App>
    <NavHeader pathname={props.url.pathname} />
    <div className="container">
      <h1>User Profile Goes Here</h1>
    </div>
    <Footer />
  </App>
);

UserProfile.propTypes = pagePropTypes;


export default withData(UserProfile);
