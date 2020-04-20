// Legal

// Components
import Link from "next/link"

class LegalNavigation extends React.Component {
  render () {
    return (
      <div className="legal-navigation">
        <div className="legal-navigation-box ">
          <div className="legal-navigation-item center-h">
            <Link href="/legal"><a className="link-xs purple-dark underline" rel="noreferrer">Policies & Terms</a></Link>
          </div>
        </div>
      </div>
    )
  }
}
export default LegalNavigation
