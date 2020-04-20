// _app

// Data
import data from "js-yaml-loader!../data/project.yml"
import dataForeign from "js-yaml-loader!../data/project_foreign.yml"
// Components
import React from "react"
import App from "next/app"
// Helpers
import i18n from "../helpers/i18n"
// Layouts
import Campaigns from "../layouts/campaigns"
import Primary from "../layouts/primary"
import Secondary from "../layouts/secondary"
// SCSS
import "../assets/stylesheets/tadao.scss"

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    const currentLang = i18n.lang(ctx)

    let project = data
    if (currentLang === "en") {
      project = data
    } else {
      project = dataForeign
    }


    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, project, currentLang }
  }

  render() {
    const { Component, pageProps, router, project, currentLang } = this.props
    if (router.pathname === "/[lang]/campaigns") {
      return (
        <Campaigns>
          <Component {...pageProps} {...project} currentLang={currentLang} />
        </Campaigns>
      )
    } else if (router.pathname === "/" || router.pathname === "/[lang]") {
      return (
        <Primary>
          <Component {...pageProps} {...project} currentLang={currentLang} />
        </Primary>
      )
    } else {
      return (
        <Secondary>
          <Component {...pageProps}{...project} currentLang={currentLang} />
        </Secondary>
      )
    }
  }
}
export default MyApp
