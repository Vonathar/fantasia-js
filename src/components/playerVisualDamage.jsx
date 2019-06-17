import React, { Component } from "react";

class PlayerVisualDamage extends Component {
  state = {
    fading: false,
    damage: this.props.calculateClickDamageAllSources()
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
        id="playerVisualDamage-div"
        className={`playerDamage-fade-item  ${fading ? "fading" : ""}`}
        style={{ top: y, left: x }}
      >
        {this.props.renderNumberWithAbbreviations(
          Math.round(this.state.damage)
        )}
      </div>
    );
  }
}

export default PlayerVisualDamage;
