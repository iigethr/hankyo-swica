// _document

// Data
import data from "js-yaml-loader!../data/project.yml"
// Components
import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps, data }
  }

  render() {
    const project = this.props.data.project
    return (
      <Html lang={project.meta_lang}>
        <Head />
        <body id="body">
          <div className="body-root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument
