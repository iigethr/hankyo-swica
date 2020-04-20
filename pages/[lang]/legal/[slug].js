// Legal - Slug

// Data
import data from "js-yaml-loader!../../../data/legal/legal.yml"
// Components
import ErrorPage from "next/error"
import Head from "next/head"
import Link from "next/link"
import AsideNavigation from "../../../lib/components/legal/aside_navigation"

class Section extends React.Component {
  static async getInitialProps({ pathname, query }) {
    const legal = data.legal
    const lang = query.lang

    let slug = query.slug
    let sections = data.legal.sections.filter(it => it.slug === slug);
    let section = sections[0] || "notFound"
    return { legal: legal, section: section, lang: lang }
  }

  render () {
    const {email, sections} = this.props.legal;
    const section = this.props.section;
    const lang = this.props.lang;
    console.log(lang === "en")
    if (section === "notFound" || section === null) {
      return <ErrorPage statusCode={404} />
    } else {
      return (
        <div>
          <Head>
            <title>{section.meta_title}</title>
            <meta name="description" content={section.meta_description} />
          </Head>
          <div className="top">
            <div className="breadcrumbs">
              <div className="breadcrumbs-box">
                <div className="breadcrumbs-item">
                  <Link href="/legal"><a className="link-s gray underline">Back</a></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="middle">
            <aside className="aside">
              <AsideNavigation sections={sections} />
            </aside>
            <section className="section">
              <div className="content">
                <div className="content-box">
                  <div className="content-row writer">
                    <h1>{section.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: section.body }} />
                    <h4>Can't find what you're looking for? Ask a human {email}</h4>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    }
  }
}

export default Section
