// Campaigns - Success

// Components
import Head from "next/head"
import Notifications from "../../lib/globals/notifications"
import Header from "../../lib/globals/header"
import Footer from "../../lib/globals/footer"
import Hero from "../../lib/components/campaigns/hero"
// Data
import data from "js-yaml-loader!../../data/campaigns/campaigns.yml"
import Link from "next/link"

class Success extends React.Component {
  static async getInitialProps() {
    return { data: data }
  }

  componentDidMount() {
    console.log("Registered a Campaigns Page - Success")
  }

  render () {
    const campaigns = this.props.data.campaigns
    const { meta_title, meta_description } = campaigns
    return (
      <div>
        <Head>
          <title>{meta_title}</title>
          <meta name="description" content={meta_description} />
        </Head>
        <Notifications />
        <Header />
        <div className="sticky-footer">
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                <div className="artboard-l center-h">
                  <h1>Yay! Email has been submited.</h1>
                  <Link href="/campaigns"><a className="button-l white">Go Back</a></Link>
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

export default Success
