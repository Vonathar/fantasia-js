import React, { Component } from "react";

class DeckCard extends Component {
  // Card XP progress bar rendering
  renderCardProgressExperience = cardNumber => {
    // Obtain the card's experience in percentage
    let cardExperiencePercentage = Math.round(
      this.props.mainState.deck[cardNumber].experienceCurrent *
        (100 / this.props.mainState.deck[cardNumber].experienceRequired)
    );
    // Set the bar's width according to the percentage of xp
    return (
      "progress-bar bg-success progress-bar-striped progress-bar-animated progress" +
      cardExperiencePercentage
    );
  };

  renderCardImageClasses = cardNumber => {
    // If the card's level is 0
    return this.props.mainState.deck[cardNumber].level === 0
      ? "deckMenu-row-image-locked"
      : "deckMenu-row-image";
  };

  renderCardTooltip = cardNumber => {
    let tooltip;
    // Bonus EXP
    if (this.props.mainState.deck[cardNumber].bonusType === "bonusExperience") {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your EXP Gain!  Current bonus: ";
    }
    // Bonus HP
    if (this.props.mainState.deck[cardNumber].bonusType === "bonusHealth") {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your Max HP!  Current bonus: ";
    }
    // Bonus Click DMG
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusClickDamage"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your Click DMG!  Current bonus: ";
    }
    // Bonus DPS
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusDamagePerSecond"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your total DPS!  Current bonus: ";
    }
    // Bonus Coin drop
    if (this.props.mainState.deck[cardNumber].bonusType === "bonusCoinDrop") {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases the value of dropped coins!  Current bonus: ";
    }
    // Bonus Crit %
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusCriticalChance"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases the chances of landing a critical hit!  Current bonus: ";
    }
    // Bonus Crit DMG
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusCriticalDamage"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases the damage of your critical hits!  Current bonus: ";
    }
    // Bonus Double attack %
    if (
      this.props.mainState.deck[cardNumber].bonusType ===
      "bonusDoubleAttackChance"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your chance of landing a double attack!  Current bonus: ";
    }
    // Bonus Potion drop %
    if (
      this.props.mainState.deck[cardNumber].bonusType === "bonusPotionDropRate"
    ) {
      tooltip =
        this.props.mainState.deck[cardNumber].name +
        " increases your chance of finding a potion!  Current bonus: ";
    }
    // Shows the current bonus given by the specific card
    tooltip +=
      (0.2 * this.props.mainState.deck[cardNumber].level).toFixed(2) + "%";
    return tooltip;
  };

  render() {
    return (
      <div className="deckMenu-row-section mx-auto">
        <img
          draggable="false"
          data-toggle="tooltip"
          title={this.renderCardTooltip(this.props.cardNumber)}
          data-placement="top"
          alt="deck card"
          className={this.renderCardImageClasses(this.props.cardNumber)}
          src={this.props.cardImage}
        />
        <small className="deckMenu-row-section-paragraph">
          {this.props.mainState.deck[this.props.cardNumber].name}
        </small>
        <br />
        <small className="deckMenu-row-section-paragraph">
          Lv. {this.props.mainState.deck[this.props.cardNumber].level}
        </small>
        <div class="progress deckMenu-row-section-progress">
          <div
            class={this.renderCardProgressExperience(this.props.cardNumber)}
            role="progressbar"
          />
        </div>
        <img
          src={this.props.mainState.deck[this.props.cardNumber].bonusImage}
          className="deckMenu-row-section-bonusImage"
        />
        <small>
          {"+" +
            (
              0.2 * this.props.mainState.deck[this.props.cardNumber].level
            ).toFixed(2) +
            "%"}
        </small>
      </div>
    );
  }
}

export default DeckCard;
