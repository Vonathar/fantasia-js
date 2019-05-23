import React, { Component } from "react";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
import resourceOneImage from "../img/resource_1.png";
import resourceTwoImage from "../img/resource_2.png";
import resourceThreeImage from "../img/resource_3.png";
/* [IMG] Player */
import playerImageOne from "../img/player_1.png";
import playerHealthImage from "../img/health_1.png";
import clickDamageImage from "../img/cps_1.png";
import clickPerSecondDamageImage from "../img/dps_1.png";
/* [IMG] Enemy */
import enemyImageOne from "../img/enemy_1.png";
import enemyImageTwo from "../img/enemy_2.png";
import enemyImageThree from "../img/enemy_3.png";
import enemyImageFour from "../img/enemy_4.png";
import enemyImageFive from "../img/enemy_5.png";
import enemyImageSix from "../img/enemy_6.png";
import enemyImageSeven from "../img/enemy_7.png";
import enemyImageEight from "../img/enemy_8.png";
import enemyImageNine from "../img/enemy_9.png";
import enemyImageTen from "../img/enemy_10.png";
import enemyImageEleven from "../img/enemy_11.png";
import enemyImageTwelve from "../img/enemy_12.png";
import enemyImageThirteen from "../img/enemy_13.png";
import enemyImageFourteen from "../img/enemy_14.png";
import enemyImageFifteen from "../img/enemy_15.png";
import enemyImageSixteen from "../img/enemy_16.png";
import enemyImageSeventeen from "../img/enemy_17.png";
import enemyImageEighteen from "../img/enemy_18.png";
import enemyImageNineteen from "../img/enemy_19.png";
import enemyImageTwenty from "../img/enemy_20.png";
import enemyImageTwentyone from "../img/enemy_21.png";
import enemyImageTwentytwo from "../img/enemy_22.png";
import enemyImageTwentythree from "../img/enemy_23.png";
import enemyImageTwentyfour from "../img/enemy_24.png";
import enemyImageTwentyfive from "../img/enemy_25.png";
import enemyImageTwentysix from "../img/enemy_26.png";
import enemyImageTwentyseven from "../img/enemy_27.png";
/* [IMG] Hero upgrades */
import heroUpgradeOneImage from "../img/hero_upgrade_1.png";
/* [IMG] Skills */
import skillImageOne from "../img/skill_1.png";
import skillImageTwo from "../img/skill_2.png";
import skillImageThree from "../img/skill_3.png";
import skillImageFour from "../img/skill_4.png";
import skillImageFive from "../img/skill_5.png";
/* [IMG] Weapons, gear */
import weaponImageOne from "../img/sword_1.png";

class UserInterface extends Component {
  state = {
    /* Battle log UI */
    // Introduction paragraphs
    battleLogParagraphsToBeRendered: [
      <p>
        <small>Welcome to Fantasia!</small>
      </p>,
      <p>
        <small>
          To <span className="text-danger">attack</span>, click on the enemy
          icon. You can also get help from your pets, which will deal DPS
          (Damage Per Second), even when you are away!
        </small>
      </p>,
      <p>
        <small>
          To <span className="text-success">heal</span>, click on the player
          icon. Remember, you need food to heal your character!
        </small>
      </p>,
      <p>
        <small>
          Kill monsters to <span className="text-primary">level up</span> your
          character; leveling up grants you extra HP, as well as click power.
          Reach player level 30 to find out more about rebirthing!
        </small>
      </p>,
      <p>
        <small>
          <em>
            Stay tuned for more updates, including improved Idle mode, gear,
            rebirth and more!
          </em>
        </small>
      </p>
    ],
    /* Stage settings */
    stageCurrent: 1,
    stageEnemiesKilled: 0,
    stageEnemiesToKill: 3,
    stageMaxUnlocked: 1,
    isStageProgressAuto: false,
    /* Player values */
    playerLevel: 1,
    playerHealthCurrent: 50,
    playerHealthMax: 50,
    playerExperienceCurrent: 0,
    playerExperienceRequired: 10,
    playerAttack: 1,
    playerAttackMultiplier: 1,
    playerAttackPerSecond: 1,
    /* Pet values */
    petOneBasicPrice: 5,
    petOneUpgradeLevel: 1,
    petOneUpgradePrice: 5,
    petOneDamagePerSecondBase: 1,
    petOneDamagePerSecondCurrent: 1,
    /* Enemy values */
    enemyImages: [
      enemyImageOne,
      enemyImageTwo,
      enemyImageThree,
      enemyImageFour,
      enemyImageFive,
      enemyImageSix,
      enemyImageSeven,
      enemyImageEight,
      enemyImageNine,
      enemyImageTen,
      enemyImageEleven,
      enemyImageTwelve,
      enemyImageThirteen,
      enemyImageFourteen,
      enemyImageFifteen,
      enemyImageSixteen,
      enemyImageSeventeen,
      enemyImageEighteen,
      enemyImageNineteen,
      enemyImageTwenty,
      enemyImageTwentyone,
      enemyImageTwentytwo,
      enemyImageTwentythree,
      enemyImageTwentyfour,
      enemyImageTwentyfive,
      enemyImageTwentysix,
      enemyImageTwentyseven
    ],
    enemyImageCurrent: enemyImageOne,
    enemyNames: [
      "Bat",
      "Wolf",
      "Snake",
      "Beetle",
      "Worm",
      "Plant",
      "Mushroom",
      "Tear",
      "Ghost",
      "Minion",
      "Wolf",
      "Lizard",
      "Phantom",
      "Cyclop",
      "Gryph",
      "Wiz",
      "Spider",
      "Scorpion",
      "Cloud",
      "Egg",
      "Sheep",
      "Chest",
      "Golem",
      "Mouse",
      "Chicken",
      "Halloweeno",
      "Devil"
    ],
    enemyNameCurrent: "Bat",
    enemyLevel: 1,
    enemyIsBoss: false,
    enemyHasHealth: true,
    enemyHealthCurrent: 20,
    enemyHealthMax: 20,
    enemyExperienceHeld: 3,
    enemyCoinsHeld: 2,
    enemyCoinsValue: 1,
    enemyFoodHeld: 1,
    enemyFoodValue: 1,
    enemyAttack: 1,
    /* Upgrade values */
    upgradeHeroClickDamageLevel: 1,
    upgradeHeroClickDamagePrice: 5,
    /* Inventory values */
    coins: 0,
    coinsToBeCollected: 0,
    isCoinCollected: false,
    relics: 0,
    lootBags: 0,
    food: 0,
    foodToBeCollected: 0,
    isFoodCollected: false,
    /* Left menu values */
    leftMenuSettingSelected: "Hero",
    /* Value placeholders 
       (used when temporarily setting a value to a different one) */
    enemyAttackPlaceholder: 2,
    enemyHealthCurrentPlaceholder: 20,
    enemyHealthMaxPlaceholder: 20,
    playerAttackPlaceholder: 1,
    playerAttackPerSecondPlaceholder: 1,
    /* Global game settings */
    enemyAttackInterval: setInterval(() => {
      this.enemyAttack();
    }, 1000),
    playerAttackInterval: setInterval(() => {
      this.playerAttackPerSecond();
    }, 1000)
  };

  /* Battle Log UI*/
  // Add a paragraph to the box in the bottom-right of the screen
  pushNewParagraphToBattleLog = newParagraph => {
    let newParagraphList = this.state.battleLogParagraphsToBeRendered;
    newParagraphList.unshift(newParagraph);
    this.setState({
      renderParagraphToBattleLog: newParagraphList
    });
  };

  /* Upgrades UI */
  heroUpgradeLevelUp = upgradeName => {
    // Upgrade click
    if (upgradeName === "clickDamage") {
      // If the player has enough coins to buy the upgrade
      if (this.state.coins >= this.state.upgradeHeroClickDamagePrice) {
        this.setState({
          // Take off the money from the player
          coins: this.state.coins - this.state.upgradeHeroClickDamagePrice,
          // Increase the level of the skill
          upgradeHeroClickDamageLevel:
            this.state.upgradeHeroClickDamageLevel + 1,
          // Increase the price for the next purchase
          upgradeHeroClickDamagePrice: Math.round(
            this.state.petOneBasicPrice *
              Math.pow(1.07, this.state.upgradeHeroClickDamageLevel)
          ),
          // Increase the click damage by 1
          playerAttack: this.state.playerAttack + 1,
          playerAttackPlaceholder: this.state.playerAttackPlaceholder + 1
        });
      }
    }
  };

  // Render the button classes based on whether the user has enough money to buy the upgrade
  renderUpgradeButtonClasses = upgradeName => {
    // Click damage upgrade
    if (upgradeName === "clickDamage") {
      // If the player has enough money to buy the upgrade
      if (this.state.coins >= this.state.upgradeHeroClickDamagePrice) {
        return "userInterface-upgrades-upgrade-button btn btn-dark mx-auto";
      } else {
        // If the player does not have enough money to buy the upgrade
        return "userInterface-upgrades-upgrade-button-disabled btn btn-dark mx-auto";
      }
    }
  };

  /* Pets UI */
  petLevelUpgrade = petNumber => {
    // For the first pet
    if (petNumber === 1) {
      // If the coins are enough to buy the upgrade
      if (this.state.coins >= this.state.petOneUpgradePrice) {
        this.setState({
          // Take off the coins from the user
          coins: this.state.coins - this.state.petOneUpgradePrice,
          // Increase the level by one
          petOneUpgradeLevel: this.state.petOneUpgradeLevel + 1,
          // Increase the price for the next upgrade
          petOneUpgradePrice:
            this.state.petOneUpgradePrice +
            Math.round(Math.pow(1.06, this.state.petOneUpgradeLevel)),
          // Increase the DPS of the upgraded pet
          petOneDamagePerSecondCurrent:
            this.state.petOneDamagePerSecondCurrent +
            Math.round(Math.pow(1.05, this.state.petOneUpgradeLevel))
        });
      }
    }
  };

  // Render the button classes based on whether the user has enough money to buy the upgrade
  renderPetButtonClass = petNumber => {
    // For the first pet
    if (petNumber === 1) {
      // If the user has enough money
      if (this.state.coins >= this.state.petOneUpgradePrice) {
        return "userInterface-pets-pet-button btn btn-dark mx-auto";
      } else {
        // If the user does not have enough money
        return "userInterface-pets-pet-button-disabled btn btn-dark mx-auto";
      }
    }
  };

  // Sum of all the DPS sources
  calculateTotalDamagePerSecond = () => {
    return this.state.petOneDamagePerSecondCurrent;
  };

  // Sum of all the DPS sources
  calculateTotalClickDamage = () => {
    return (
      this.state.playerAttackPlaceholder * this.state.playerAttackMultiplier
    );
  };

  /* Player UI */
  // Player stage progress
  playerStageProgress = () => {
    // If the stage is not completed yet
    if (this.state.stageEnemiesKilled < this.state.stageEnemiesToKill) {
      // Add a kill to the counter
      this.setState({ stageEnemiesKilled: this.state.stageEnemiesKilled + 1 });
    }
    if (
      // If the stage is completed
      this.state.stageEnemiesKilled >= this.state.stageEnemiesToKill &&
      // And the current stage is also the highest unlocked
      this.state.stageCurrent === this.state.stageMaxUnlocked
    ) {
      // Let the player advance to the next stage
      this.setState({ stageMaxUnlocked: this.state.stageMaxUnlocked + 1 });
      // And add a paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small className="text-success">
            You unlocked stage {this.state.stageMaxUnlocked}!
          </small>
        </p>
      );
      // If the player activated automatic stage progression
      if (this.state.isStageProgressAuto) {
        // Go to the next stage
        this.playerStageAdvance();
      }
    }
  };

  // Player stage select
  playerStageAdvance = () => {
    // If the next stage is unlocked
    if (this.state.stageMaxUnlocked > this.state.stageCurrent) {
      this.setState({
        // Go on to the next stage
        stageCurrent: this.state.stageMaxUnlocked,
        // Reset the kill counter
        stageEnemiesKilled: 0
      });
    }
  };

  // Toggle the automatic stage progression
  activateAutoStageAdvance = event => {
    this.setState({
      isStageProgressAuto: event.target.checked
    });
  };

  // Change the style of the stage icon based on whether is is unlocked or not
  renderStageUnlockedBadge = stageNumber => {
    // Classes shared by all buttons
    let buttonClasses = "btn btn-dark userInterface-stages-button mx-auto ";
    // The current stage
    if (stageNumber === this.state.stageCurrent) {
      buttonClasses += "userInterface-stages-button-selected";
      // Next stage, when unlocked
    } else if (stageNumber <= this.state.stageMaxUnlocked) {
      buttonClasses += "userInterface-stages-unlocked";
    }
    return buttonClasses;
  };

  // Player HP progress bar
  renderPlayerProgressHp = () => {
    // Obtain the player health in percentage
    let playerHealthPercentage = Math.round(
      this.state.playerHealthCurrent * (100 / this.state.playerHealthMax)
    );
    // Set the bar's width according to the percentage of health remaining
    return (
      "progress-bar bg-danger progress-bar-striped progress-bar-animated progress" +
      playerHealthPercentage.toString()
    );
  };

  // Player XP progress bar
  renderPlayerProgressXp = () => {
    // Obtain the player experience in percentage
    let playerExperiencePercentage = Math.round(
      this.state.playerExperienceCurrent *
        (100 / this.state.playerExperienceRequired)
    );
    // Set the bar's width according to the percentage of experience
    return (
      "progress-bar bg-success progress-bar-striped progress-bar-animated progress" +
      playerExperiencePercentage.toString()
    );
  };

  // Level up the player
  playerLevelUp = () => {
    this.setState({
      // Increase the player level by 1
      playerLevel: this.state.playerLevel + 1,
      // Add the leftover experience from the last level up
      playerExperienceCurrent:
        this.state.playerExperienceCurrent -
        this.state.playerExperienceRequired,
      // Raise the experience required for the next level
      playerExperienceRequired:
        this.state.playerExperienceRequired *
        Math.pow(1.07, this.state.playerLevel),
      playerHealthMax: Math.round(50 * Math.pow(1.1, this.state.playerLevel))
    });

    // Add a level up paragraph to the Battle Log
    this.pushNewParagraphToBattleLog(
      <p>
        <small className="text-primary">Level up!</small>
      </p>
    );
  };

  // Attack the enemy
  playerAttack = () => {
    // If the enemy is not in the process of respawning
    if (this.state.playerAttack !== 0) {
      this.setState({
        // Remove the player damage from the enemy's health
        enemyHealthCurrent:
          this.state.enemyHealthCurrent - this.state.playerAttack
      });
      if (
        // When enemy is dead
        this.state.enemyHealthCurrent <= 1 &&
        // When XP has not already been given
        this.state.enemyHasHealth !== false
      ) {
        this.setState({
          // Trigger enemy death animation
          enemyHasHealth: false,
          // Add experience to the player
          playerExperienceCurrent:
            this.state.playerExperienceCurrent + this.state.enemyExperienceHeld,
          // Drop coins on the ground
          coinsToBeCollected:
            this.state.coinsToBeCollected +
            // The amount of coins the enemy normally holds +/- 50%
            Math.round(this.state.enemyCoinsHeld * (Math.random() * 1 + 1)),
          // Drop food on the ground
          foodToBeCollected:
            this.state.foodToBeCollected +
            // The amount of food the enemy normally holds / -50%
            Math.floor(
              this.state.enemyFoodHeld * Math.round(Math.random() * 1)
            ),
          // Block the player from attacking while the enemy is respawning
          playerAttack: 0,
          playerAttackPerSecond: 0
        });

        // Add a 'enemy killed, XP received' paragraph to the Battle Log
        this.pushNewParagraphToBattleLog(
          <p>
            <small>
              You killed {this.state.enemyNameCurrent} and received{" "}
              <span className="text-success">
                {this.state.enemyExperienceHeld} XP
              </span>
              !
            </small>
          </p>
        );

        setTimeout(() => {
          // Generate a new enemy
          this.generateNewEnemy(
            // Enemy level is the same as current stage /+ 1
            Math.round(this.state.stageCurrent + Math.random())
          );
          // Update the player stage, if applicable
          this.playerStageProgress();
          // Set the player attack and DPS back to the origin values
          this.setState({
            playerAttack: this.state.playerAttackPlaceholder,
            playerAttackPerSecond: this.state.playerAttackPerSecondPlaceholder
          });
          // After 1 second
        }, 1000);
      }
    }
  };

  // Heal the player using food
  playerHeal = () => {
    if (
      // The player's health is not already max
      this.state.playerHealthCurrent < this.state.playerHealthMax &&
      // The player has food
      this.state.food > 0
    ) {
      this.setState({
        // Remove 1 food from the player
        food: this.state.food - 1,
        // Increase the health by 25% of the max
        playerHealthCurrent:
          this.state.playerHealthCurrent +
          (this.state.playerHealthMax / 100) * 25
      });
      // Add a 'HP increased' paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>
            Player gains{" "}
            <span className="text-success">
              {Math.round(this.state.playerHealthMax / 100) * 10} HP
            </span>
            !
          </small>
        </p>
      );
    }
  };

  // DPS (Damage Per Second)
  playerAttackPerSecond = () => {
    // If the enemy is not respawning
    if (this.state.playerAttackPerSecond !== 0) {
      this.setState({
        // Damage the enemy by the amount of player DPS
        enemyHealthCurrent:
          this.state.enemyHealthCurrent - this.calculateTotalDamagePerSecond()
      });
      if (
        // If enemy is dead
        this.state.enemyHealthCurrent <= 1 &&
        // If XP has not already been given
        this.state.enemyHasHealth !== false
      ) {
        this.setState({
          // Trigger enemy death animation
          enemyHasHealth: false,
          // Add experience to the player
          playerExperienceCurrent:
            this.state.playerExperienceCurrent + this.state.enemyExperienceHeld,
          // Drop coins on the ground
          coinsToBeCollected:
            this.state.coinsToBeCollected +
            // The amount of coins the enemy normally holds +/- 50%
            Math.floor(this.state.enemyCoinsHeld * (Math.random() * 2 + 1)),
          // Drop food on the ground
          foodToBeCollected:
            this.state.foodToBeCollected +
            // The amount of food the enemy normally holds
            Math.floor(this.state.enemyFoodHeld * (Math.random() * 1 + 1)),
          // Block the player from attacking while the enemy is respawning
          playerAttackPerSecond: 0,
          playerAttack: 0
        });

        // Add a 'enemy killed, XP received' paragraph to the Battle Log
        this.pushNewParagraphToBattleLog(
          <p>
            <small>
              You killed {this.state.enemyNameCurrent} and received{" "}
              <span className="text-success">
                {Math.round(this.state.enemyExperienceHeld)} XP
              </span>
              !
            </small>
          </p>
        );

        setTimeout(() => {
          // Generate a new enemy
          this.generateNewEnemy(
            this.state.stageCurrent + Math.round(Math.random() * 5)
          );
          // Update the player stage, if applicable
          this.playerStageProgress();
          // Set the value of the attack back to the original value
          this.setState({
            playerAttack: this.state.playerAttackPlaceholder,
            playerAttackPerSecond: this.state.playerAttackPerSecondPlaceholder
          });
          // After 1 second
        }, 1000);
      }
    }
  };

  /* Enemy UI */
  // Enemy attack
  enemyAttack = () => {
    // If the enemy is alive and not in the process of respawning
    if (this.state.enemyHasHealth) {
      this.setState({
        // Remove the value of the enemy attack from the player's health
        playerHealthCurrent:
          this.state.playerHealthCurrent - this.state.enemyAttack
      });
      // If the player is dead
      if (this.state.playerHealthCurrent <= 0) {
        // Render a paragraph to the Battle Log saying that the player is dead
        this.pushNewParagraphToBattleLog(
          <p>
            <small className="text-danger">You died!</small>
          </p>
        );
        // Spawn a new enemy
        this.generateNewEnemy(
          this.state.stageCurrent + Math.round(Math.random() * 2)
        );
      }
    }
  };

  // Create a new random enemy type from the ones available
  generateRandomEnemyIdentity = () => {
    // If the enemy is a normal field enemy, and not a boss
    if (!this.state.enemyIsBoss) {
      // Generate a random number between 0 and 19
      let randomNumber = Math.round(Math.random() * 26);
      this.setState({
        // And use the random number to get a new random enemy (image and name)
        enemyImageCurrent: this.state.enemyImages[randomNumber],
        enemyNameCurrent: this.state.enemyNames[randomNumber]
      });
    }
  };

  /* Create a new enemy with the generateNewEnemy() function.
     The parameter 'level' is used to generate values which are balanced all-over 
  */
  generateNewEnemy = level => {
    if (
      // If the player has enough experience to level up
      this.state.playerExperienceCurrent >= this.state.playerExperienceRequired
    ) {
      // Level up the player
      this.playerLevelUp();
    }
    // Create a new identity for the next enemy
    this.generateRandomEnemyIdentity();
    this.setState({
      // Reinitialise the values of the new enemy
      enemyHasHealth: true,
      enemyLevel: level,
      enemyExperienceHeld: 3 * Math.pow(1.5, level),
      enemyHealthCurrent:
        this.state.enemyHealthMaxPlaceholder * Math.pow(level, 1.2),
      enemyHealthMax:
        this.state.enemyHealthMaxPlaceholder * Math.pow(level, 1.2),
      enemyAttack: this.state.enemyAttackPlaceholder * Math.pow(level, 1.1),
      enemyCoinsValue: Math.round(1 * Math.pow(level, 1.1)),
      // Reinitialise the values of the player
      playerHealthCurrent: this.state.playerHealthMax
    });
  };

  // Enemy HP progress bar
  renderEnemyProgressHp = () => {
    // Obtain the player experience in percentage
    let enemyHealthPercentage = Math.round(
      this.state.enemyHealthCurrent * (100 / this.state.enemyHealthMax)
    );
    // Set the bar's width according to the percentage of health remaining
    return (
      "progress-bar bg-danger progress-bar-striped progress-bar-animated progress" +
      enemyHealthPercentage.toString()
    );
  };

  // Animate the enemy's image between active and dead
  renderEnemyImageClass = () => {
    // If the enemy is alive
    if (this.state.enemyHasHealth) {
      // Animate it on hover and on click
      return "userInterface-enemy-image scale scale-click";
      // If the enemy is dead
    } else {
      // Animate it's death
      return "userInterface-enemy-image userInterface-enemy-image-dead";
    }
  };

  /* Enemy drops UI 

     Drops are added to the inventory in the following order:
      1. generateXxxDrop()
      2. renderXxxDrop()
      3. collectXxxOnHover()

      1) generateXxxDrop()
          Whenever an enemy is killed, he drops items which are added to xxxToBeCollected[] array in the state.
          This function renders an image JSX element for each item found in the xxxToBeCollected[] array.
          The CLASSNAME of each image is rendered by the function renderXxxDrop().
          The ONMOUSEOVER of each image is linked to the function collectXxxOnHover().
  
      2) renderXxxDrop()
          Whenever generateXxxDrop renders a new JSX image element, this function gives the dropped item the class 'xxx-appear',
          which gives the class an animation effect (fall from the enemy and fall to the bottom of the holding div).
          If the item is collected by calling the function collectXxxOnHover(), the class given by renderXxxDrop() is 'xxx-collect',
          which gives the class an animation effect (enlarge then shrink - then move the collected item towards the inventory)

      3) collectXxxOnHover()
          Whenever this function is called (by hovering over the dropped item), renderXxxDrop() is triggered by changing the state's 
          value of the boolean isXxxCollected; when this value is set to true, renderXxxDrop() will change the class name from 
          'xxx-appear' to 'xxx-collect', which causes the animation to change.
          Once the animation in triggered, the function waits 1000ms (which is the time the animation takes to complete), and then
          adds the collected item to the inventory

  */
  // Drop new coins on the floor
  renderCoinDrop = () => {
    // If the coins have not already been collected
    if (!this.state.isCoinCollected) {
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
    if (!this.state.isFoodCollected) {
      // Animate them so that they drop down from the enemy image
      return "userInterface-enemy-drop-food userInterface-enemy-drop-food-appear";
    } else {
      // Animate them so that they move towards the inventory
      return "userInterface-enemy-drop-food userInterface-enemy-drop-food-collect";
    }
  };

  // Add coins to the inventory
  collectCoinsOnHover = event => {
    // Trigger the animation from renderCoinDrop()
    this.setState({ isCoinCollected: true });
    // Wait 1 second for the animation to be over
    setTimeout(() => {
      this.setState({
        // Add the collected coins to the coins held in the inventory
        coins:
          this.state.coins +
          this.state.coinsToBeCollected * this.state.enemyCoinsValue,
        // Remove the coins from the ground
        coinsToBeCollected: 0,
        // Prevent coins spawned after to also be animated
        isCoinCollected: false
      });
    }, 1000);
  };

  // Add food to the inventory
  collectFoodOnHover = event => {
    // Trigger the animation from renderFoodDrop()
    this.setState({ isFoodCollected: true });
    // Wait 1 second for the animation to be over
    setTimeout(() => {
      this.setState({
        // Add the collected food to the food held in the inventory
        food:
          this.state.food +
          this.state.foodToBeCollected * this.state.enemyFoodValue,
        // Remove the food from the ground
        foodToBeCollected: 0,
        // Prevent food spawned after to also be animated
        isFoodCollected: false
      });
    }, 1000);
  };

  // Create new coins dropped
  generateCoinDrop = () => {
    let coinsToBeRendered = [];
    // All the coins which have not been collected yet (by hovering)
    for (let i = 0; i < this.state.coinsToBeCollected; i++) {
      // Add a new coin
      coinsToBeRendered.push(
        <img
          alt="coin"
          className={this.renderCoinDrop()}
          src={coinImageOne}
          onMouseOver={this.collectCoinsOnHover}
        />
      );
    }
    return coinsToBeRendered;
  };

  // Create new food dropped
  generateFoodDrop = () => {
    let foodToBeRendered = [];
    // All the food which has not been collected yet (by hovering)
    for (let i = 0; i < this.state.foodToBeCollected; i++) {
      // Add a new food
      foodToBeRendered.push(
        <img
          alt="food"
          className={this.renderFoodDrop()}
          src={resourceThreeImage}
          onMouseOver={this.collectFoodOnHover}
        />
      );
    }
    return foodToBeRendered;
  };

  /* Inventory UI*/
  fetchLeftMenuSettingSelection = event => {
    this.setState({ leftMenuSettingSelected: event.target.textContent });
  };

  // Render the left menu based on the value returned by fetchLeftMenuSettingSelection
  renderLeftMenuSettingSelection = () => {
    // Hero tab selected
    if (this.state.leftMenuSettingSelected === "Hero") {
      return (
        <div id="userInterface-upgrades-div">
          <p>
            <strong>Hero upgrades</strong>
          </p>
          <div className="userInterface-upgrades-upgrade-div">
            <div className="userInterface-upgrades-upgrade-div-holder mx-auto">
              <img
                alt="Upgrade one"
                src={heroUpgradeOneImage}
                className="userInterface-upgrades-upgrade-image mx-auto"
              />
              <small className="userInterface-upgrades-upgrade-name">
                Click DMG
              </small>
              <small className="userInterface-upgrades-upgrade-level">
                Lv. {this.state.upgradeHeroClickDamageLevel}
              </small>
            </div>
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img alt="click damage" src={clickDamageImage} />
              +1
            </small>
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.state.upgradeHeroClickDamagePrice.toLocaleString()}
              <img
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
            <button
              type="button"
              class={this.renderUpgradeButtonClasses("clickDamage")}
              onClick={() => {
                this.heroUpgradeLevelUp("clickDamage");
              }}
            >
              +
            </button>
          </div>
        </div>
      );
    }
    // Idle tab selected
    if (this.state.leftMenuSettingSelected === "Idle") {
      return (
        <div
          id="userInterface-idle-div"
          data-toggle="tooltip"
          title="The idle interface is currently a work in progress!"
          data-placement="top"
        >
          <p>
            <strong>Idle Settings</strong>
          </p>
          <small className="userInterface-idle-category">Time</small>
          <p>Work in progress.</p>
          <small className="userInterface-idle-category">Enemy</small>
          <p>Work in progress.</p>
          <small className="userInterface-idle-category">Item</small>
          <p>Work in progress.</p>
          <small className="userInterface-idle-category">Food</small>
          <p>Work in progress.</p>
          <small>
            Going 'idle' allows you to earn 3 times more money than the standard
            passive mode. When you activate 'idle' mode, you will not be allowed
            to perform action until the time is over.
          </small>
        </div>
      );
    }
    // Pets tab selected
    if (this.state.leftMenuSettingSelected === "Pets") {
      return (
        <div id="userInterface-pets-div">
          <p>
            <strong>Pets upgrades</strong>
          </p>
          <div className="userInterface-pets-pet-div">
            <div className="userInterface-pets-pet-div-holder">
              <img
                alt="pet"
                src={enemyImageTwo}
                className="userInterface-pets-pet-image"
              />
              <small className="userInterface-pets-pet-name">
                Lv. {this.state.petOneUpgradeLevel}
              </small>
            </div>
            <small className="userInterface-pets-pet-dps mx-auto">
              <img alt="click per second" src={clickPerSecondDamageImage} />
              {this.state.petOneDamagePerSecondCurrent}
            </small>
            <small className="userInterface-pets-pet-price mx-auto">
              {this.state.petOneUpgradePrice}
              <img
                alt="coin"
                className="userInterface-pets-pet-price-image"
                src={coinImageOne}
              />
            </small>
            <button
              type="button"
              class={this.renderPetButtonClass(1)}
              onClick={() => {
                this.petLevelUpgrade(1);
              }}
            >
              +
            </button>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div id="userInterface-div">
        <h1 id="userInterface-h1">Fantasia</h1>
        {/* Resources [ TOP ] */}
        <div id="userInterface-resources-div">
          <div
            className="userInterface-resource-div mx-auto"
            id="userInterface-resourceOne-div"
          >
            <img
              alt="relics"
              className="userInterface-resources-image scale"
              data-toggle="tooltip"
              title="Relics are obtained randomly by killing enemies; use them to buy special upgrades!"
              data-placement="top"
              src={resourceOneImage}
            />
            <p>{this.state.relics}</p>
          </div>
          <div
            className="userInterface-resource-div mx-auto"
            id="userInterface-resourceTwo-div"
          >
            <img
              alt="Lootbags"
              className="userInterface-resources-image scale"
              src={resourceTwoImage}
              data-toggle="tooltip"
              title="Loot bags are obtained randomly by killing enemies; use them to obtain coins, upgrades and more!"
              data-placement="top"
            />
            <p>{this.state.lootBags}</p>
          </div>
          <div
            className="userInterface-resource-div mx-auto"
            id="userInterface-resourceThree-div"
          >
            <img
              alt="food"
              className="userInterface-resources-image scale"
              src={resourceThreeImage}
              data-toggle="tooltip"
              title="Food is used to heal your character (10% of total HP)."
              data-placement="top"
            />
            <p>{this.state.food}</p>
          </div>
        </div>

        {/* Player summary [ TOP ] */}
        <div id="userInterface-topSummary-div">
          <div className="userInterface-topSummary-section">
            <img
              alt="click damage"
              className="userInterface-topSummary-section-image mx-auto"
              src={clickDamageImage}
            />
            <small className="userInterface-topSummary-section-paragraph mx-auto">
              {this.calculateTotalClickDamage()}
            </small>
          </div>
          <div className="userInterface-topSummary-section">
            <img
              alt="click per second"
              className="userInterface-topSummary-section-image mx-auto"
              src={clickPerSecondDamageImage}
            />
            <small className="userInterface-topSummary-section-paragraph mx-auto">
              {this.calculateTotalDamagePerSecond().toLocaleString()}
            </small>
          </div>
          <div className="userInterface-topSummary-section">
            <img
              alt="player health"
              className="userInterface-topSummary-section-image mx-auto"
              src={playerHealthImage}
            />
            <small className="userInterface-topSummary-section-paragraph mx-auto">
              {this.state.playerHealthMax.toLocaleString()}
            </small>
          </div>
        </div>

        {/* Settings selection [ LEFT ] */}
        <div id="userInterface-userSettings-div">
          <div id="userInterface-userSettings-menu-div">
            <div id="userInterface-userSettings-menu-holder">
              <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                <button
                  type="button"
                  class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                  onClick={this.fetchLeftMenuSettingSelection}
                >
                  <small>Hero</small>
                </button>
              </div>
              <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                <button
                  type="button"
                  class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                  onClick={this.fetchLeftMenuSettingSelection}
                >
                  <small>Pets</small>
                </button>
              </div>
              <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                <button
                  type="button"
                  class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                  onClick={this.fetchLeftMenuSettingSelection}
                >
                  <small>Idle</small>
                </button>
              </div>
            </div>
            {this.renderLeftMenuSettingSelection()}
          </div>

          {/* Inventory [ LEFT ] */}
          <div id="userInterface-inventory-div">
            <p>
              <strong>Inventory</strong>
            </p>
            <div
              id="userInterface-inventory-row1"
              className="userInterface-inventory-row"
            >
              <img
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
                alt="coin"
                className="mx-auto scale"
                id="userInterface-inventory-money-img"
                src={coinImageOne}
              />
              <p
                className="mx-auto"
                id="userInterface-inventory-money-paragraph"
              >
                {this.state.coins}
              </p>
            </div>
          </div>
          {/* Battle Log [ BOTTOM/RIGHT ] */}
          <div id="userInterface-chatlog-div">
            <p>
              <strong>Battle log</strong>
            </p>
            <div id="userInterface-chatlog-div-paragraphs">
              {this.state.battleLogParagraphsToBeRendered}
            </div>
          </div>
        </div>
        {/* Stages [ TOP ] */}
        <div id="userInterface-stages-div">
          <div id="userInterface-stages-stage">
            <button
              className={this.renderStageUnlockedBadge(this.state.stageCurrent)}
            >
              <small>{this.state.stageCurrent}</small>
            </button>
            <button
              className={this.renderStageUnlockedBadge(
                this.state.stageCurrent + 1
              )}
              onClick={this.playerStageAdvance}
            >
              <small>{this.state.stageCurrent + 1}</small>
            </button>
            <button
              className={this.renderStageUnlockedBadge(
                this.state.stageCurrent + 2
              )}
            >
              <small>{this.state.stageCurrent + 2}</small>
            </button>
            <button
              className={this.renderStageUnlockedBadge(
                this.state.stageCurrent + 3
              )}
            >
              <small>{this.state.stageCurrent + 3}</small>
            </button>
            <button
              className={this.renderStageUnlockedBadge(
                this.state.stageCurrent + 4
              )}
            >
              <small>{this.state.stageCurrent + 4}</small>
            </button>
          </div>
          <div id="userInterface-stages-stage-pragraph">
            <small>
              Kills for next stage: {this.state.stageEnemiesKilled}/
              {this.state.stageEnemiesToKill}
            </small>
          </div>
          <div class="form-check" id="userInterface-stages-stage-checkbox-div">
            <input
              class="form-check-input"
              type="checkbox"
              id="userInterface-stages-stage-checkbox"
              onClick={this.activateAutoStageAdvance}
            />
            <label
              class="form-check-label"
              for="userInterface-stages-stage-checkbox"
            >
              <small>Auto progress</small>
            </label>
          </div>
        </div>
        {/* Battle [ MIDDLE ] */}
        <div id="userInterface-battle-div">
          <div id="userInterface-player-div">
            <img
              alt="player"
              className="userInterface-player-image scale"
              src={playerImageOne}
              onClick={this.playerHeal}
            />
            <div id="userInterface-player-paragraph">
              <p>Player Lv. {this.state.playerLevel}</p>
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
              className={this.renderEnemyImageClass()}
              src={this.state.enemyImageCurrent}
              onClick={this.playerAttack}
            />
            <div id="userInterface-enemy-paragraph">
              <p>
                {this.state.enemyNameCurrent} Lv. {this.state.enemyLevel}
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
            </div>
          </div>
        </div>

        {/* Skills [ BOTTOM ] */}
        <div id="userInterface-skills-div">
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              alt="skill 1"
              className="userInterface-skills-skill-img scale"
              src={skillImageOne}
              data-toggle="tooltip"
              title="Skills are coming soon!"
              data-placement="top"
            />
          </div>
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              alt="skill 2"
              className="userInterface-skills-skill-img scale"
              src={skillImageTwo}
              data-toggle="tooltip"
              title="Skills are coming soon!"
              data-placement="top"
            />
          </div>
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              alt="skill 3"
              className="userInterface-skills-skill-img scale"
              src={skillImageThree}
              data-toggle="tooltip"
              title="Skills are coming soon!"
              data-placement="top"
            />
          </div>
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              alt="skill 4"
              className="userInterface-skills-skill-img scale"
              src={skillImageFour}
              data-toggle="tooltip"
              title="Skills are coming soon!"
              data-placement="top"
            />
          </div>
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              alt="skill 5"
              className="userInterface-skills-skill-img scale"
              src={skillImageFive}
              data-toggle="tooltip"
              title="Skills are coming soon!"
              data-placement="top"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default UserInterface;
