export default class i18n {
  static lang(ctx) {
    // Set the available langs
    const defaultLang = "en"
    const langs = [defaultLang, "de", "fr", "it"]
    // Set the
    let query = ctx.query.lang
    if (typeof query === "undefined") {
      query = defaultLang
    }

    // Find the lang in the url
    // const queryLang = setQuery.query.lang || defaultLang

    // Verify if lang exists in pool
    let verifyLang = langs.includes(query)
    let currentLang = query
    if (verifyLang === true) {
      currentLang = query
    } else {
      currentLang = defaultLang
    }

    // console.log(setQuery)
    // console.log(queryLang)
    // console.log(verifyLang)
    // console.log(query)
    console.log(currentLang)

    return currentLang
  }
}
