import React, { Component } from "react";
import resourceOneImage from "../img/resource_1.png";
import resourceTwoImage from "../img/resource_2.png";
import resourceThreeImage from "../img/resource_3.png";

class ResourcesBar extends Component {
  render() {
    return (
      <div id="userInterface-resources-div">
        <div
          className="userInterface-resource-div mx-auto"
          id="userInterface-resourceOne-div"
        >
          <img
            draggable="false"
            alt="relics"
            className="userInterface-resources-image scale"
            data-toggle="tooltip"
            title="Relics are obtained randomly by killing enemies; use them to buy special upgrades!"
            data-placement="top"
            src={resourceOneImage}
          />
          <p className="userInterface-resource-div-paragraph">
            {this.props.mainState.relics}
          </p>
        </div>
        <div
          className="userInterface-resource-div mx-auto"
          id="userInterface-resourceTwo-div"
        >
          <img
            draggable="false"
            alt="Lootbags"
            className="userInterface-resources-image scale"
            src={resourceTwoImage}
            data-toggle="tooltip"
            title="Loot bags are obtained randomly by killing enemies; use them to obtain coins, upgrades and more!"
            data-placement="top"
          />
          <p className="userInterface-resource-div-paragraph">
            {this.props.mainState.lootBags}
          </p>
        </div>
        <div
          className="userInterface-resource-div mx-auto"
          id="userInterface-resourceThree-div"
        >
          <img
            draggable="false"
            alt="food"
            className="userInterface-resources-image scale"
            src={resourceThreeImage}
            data-toggle="tooltip"
            title="Potions are used to heal your character (25% of total HP) [Hotkey: H]."
            data-placement="top"
          />
          <p className="userInterface-resource-div-paragraph">
            {this.props.mainState.food}
          </p>
        </div>
      </div>
    );
  }
}

export default ResourcesBar;
