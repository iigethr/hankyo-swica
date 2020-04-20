// Header

// Components
import Langs from "../../lib/components/langs"
import Navigation from "../../lib/components/navigation"

class Header extends React.Component {
  render () {
    const config = this.props.config
    const currentLang = this.props.currentLang
    console.log(currentLang)
    return (
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
            <Langs currentLang={currentLang} />
          </div>
          <div className="universal-row">
            <Navigation currentLang={currentLang} />
          </div>
        </div>
      </header>
    )
  }
}

export default Header
