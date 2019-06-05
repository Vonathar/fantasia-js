import React, { Component } from "react";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
/* [IMG] Weapons, gear */
import weaponImageOne from "../img/sword_1.png";

class Inventory extends Component {
  render() {
    return (
      <div id="userInterface-userSettings-div">
        {/* Inventory [ RIGHT ] */}
        <div id="userInterface-inventory-div">
          <p>
            <strong>Inventory</strong>
          </p>
          <div
            id="userInterface-inventory-row1"
            className="userInterface-inventory-row"
          >
            <img
              draggable="false"
              alt="weapon"
              id="userInterface-inventory-item1"
              className="userInterface-inventory-item scale"
              src={weaponImageOne}
              data-toggle="tooltip"
              title="Inventory is coming soon!"
              data-placement="top"
            />
          </div>
          <div id="userInterface-inventory-money">
            <img
              draggable="false"
              alt="coin"
              className="mx-auto scale"
              id="userInterface-inventory-money-img"
              src={coinImageOne}
            />
            <p className="mx-auto" id="userInterface-inventory-money-paragraph">
              {this.props.renderNumberWithAbbreviations(
                this.props.mainState.coins
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
