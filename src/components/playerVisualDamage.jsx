import React, { Component } from "react";

class PlayerVisualDamage extends Component {
  state = {
    fading: false,
    damage: this.props.mainState.playerLastAttack.damage,
    isDouble: this.props.mainState.playerLastAttack.isDouble,
    isCritical: this.props.mainState.playerLastAttack.isCritical
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
    let classNames = "damageParagraph ";
    if (
      this.props.mainState.skills.skillThree.isActive &&
      !this.state.isDouble &&
      !this.state.isCritical
    ) {
      classNames += "damage-skillEffect ";
    }
    if (this.state.isDouble) {
      classNames += "text-warning h5 ";
    }
    if (this.state.isCritical) {
      classNames += "text-danger h5 ";
    }

    return classNames;
  };

  renderParagraphText = () => {
    return this.state.isDouble
      ? this.props.renderNumberWithAbbreviations(
          Math.round(this.state.damage) / 2
        ) + " x2!"
      : this.props.renderNumberWithAbbreviations(Math.round(this.state.damage));
  };

  render() {
    const { x, y } = this.props;
    const { fading } = this.state;
    return (
      <div
        id="playerVisualDamage-div"
        className={`playerDamage-fade-item  ${fading ? "fading" : ""}`}
        style={{ top: y, left: x }}
      >
        <span className={this.renderParagraphClasses()}>
          {this.renderParagraphText()}
        </span>
      </div>
    );
  }
}

export default PlayerVisualDamage;
