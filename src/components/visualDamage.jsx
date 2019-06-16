import React, { Component } from "react";

class VisualDamage extends Component {
  state = { fading: false };
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
        id="visualDamage-div"
        className={`fade-item  ${fading ? "fading" : ""}`}
        style={{ top: y, left: x }}
      >
        {this.props.renderNumberWithAbbreviations(
          this.props.calculateClickDamageAllSources()
        )}
      </div>
    );
  }
}

export default VisualDamage;
