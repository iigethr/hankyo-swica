// Campaigns - Hero

// Components
import Link from "next/link"

class Hero extends React.Component {
  render () {
    const { title, description } = this.props.campaigns
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-xxl text-center white-cl">{title}</h1>
            <p className="font-l text-center gray-100-cl">{description}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Hero
