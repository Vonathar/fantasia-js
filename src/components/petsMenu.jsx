import React, { Component } from "react";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
/* [IMG] Player */
import clickPerSecondDamageImage from "../img/dps_1.png";
/* [IMG] Enemy */
import enemyImageOne from "../img/enemy_1.png";
import enemyImageTwo from "../img/enemy_2.png";
import enemyImageThree from "../img/enemy_3.png";
import enemyImageFour from "../img/enemy_4.png";
import enemyImageFive from "../img/enemy_5.png";

class PetsMenu extends Component {
  calculatePetPriceByUpgradeSetting = petNumber => {
    let { upgradeLevel, firstPurchasePrice, upgradePrice, basicPrice } = {
      ...this.props.mainState.pets[petNumber]
    };
    let totalPrice = 0;
    // X1 Upgrade
    if (this.props.mainState.petsMenuUpgradeSettingSelected === "X1") {
      if (upgradeLevel === 0) {
        // Pet is Lv. 0
        totalPrice += firstPurchasePrice;
      } else {
        // Pet Lv. is a multiple of 5, -1
        if (upgradeLevel % 5 === 4) {
          totalPrice += upgradePrice * 2;
          // Pet Lv. is not a multiple of 5, -1 and is not 0
        } else {
          totalPrice += upgradePrice;
        }
      }
      // X5 Upgrades
    } else if (this.props.mainState.petsMenuUpgradeSettingSelected === "X5") {
      for (let i = 0; i < 5; i++) {
        // Pet is Lv. 0
        if (upgradeLevel === 0) {
          totalPrice += firstPurchasePrice;
          upgradeLevel++;
        } else {
          // Pet is Lv. 4/9/14/19 etc
          if (upgradeLevel % 5 === 4) {
            basicPrice *= 1.25;
            upgradePrice *= 2;
          }
          upgradePrice = Math.round(basicPrice * Math.pow(1.06, upgradeLevel));
          totalPrice += upgradePrice;
          upgradeLevel++;
        }
      }
      // X25 Upgrades
    } else if (this.props.mainState.petsMenuUpgradeSettingSelected === "X25") {
      for (let i = 0; i < 25; i++) {
        // Pet is Lv. 0
        if (upgradeLevel === 0) {
          totalPrice += firstPurchasePrice;
          upgradeLevel++;
        } else {
          // Pet is Lv. 4/9/14/19 etc
          if (upgradeLevel % 5 === 4) {
            basicPrice *= 1.25;
            upgradePrice *= 2;
          }
          upgradePrice = Math.round(basicPrice * Math.pow(1.06, upgradeLevel));
          totalPrice += upgradePrice;
          upgradeLevel++;
        }
      }
      // To Bonus
    } else if (
      this.props.mainState.petsMenuUpgradeSettingSelected === "To Bonus"
    ) {
      let levelsToNextUpgrade =
        5 - (this.props.mainState.pets[petNumber].upgradeLevel % 5);
      for (let i = 0; i < levelsToNextUpgrade; i++) {
        // Pet is Lv. 0
        if (upgradeLevel === 0) {
          totalPrice += firstPurchasePrice;
          upgradeLevel++;
        } else {
          // Pet is Lv. 4/9/14/19 etc
          if (upgradeLevel % 5 === 4) {
            basicPrice *= 1.25;
            upgradePrice *= 2;
          }
          upgradePrice = Math.round(basicPrice * Math.pow(1.06, upgradeLevel));
          totalPrice += upgradePrice;
          upgradeLevel++;
        }
      }
    }
    return totalPrice;
  };

  // Render the button classes based on whether the user has enough money to buy the upgrade
  renderPetButtonClass = petNumber => {
    let classes = "";
    // Available for purchase or not
    classes +=
      this.props.mainState.coins >=
      this.calculatePetPriceByUpgradeSetting(petNumber)
        ? "userInterface-pets-pet-button btn btn-dark mx-auto"
        : "userInterface-pets-pet-button-disabled btn btn-dark mx-auto";
    return classes;
  };

  // Return the damage increase that would be applied if the user were to purchase the next pet level
  calculatePetDamageAfterUpgradeSetting = petNumber => {
    let { upgradeLevel, damagePerSecondBase, damagePerSecondCurrent } = {
      ...this.props.mainState.pets[petNumber]
    };
    let totalDamage = 0;
    // X1 Upgrade
    if (this.props.mainState.petsMenuUpgradeSettingSelected === "X1") {
      // Pet is Lv. 0
      if (upgradeLevel === 0) {
        totalDamage += damagePerSecondBase;
      } else {
        // Pet Lv. is a multiple of 5, -1
        if (upgradeLevel % 5 === 4) {
          damagePerSecondBase *= 1.25;
        }
        totalDamage += damagePerSecondBase * Math.pow(1.05, upgradeLevel + 1);
      }
      upgradeLevel++;
      // X5 Upgrades
    } else if (this.props.mainState.petsMenuUpgradeSettingSelected === "X5") {
      for (let i = 0; i < 5; i++) {
        // Pet is Lv. 0
        if (upgradeLevel === 0) {
          totalDamage += damagePerSecondBase - damagePerSecondCurrent;
          upgradeLevel++;
        } else {
          // Pet Lv. is a multiple of 5, -1
          if (upgradeLevel % 5 === 4) {
            damagePerSecondBase *= 1.25;
          }
          totalDamage = damagePerSecondBase * Math.pow(1.05, upgradeLevel + 1);
          damagePerSecondCurrent +=
            damagePerSecondBase * Math.pow(1.05, upgradeLevel);
          upgradeLevel++;
        }
      }
      // X25 Upgrades
    } else if (this.props.mainState.petsMenuUpgradeSettingSelected === "X25") {
      for (let i = 0; i < 25; i++) {
        // Pet is Lv. 0
        if (upgradeLevel === 0) {
          totalDamage += damagePerSecondBase - damagePerSecondCurrent;
          upgradeLevel++;
        } else {
          // Pet Lv. is a multiple of 5, -1
          if (upgradeLevel % 5 === 4) {
            damagePerSecondBase *= 1.25;
          }
          totalDamage = damagePerSecondBase * Math.pow(1.05, upgradeLevel + 1);
          damagePerSecondCurrent +=
            damagePerSecondBase * Math.pow(1.05, upgradeLevel);
          upgradeLevel++;
        }
      }
      // To Bonus
    } else if (
      this.props.mainState.petsMenuUpgradeSettingSelected === "To Bonus"
    ) {
      let levelsToNextUpgrade =
        5 - (this.props.mainState.pets[petNumber].upgradeLevel % 5);
      for (let i = 0; i < levelsToNextUpgrade; i++) {
        // Pet is Lv. 0
        if (upgradeLevel === 0) {
          totalDamage += damagePerSecondBase - damagePerSecondCurrent;
          upgradeLevel++;
        } else {
          // Pet Lv. is a multiple of 5, -1
          if (upgradeLevel % 5 === 4) {
            damagePerSecondBase *= 1.25;
          }
          totalDamage = damagePerSecondBase * Math.pow(1.05, upgradeLevel + 1);
          damagePerSecondCurrent +=
            damagePerSecondBase * Math.pow(1.05, upgradeLevel);
          upgradeLevel++;
        }
      }
    }
    return this.props.renderNumberWithAbbreviations(
      Math.round(
        totalDamage -
          this.props.mainState.pets[petNumber].damagePerSecondCurrent
      )
    );
  };

  renderUpgradeSettingsButtonClasses = option => {
    let classes = "btn btn-dark mx-auto ";
    classes +=
      this.props.mainState.petsMenuUpgradeSettingSelected === option
        ? "petsMenu-upgradeSettings-button-selected"
        : "petsMenu-upgradeSettings-button";

    return classes;
  };

  render() {
    return (
      <div id="userInterface-pets-div">
        <p>
          <strong>Pets upgrades</strong>
        </p>
        <div id="petsMenu-upgradeSettings-div">
          <button
            onClick={this.props.fetchPetsMenuUpgradeSettings}
            className={this.renderUpgradeSettingsButtonClasses("X1")}
          >
            <small>X1</small>
          </button>
          <button
            onClick={this.props.fetchPetsMenuUpgradeSettings}
            className={this.renderUpgradeSettingsButtonClasses("X5")}
          >
            <small>X5</small>
          </button>
          <button
            onClick={this.props.fetchPetsMenuUpgradeSettings}
            className={this.renderUpgradeSettingsButtonClasses("X25")}
          >
            <small>X25</small>
          </button>
          <button
            onClick={this.props.fetchPetsMenuUpgradeSettings}
            className={this.renderUpgradeSettingsButtonClasses("To Bonus")}
          >
            <small>To Bonus</small>
          </button>
        </div>
        {/* Pet 1 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <img
              draggable="false"
              alt="pet"
              src={enemyImageOne}
              className="userInterface-pets-pet-image"
            />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petOne.upgradeLevel}
            </small>
          </div>
          <small className="userInterface-pets-pet-dps mx-auto">
            <img
              className="userInterface-pets-pet-dps-child"
              draggable="false"
              alt="click per second"
              src={clickPerSecondDamageImage}
            />
            {/* The attack which would be added to the pet after the upgrade */}
            {this.props.renderNumberWithAbbreviations(
              this.props.mainState.pets.petOne.damagePerSecondCurrent
            )}{" "}
            (+
            {this.calculatePetDamageAfterUpgradeSetting("petOne")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.props.renderNumberWithAbbreviations(
              this.calculatePetPriceByUpgradeSetting("petOne")
            )}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petOne")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petOne");
            }}
          >
            +
          </button>
        </div>

        {/* Pet 2 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <img
              draggable="false"
              alt="pet"
              src={enemyImageTwo}
              className="userInterface-pets-pet-image"
            />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petTwo.upgradeLevel}
            </small>
          </div>
          <small className="userInterface-pets-pet-dps mx-auto">
            <img
              className="userInterface-pets-pet-dps-child"
              draggable="false"
              alt="click per second"
              src={clickPerSecondDamageImage}
            />
            {/* The attack which would be added to the pet after the upgrade */}
            {this.props.renderNumberWithAbbreviations(
              this.props.mainState.pets.petTwo.damagePerSecondCurrent
            )}{" "}
            (+
            {this.calculatePetDamageAfterUpgradeSetting("petTwo")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.props.renderNumberWithAbbreviations(
              this.calculatePetPriceByUpgradeSetting("petTwo")
            )}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petTwo")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petTwo");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 3 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <img
              draggable="false"
              alt="pet"
              src={enemyImageThree}
              className="userInterface-pets-pet-image"
            />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petThree.upgradeLevel}
            </small>
          </div>
          <small className="userInterface-pets-pet-dps mx-auto">
            <img
              className="userInterface-pets-pet-dps-child"
              draggable="false"
              alt="click per second"
              src={clickPerSecondDamageImage}
            />
            {/* The attack which would be added to the pet after the upgrade */}
            {this.props.renderNumberWithAbbreviations(
              this.props.mainState.pets.petThree.damagePerSecondCurrent
            )}{" "}
            (+
            {this.calculatePetDamageAfterUpgradeSetting("petThree")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.props.renderNumberWithAbbreviations(
              this.calculatePetPriceByUpgradeSetting("petThree")
            )}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petThree")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petThree");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 4 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <img
              draggable="false"
              alt="pet"
              src={enemyImageFour}
              className="userInterface-pets-pet-image"
            />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petFour.upgradeLevel}
            </small>
          </div>
          <small className="userInterface-pets-pet-dps mx-auto">
            <img
              className="userInterface-pets-pet-dps-child"
              draggable="false"
              alt="click per second"
              src={clickPerSecondDamageImage}
            />
            {/* The attack which would be added to the pet after the upgrade */}
            {this.props.renderNumberWithAbbreviations(
              this.props.mainState.pets.petFour.damagePerSecondCurrent
            )}{" "}
            (+
            {this.calculatePetDamageAfterUpgradeSetting("petFour")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.props.renderNumberWithAbbreviations(
              this.calculatePetPriceByUpgradeSetting("petFour")
            )}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petFour")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petFour");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 5 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <img
              draggable="false"
              alt="pet"
              src={enemyImageFive}
              className="userInterface-pets-pet-image"
            />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petFive.upgradeLevel}
            </small>
          </div>
          <small className="userInterface-pets-pet-dps mx-auto">
            <img
              className="userInterface-pets-pet-dps-child"
              draggable="false"
              alt="click per second"
              src={clickPerSecondDamageImage}
            />
            {/* The attack which would be added to the pet after the upgrade */}
            {this.props.renderNumberWithAbbreviations(
              this.props.mainState.pets.petFive.damagePerSecondCurrent
            )}{" "}
            (+
            {this.calculatePetDamageAfterUpgradeSetting("petFive")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.props.renderNumberWithAbbreviations(
              this.calculatePetPriceByUpgradeSetting("petFive")
            )}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petFive")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petFive");
            }}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default PetsMenu;
