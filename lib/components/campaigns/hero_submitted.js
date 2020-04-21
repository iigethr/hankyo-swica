// Campaigns - Hero

// Components
import Link from "next/link"

class HeroSubmitted extends React.Component {
  render () {
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-xxl text-center swica-green-cl">Yay! Your email has been submitted!</h1>
            <p className="font-l text-center gray-500-cl">Good Luck! :)</p>
            <div className="separator-s" />
            <a href="https://www.swica.ch/" className="button-xxl swica center-h">Go Back</a>
          </div>
        </div>
      </div>
    )
  }
}
export default HeroSubmitted
