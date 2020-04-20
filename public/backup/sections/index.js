// Sections - Index

// Data
import data from "js-yaml-loader!../../data/sections/sections.yml"
import hankyo from "../../data/hankyo/project.json"
// Components
import Head from "next/head"
import Link from "next/link"
import AsideNavigation from "../../lib/components/sections/aside_navigation"

class Index extends React.Component {
  static async getInitialProps() {
    return { data: data, hankyo: hankyo }
  }

  componentDidMount() {
    console.log(hankyo)
    console.log("Registered a Sections Page - Index")
  }

  render () {
    const { meta_title, meta_description, title, description } = this.props.data.sections
    const hankyo = this.props.hankyo
    return (
      <div>
        <Head>
          <title>{meta_title}</title>
          <meta name="description" content={meta_description} />
        </Head>
        <div className="top">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/"><a className="link-s gray underline">Back to Home Page</a></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="middle">
          <aside className="aside">
            <AsideNavigation />
          </aside>

          <section className="section">
            <div className="content">
              <div className="content-box">
              <div className="content-row writer">
                  <h1 className="font-xxl">{hankyo.project.sections[0].title}</h1>
                </div>
                <div className="content-row writer">
                  <h1 className="font-xxl">{title}</h1>
                  <p className="font-xl lighter">{description}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="bottom">
          <div className="breadcrumbs">
            <div className="breadcrumbs-box">
              <div className="breadcrumbs-item">
                <Link href="/"><a className="link-s gray underline">Back to Home Page</a></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Index
