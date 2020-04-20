// Hero

class Hero extends React.Component {
  render () {
    const { title, description, subtitle } = this.props.project
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-xxl text-center white-cl">{title}</h1>
          </div>
          <div className="hero-row">
            <p className="font-l text-center purple-100-cl">{description}</p>
            <div className="separator-xxs"></div>
            <p className="font-m text-center purple-900-cl">{subtitle}</p>
          </div>
          <div className="hero-row">
            <div className="separator-xs"></div>
            <a href="https://github.com/iigethr/tadao-next" className="button-xxl purple-dark center-h" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
