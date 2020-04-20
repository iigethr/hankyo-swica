// Aside Navigation

// Components
import Link from "next/link"

class AsideNavigation extends React.Component {
  render () {
    return (
      <nav className="aside-navigation">
        <div className="aside-navigation-box">
          <div className="aside-navigation-item">
            <h3>Sections</h3>
          </div>
          <div className="aside-navigation-item">
            <Link href="/sections"><a className="link-m blue underline">Section #1</a></Link>
          </div>
          <div className="aside-navigation-item">
            <Link href="/sections"><a className="link-m blue underline">Section #2</a></Link>
          </div>
          <div className="aside-navigation-item">
            <Link href="/sections"><a className="link-m blue underline">Section #3</a></Link>
          </div>
        </div>
      </nav>
    )
  }
}
export default AsideNavigation
