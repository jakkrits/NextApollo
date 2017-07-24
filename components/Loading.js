import Ripple from '../static/Ripple.svg';

const Loading = () => (
  <div className="columns">
    <div className="column" />
    <div className="column is-half">
      <div className="loading">
        <Ripple />
      </div>
    </div>
    <div className="column" />
    <style jsx>{`
      .loading {
        transform: translate(30%, 0);
        background-color: transparent;
      }
    `}</style>
  </div>
);

Loading.propTypes = {};

export default Loading;
