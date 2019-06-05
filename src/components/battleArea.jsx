import React, { Component } from "react";
/* [IMG] Player */
import playerImageOne from "../img/player_1.png";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
import resourceTwoImage from "../img/resource_2.png";
import resourceThreeImage from "../img/resource_3.png";

class BattleArea extends Component {
  // Drop new coins on the floor
  renderCoinDrop = () => {
    // If the coins have not already been collected
    if (!this.props.mainState.isCoinCollected) {
      // Animate them so that they drop down from the enemy image
      return "userInterface-enemy-drop-coin userInterface-enemy-drop-coin-appear";
      // If the coins have been collected
    } else {
      // Animate them so that they move towards the inventory
      return "userInterface-enemy-drop-coin userInterface-enemy-drop-coin-collect";
    }
  };

  // Drop new coins on the floor
  renderFoodDrop = () => {
    // Only when coins have not been collected
    if (!this.props.mainState.isFoodCollected) {
      // Animate them so that they drop down from the enemy image
      return "userInterface-enemy-drop-food userInterface-enemy-drop-food-appear";
    } else {
      // Animate them so that they move towards the inventory
      return "userInterface-enemy-drop-food userInterface-enemy-drop-food-collect";
    }
  };

  // Drop new lootbags on the floor
  renderLootBagDrop = () => {
    // Only when lootbags have not been collected
    if (!this.props.mainState.isLootBagCollected) {
      // Animate them so that they drop down from the enemy image
      return "userInterface-enemy-drop-food userInterface-enemy-drop-food-appear";
    } else {
      // Animate them so that they move towards the inventory
      return "userInterface-enemy-drop-food userInterface-enemy-drop-food-collect";
    }
  };
  // Create new coins dropped
  generateCoinDrop = () => {
    let coinsToBeRendered = [];
    // All the coins which have not been collected yet (by hovering)
    for (let i = 0; i < this.props.mainState.coinsToBeCollected; i++) {
      // Add a new coin
      coinsToBeRendered.push(
        <img
          draggable="false"
          alt="coin"
          className={this.renderCoinDrop()}
          src={coinImageOne}
          onMouseOver={this.props.collectCoinsOnHover}
        />
      );
    }
    return coinsToBeRendered;
  };
  // Create new food dropped
  generateFoodDrop = () => {
    let foodToBeRendered = [];
    // All the food which has not been collected yet (by hovering)
    for (let i = 0; i < this.props.mainState.foodToBeCollected; i++) {
      // Add a new food
      foodToBeRendered.push(
        <img
          draggable="false"
          alt="food"
          className={this.renderFoodDrop()}
          src={resourceThreeImage}
          onMouseOver={this.props.collectFoodOnHover}
        />
      );
    }
    return foodToBeRendered;
  };

  // Create new lootbag dropped
  generateLootBagDrop = () => {
    let lootbagsToBeRendered = [];
    // All the lootbags which have not been collected yet (by hovering)
    for (let i = 0; i < this.props.mainState.lootBagsToBeCollected; i++) {
      // Add a new food
      lootbagsToBeRendered.push(
        <img
          draggable="false"
          alt="lootbag"
          className={this.renderLootBagDrop()}
          src={resourceTwoImage}
          onMouseOver={this.props.collectLootBagOnHover}
        />
      );
    }
    return lootbagsToBeRendered;
  };
  // Enemy HP progress bar
  renderEnemyProgressHp = () => {
    // Obtain the player experience in percentage
    let enemyHealthPercentage = Math.round(
      this.props.mainState.enemyHealthCurrent *
        (100 / this.props.mainState.enemyHealthMax)
    );
    // Set the bar's width according to the percentage of health remaining
    return (
      "progress-bar bg-danger progress-bar-striped progress-bar-animated progress" +
      enemyHealthPercentage
    );
  };

  // Animate the enemy's image between active and dead
  renderEnemyImageClass = () => {
    // If the enemy is alive
    if (this.props.mainState.enemyHasHealth) {
      // Animate it on hover and on click
      return "userInterface-enemy-image scale scale-click";
      // If the enemy is dead
    } else {
      // Animate it's death
      return "userInterface-enemy-image userInterface-enemy-image-dead";
    }
  };
  // Player HP progress bar
  renderPlayerProgressHp = () => {
    // Obtain the player health in percentage
    let playerHealthPercentage = Math.round(
      this.props.mainState.playerHealthCurrent *
        (100 / this.props.mainState.playerHealthMax)
    );
    // Set the bar's width according to the percentage of health remaining
    return (
      "progress-bar bg-danger progress-bar-striped progress-bar-animated progress" +
      playerHealthPercentage
    );
  };

  // Player XP progress bar
  renderPlayerProgressXp = () => {
    // Obtain the player experience in percentage
    let playerExperiencePercentage = Math.round(
      this.props.mainState.playerExperienceCurrent *
        (100 / this.props.mainState.playerExperienceRequired)
    );
    // Set the bar's width according to the percentage of experience
    return (
      "progress-bar bg-success progress-bar-striped progress-bar-animated progress" +
      playerExperiencePercentage
    );
  };
  render() {
    return (
      <div id="userInterface-battle-div">
        <div id="userInterface-player-div">
          <img
            alt="player"
            draggable="false"
            className="userInterface-player-image scale"
            src={playerImageOne}
            onClick={this.playerHeal}
          />
          <div id="userInterface-player-paragraph">
            <p>Player Lv. {this.props.mainState.playerLevel}</p>
          </div>
          <div class="progress">
            <div
              id="userInterface-player-progress-hp"
              class={this.renderPlayerProgressHp()}
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div class="progress">
            <div
              id="userInterface-player-progress-xp"
              class={this.renderPlayerProgressXp()}
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <div id="userInterface-enemy-div">
          <img
            alt="enemy"
            draggable="false"
            className={this.renderEnemyImageClass()}
            src={this.props.mainState.enemyImageCurrent}
            onClick={this.props.playerAttack}
          />
          <div id="userInterface-enemy-paragraph">
            <p>
              {this.props.mainState.enemyNameCurrent} Lv.{" "}
              {this.props.mainState.enemyLevel}
            </p>
          </div>
          <div class="progress">
            <div
              id="userInterface-enemy-progress-hp"
              class={this.renderEnemyProgressHp()}
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <div id="userInterface-enemy-drop-div">
            {this.generateCoinDrop()}
            {this.generateFoodDrop()}
            {this.generateLootBagDrop()}
          </div>
        </div>
      </div>
    );
  }
}

export default BattleArea;
