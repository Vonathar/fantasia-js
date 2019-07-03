import React, { Component } from "react";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
/* [IMG] Player */
import clickPerSecondDamageImage from "../img/dps_1.png";
/* [IMG] Pets */
import petOneImage from "../img/pets/pet_1.png";
import petTwoImage from "../img/pets/pet_2.png";
import petThreeImage from "../img/pets/pet_3.png";
import petFourImage from "../img/pets/pet_4.png";
import petFiveImage from "../img/pets/pet_5.png";
import petSixImage from "../img/pets/pet_6.png";
import petSevenImage from "../img/pets/pet_7.png";
import petEightImage from "../img/pets/pet_8.png";
import petNineImage from "../img/pets/pet_9.png";
import petTenImage from "../img/pets/pet_10.png";
import petElevenImage from "../img/pets/pet_11.png";
import petTwelveImage from "../img/pets/pet_12.png";
class PetsMenu extends Component {
  state = {
    prices: {
      petOne: 250,
      petTwo: 1000,
      petThree: 2500,
      petFour: 10000,
      petFive: 25000,
      petSix: 50000,
      petSeven: 100000,
      petEight: 250000,
      petNine: 500000,
      petTen: 1000000,
      petEleven: 2500000,
      petTwelve: 5000000
    },
    pricesAbbreviated: {
      petOne: 250,
      petTwo: 1000,
      petThree: 2500,
      petFour: 10000,
      petFive: 25000,
      petSix: 50000,
      petSeven: 100000,
      petEight: 250000,
      petNine: 500000,
      petTen: 1000000,
      petEleven: 2500000,
      petTwelve: 5000000
    },
    damageValuesAfterUpgrade: {
      petOne: 250,
      petTwo: 1000,
      petThree: 2500,
      petFour: 10000,
      petFive: 25000,
      petSix: 50000,
      petSeven: 100000,
      petEight: 250000,
      petNine: 500000,
      petTen: 1000000,
      petEleven: 2500000,
      petTwelve: 5000000
    },
    damageValuesCurrent: {
      petOne: 0,
      petTwo: 0,
      petThree: 0,
      petFour: 0,
      petFive: 0,
      petSix: 0,
      petSeven: 0,
      petEight: 0,
      petNine: 0,
      petTen: 0,
      petEleven: 0,
      petTwelve: 0
    },
    checkForRerendering: setInterval(() => {
      for (let petNumber in this.props.mainState.shouldRerender
        .petMenuParagraphs) {
        if (this.props.mainState.shouldRerender.petMenuParagraphs[petNumber]) {
          this.checkIfParagraphsNeedRerendering();
          break;
        }
      }
    }, 50)
  };
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
    let prices = { ...this.state.prices };
    let pricesAbbreviated = { ...this.state.pricesAbbreviated };
    prices[petNumber] = totalPrice;
    pricesAbbreviated[petNumber] = this.props.renderNumberWithAbbreviations(
      totalPrice
    );
    this.setState({ prices, pricesAbbreviated });
  };

  checkIfParagraphsNeedRerendering = () => {
    for (let petNumber in this.state.prices) {
      if (this.props.mainState.shouldRerender.petMenuParagraphs[petNumber]) {
        this.calculatePetPriceByUpgradeSetting(petNumber);
        this.calculatePetDamageAfterUpgradeSetting(petNumber);
      }
    }
    let damageValuesCurrent = { ...this.state.damageValuesCurrent };
    for (let petNumber in damageValuesCurrent) {
      damageValuesCurrent[petNumber] = this.props.renderNumberWithAbbreviations(
        this.props.mainState.pets[petNumber].damagePerSecondCurrent
      );
    }
    this.setState({ damageValuesCurrent });
  };

  // Render the button classes based on whether the user has enough money to buy the upgrade
  renderPetButtonClass = petNumber => {
    let classes = "";
    // Available for purchase or not
    classes +=
      this.props.mainState.coins >= this.state.prices[petNumber]
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
        totalDamage += damagePerSecondBase * Math.pow(1.1, upgradeLevel + 1);
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
          totalDamage = damagePerSecondBase * Math.pow(1.1, upgradeLevel + 1);
          damagePerSecondCurrent +=
            damagePerSecondBase * Math.pow(1.1, upgradeLevel);
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
          totalDamage = damagePerSecondBase * Math.pow(1.1, upgradeLevel + 1);
          damagePerSecondCurrent +=
            damagePerSecondBase * Math.pow(1.1, upgradeLevel);
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
          totalDamage = damagePerSecondBase * Math.pow(1.1, upgradeLevel + 1);
          damagePerSecondCurrent +=
            damagePerSecondBase * Math.pow(1.1, upgradeLevel);
          upgradeLevel++;
        }
      }
    }

    let damageValuesAfterUpgrade = { ...this.state.damageValuesAfterUpgrade };
    damageValuesAfterUpgrade[
      petNumber
    ] = this.props.renderNumberWithAbbreviations(
      Math.round(
        totalDamage -
          this.props.mainState.pets[petNumber].damagePerSecondCurrent
      )
    );
    this.setState({ damageValuesAfterUpgrade });
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
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petOneImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petOne.name}
            </small>
            <br />
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
            {this.state.damageValuesCurrent.petOne} (+
            {this.state.damageValuesAfterUpgrade.petOne})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petOne}
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
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petTwoImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petTwo.name}
            </small>
            <br />
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
            {this.state.damageValuesCurrent.petTwo} (+
            {this.state.damageValuesAfterUpgrade.petTwo})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petTwo}
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
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petThreeImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petThree.name}
            </small>
            <br />
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
            {this.state.damageValuesCurrent.petThree} (+
            {this.state.damageValuesAfterUpgrade.petThree})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petThree}
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
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petFourImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petFour.name}
            </small>
            <br />
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
            {this.state.damageValuesCurrent.petFour} (+
            {this.state.damageValuesAfterUpgrade.petFour})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petFour}
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
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petFiveImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petFive.name}
            </small>
            <br />
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
            {this.state.damageValuesCurrent.petFive} (+
            {this.state.damageValuesAfterUpgrade.petFive})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petFive}
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
        {/* Pet 6 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petSixImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petSix.name}
            </small>
            <br />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petSix.upgradeLevel}
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
            {this.state.damageValuesCurrent.petSix} (+
            {this.state.damageValuesAfterUpgrade.petSix})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petSix}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petSix")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petSix");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 7 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petSevenImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petSeven.name}
            </small>
            <br />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petSeven.upgradeLevel}
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
            {this.state.damageValuesCurrent.petSeven} (+
            {this.state.damageValuesAfterUpgrade.petSeven})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petSeven}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petSeven")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petSeven");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 8 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petEightImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petEight.name}
            </small>
            <br />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petEight.upgradeLevel}
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
            {this.state.damageValuesCurrent.petEight} (+
            {this.state.damageValuesAfterUpgrade.petEight})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petEight}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petEight")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petEight");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 9 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petNineImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petNine.name}
            </small>
            <br />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petNine.upgradeLevel}
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
            {this.state.damageValuesCurrent.petNine} (+
            {this.state.damageValuesAfterUpgrade.petNine})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petNine}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petNine")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petNine");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 10 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petTenImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petTen.name}
            </small>
            <br />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petTen.upgradeLevel}
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
            {this.state.damageValuesCurrent.petTen} (+
            {this.state.damageValuesAfterUpgrade.petTen})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petTen}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petTen")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petTen");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 11 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petElevenImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petEleven.name}
            </small>
            <br />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petEleven.upgradeLevel}
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
            {this.state.damageValuesCurrent.petEleven} (+
            {this.state.damageValuesAfterUpgrade.petEleven})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petEleven}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petEleven")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petEleven");
            }}
          >
            +
          </button>
        </div>
        {/* Pet 12 */}
        <div className="userInterface-pets-pet-div">
          <div className="userInterface-pets-pet-div-holder">
            <div className="userInterface-pets-pet-image-container">
              <img
                draggable="false"
                alt="pet"
                src={petTwelveImage}
                className="userInterface-pets-pet-image mx-auto my-auto"
              />
            </div>
            <small className="userInterface-pets-pet-name">
              {this.props.mainState.pets.petTwelve.name}
            </small>
            <br />
            <small className="userInterface-pets-pet-name">
              Lv. {this.props.mainState.pets.petTwelve.upgradeLevel}
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
            {this.state.damageValuesCurrent.petTwelve} (+
            {this.state.damageValuesAfterUpgrade.petTwelve})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.state.pricesAbbreviated.petTwelve}
            <img
              draggable="false"
              alt="coin"
              className="userInterface-pets-pet-price-image"
              src={coinImageOne}
            />
          </small>
          <button
            type="button"
            class={this.renderPetButtonClass("petTwelve")}
            onClick={() => {
              this.props.petLevelUpgradeByUserSettings("petTwelve");
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
