import { Component } from 'react';

class NavHeader extends Component { // eslint-disable-line
  toggleBurger = () => {
    // document.querySelector('.nav-menu').classList.toggle('is-active');
    const nav = document.getElementById('navMenuTransparent');
    nav.classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://bulma.io">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />

          </a>

          <a className="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma">
            <span className="icon" style={{ color: '#333' }}>
              <i className="fa fa-github" />
            </span>
          </a>

          <a className="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms">
            <span className="icon" style={{ color: '#55acee' }}>
              <i className="fa fa-twitter" />
            </span>
          </a>

          <div
            className="navbar-burger burger"
            data-target="navMenuTransparent"
            onClick={this.toggleBurger}
            role="presentation"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div id="navMenuTransparent" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item " href="http://bulma.io/">
        Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link  is-active" href="/documentation/overview/start/">
          Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item " href="/documentation/overview/start/">
            Overview
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
            Modifiers
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/grid/columns/">
            Grid
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/form/general/">
            Form
                </a>
                <a className="navbar-item " href="http://bulma.io/documentation/elements/box/">
            Elements
                </a>

                <a className="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
              Components
                </a>

                <a className="navbar-item " href="http://bulma.io/documentation/layout/container/">
            Layout
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div>version <p className="has-text-info is-size-6-desktop">0.4.3</p></div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link " href="http://bulma.io/blog/">
          Blog
              </a>
              <div id="blogDropdown" className="navbar-dropdown is-boxed" data-style="width: 18rem;">

                <a className="navbar-item" href="/2017/03/10/new-field-element/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">10 Mar 2017</small>
                    </p>
                    <p>New field element (for better controls)</p>
                  </div>
                </a>

                <a className="navbar-item" href="/2016/04/11/metro-ui-css-grid-with-bulma-tiles/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">11 Apr 2016</small>
                    </p>
                    <p>Metro UI CSS grid with Bulma tiles</p>
                  </div>
                </a>

                <a className="navbar-item" href="/2016/02/09/blog-launched-new-responsive-columns-new-helpers/">
                  <div className="navbar-content">
                    <p>
                      <small className="has-text-info">09 Feb 2016</small>
                    </p>
                    <p>Blog launched, new responsive columns, new helpers</p>
                  </div>
                </a>

                <a className="navbar-item" href="http://bulma.io/blog/">
            More posts
                </a>
                <hr className="navbar-divider" />
                <div className="navbar-item">
                  <div className="navbar-content">
                    <div className="level is-mobile">
                      <div className="level-left">
                        <div className="level-item">
                          <strong>Stay up to date!</strong>
                        </div>
                      </div>
                      <div className="level-right">
                        <div className="level-item">
                          <a className="button is-rss is-small" href="http://bulma.io/atom.xml">
                            <span className="icon is-small">
                              <i className="fa fa-rss" />
                            </span>
                            <span>Subscribe</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
          More
              </div>
              <div id="moreDropdown" className="navbar-dropdown is-boxed">
                <a className="navbar-item " href="http://bulma.io/extensions/">
                  <div className="level is-mobile">
                    <div className="level-left">
                      <div className="level-item">
                        <p>
                          <strong>Extensions</strong>
                          <br />
                          <small>Side projects to enhance Bulma</small>
                        </p>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <span className="icon has-text-info">
                          <i className="fa fa-plug" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/jgthms/bulma">
        Github
            </a>
            <a className="navbar-item" href="https://twitter.com/jgthms">
        Twitter
            </a>
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    id="twitter"
                    className="button"
                    data-social-network="Twitter"
                    data-social-action="tweet"
                    data-social-target="http://bulma.io"
                    href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&url=http://bulma.io&via=jgthms"
                  >
                    <span className="icon">
                      <i className="fa fa-twitter" />
                    </span>
                    <span>Tweet</span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                    <span className="icon">
                      <i className="fa fa-download" />
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
</nav>
    );
  }
}

export default NavHeader;
