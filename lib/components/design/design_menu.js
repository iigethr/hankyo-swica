// Design - Design Menu

import Link from "next/link"

class DesignMenu extends React.Component {

  render () {
    return (
      <div className="design-menu">
        <div className="design-menu-box">
          <div className="design-menu-item">
            <Link href="/design">
              <a className="link-m blue wide hover-underline">Design</a>
            </Link>
          </div>
          <div className="design-menu-item">
            <Link href="/design/typography">
              <a className="link-m blue wide hover-underline">Typography</a>
            </Link>
          </div>
          <div className="design-menu-item">
            <Link href="/design/colours">
              <a className="link-m blue wide hover-underline">Colours</a>
            </Link>
          </div>
          <div className="design-menu-item">
            <Link href="/design/forms">
              <a className="link-m blue wide hover-underline">Forms</a>
            </Link>
          </div>
          <div className="design-menu-item">
            <Link href="/design/utilities">
              <a className="link-m blue wide hover-underline">Utilities</a>
            </Link>
          </div>
          {/**
            <div className="design-menu-item">
              <Link href="/design/utilities">
                <a className="link-m blue wide hover-underline">Utilities</a>
              </Link>
            </div>
            <div className="design-menu-item">
              <Link href="/design/writer">
                <a className="link-m blue wide hover-underline">Writer</a>
              </Link>
            </div>
          **/}
        </div>
      </div>
    )
  }
}

export default DesignMenu
