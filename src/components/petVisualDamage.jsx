import React, { Component } from "react";

class PetVisualDamage extends Component {
  state = {
    fading: false,
    damage: this.props.mainState.petDamageValueToBeRendered / 2
  };
  componentDidMount() {
    const { id, onDone, delay, duration } = this.props;
    setTimeout(() => {
      this.setState({ fading: true }, () =>
        setTimeout(() => onDone(id), duration)
      );
    }, delay);
  }
  render() {
    const { x, y } = this.props;
    const { fading } = this.state;
    return (
      <div
        id="petVisualDamage-div"
        className={`petDamage-fade-item  ${fading ? "fading" : ""}`}
        style={{ top: y, left: x }}
      >
        {this.props.renderNumberWithAbbreviations(
          Math.round(this.state.damage)
        )}
      </div>
    );
  }
}

export default PetVisualDamage;
