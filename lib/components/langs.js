// Langs

// Components
import Link from "next/link"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Langs extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
  }

  render () {
    const currentLang = this.props.currentLang
    console.log(currentLang)
    return (
      <nav className="langs">
        <div className="langs-box">
          <div className="langs-item">
            <Link as="/en/campaigns" href="/[lang]/campaigns"><a className="link-m white">EN</a></Link>
          </div>
          {/*
            <div className="langs-item">
              <Link as="/de" href="/[lang]"><a className="link-m white">DE</a></Link>
            </div>
            <div className="langs-item">
              <Link as="/fr" href="/[lang]"><a className="link-m white">FR</a></Link>
            </div>
            <div className="langs-item">
              <Link as="/it" href="/[lang]"><a className="link-m white">IT</a></Link>
            </div>
          */}
        </div>
      </nav>
    )
  }
}
export default Langs
