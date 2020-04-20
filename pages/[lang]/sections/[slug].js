// Legal - Slug

// Data
import data from "js-yaml-loader!../../../data/sections/sections.yml"
import hankyo from "../../../data/hankyo/project.json"

// Components
import ErrorPage from "next/error"
import Head from "next/head"
import Link from "next/link"
import AsideNavigation from "../../../lib/components/sections/aside_navigation"

class Section extends React.Component {
  static async getInitialProps({ query }) {
    const hankyoProject = hankyo.project
    let slug = query.slug
    let sections = hankyoProject.sections.filter(it => it.slug === slug);
    let section = sections[0] || "notFound"
    console.log(hankyoProject)
    console.log(section)
    return { hankyoProject: hankyoProject, section: section }
  }

  render () {
    const hankyoProject = this.props.hankyoProject;
    const section = this.props.section;
    console.log(hankyoProject)
    if (section === "notFound" || section === null) {
      return <ErrorPage statusCode={404} />
    } else {
      return (
        <div>
          <h1>{hankyoProject.name}</h1>
          <h1>{section.title}</h1>
        </div>
      )
    }
  }
}

export default Section
