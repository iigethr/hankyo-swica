// Cookies

// Modules
import Link from "next/link"
import cookies from "next-cookies"

class Cookies extends React.Component {
  constructor(props, ctx) {
    super(props)
    const cookie = cookies(ctx).weLoveCookies
    this.handleLoad = this.handleLoad.bind(this)
    this.setCookie = this.setCookie.bind(this)
    this.state = {
      klass: "cookies hide-block-element",
      value: cookie,
      message: "Cookies and IP addresses allow us to deliver and improve our web content and to provide you with a personalized experience. Our website uses cookies and collects your IP address for these purposes.",
      label: "Click me for COOOOKIES!!!!"
    }
  }

  handleLoad() {
    if (this.state.value === "withMilk") {
      this.setState({
        klass: "cookies hide-block-element"
      })
    } else {
      this.setState({
        klass: "cookies show-block-element"
      })
    }
  }

  setCookie(event) {
    event.preventDefault()
    document.cookie = "weLoveCookies=withMilk; path=/"
    this.setState({
      klass: "cookies hide-block-element"
    })
    window.location.reload()
  }

  componentDidMount() {
    window.addEventListener("load", this.handleLoad)
  }

  render() {
    const { message, label, klass } = this.state
    return (
      <div onLoad={this.handleLoad}>
        <div className={klass}>
          <div className="cookies-box `#{klass}`">
            <div className="cookies-row">
              <p className="font-s text-center">{message}</p>
              <p className="font-s text-center">For more information you can visit our <Link href="/legal"><a rel="noreferrer">Policies & Terms</a></Link> section.</p>
            </div>
            <div className="cookies-row">
              <Link href="/"><a onClick={this.setCookie} className="button-xl black center-h" rel="noreferrer">{label}</a></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cookies
