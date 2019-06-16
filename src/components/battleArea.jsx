import React, { Component } from "react";
import VisualDamage from "./visualDamage";
/* [IMG] Player */
import playerImageOne from "../img/player_1.png";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
import resourceTwoImage from "../img/resource_2.png";
import resourceThreeImage from "../img/resource_3.png";

class BattleArea extends Component {
  state = {
    damageParagraphsToBeRendered: []
  };
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

  // Drop new equipment on the floor
  renderEquipmentDrop = () => {
    // Only when equipment has not been collected
    if (!this.props.mainState.isEquipmentCollected) {
      // Animate them so that they drop down from the enemy image
      return "userInterface-enemy-drop-coin userInterface-enemy-drop-coin-appear";
    } else {
      // Animate them so that they move towards the inventory
      return "userInterface-enemy-drop-coin userInterface-enemy-drop-coin-collect";
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

  // Create new coins dropped
  generateEquipmentDrop = () => {
    if (this.props.mainState.equipmentToBeCollected.weapon.length > 0) {
      let equipmentToBeRendered = [];
      // All the equipment which has not been collected yet (by hovering)
      for (
        let i = 0;
        i < this.props.mainState.equipmentToBeCollected.weapon.length;
        i++
      ) {
        // Add a new item
        equipmentToBeRendered.push(
          <img
            draggable="false"
            alt="item"
            className={this.renderEquipmentDrop()}
            src={
              this.props.mainState.equipmentToBeCollected.weapon[i].itemImage
            }
            onMouseOver={this.props.collectEquipmentOnHover}
          />
        );
      }
      return equipmentToBeRendered;
    }
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

  /* Visual Damage rendering */
  // Add a new paragraph to be rendered to the UI
  addDamageRenderingItem = () => {
    // If the enemy has health
    if (this.props.mainState.enemyHasHealth) {
      this.setState(state => ({
        damageParagraphsToBeRendered: [
          ...state.damageParagraphsToBeRendered,
          { id: Date.now() }
        ]
      }));
    }
  };
  removeDamageRenderingItem = id => {
    this.setState(state => ({
      damageParagraphsToBeRendered: state.damageParagraphsToBeRendered.filter(
        ({ id: itemid }) => itemid !== id
      )
    }));
  };

  handleGlobalKeyboardInput = event => {
    // Use [W/E] to attack
    if (event.key === "w" || event.key === "e") {
      if (this.props.mainState.enemyHasHealth) {
        this.addDamageRenderingItem();
      }
    }
  };

  componentDidMount() {
    document.addEventListener("keyup", this.handleGlobalKeyboardInput, false);
  }

  render() {
    const { damageParagraphsToBeRendered } = this.state;
    return (
      <div id="userInterface-battle-div">
        <div id="userInterface-player-div">
          <img
            alt="player"
            draggable="false"
            className="userInterface-player-image scale"
            src={playerImageOne}
            onClick={() => {
              this.props.playerHeal();
            }}
          />
          <div id="userInterface-player-paragraph">
            <p>
              Lv. {this.props.mainState.playerLevel}{" "}
              {this.props.mainState.playerRankCurrent}
            </p>
          </div>
          <progress
            className="battleArea-progress"
            id="battleArea-progress-playerHealth"
            max={this.props.mainState.playerHealthMax}
            value={this.props.mainState.playerHealthCurrent}
          />
          <progress
            className="battleArea-progress"
            id="battleArea-progress-playerExperience"
            max={this.props.mainState.playerExperienceRequired}
            value={this.props.mainState.playerExperienceCurrent}
          />
        </div>
        <div id="userInterface-enemy-div">
          <img
            alt="enemy"
            draggable="false"
            className={this.renderEnemyImageClass()}
            src={this.props.mainState.enemyImageCurrent}
            onClick={() => {
              this.props.playerAttack();
              this.addDamageRenderingItem();
            }}
          />
          <div id="userInterface-enemy-paragraph">
            <p>
              Lv. {this.props.mainState.enemyLevel}{" "}
              {this.props.mainState.enemyNameCurrent}
            </p>
          </div>
          <progress
            className="battleArea-progress"
            id="battleArea-progress-enemyHealth"
            max={this.props.mainState.enemyHealthMax}
            value={this.props.mainState.enemyHealthCurrent}
          />
          <div
            id="visualDamageContainer-div"
            onClick={this.addDamageRenderingItem}
          >
            {damageParagraphsToBeRendered.map(item => (
              <VisualDamage
                mainState={this.props.mainState}
                calculateClickDamageAllSources={
                  this.props.calculateClickDamageAllSources
                }
                renderNumberWithAbbreviations={
                  this.props.renderNumberWithAbbreviations
                }
                key={item.id}
                {...item}
                onDone={this.removeDamageRenderingItem}
                delay={1000}
                duration={1000}
              />
            ))}
          </div>
          <div id="userInterface-enemy-drop-div">
            {this.generateCoinDrop()}
            {this.generateFoodDrop()}
            {this.generateLootBagDrop()}
            {this.generateEquipmentDrop()}
          </div>
        </div>
      </div>
    );
  }
}

export default BattleArea;
