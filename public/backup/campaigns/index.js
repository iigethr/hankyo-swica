// Campaigns - Index

// Components
import Head from "next/head"
import Notifications from "../../lib/globals/notifications"
import Header from "../../lib/globals/header"
import Footer from "../../lib/globals/footer"
import Hero from "../../lib/components/campaigns/hero"
// Data
import data from "js-yaml-loader!../../data/campaigns/campaigns.yml"

class Index extends React.Component {
  static async getInitialProps() {
    return { data: data }
  }

  componentDidMount() {
    console.log("Registered a Campaigns Page - Index")
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
                  <Hero campaigns={campaigns} />

                  <form className="form white-bg" id="form" action="https://submit-form.com/dVlr2taOeSnCytPgDKqVC" target="_self">
                    <input type="checkbox" name="_honeypot" tabIndex="-1" autoComplete="off" className="honeypot" />
                    <fieldset>
                      <legend>Data Submission with GDPR Consentment Box</legend>
                      <div className="form-row">
                        <div className="form-item">
                          <label>Email</label>
                          <div className="input">
                            <input type="email" name="email" autoComplete="off" required />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-item">
                          <div className="submit">
                            <input value="Submit" type="submit" className="button-xl blue wide" />
                          </div>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-item">
                          <div className="gdpr">
                            <label htmlFor="checkbox">
                              <input type="checkbox" id="checkbox" name="gdpr" value="consent" />
                              <span className="checkmark"></span>
                              I agree to ... donec id elit non mi porta gravida at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
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

export default Index
