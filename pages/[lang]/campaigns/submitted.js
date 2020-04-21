// Campaigns - Index

// Components
import Head from "next/head"
import Link from "next/link"
import Notifications from "../../../lib/globals/notifications"
import Header from "../../../lib/globals/header"
import Footer from "../../../lib/globals/footer"
import Hero from "../../../lib/components/campaigns/hero_submitted"
// Data
import data from "js-yaml-loader!../../../data/campaigns/campaigns.yml"

class Submitted extends React.Component {
  static async getInitialProps() {
    return { data: data }
  }

  componentDidMount() {
    console.log("Registered a Campaigns Page - Index")
  }

  render () {
    const campaigns = this.props.data.campaigns
    const { meta_title, meta_description } = campaigns
    const currentLang = this.props.currentLang
    return (
      <div>
        <Head>
          <title>{meta_title}</title>
          <meta name="description" content={meta_description} />
        </Head>
        <Notifications />
        <Header currentLang={currentLang} />
        <div className="sticky-footer">
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                <div className="artboard-l center-h">
                  <Hero campaigns={campaigns} />
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Submitted
