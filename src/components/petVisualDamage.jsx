import React, { Component } from "react";
import ReactDOM from "react-dom";

class PetVisualDamage extends Component {
  state = {
    fading: false,
    damage: this.props.mainState.petDamageValueToBeRendered
  };
  componentDidMount() {
    const { id, onDone, delay, duration } = this.props;
    setTimeout(() => {
      this.setState({ fading: true }, () =>
        setTimeout(() => onDone(id), duration)
      );
    }, delay);
  }

  renderParagraphClasses = () => {
    let classes = "";
    return this.props.mainState.skills.skillTwo.isActive
      ? (classes += "damage-skillEffect")
      : classes;
  };

  render() {
    const { x, y } = this.props;
    const { fading } = this.state;
    return (
      <div
        id="petVisualDamage-div"
        className={`damageParagraph petDamage-fade-item  ${
          fading ? "fading" : ""
        }`}
        style={{ top: y, left: x }}
      >
        <span className={this.renderParagraphClasses()}>
          {this.state.damage}
        </span>
      </div>
    );
  }
}

export default PetVisualDamage;
