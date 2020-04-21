// Campaigns Layout

// Components
import React from "react"
import Meta from "../lib/components/meta"
import { initGA, logPageView } from "../lib/globals/google_analytics"
import Advisory from "../lib/globals/advisory"
// Modules
import cookies from "next-cookies"
import ZahaAlignments from "@iigethr/zaha_alignments"

class Campaigns extends React.Component {
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
    console.log("Registered - Campaigns Layout")
  }

  render () {
    const { children } = this.props
    const project = children.props.project
    return (
      <div className="root white-bg">
        <Meta project={project} />
        { children }
        {/* <Advisory /> */}
      </div>
    )
  }
}

export default Campaigns
