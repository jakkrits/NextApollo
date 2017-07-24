import { Component } from 'react';
import withData from '../lib/withData';
import App from '../components/App';
import NavHeader from '../components/NavHeader';
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
        <Loading />
      </App>
    );
  }
}


export default withData(LoginPage);
