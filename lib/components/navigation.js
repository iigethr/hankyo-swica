// Navigation

// Components
import Link from "next/link"

class Navigation extends React.Component {
  render () {
    const currentLang = this.props.currentLang
    console.log(currentLang)
    return (
      <nav className="navigation">
        <div className="navigation-box">
          <div className="navigation-item">
            <Link as={`/${currentLang}`} href="/[lang]"><a className="link-m white">Home</a></Link>
          </div>
          <div className="navigation-item">
            <Link as={`/${currentLang}/sections`} href="/[lang]/sections"><a className="link-m white">Sections</a></Link>
          </div>
          <div className="navigation-item">
            <Link as={`/${currentLang}/campaigns`} href="/[lang]/campaigns"><a className="link-m white">Campaigns</a></Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default Navigation
