import React, { Component } from "react";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";

/* [IMG] Player */

import doubleAttackImage from "../img/doubleAttack_1.png";
import criticalMultiplierImage from "../img/critical_1.png";
import criticalChanceImage from "../img/critical_2.png";
import clickDamageImage from "../img/cps_1.png";
import heroUpgradeOneImage from "../img/hero_upgrade_1.png";

class HeroMenu extends Component {
  // Render the button classes based on whether the user has enough money to buy the upgrade
  renderUpgradeButtonClasses = upgradeName => {
    // If the player has enough money to buy the upgrade
    if (
      this.props.mainState.coins >=
      this.props.mainState.heroUpgrades[upgradeName].price
    ) {
      return "userInterface-upgrades-upgrade-button btn btn-dark mx-auto";
    } else {
      // If the player does not have enough money to buy the upgrade
      return "userInterface-upgrades-upgrade-button-disabled btn btn-dark mx-auto";
    }
  };
  // Render the upgrade price next to the purchase button
  renderUpgradePriceParagraph = upgradeName => {
    return this.props.mainState.heroUpgrades[upgradeName].level === 0
      ? this.props.mainState.heroUpgrades[upgradeName].purchasePrice
      : this.props.mainState.heroUpgrades[upgradeName].price;
  };
  render() {
    return (
      <div id="userInterface-upgrades-div">
        <p>
          <strong>Hero upgrades</strong>
        </p>
        {/* Upgrade #1 - Click DMG */}
        <div className="userInterface-upgrades-upgrade-div">
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <div className="userInterface-upgrades-upgrade-div-holder mx-auto  my-auto">
              <img
                draggable="false"
                alt="Upgrade one"
                src={heroUpgradeOneImage}
                className="userInterface-upgrades-upgrade-image mx-auto"
              />
              <small className="userInterface-upgrades-upgrade-name">
                Click Damage
              </small>
              <small className="userInterface-upgrades-upgrade-level">
                Lv. {this.props.mainState.heroUpgrades.clickDamage.level}
              </small>
            </div>
          </div>
          <div className="userInterface-upgrades-upgrade-div-child  mx-auto my-auto">
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img
                className="userInterface-upgrades-upgrade-damage-increment-image"
                draggable="false"
                alt="click damage"
                src={clickDamageImage}
              />
              {/* Show the increase the upgrade would have on the current player damage */}
              +
              {this.props.renderNumberWithAbbreviations(
                Math.round(
                  50 *
                    Math.pow(
                      1.045,
                      this.props.mainState.heroUpgrades.clickDamage.level
                    )
                ) - this.props.mainState.playerAttackPlaceholder
              )}
            </small>
          </div>
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.props.renderNumberWithAbbreviations(
                this.renderUpgradePriceParagraph("clickDamage")
              )}
              <img
                draggable="false"
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
          </div>

          <div className="userInterface-upgrades-upgrade-div-child mx-auto  my-auto">
            <button
              type="button"
              className={this.renderUpgradeButtonClasses("clickDamage")}
              onClick={() => {
                this.props.heroUpgradeLevelUp("clickDamage");
              }}
            >
              +
            </button>
          </div>
        </div>
        {/* Upgrade #2 - Critical Rate */}
        <div className="userInterface-upgrades-upgrade-div">
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <div className="userInterface-upgrades-upgrade-div-holder mx-auto">
              <img
                draggable="false"
                alt="Upgrade two"
                src={criticalChanceImage}
                className="userInterface-upgrades-upgrade-image mx-auto"
              />
              <small className="userInterface-upgrades-upgrade-name">
                Critical chance
              </small>
              <small className="userInterface-upgrades-upgrade-level">
                Lv. {this.props.mainState.heroUpgrades.criticalChance.level}
              </small>
            </div>
          </div>
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img
                className="userInterface-upgrades-upgrade-damage-increment-image"
                draggable="false"
                alt="critical chance"
                src={criticalChanceImage}
              />
              {/* Show the increase the upgrade would have on the current player damage */}
              +0.3%
            </small>
          </div>
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.props.renderNumberWithAbbreviations(
                this.renderUpgradePriceParagraph("criticalChance")
              )}
              <img
                draggable="false"
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
          </div>
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <button
              type="button"
              className={this.renderUpgradeButtonClasses("criticalChance")}
              onClick={() => {
                this.props.heroUpgradeLevelUp("criticalChance");
              }}
            >
              +
            </button>
          </div>
        </div>
        {/* Upgrade #3 - Crit Multiplier */}
        <div className="userInterface-upgrades-upgrade-div">
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <div className="userInterface-upgrades-upgrade-div-holder mx-auto">
              <img
                draggable="false"
                alt="Upgrade three"
                src={criticalMultiplierImage}
                className="userInterface-upgrades-upgrade-image mx-auto"
              />
              <small className="userInterface-upgrades-upgrade-name">
                Critical multiplier
              </small>
              <small className="userInterface-upgrades-upgrade-level">
                Lv. {this.props.mainState.heroUpgrades.criticalMultiplier.level}
              </small>
            </div>
          </div>
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img
                className="userInterface-upgrades-upgrade-damage-increment-image"
                draggable="false"
                alt="critical multiplier"
                src={criticalMultiplierImage}
              />
              {/* Show the increase the upgrade would have on the current player damage */}
              +5%
            </small>
          </div>
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.props.renderNumberWithAbbreviations(
                this.renderUpgradePriceParagraph("criticalMultiplier")
              )}
              <img
                draggable="false"
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
          </div>
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <button
              type="button"
              className={this.renderUpgradeButtonClasses("criticalMultiplier")}
              onClick={() => {
                this.props.heroUpgradeLevelUp("criticalMultiplier");
              }}
            >
              +
            </button>
          </div>
        </div>
        {/* Upgrade #4 - Double attack % */}
        <div className="userInterface-upgrades-upgrade-div">
          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <div className="userInterface-upgrades-upgrade-div-holder mx-auto">
              <img
                draggable="false"
                alt="Upgrade four"
                src={doubleAttackImage}
                className="userInterface-upgrades-upgrade-image mx-auto"
              />
              <small className="userInterface-upgrades-upgrade-name">
                Double attack
              </small>
              <small className="userInterface-upgrades-upgrade-level">
                Lv. {this.props.mainState.heroUpgrades.doubleAttackChance.level}
              </small>
            </div>
          </div>

          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img
                className="userInterface-upgrades-upgrade-damage-increment-image"
                draggable="false"
                alt="double attack"
                src={doubleAttackImage}
              />
              {/* Show the increase the upgrade would have on the current double attack chance */}
              +0.3%
            </small>
          </div>

          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.props.renderNumberWithAbbreviations(
                this.renderUpgradePriceParagraph("doubleAttackChance")
              )}
              <img
                draggable="false"
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
          </div>

          <div className="userInterface-upgrades-upgrade-div-child mx-auto my-auto">
            <button
              type="button"
              className={this.renderUpgradeButtonClasses("doubleAttackChance")}
              onClick={() => {
                this.props.heroUpgradeLevelUp("doubleAttackChance");
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroMenu;
