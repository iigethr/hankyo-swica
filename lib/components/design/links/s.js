// Design Links S

class DesignLinksS extends React.Component {
  render () {
    const klass = "link-s"
    return (
      <div className="design-content-box">
        <div className="design-content-row">
          <h3 className="font-l lighter"><strong>Link:</strong> {klass}</h3>
        </div>
        <div className="design-content-row">
          <a href="#" className={klass}>Link</a>
          <div className="divider-s" />
          <a href="#" className={klass}>
            <span className="icon"><img src={require("../../../../assets/images/icons/circle.png")} /></span>
          </a>
          <div className="divider-s" />
          <a href="#" className={klass}>
            <span className="icon left"><img src={require("../../../../assets/images/icons/circle.png")} /></span>
            Link
          </a>
          <div className="divider-s" />
          <a href="#" className={klass}>
            <span className="icon right"><img src={require("../../../../assets/images/icons/circle.png")} /></span>
            Link
          </a>
        </div>
      </div>
    )
  }
}

export default DesignLinksS
