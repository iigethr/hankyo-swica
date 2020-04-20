// Footer

// Components
import LegalNavigation from "../components/legal_navigation"
import Copyright from "../components/copyright"

class Footer extends React.Component {
  render () {
    return (
      <footer className="universal footer">
        <div className="universal-box">
          <div className="universal-row">
            <LegalNavigation />
          </div>
          <div className="universal-row">
            <Copyright />
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
