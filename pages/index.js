// Index

// Components
import Hero from "../lib/components/hero"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Index")
  }

  render () {
    const project = this.props.project
    const currentLang = this.props.currentLang
    console.log(currentLang)
    return (
      <div>
        {/* <Hero project={project} /> */}
      </div>
    )
  }
}

export default Index
