import React, { Component } from "react";
import playerViresOneImage from "../img/vires/playerVires_1.png";
import playerViresTwoImage from "../img/vires/playerVires_2.png";
import idleViresOneImage from "../img/vires/idleVires_1.png";
import idleViresTwoImage from "../img/vires/idleVires_2.png";
import otherViresOneImage from "../img/vires/otherVires_1.png";
import otherViresTwoImage from "../img/vires/otherVires_2.png";
import tomeImage from "../img/tome_1.png";

class ViresMenu extends Component {
  render() {
    return (
      <div id="userInterface-vires-div">
        <p>
          <strong>Vires menu</strong>
        </p>
        {/* Row #1  */}
        <h6>Player</h6>
        {/* Upgrade #1 */}
        <div className="userInterface-vires-row">
          <div
            className="userInterface-vires-section mx-auto"
            data-toggle="tooltip"
            title="Increase double attack chance by 0.1% for each level."
            data-placement="top"
          >
            <img
              draggable="false"
              alt="click damage"
              className="userInterface-vires-image"
              src={playerViresOneImage}
            />
            <br />
            <small>
              {this.props.mainState.viresUpgrades.player.upgradeOne.name} Lv.{" "}
              {this.props.mainState.viresUpgrades.player.upgradeOne.level}
            </small>
            <button
              className="btn btn-dark userInterface-vires-purchaseButton mx-auto my-auto scale"
              onClick={() => {
                this.props.viresUpgradeLevelUp("player", "upgradeOne");
              }}
            >
              <small>
                {this.props.mainState.viresUpgrades.player.upgradeOne.price}
                <img
                  src={tomeImage}
                  alt="Tome"
                  className="vires-purchaseButton-image mx-auto my-auto"
                />
              </small>
            </button>
          </div>
          {/* Upgrade #2 */}
          <div
            className="userInterface-vires-section mx-auto"
            data-toggle="tooltip"
            title="Increase obtained fever points by 7% for each level."
            data-placement="top"
          >
            <img
              draggable="false"
              alt="click damage"
              className="userInterface-vires-image"
              src={playerViresTwoImage}
            />
            <small>
              {this.props.mainState.viresUpgrades.player.upgradeTwo.name} Lv.{" "}
              {this.props.mainState.viresUpgrades.player.upgradeTwo.level}
            </small>
            <button
              className="btn btn-dark userInterface-vires-purchaseButton mx-auto my-auto scale"
              onClick={() => {
                this.props.viresUpgradeLevelUp("player", "upgradeTwo");
              }}
            >
              <small>
                {this.props.mainState.viresUpgrades.player.upgradeTwo.price}
                <img
                  src={tomeImage}
                  alt="Tome"
                  className="vires-purchaseButton-image mx-auto my-auto"
                />
              </small>
            </button>
          </div>
        </div>
        {/* Row #2  */}
        <h6>Idle</h6>
        {/* Upgrade #1 */}
        <div className="userInterface-vires-row">
          <div
            className="userInterface-vires-section mx-auto"
            data-toggle="tooltip"
            title="Reduce the delay between pet attacks. (1% per level, max 50%)"
            data-placement="top"
          >
            <img
              draggable="false"
              alt="click damage"
              className="userInterface-vires-image"
              src={idleViresOneImage}
            />
            <small>
              {this.props.mainState.viresUpgrades.idle.upgradeOne.name} Lv.{" "}
              {this.props.mainState.viresUpgrades.idle.upgradeOne.level}
            </small>
            <button
              className="btn btn-dark userInterface-vires-purchaseButton mx-auto my-auto scale"
              onClick={() => {
                this.props.viresUpgradeLevelUp("idle", "upgradeOne");
              }}
            >
              <small>
                {this.props.mainState.viresUpgrades.idle.upgradeOne.price}
                <img
                  src={tomeImage}
                  alt="Tome"
                  className="vires-purchaseButton-image mx-auto my-auto"
                />
              </small>
            </button>
          </div>
          {/* Upgrade #2 */}
          <div
            className="userInterface-vires-section mx-auto"
            data-toggle="tooltip"
            title="Add a percentage of your click damage to your pet damage. (0.50% per level)"
            data-placement="top"
          >
            <img
              draggable="false"
              alt="click damage"
              className="userInterface-vires-image"
              src={idleViresTwoImage}
            />
            <small>
              {this.props.mainState.viresUpgrades.idle.upgradeTwo.name} Lv.{" "}
              {this.props.mainState.viresUpgrades.idle.upgradeTwo.level}
            </small>
            <button
              className="btn btn-dark userInterface-vires-purchaseButton mx-auto my-auto scale"
              onClick={() => {
                this.props.viresUpgradeLevelUp("idle", "upgradeTwo");
              }}
            >
              <small>
                {this.props.mainState.viresUpgrades.idle.upgradeTwo.price}
                <img
                  src={tomeImage}
                  alt="Tome"
                  className="vires-purchaseButton-image mx-auto my-auto"
                />
              </small>
            </button>
          </div>
        </div>
        {/* Row #3  */}
        <h6>Other</h6>
        <div className="userInterface-vires-row">
          <div className="userInterface-vires-section mx-auto">
            <img
              data-toggle="tooltip"
              title="More upgrades coming soon!"
              data-placement="top"
              draggable="false"
              alt="click damage"
              className="userInterface-vires-image"
              src={otherViresOneImage}
            />
            <small>Sovereignty Lv. 0</small>
          </div>
          <div className="userInterface-vires-section mx-auto">
            <img
              data-toggle="tooltip"
              title="More upgrades coming soon!"
              data-placement="top"
              draggable="false"
              alt="click damage"
              className="userInterface-vires-image"
              src={otherViresTwoImage}
            />
            <small>Brewing Lv. 0</small>
          </div>
        </div>
      </div>
    );
  }
}

export default ViresMenu;
