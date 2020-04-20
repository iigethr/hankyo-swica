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
            <p className="font-l text-center pink-100-cl">{description}</p>
          </div>
          <hr className="separator-xs" />
          <div className="hero-row">
            <Link href="/"><a className="button-xxl pink-dark center-h" rel="noreferrer">Call to Action</a></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Hero
