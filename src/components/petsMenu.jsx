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
  renderPetPriceParagraph = petNumber => {
    let pets = { ...this.props.mainState.pets };

    if (pets[petNumber].upgradeLevel === 0) {
      return this.props.renderNumberWithAbbreviations(
        pets[petNumber].firstPurchasePrice
      );
    } else {
      return this.props.renderNumberWithAbbreviations(
        pets[petNumber].upgradePrice
      );
    }
    this.setState({ pets });
  };
  // Render the button classes based on whether the user has enough money to buy the upgrade
  renderPetButtonClass = petNumber => {
    if (this.props.mainState.pets[petNumber].upgradeLevel === 0) {
      if (
        this.props.mainState.coins >=
        this.props.mainState.pets[petNumber].firstPurchasePrice
      ) {
        return "userInterface-pets-pet-button btn btn-dark mx-auto";
      } else {
        // If the user does not have enough money
        return "userInterface-pets-pet-button-disabled btn btn-dark mx-auto";
      }
    }
    if (this.props.mainState.pets[petNumber].upgradeLevel > 0) {
      if (
        this.props.mainState.coins >=
        this.props.mainState.pets[petNumber].upgradePrice
      ) {
        return "userInterface-pets-pet-button btn btn-dark mx-auto";
      } else {
        // If the user does not have enough money
        return "userInterface-pets-pet-button-disabled btn btn-dark mx-auto";
      }
    }
  };
  // Return the damage increase that would be applied if the user were to purchase the next pet level
  renderPetDamageAfterUpgrade = petNumber => {
    return this.props.renderNumberWithAbbreviations(
      Math.round(
        this.props.mainState.pets[petNumber].damagePerSecondBase *
          Math.pow(1.05, this.props.mainState.pets[petNumber].upgradeLevel + 1)
      ) - this.props.mainState.pets[petNumber].damagePerSecondCurrent
    );
  };

  render() {
    return (
      <div id="userInterface-pets-div">
        <p>
          <strong>Pets upgrades</strong>
        </p>
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
            {this.renderPetDamageAfterUpgrade("petOne")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.props.renderNumberWithAbbreviations(
              this.props.mainState.pets.petOne.upgradePrice
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
              this.props.petLevelUpgrade("petOne");
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
            {this.renderPetDamageAfterUpgrade("petTwo")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.renderPetPriceParagraph("petTwo")}
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
              this.props.petLevelUpgrade("petTwo");
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
            {this.renderPetDamageAfterUpgrade("petThree")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.renderPetPriceParagraph("petThree")}
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
              this.props.petLevelUpgrade("petThree");
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
            {this.renderPetDamageAfterUpgrade("petFour")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.renderPetPriceParagraph("petFour")}
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
              this.props.petLevelUpgrade("petFour");
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
            {this.renderPetDamageAfterUpgrade("petFive")})
          </small>
          <small className="userInterface-pets-pet-price mx-auto">
            {this.renderPetPriceParagraph("petFive")}
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
              this.props.petLevelUpgrade("petFive");
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
