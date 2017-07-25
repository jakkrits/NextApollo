const Info = () => (<div className="columns">
  <div className="column is-hidden-mobile" />
  <div className="column is-half">
    <div className="info">
      Timesheet: props.timeframe
    </div>
  </div>
  <div className="column is-hidden-mobile" />
  <style jsx>{`
    .info {
      text-align: center;
    }
  `
  }</style>
</div>);

export default Info;
