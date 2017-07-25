export default () => (<nav className="panel">
  <p className="panel-heading">
    สาขาเซฟวัน
  </p>
  <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input is-small" type="text" placeholder="ค้นหา" />
      <span className="icon is-small is-left">
        <i className="fa fa-search" />
      </span>
    </p>
  </div>
  <p className="panel-tabs">
    <a className="is-active">ทั้งหมด</a>
    <a>ขาด</a>
  </p>
  <a className="panel-block is-active">
    <span className="panel-icon">
      <i className="fa fa-book" />
    </span>
    bulma
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fa fa-book" />
    </span>
    marksheet
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fa fa-book" />
    </span>
    minireset.css
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fa fa-book" />
    </span>
    jgthms.github.io
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fa fa-code-fork" />
    </span>
    daniellowtw/infBoard
  </a>
  <a className="panel-block">
    <span className="panel-icon">
      <i className="fa fa-code-fork" />
    </span>
    mojs
  </a>
  <label className="panel-block" htmlFor="panel">
    <input type="checkbox" />
    Remember me
  </label>
  <div className="panel-block">
    <button className="button is-primary is-outlined is-fullwidth">
      Reset all filters
    </button>
  </div>
</nav>);
