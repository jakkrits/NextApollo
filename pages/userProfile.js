import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
// import Dropzone from 'react-dropzone';
import NavHeader from '../components/NavHeader';
import App from '../components/App';
import Footer from '../components/Footer';
import withData from '../lib/withData';
import pagePropTypes from '../lib/pagePropTypes';

class UserProfile extends Component { // eslint-disable-line
  render() {
    console.log(this.props);
    return (
      <App>
        <NavHeader pathname={this.props.url.pathname} />
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-one-quarter" />
            <div className="column is-half is-narrow">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img className="http://bulma.io/images/placeholders/1280x960.png" alt="user-pic" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src="http://bulma.io/images/placeholders/96x96.png" alt="small-user-pic" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">John Smith</p>
                      <p className="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>
                  <div className="column is-one-quarter" />
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a>#css</a> <a>#responsive</a>
                    <br />
                    <small>11:09 PM - 1 Jan 2016</small>
                  </div>
                  <div>
                    <div className="field">
                      <label className="label" htmlFor="status">My Status</label>
                      <div className="control">
                        <textarea className="textarea" placeholder="status" id="status" />
                      </div>
                    </div>
                    <div className="field is-grouped">
                      <div className="control">
                        <button className="button is-primary">Submit</button>
                      </div>
                      <div className="control">
                        <button className="button is-link">Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </App>
    );
  }
}

UserProfile.propTypes = pagePropTypes;

const userQuery = gql`
    query currentUser {
      user {
        nickName       
      }
    }
`;

const UserProfileWithUserQuery = graphql(userQuery, { options: { fetchPolicy: 'network-only' } });
export default withData(UserProfileWithUserQuery(UserProfile));

// export default withData(UserProfile);
