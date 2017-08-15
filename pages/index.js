import React from 'react';
import Helmet from 'react-helmet';
import App from '../components/App';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import withData from '../lib/withData';
import pagePropTypes from '../lib/pagePropTypes';
import Info from '../components/Info';
import Timetable from '../components/TimesheetContainer';
// import Panel from '../components/Panel';

const AppPage = props => (
  <App>
    <Helmet>
      <title>ChewLounge Timesheet</title>
    </Helmet>
    <NavHeader pathname={props.url.pathname} />
    <Info />
    <Timetable />
    <Footer />
  </App>
);

/*
class AppPage extends React.Component { // eslint-disable-line
  render() {
    return (<App>
      <Helmet>
        <title>ChewLounge Timesheet</title>
      </Helmet>
      <NavHeader pathname={this.props.url.pathname} />
      <Info />
      <Timetable />
      <Footer />
    </App>);
  }
}
*/

AppPage.propTypes = pagePropTypes;

export default withData(AppPage);
