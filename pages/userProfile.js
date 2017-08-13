import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
// import Dropzone from 'react-dropzone';
import NavHeader from '../components/NavHeader';
import App from '../components/App';
import Footer from '../components/Footer';
import withData from '../lib/withData';
import pagePropTypes from '../lib/pagePropTypes';

class UserProfile extends Component { // eslint-disable-line
  checkUserDocument = () => console.log(this.props.data.user.documents.length);
  checkFirstNameAndLastName = () => console.log('checking names if no names renders textfields');
  renderBranchOption = () => console.log('render branch');
  renderForm = () => <h1>FORM HERE</h1>

  render() {
    console.error(this.props.data.user);
    this.checkUserDocument();
    return (
      <App>
        <NavHeader pathname={this.props.url.pathname} />
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-one-quarter" />
            <div className="column is-half is-narrow">
              <div className="card">
                <div className="card-image" style={{ width: '50%', margin: 'auto', padding: '8px', backgroundColor: '#00D1B2' }}>
                  <figure className="image is-256x256">
                    <img src={this.props.data.user.picture || 'https://image.flaticon.com/icons/svg/179/179959.svg'} alt="user-pic" />
                  </figure>
                </div>
                {this.renderForm()}
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={this.props.data.user.picture} alt="small-user-pic" />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{this.props.data.user.firstName} {this.props.data.user.lastName}</p>
                      <p className="subtitle is-6">{this.props.data.user.nickName}</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a>#css</a> <a>#responsive</a>
                    <hr />
                    <small>11:09 PM - 1 Jan 2016</small>
                  </div>
                  <div>
                    <div className="field">
                      <label className="label" htmlFor="status">My Status</label>
                      <div className="control">
                        <textarea className="textarea" placeholder="status" id="status" />
                      </div>
                    </div>
                    <div className="field is-grouped is-grouped-centered">
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
            <div className="column is-one-quarter" />
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
        picture
        firstName
        lastName
        documents {
          branch
        }
      }
    }
`;

const UserProfileWithUserQuery = graphql(userQuery, { options: { fetchPolicy: 'network-only' } });
export default withData(UserProfileWithUserQuery(UserProfile));

// export default withData(UserProfile);
