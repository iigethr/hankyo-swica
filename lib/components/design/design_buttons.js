// Design - Design Buttons

// Components
import DesignButtonsM from "./buttons/m"
import DesignButtonsL from "./buttons/l"
import DesignButtonsXL from "./buttons/xl"
import DesignButtonsXXL from "./buttons/xxl"

class DesignButtons extends React.Component {

  render () {
    return (
      <div className="design-content">
        <DesignButtonsXXL />
        <DesignButtonsXL />
        <DesignButtonsL />
        <DesignButtonsM />
      </div>
    )
  }
}

export default DesignButtons
