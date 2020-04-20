// Design - Design Header

class DesignHeader extends React.Component {

  render () {
    const data = this.props.data
    return (
      <div className="design-content">
        <div className="design-content-box">
          <div className="design-content-row">
            <h1 className="font-xxl">{data.name}</h1>
          </div>
          <div className="design-content-row">
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DesignHeader
