import { gql, graphql } from 'react-apollo';
import Link from 'next/link';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Auth0Lock from 'auth0-lock';

import { setAuthToken } from '../lib/authTokens';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    pathname: PropTypes.string.isRequired,
    currentUser: PropTypes.shape({
      screenName: PropTypes.string.isRequired,
    }),
    signinUser: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentUser: null,
  };

  componentDidMount() {
    const lock = new Auth0Lock(process.env.AUTH0_CLIENT_ID, process.env.AUTH0_DOMAIN, {
      auth: {
        redirectUrl: `${location.origin}/login?r=${this.props.pathname}`,
        responseType: 'token',
      },
    });
    this.lock = lock;

    lock.on('authenticated', (result) => {
      console.log('authenticated', result);
      lock.getUserInfo(result.accessToken, (error, profile) => {
        if (error) {
          console.error('getUserInfo error', error);
          return;
        }

        this.signinOrCreateUser(result.idToken, profile);
      });
    });
  }

  triggerLogin = (e) => {
    e.preventDefault();

    this.lock.show();
  };

  async signinOrCreateUser(idToken, profile) {
    const screenName = profile.screen_name || profile.firstName || profile.nickname;

    console.log('signinOrCreateUser', { idToken, profile, name });
    try {
      await this.props.createUser({ variables: {
        idToken,
        screenName,
      } });
    } catch (err) {
      console.error('createUser fail', err);
    }

    try {
      const result = await this.props.signinUser({ variables: {
        idToken,
      } });

      setAuthToken(result.data.signinUser.token);
    } catch (err) {
      console.log('signinUser fail', err);
    }
  }

  render() {
    const { pathname, currentUser } = this.props;
    return (
      <header className="nav">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item" href="/">
              <img src="/static/stopwatch.png" alt="Logo" />
            </a>
          </div>
          <div className="nav-right nav-menu">
            <Link prefetch href="/">
              <a className={pathname === '/' && 'nav-item is-active' ? 'nav-item  is-active' : 'nav-item'}>Home</a>
            </Link>

            <Link prefetch href="/about">
              <a className={pathname === '/about' && 'nav-item is-active' ? 'nav-item  is-active' : 'nav-item'}>About</a>
            </Link>

            {currentUser ?
              <span className="nav-item">Logged-in as {currentUser.screenName} - <a className="nav-item" href="/logout">Logout</a></span>
              :
              <a className="nav-item" href="#login" onClick={this.triggerLogin}>Login</a>
            }
          </div>
        </div>
        <style jsx>{`
          header {
            margin-bottom: 25px;
          }
          a {
            font-size: 16px;
            margin-right: 15px;
            text-decoration: none;
          }
          .is-active {
            text-decoration: underline;
            text-decoration-color: #FD5A5D;
          }
        `}</style>
      </header>
    );
  }
}


export const currentUser = gql`
  query currentUser {
    user {
      screenName
    }
  }
`;


const createUser = gql`
  mutation createUser (
    $idToken: String!
    $screenName: String!
  ) {
    createUser (
      authProvider: {
        auth0: {
          idToken: $idToken
        }
      }
      screenName: $screenName
    ) {
      id
    }
  }
`;

const signinUser = gql`
  mutation signinUser (
    $idToken: String!
  ) {
    signinUser (
      auth0: {
        idToken: $idToken
      }
    ) {
      token
    }
  }
`;

const withSigninMutation = graphql(
  signinUser, { name: 'signinUser' },
);

const withCreateMutation = graphql(
  createUser, { name: 'createUser' },
);

const withUser = graphql(currentUser, {
  props: ({ data }) => ({
    currentUser: data.user,
  }),
});

export default withUser(withSigninMutation(withCreateMutation(Header)));
