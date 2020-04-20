// Design - Design Links

// Components
import DesignLinksXXS from "./links/xxs"
import DesignLinksXS from "./links/xs"
import DesignLinksS from "./links/s"
import DesignLinksM from "./links/m"
import DesignLinksL from "./links/l"
import DesignLinksXL from "./links/xl"
import DesignLinksXXL from "./links/xxl"

class DesignLinks extends React.Component {

  render () {
    return (
      <div className="design-content">
        <DesignLinksXXL />
        <DesignLinksXL />
        <DesignLinksL />
        <DesignLinksM />
        <DesignLinksS />
        <DesignLinksXS />
        <DesignLinksXXS />
      </div>
    )
  }
}

export default DesignLinks
