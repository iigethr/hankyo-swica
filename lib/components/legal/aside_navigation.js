// Legal - Aside Navigation

// Components
import Link from "next/link"

class AsideNavigation extends React.Component {
  render () {
    const sections = this.props.sections
    return (
      <nav className="aside-navigation">
        <div className="aside-navigation-box">
          <div className="aside-navigation-item">
            <h3>Legal</h3>
          </div>
          {sections.map(section => (
            <div key={section.slug} className="aside-navigation-item">
              <Link as={`/en/legal/${section.slug}`} href="/[lang]/legal/[slug]">
                <a className="link-m blue underline">{section.title}</a>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    )
  }
}
export default AsideNavigation
