import { Component } from 'react';
import withData from '../lib/withData';
import App from '../components/App';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import pagePropTypes from '../lib/pagePropTypes';
import Loading from '../components/Loading';

class LoginPage extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    ...pagePropTypes,
  };

  render() {
    const { url } = this.props;

    return (
      <App>
        <NavHeader pathname={url.pathname} />
        <div className="container">
          <Loading />
        </div>
        <Footer />
      </App>
    );
  }
}


export default withData(LoginPage);
