// Primary Layout

// Components
import React from "react"
import Meta from "../lib/components/meta"
import { initGA, logPageView } from "../lib/globals/google_analytics"
import Notifications from "../lib/globals/notifications"
import Header from "../lib/globals/header"
import Footer from "../lib/globals/footer"
import Advisory from "../lib/globals/advisory"
import Link from "next/link"

// Modules
import cookies from "next-cookies"
import ZahaAlignments from "@iigethr/zaha_alignments"
// Assets
import BackgroundImage from "../assets/images/demo-bg.png";

class Primary extends React.Component {
  constructor(props, ctx) {
    super(props)
    const cookie = cookies(ctx).weLoveCookies
    this.state = {
      value: cookie
    }
  }

  componentDidMount() {
    if ((this.state.value === "withMilk") && (process.env.NODE_ENV || process.env.NODE_ENV === "production")) {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }

    ZahaAlignments.centerH()
    console.log("Registered - Primary Layout")
  }

  render () {
    const { children } = this.props
    const project = children.props.project
    const currentLang = children.props.currentLang
    return (
      <div className="root">
        <Meta project={project} />
        {/* <Notifications /> */}
        {/* <Header currentLang={currentLang} /> */}
        <div className="overlay">
          <div className="overlay-box center-h">
            <div className="overlay-item">
              <p className="text-center">Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum.</p>
              <div className="separator-xs"/>
              <Link href="/[lang]/campaigns" as="/en/campaigns"><a className="button-xxl center-h">Click Me</a></Link>
            </div>
          </div>
        </div>
        <div className="sticky-footer">
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                <div className="artboard-l center-h">
                  { children }
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* <Footer /> */}
        {/* <Advisory /> */}
        <style jsx>{`
          .root {
            background-image: url(${BackgroundImage});
          }
        `}</style>
      </div>
    )
  }
}

export default Primary
