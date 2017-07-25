const Info = () => (<div className="columns">
  <div className="column is-hidden-mobile" />
  <div className="column is-half">
    <div className="info">
      <h1>Timesheet: 1 กค. 60 - 31 กค. 60</h1>
    </div>
  </div>
  <div className="column is-hidden-mobile" />
  <style jsx>{`
    .info {
      text-align: center;
    }
    h1 {
      text-decoration: underline;
    }
  `
  }</style>
</div>);

export default Info;
