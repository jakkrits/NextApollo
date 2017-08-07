import App from '../components/App';
import NavHeader from '../components/NavHeader';
import Footer from '../components/Footer';
import withData from '../lib/withData';

import pagePropTypes from '../lib/pagePropTypes';

const AboutPage = props => (
  <App>
    <NavHeader pathname={props.url.pathname} />
    <div className="container">
      <section className="section is-small">
        <article>
          <h1>ชิวเล๊าจ์ เพย์โรล ซิสเท็ม</h1>
        </article>
      </section>
    </div>
    <Footer />
  </App>
);

AboutPage.propTypes = pagePropTypes;


export default withData(AboutPage);
