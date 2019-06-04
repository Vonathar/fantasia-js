import React, { Component } from "react";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";
import resourceOneImage from "../img/resource_1.png";
import resourceTwoImage from "../img/resource_2.png";
import resourceThreeImage from "../img/resource_3.png";
import achievementPointImage from "../img/achievement_1.png";
/* [IMG] Player */
import playerImageOne from "../img/player_1.png";
import playerHealthImage from "../img/health_1.png";
import doubleAttackImage from "../img/doubleAttack_1.png";
import criticalMultiplierImage from "../img/critical_1.png";
import criticalChanceImage from "../img/critical_2.png";
import clickDamageImage from "../img/cps_1.png";
import clickPerSecondDamageImage from "../img/dps_1.png";
/* [IMG] Boss */
import bossImageOne from "../img/boss_1.png";
import bossImageTwo from "../img/boss_2.png";
import bossImageThree from "../img/boss_3.png";
/* [IMG] Backgrounds */
import backgroundImageOne from "../img/background_1.jpg";
import backgroundImageTwo from "../img/background_2.jpg";
import backgroundImageThree from "../img/background_3.jpg";
import backgroundImageFour from "../img/background_4.jpg";
import backgroundImageFive from "../img/background_5.jpg";
import backgroundImageSix from "../img/background_6.jpg";

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
          icon or press the keys W / E on your keyboard. You can also get help
          from your pets, which will deal DPS (Damage Per Second), even when you
          are away!
        </small>
      </p>,
      <p>
        <small>
          To <span className="text-success">heal</span>, click on the player
          icon. Remember, you need potions to heal your character!
        </small>
      </p>,
      <p>
        <small>
          Kill monsters to <span className="text-primary">level up</span> your
          character; leveling up grants you extra HP, as well as click power.
          Reach player level 70 to find out more about rebirthing!
        </small>
      </p>,
      <p>
        <small className="text-info">
          ** Press [D] to enable Debug Mode **
        </small>
      </p>
    ],
    /* Global settings */
    isDebugModeActive: false,
    backgroundImageCurrent: backgroundImageTwo,
    backgroundImages: [
      backgroundImageOne,
      backgroundImageTwo,
      backgroundImageThree,
      backgroundImageFour,
      backgroundImageFive,
      backgroundImageSix
    ],
    /* Stats values */
    totalPlayerAttacks: 0,
    totalSkillsUsed: 0,
    totalPlayerDamageDealt: 0,
    totalPetDamageDealt: 0,
    totalPlayerDeaths: 0,
    totalEnemiesKilled: 0,
    totalTimesHealed: 0,
    totalMoneySpent: 0,
    totalMoneyEarned: 0,
    /* Quests values */
    quests: {
      playerAttacks: {
        adventurePointsHeld: 5,
        timesAchieved: 0,
        nextRequired: 50,
        required: [
          50,
          500,
          2500,
          10000,
          25000,
          50000,
          75000,
          100000,
          150000,
          200000,
          500000,
          1000000
        ]
      },
      skillsUsed: {
        adventurePointsHeld: 5,
        timesAchieved: 0,
        nextRequired: 5,
        required: [
          5,
          50,
          250,
          500,
          1000,
          2000,
          5000,
          10000,
          20000,
          50000,
          100000,
          150000,
          200000
        ]
      },
      playerDamageDealt: {
        adventurePointsHeld: 5,
        timesAchieved: 0,
        nextRequired: 1000,
        required: [
          1000,
          5000,
          50000,
          250000,
          1000000,
          2500000,
          5000000,
          7500000,
          10000000,
          15000000,
          20000000,
          35000000,
          50000000,
          100000000,
          250000000,
          500000000
        ]
      },
      petDamageDealt: {
        adventurePointsHeld: 5,
        timesAchieved: 0,
        nextRequired: 500,
        required: [
          500,
          5000,
          50000,
          250000,
          1000000,
          2500000,
          5000000,
          7500000,
          10000000,
          15000000,
          20000000,
          50000000,
          100000000,
          250000000,
          500000000
        ]
      },
      enemiesKilled: {
        adventurePointsHeld: 5,
        timesAchieved: 0,
        nextRequired: 5,
        required: [
          5,
          50,
          250,
          500,
          1000,
          2000,
          5000,
          10000,
          20000,
          50000,
          100000,
          200000,
          350000,
          500000,
          1000000
        ]
      },
      stageUnlocked: {
        adventurePointsHeld: 5,
        timesAchieved: 0,
        nextRequired: 5,
        required: [
          5,
          10,
          20,
          30,
          40,
          50,
          70,
          100,
          150,
          200,
          250,
          300,
          350,
          400,
          450,
          500,
          550,
          600,
          650,
          700,
          750,
          800
        ]
      },
      timesHealed: {
        adventurePointsHeld: 5,
        timesAchieved: 0,
        nextRequired: 5,
        required: [
          5,
          50,
          250,
          500,
          1000,
          2000,
          5000,
          10000,
          20000,
          50000,
          100000,
          150000,
          200000,
          250000,
          350000,
          500000
        ]
      },
      moneyEarned: {
        adventurePointsHeld: 5,
        timesAchieved: 0,
        nextRequired: 1000,
        required: [
          1000,
          5000,
          50000,
          250000,
          1000000,
          2500000,
          5000000,
          7500000,
          10000000,
          15000000,
          20000000,
          50000000,
          100000000,
          250000000,
          500000000,
          1200000000,
          2500000000
        ]
      }
    },

    /* Stage settings */
    stageCurrent: 1,
    stageEnemiesKilled: 0,
    stageEnemiesToKill: 5,
    stageMaxUnlocked: 1,
    isStageProgressAuto: true,
    /* Player values

      HP: (500)  - 500 * pow( 1.05 , P Level) [WHEN LEVEL UP]
      XP Req: (500)  -  500 * pow(1.05 , P.Level) [WHEN LEVEL UP]
      Click DMG: (50)  -  50 * pow ( 1.04 , P Level ) [WHEN SKILL UP]

      Sample values:

      @ Lv 50
      - HP: 5734
      - XP Req: 1147
      - Click DMG: 355

      @ Lv 100
      - HP: 65751
      - XP Req: 13150
      - Click DMG: 2525

    */
    playerLevel: 1,
    playerHealthCurrent: 500,
    playerHealthMax: 500,
    playerExperienceCurrent: 0,
    playerExperienceRequired: 500,
    playerAttack: 50,
    playerDoubleAttackChance: 0,
    playerCriticalChance: 0.1,
    playerCriticalMultiplier: 1.2,
    playerAttackMultiplier: 1,
    playerAttackPerSecond: 50,

    /* Pet values

      Price: (100)  -  100 * pow ( 1.05, P Level )
      DPS: (20)  -  20 * pow ( 1.045 , P Level )
      
      @ Lv 50
      - Price: 1147
      - DPS: 181

      @ Lv 100
      - Price: 54320
      - DPS: 1631
      
    */

    pets: {
      petOne: {
        basicPrice: 100,
        upgradePrice: 100,
        upgradeLevel: 1,
        damagePerSecondBase: 20,
        damagePerSecondCurrent: 20,
        damagePerSecondPlaceholder: 20
      },
      petTwo: {
        basicPrice: 500,
        firstPurchasePrice: 2500,
        upgradePrice: 500,
        upgradeLevel: 0,
        damagePerSecondBase: 100,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petThree: {
        basicPrice: 2500,
        firstPurchasePrice: 12500,
        upgradePrice: 2500,
        upgradeLevel: 0,
        damagePerSecondBase: 500,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petFour: {
        basicPrice: 20000,
        firstPurchasePrice: 100000,
        upgradePrice: 20000,
        upgradeLevel: 0,
        damagePerSecondBase: 4000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      }
    },

    /* Enemy values

      HP: (500)  -  500 * pow( 1.05 , E Level)
      XP Held: (100)  -  100 * pow( 1.04 , E Level)
      DPS: (50)  -  50 * pow ( 1.04 , E Level)
      Coin Value: (25)  -  25 * pow ( 1.05 , E Level)

      Sample values:

      @ Lv 50
      - HP: 5734
      - XP Held: 142
      - DPS: 355
      - Coin value: 1147 (avg)

      @ Lv 100
      - HP: 65751
      - XP Req: 13150
      - DPS: 2525
      - Coin value: 13150 (avg)
      
    */
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
    enemyImageCurrent: enemyImageTwentytwo,
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
    bossImages: [bossImageOne, bossImageTwo, bossImageThree],
    bossNames: ["Vir", "Umbra", "Oculus"],
    enemyNameCurrent: "Chest",
    enemyLevel: 1,
    enemyIsBoss: false,
    enemyHasHealth: true,
    enemyHealthCurrent: 500,
    enemyHealthMax: 500,
    enemyExperienceHeld: 104,
    enemyCoinsValue: 25,
    enemyFoodHeld: 1,
    enemyFoodValue: 1,
    enemyAttack: 50,
    /* Upgrade values */
    heroUpgrades: {
      clickDamage: {
        level: 1,
        priceMultiplier: 1.045,
        price: 100,
        purchasePrice: 100
      },
      doubleAttackChance: {
        level: 0,
        priceMultiplier: 1.25,
        price: 5000,
        purchasePrice: 5000
      },
      criticalChance: {
        level: 0,
        priceMultiplier: 1.15,
        price: 2500,
        purchasePrice: 2500
      },
      criticalMultiplier: {
        level: 0,
        priceMultiplier: 1.1,
        price: 1000,
        purchasePrice: 1000
      }
    },
    /* Skill values */
    // Skill 1
    heroSkillOneName: "Quick Stab",
    heroSkillOneLevel: 0,
    heroSkillOneCooldown: 30000,
    isHeroSkillOneReady: true,
    heroSkillOneNumberOfAttacks: 3,
    heroSkillOneNumberOfAttacksLevelsToUpgrade: [10, 50, 100, 200, 350, 500],
    heroSkillOneDamageMultiplier: 2,
    heroSkillOneLevelToUnlock: 3,
    heroSkillOneLevelsToUpgrade: [
      5,
      10,
      20,
      30,
      50,
      70,
      100,
      150,
      200,
      250,
      300,
      350,
      400,
      450,
      500
    ],
    // Skill 2
    heroSkillTwoName: "Mark of the Beast",
    heroSkillTwoLevel: 0,
    heroSkillTwoCooldown: 60000,
    heroSkillTwoDuration: 10000,
    isHeroSkillTwoReady: true,
    isHeroSkillTwoActive: false,
    heroSkillTwoDamageMultiplier: 1.5,
    heroSkillTwoLevelToUnlock: 5,
    heroSkillTwoLevelsToUpgrade: [
      15,
      25,
      40,
      60,
      80,
      110,
      150,
      210,
      240,
      310,
      330,
      390,
      440,
      510
    ],
    // Skill 3
    heroSkillThreeName: "Animal training",
    heroSkillThreeLevel: 0,
    heroSkillThreeCooldown: 120000,
    heroSkillThreeDuration: 40000,
    isHeroSkillThreeReady: true,
    isHeroSkillThreeActive: false,
    heroSkillThreeDamageMultiplier: 25,
    heroSkillThreeLevelToUnlock: 12,
    heroSkillThreeLevelsToUpgrade: [
      32,
      44,
      52,
      67,
      89,
      108,
      148,
      202,
      273,
      308,
      372,
      419,
      452,
      523
    ],
    // Skill 4
    heroSkillFourName: "Fruit of Madness",
    heroSkillFourLevel: 0,
    heroSkillFourCooldown: 30000,
    isHeroSkillFourReady: true,
    heroSkillFourNumberOfAttacks: 3,
    heroSkillFourNumberOfAttacksLevelsToUpgrade: [53, 103, 153, 203, 343, 483],
    heroSkillFourDamageMultiplier: 1.5,
    heroSkillFourLevelToUnlock: 21,
    heroSkillFourLevelsToUpgrade: [
      33,
      56,
      83,
      106,
      143,
      183,
      241,
      298,
      334,
      381,
      412,
      441,
      501,
      581,
      623
    ],
    /* Inventory values */
    adventurePoints: 0,
    coins: 0,
    coinsToBeCollected: 0,
    // Cumulative value of coins which will be added to the player's inventory
    coinsToBeCollectedValue: 0,
    isCoinCollected: false,
    relics: 0,
    lootBags: 0,

    food: 0,
    foodToBeCollected: 0,
    lootBagsToBeCollected: 0,
    // Chance in percentage
    lootBagsDropChance: 0.2,
    foodDropChance: 25,
    isFoodCollected: false,
    isLootBagCollected: false,
    /* Left menu values */
    leftMenuSettingSelected: "Hero",
    /* Value placeholders 
       (used when temporarily setting a value to a different one) */
    enemyAttackPlaceholder: 50,
    enemyHealthCurrentPlaceholder: 500,
    enemyHealthMaxPlaceholder: 500,
    playerAttackPlaceholder: 50,
    playerAttackPerSecondPlaceholder: 50,
    /* Global game settings */
    enemyAttackInterval: setInterval(() => {
      this.enemyAttack();
    }, 1000),
    playerAttackInterval: setInterval(() => {
      this.playerAttackPerSecond();
    }, 1000)
  };

  /*
  Quests UI 
    'questName' => a string, passed each time the function is called, to define 
      which key of the 'quests' object the specific call affects.
    'observedValue' => a reference to the value which determines the quest's 
      advancement (as it is already in the original state).

  SAMPLE CALL:
          this.checkIfQuestConditionsMet(
        "playerAttacks",
        this.state.totalPlayerAttacks
      );

  */
  checkIfQuestConditionsMet = (questName, observedValue) => {
    // Create a copy of the quests object
    let quests = { ...this.state.quests };
    // If the relevant observed value is higher than the one required for the next progression
    if (
      // If the observed value is bigger than the required value
      observedValue >= quests[questName].nextRequired &&
      // If the required value is not the last quest of its kind
      quests[questName].nextRequired !==
        quests[questName].required[quests[questName].required.length - 1]
    ) {
      // Set the first level of the quest as achieved
      quests[questName].timesAchieved += 1;
      // Change the next required value to be the next element in the array after the current required value
      quests[questName].nextRequired = [
        quests[questName].required[quests[questName].timesAchieved]
      ];
      this.setState({
        adventurePoints:
          this.state.adventurePoints + quests[questName].adventurePointsHeld
      });
      // Set the state's 'quests' object to be a clone of the modified copy
      this.setState({ quests });
      // Push a paragraph to the battle log
      this.pushNewParagraphToBattleLog(
        <p>
          <small className="text-primary">
            Quest completed! + {quests[questName].adventurePointsHeld} AP
          </small>
        </p>
      );
    }
    // Increase the rewarded adventure points
    if (quests[questName].timesAchieved !== 0) {
      quests[questName].adventurePointsHeld =
        quests[questName].timesAchieved * 10;
    }
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
    // Create a copy of the object from the state
    let heroUpgrades = { ...this.state.heroUpgrades };
    // If the player has enough coins to buy the upgrade
    if (this.state.coins >= heroUpgrades[upgradeName].price) {
      this.setState({
        // Take off the money from the player
        coins: this.state.coins - heroUpgrades[upgradeName].price,
        // Update player stats
        totalMoneySpent:
          this.state.totalMoneySpent + heroUpgrades[upgradeName].price
      });
      // If the player is upgrading the click damage
      if (upgradeName === "clickDamage") {
        this.setState({
          // Increase the click damage
          playerAttack: Math.round(
            50 * Math.pow(1.045, heroUpgrades[upgradeName].level)
          ),
          playerAttackPlaceholder: Math.round(
            50 * Math.pow(1.045, heroUpgrades[upgradeName].level)
          )
        });
      }
      if (upgradeName === "criticalChance") {
        this.setState({
          // Increase the critical chance
          playerCriticalChance: this.state.playerCriticalChance + 0.3
        });
      }
      if (upgradeName === "criticalMultiplier") {
        this.setState({
          // Increase the critical multiplier
          playerCriticalMultiplier: this.state.playerCriticalMultiplier + 0.05
        });
      }
      if (upgradeName === "doubleAttackChance") {
        this.setState({
          // Increase the double attack chance
          playerDoubleAttackChance: this.state.playerDoubleAttackChance + 0.5
        });
      }
      heroUpgrades[upgradeName].price = Math.round(
        heroUpgrades[upgradeName].purchasePrice *
          Math.pow(
            heroUpgrades[upgradeName].priceMultiplier,
            heroUpgrades[upgradeName].level
          )
      );
      heroUpgrades[upgradeName].level += 1;
      this.setState({ heroUpgrades });
    }
  };

  // Render the button classes based on whether the user has enough money to buy the upgrade
  renderUpgradeButtonClasses = upgradeName => {
    // If the player has enough money to buy the upgrade
    if (this.state.coins >= this.state.heroUpgrades[upgradeName].price) {
      return "userInterface-upgrades-upgrade-button btn btn-dark mx-auto";
    } else {
      // If the player does not have enough money to buy the upgrade
      return "userInterface-upgrades-upgrade-button-disabled btn btn-dark mx-auto";
    }
  };

  /* Pets UI */
  petLevelUpgrade = petNumber => {
    let pets = { ...this.state.pets };
    // If the pet has not been bought yet
    if (pets[petNumber].upgradeLevel === 0) {
      // If the coins are enough to buy the upgrade
      if (this.state.coins >= pets[petNumber].firstPurchasePrice) {
        this.setState({
          // Take off the coins from the user
          coins: this.state.coins - pets[petNumber].firstPurchasePrice,
          // Update player stats
          totalMoneySpent:
            this.state.totalMoneySpent + pets[petNumber].firstPurchasePrice
        });
        // Increase pet level
        pets[petNumber].upgradeLevel += 1;
        // Increase pet price
        pets[petNumber].upgradePrice = Math.round(
          pets[petNumber].basicPrice *
            Math.pow(1.06, pets[petNumber].upgradeLevel)
        );
        // Increase pet damage
        pets[petNumber].damagePerSecondCurrent = Math.round(
          pets[petNumber].damagePerSecondBase *
            Math.pow(1.05, pets[petNumber].upgradeLevel)
        );
        // Increase pet damage
        pets[petNumber].damagePerSecondPlaceholder = Math.round(
          pets[petNumber].damagePerSecondBase *
            Math.pow(1.05, pets[petNumber].upgradeLevel)
        );
      }
    } else {
      if (this.state.coins >= pets[petNumber].upgradePrice) {
        this.setState({
          // Take off the coins from the user
          coins: this.state.coins - pets[petNumber].upgradePrice,
          // Update the player stats
          totalMoneySpent:
            this.state.totalMoneySpent + pets[petNumber].upgradePrice
        });
        // Increase pet level
        pets[petNumber].upgradeLevel += 1;
        // Increase pet price
        pets[petNumber].upgradePrice = Math.round(
          pets[petNumber].basicPrice *
            Math.pow(1.06, pets[petNumber].upgradeLevel)
        );
        // Increase pet damage
        pets[petNumber].damagePerSecondCurrent = Math.round(
          pets[petNumber].damagePerSecondBase *
            Math.pow(1.05, pets[petNumber].upgradeLevel)
        );
        // Increase pet damage
        pets[petNumber].damagePerSecondPlaceholder = Math.round(
          pets[petNumber].damagePerSecondBase *
            Math.pow(1.05, pets[petNumber].upgradeLevel)
        );
      }
    }

    this.setState({ pets });
  };

  // Return the damage increase that would be applied if the user were to purchase the next pet level
  renderPetDamageAfterUpgrade = petNumber => {
    return this.renderNumberWithAbbreviations(
      Math.round(
        this.state.pets[petNumber].damagePerSecondBase *
          Math.pow(1.05, this.state.pets[petNumber].upgradeLevel + 1)
      ) - this.state.pets[petNumber].damagePerSecondCurrent
    );
  };

  renderPetPriceParagraph = petNumber => {
    let pets = { ...this.state.pets };

    if (pets[petNumber].upgradeLevel === 0) {
      return this.renderNumberWithAbbreviations(
        pets[petNumber].firstPurchasePrice
      );
    } else {
      return this.renderNumberWithAbbreviations(pets[petNumber].upgradePrice);
    }
    this.setState({ pets });
  };

  // Render the button classes based on whether the user has enough money to buy the upgrade
  renderPetButtonClass = petNumber => {
    if (this.state.coins >= this.state.pets[petNumber].upgradePrice) {
      return "userInterface-pets-pet-button btn btn-dark mx-auto";
    } else {
      // If the user does not have enough money
      return "userInterface-pets-pet-button-disabled btn btn-dark mx-auto";
    }
  };

  // Sum of all the DPS sources
  calculateTotalDamagePerSecond = () => {
    if (this.state.isHeroSkillTwoActive) {
      return (
        (this.state.pets.petOne.damagePerSecondCurrent +
          this.state.pets.petTwo.damagePerSecondCurrent +
          this.state.pets.petThree.damagePerSecondCurrent +
          this.state.pets.petFour.damagePerSecondCurrent) *
        this.state.heroSkillTwoDamageMultiplier
      );
    } else
      return (
        this.state.pets.petOne.damagePerSecondCurrent +
        this.state.pets.petTwo.damagePerSecondCurrent +
        this.state.pets.petThree.damagePerSecondCurrent +
        this.state.pets.petFour.damagePerSecondCurrent
      );
  };

  // Sum of all the DPS sources
  calculateTotalClickDamage = () => {
    if (this.state.isHeroSkillThreeActive) {
      return Math.round(
        this.state.playerAttackPlaceholder * this.state.playerAttackMultiplier +
          (this.calculateTotalDamagePerSecond() / 100) *
            this.state.heroSkillThreeDamageMultiplier
      );
    } else {
      return Math.round(
        this.state.playerAttackPlaceholder * this.state.playerAttackMultiplier
      );
    }
  };

  /* Player UI */
  // Player stage progress
  playerStageProgress = () => {
    // If the stage is not completed yet
    if (this.state.stageEnemiesKilled < this.state.stageEnemiesToKill) {
      // Add a kill to the counter
      this.setState({ stageEnemiesKilled: this.state.stageEnemiesKilled + 1 });
      // If the next stage is going to be the last one, make it a boss stage
      if (this.state.stageEnemiesKilled === this.state.stageEnemiesToKill - 2) {
        this.setState({ enemyIsBoss: true });
      }
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
      // If the stage is a multiple of 5
      if (this.state.stageCurrent % 5 === 0) {
        // Set a new background
        this.changeToRandomBackground();
      }
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
      playerHealthPercentage
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
      playerExperiencePercentage
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
      playerExperienceRequired: 500 * Math.pow(1.05, this.state.playerLevel),
      playerHealthMax: Math.round(500 * Math.pow(1.05, this.state.playerLevel)),
      playerHealthCurrent: Math.round(
        500 * Math.pow(1.05, this.state.playerLevel)
      )
    });

    //Check if any of the skills are to be unlocked or leveled up
    // Skill 1
    // Unlock
    if (this.state.playerLevel === this.state.heroSkillOneLevelToUnlock) {
      this.setState({ heroSkillOneLevel: 1 });
      // Add a skill unlocked paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>You unlocked </small>
          <small className="text-warning">{this.state.heroSkillOneName}!</small>
        </p>
      );
    }
    // Level up skill level
    if (
      this.state.heroSkillOneLevelsToUpgrade.includes(this.state.playerLevel)
    ) {
      this.setState({
        heroSkillOneCooldown: this.state.heroSkillOneCooldown - 200,
        heroSkillOneLevel: this.state.heroSkillOneLevel + 1,
        heroSkillOneDamageMultiplier:
          // Round to 2 decimals max (if applies)
          Math.round(2 * Math.pow(1.2, this.state.heroSkillOneLevel) * 100) /
          100
      });
      // Add a skill leveled up paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>Your skill </small>
          <small className="text-warning">{this.state.heroSkillOneName}</small>
          <small> reached level </small>{" "}
          <small>{this.state.heroSkillOneLevel}</small> <small>!</small>
        </p>
      );
    }

    // Level up attack count
    if (
      this.state.heroSkillOneNumberOfAttacksLevelsToUpgrade.includes(
        this.state.playerLevel
      )
    ) {
      this.setState({
        heroSkillOneNumberOfAttacks: this.state.heroSkillOneNumberOfAttacks + 1
      });
    }

    /* SKILL 2 */
    // Unlock
    if (this.state.playerLevel === this.state.heroSkillTwoLevelToUnlock) {
      this.setState({ heroSkillTwoLevel: 1 });
      // Add a skill unlocked paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>You unlocked </small>
          <small className="text-warning">{this.state.heroSkillTwoName}!</small>
        </p>
      );
    }
    // Level up skill level
    if (
      this.state.heroSkillTwoLevelsToUpgrade.includes(this.state.playerLevel)
    ) {
      this.setState({
        heroSkillTwoCooldown: this.state.heroSkillTwoCooldown - 200,
        heroSkillTwoLevel: this.state.heroSkillTwoLevel + 1,
        heroSkillTwoDamageMultiplier:
          // Round to 2 decimals max (if applies)
          Math.round(2 * Math.pow(1.1, this.state.heroSkillTwoLevel) * 100) /
          100
      });
      // Add a skill leveled up paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>Your skill </small>
          <small className="text-warning">{this.state.heroSkillTwoName}</small>
          <small> reached level </small>{" "}
          <small>{this.state.heroSkillTwoLevel}</small> <small>!</small>
        </p>
      );
    }
    /* SKILL 3 */
    // Unlock
    if (this.state.playerLevel === this.state.heroSkillThreeLevelToUnlock) {
      this.setState({ heroSkillThreeLevel: 1 });
      // Add a skill unlocked paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>You unlocked </small>
          <small className="text-warning">
            {this.state.heroSkillThreeName}!
          </small>
        </p>
      );
    }
    // Level up skill level
    if (
      this.state.heroSkillThreeLevelsToUpgrade.includes(this.state.playerLevel)
    ) {
      this.setState({
        heroSkillThreeCooldown: this.state.heroSkillThreeCooldown - 1000,
        heroSkillThreeLevel: this.state.heroSkillThreeLevel + 1,
        heroSkillThreeDamageMultiplier:
          // Round to 2 decimals max (if applies)
          Math.round(25 * Math.pow(1.1, this.state.heroSkillThreeLevel) * 100) /
          100
      });
      // Add a skill leveled up paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>Your skill </small>
          <small className="text-warning">
            {this.state.heroSkillThreeName}
          </small>
          <small> reached level </small>{" "}
          <small>{this.state.heroSkillThreeLevel}</small> <small>!</small>
        </p>
      );
    }
    // Skill 4
    // Unlock
    if (this.state.playerLevel === this.state.heroSkillFourLevelToUnlock) {
      this.setState({ heroSkillFourLevel: 1 });
      // Add a skill unlocked paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>You unlocked </small>
          <small className="text-warning">
            {this.state.heroSkillFourName}!
          </small>
        </p>
      );
    }
    // Level up skill level
    if (
      this.state.heroSkillFourLevelsToUpgrade.includes(this.state.playerLevel)
    ) {
      this.setState({
        heroSkillFourCooldown: this.state.heroSkillFourCooldown - 200,
        heroSkillFourLevel: this.state.heroSkillFourLevel + 1,
        heroSkillFourDamageMultiplier:
          // Round to 2 decimals max (if applies)
          Math.round(1.5 * Math.pow(1.2, this.state.heroSkillFourLevel) * 100) /
          100
      });
      // Add a skill leveled up paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>Your skill </small>
          <small className="text-warning">{this.state.heroSkillFourName}</small>
          <small> reached level </small>{" "}
          <small>{this.state.heroSkillFourLevel}</small> <small>!</small>
        </p>
      );
    }

    // Level up attack count
    if (
      this.state.heroSkillFourNumberOfAttacksLevelsToUpgrade.includes(
        this.state.playerLevel
      )
    ) {
      this.setState({
        heroSkillFourNumberOfAttacks:
          this.state.heroSkillFourNumberOfAttacks + 1
      });
    }
  };

  renderSkillBadge = skillNumber => {
    // Skill 1
    if (skillNumber === 1) {
      let classes = "userInterface-skills-skill-img scale ";
      return this.state.isHeroSkillOneReady && this.state.heroSkillOneLevel > 0
        ? classes
        : classes + "cooldown";
    }
    // Skill 2
    if (skillNumber === 2) {
      let classes = "userInterface-skills-skill-img scale ";
      return this.state.isHeroSkillTwoReady && this.state.heroSkillTwoLevel > 0
        ? classes
        : classes + "cooldown";
    }
    // Skill 3
    if (skillNumber === 3) {
      let classes = "userInterface-skills-skill-img scale ";
      return this.state.isHeroSkillThreeReady &&
        this.state.heroSkillThreeLevel > 0
        ? classes
        : classes + "cooldown";
    }
    // Skill 4
    if (skillNumber === 4) {
      let classes = "userInterface-skills-skill-img scale ";
      return this.state.isHeroSkillFourReady &&
        this.state.heroSkillFourLevel > 0
        ? classes
        : classes + "cooldown";
    }
  };

  // Get the input from the keyboard, document-wide
  handleGlobalKeyboardInput = event => {
    // Use [W/E] to attack
    if (event.key === "w" || event.key === "e") {
      this.playerAttack();
    }
    // Use [H] to heal
    if (event.key === "h") {
      this.playerHeal();
    }
    // Use [1,2,3,4] to use skills
    if (event.key === "1") {
      this.playerUseActiveSkill(1);
    }
    if (event.key === "2") {
      this.playerUseActiveSkill(2);
    }
    if (event.key === "3") {
      this.playerUseActiveSkill(3);
    }
    if (event.key === "4") {
      this.playerUseActiveSkill(4);
    }
    if (event.key === "d") {
      this.setState({
        isDebugModeActive: !this.state.isDebugModeActive,
        leftMenuSettingSelected: "Hero"
      });
    }
  };

  calculateRandomDropChance = chanceInPercentage => {
    return chanceInPercentage > Math.random() * 100;
  };

  calculateAllDrops = () => {
    /* LUCK drops - things which are not guaranteed, and might NOT be dropped */
    // Calculate lootbag drops
    if (this.calculateRandomDropChance(this.state.lootBagsDropChance)) {
      this.setState({
        lootBagsToBeCollected: this.state.lootBagsToBeCollected + 1
      });
    }
    // Calculate food drops
    if (this.calculateRandomDropChance(this.state.foodDropChance)) {
      this.setState({
        foodToBeCollected:
          this.state.foodToBeCollected + this.state.enemyFoodHeld
      });
    }

    // If there are more than 75 uncollected coins
    if (this.state.coinsToBeCollected > 75) {
      // Collect all of them
      this.collectCoinsOnHover();
    }
    // If there are more than 10 uncollected food drops
    if (this.state.foodToBeCollected > 10) {
      // Collect all of them
      this.collectFoodOnHover();
    }

    /* SURE drops - things which are guaranteed, and WILL drop */
    // Give coins, 100% chance
    let coinsDroppedByEnemy;
    if (
      // If the enemy is a Chest enemy
      this.state.enemyNameCurrent === "Chest" ||
      // If the enemy is a boss
      this.state.bossNames.includes(this.state.enemyNameCurrent)
    ) {
      // Give 15 coins
      coinsDroppedByEnemy = 15;
      // If the enemy is any other enemy
    } else {
      // Give [3-5] coins
      coinsDroppedByEnemy = Math.round(3 + Math.round(Math.random() * 2));
    }
    this.setState({
      // Drop coins on the ground
      coinsToBeCollected: this.state.coinsToBeCollected + coinsDroppedByEnemy,
      coinsToBeCollectedValue:
        this.state.coinsToBeCollectedValue +
        coinsDroppedByEnemy * this.state.enemyCoinsValue
    });
    // Give XP, 100% chance
    this.setState({
      playerExperienceCurrent:
        this.state.playerExperienceCurrent + this.state.enemyExperienceHeld
    });
  };

  enemyDie = () => {
    // Give the player all the drops
    this.calculateAllDrops();
    this.setState({
      // Trigger enemy death animation
      enemyHasHealth: false,
      // Block the player from attacking while the enemy is respawning
      playerAttack: 0,
      playerAttackPerSecond: 0
    });

    if (
      // If the player has enough experience to level up
      this.state.playerExperienceCurrent >= this.state.playerExperienceRequired
    ) {
      // Level up the player
      this.playerLevelUp();
    }

    // Add a 'enemy killed, XP received' paragraph to the Battle Log
    this.pushNewParagraphToBattleLog(
      <p>
        <small>
          You killed {this.state.enemyNameCurrent} and received{" "}
          <span className="text-success">
            {this.renderNumberWithAbbreviations(this.state.enemyExperienceHeld)}{" "}
            XP
          </span>
          !
        </small>
      </p>
    );
    // Update player stats
    this.setState({ totalEnemiesKilled: this.state.totalEnemiesKilled + 1 });
    // Check if the quests are completed
    this.checkIfQuestConditionsMet(
      "enemiesKilled",
      this.state.totalEnemiesKilled
    );

    setTimeout(() => {
      // Generate a new enemy
      this.generateNewEnemy(
        // Enemy level is the same as current stage /+ 1
        Math.round(this.state.stageCurrent + Math.random())
      );
      // If the enemy was a boss, change it back to normal
      if (this.state.enemyIsBoss) {
        this.setState({ enemyIsBoss: false });
      }
      // Update the player stage, if applicable
      this.playerStageProgress();
      // Set the player attack and DPS back to the origin values
      this.setState({
        playerAttack: this.state.playerAttackPlaceholder,
        playerAttackPerSecond: this.state.playerAttackPerSecondPlaceholder
      });
      // After 1 second
    }, 1000);
  };

  // Calculate if the hit is critical based on the critical chance
  calculateDamageAfterMultipliers = () => {
    // The damage without any bonus
    let totalDamage = this.calculateTotalClickDamage();
    // If double hit
    if (this.state.playerDoubleAttackChance >= Math.random() * 101) {
      totalDamage *= 2;
    }
    // If critical hit
    if (this.state.playerCriticalChance >= Math.random() * 101) {
      totalDamage += this.state.playerCriticalMultiplier;
    }
    return totalDamage;
  };

  // Attack the enemy
  playerAttack = () => {
    // If the enemy is not in the process of respawning
    if (this.state.playerAttack !== 0) {
      this.setState({
        // Remove the player damage from the enemy's health
        enemyHealthCurrent:
          this.state.enemyHealthCurrent -
          this.calculateDamageAfterMultipliers(),
        totalPlayerAttacks: this.state.totalPlayerAttacks + 1
      });
      this.setState({
        totalPlayerDamageDealt:
          this.state.totalPlayerDamageDealt +
          this.calculateDamageAfterMultipliers()
      });
      // After every attack, check if the quests are completed
      this.checkIfQuestConditionsMet(
        "playerAttacks",
        this.state.totalPlayerAttacks
      );
      this.checkIfQuestConditionsMet(
        "playerDamageDealt",
        this.state.totalPlayerDamageDealt
      );
      if (
        // When enemy is dead
        this.state.enemyHealthCurrent <= 1 &&
        // When XP has not already been given
        this.state.enemyHasHealth !== false
      ) {
        this.enemyDie();
      }
    }
  };

  playerUseActiveSkill = skillNumber => {
    // If the player clicked on the first skill, and it's cooldown is over
    if (
      skillNumber === 1 &&
      this.state.isHeroSkillOneReady &&
      this.state.heroSkillOneLevel !== 0 &&
      this.state.enemyHasHealth
    ) {
      this.setState({ isHeroSkillOneReady: false });

      let numberOfAttacks = this.state.heroSkillOneNumberOfAttacks;
      // Attack the enemy X times by XXX% of the Click Damage
      let skillOneActivate = () => {
        if (numberOfAttacks !== 0) {
          numberOfAttacks--;
          setTimeout(() => {
            this.setState({
              enemyHealthCurrent:
                this.state.enemyHealthCurrent -
                this.calculateTotalClickDamage() *
                  this.state.heroSkillOneDamageMultiplier
            });
            skillOneActivate();
          }, 250);
        } else {
          setTimeout(() => {
            this.setState({ isHeroSkillOneReady: true });
          }, this.state.heroSkillOneCooldown);
        }
      };
      skillOneActivate();
      // Add a 'Skill used' paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>
            {this.state.heroSkillOneName} deals{" "}
            <span className="text-warning">
              {this.renderNumberWithAbbreviations(
                Math.round(
                  this.calculateTotalClickDamage() *
                    this.state.heroSkillOneDamageMultiplier *
                    this.state.heroSkillOneNumberOfAttacks
                )
              )}{" "}
              DMG
            </span>
            !
          </small>
        </p>
      );
    }
    // If the player clicked on the second skill, and it's cooldown is over
    if (
      skillNumber === 2 &&
      this.state.isHeroSkillTwoReady &&
      this.state.heroSkillTwoLevel !== 0 &&
      this.state.enemyHasHealth
    ) {
      this.setState({ isHeroSkillTwoReady: false });

      // Double the damage of all pets for the duration of the skill
      this.setState({
        isHeroSkillTwoActive: true
      });

      // Set the damage of the pets back to the original value
      setTimeout(() => {
        this.setState({
          isHeroSkillTwoActive: false
        });
        // Add a 'Skill finished' paragraph to the Battle Log
        this.pushNewParagraphToBattleLog(
          <p>
            <small className="text-warning">
              {this.state.heroSkillTwoName}
            </small>
            <small> expired.</small>
          </p>
        );
      }, this.state.heroSkillTwoDuration);

      setTimeout(() => {
        this.setState({
          isHeroSkillTwoReady: true
        });
      }, this.state.heroSkillTwoCooldown);

      // Add a 'Skill used' paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>
            <span className="text-warning">{this.state.heroSkillTwoName} </span>
            makes your pets{" "}
            <span className="text-warning">
              {Math.round(this.state.heroSkillTwoDamageMultiplier * 100)}%
            </span>{" "}
            stronger!
          </small>
        </p>
      );
    }
    // If the player clicked on the third skill, and it's cooldown is over
    if (
      skillNumber === 3 &&
      this.state.isHeroSkillThreeReady &&
      this.state.heroSkillThreeLevel !== 0 &&
      this.state.enemyHasHealth
    ) {
      this.setState({ isHeroSkillThreeReady: false });

      // Increase the click damage by a percentage of the total DPS
      this.setState({
        isHeroSkillThreeActive: true
      });

      // Set the click damage back to the original value
      setTimeout(() => {
        this.setState({
          isHeroSkillThreeActive: false
        });
        // Add a 'Skill finished' paragraph to the Battle Log
        this.pushNewParagraphToBattleLog(
          <p>
            <small className="text-warning">
              {this.state.heroSkillThreeName}
            </small>
            <small> expired.</small>
          </p>
        );
      }, this.state.heroSkillThreeDuration);

      setTimeout(() => {
        this.setState({
          isHeroSkillThreeReady: true
        });
      }, this.state.heroSkillThreeCooldown);

      // Add a 'Skill used' paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>
            <span className="text-warning">
              {this.state.heroSkillThreeName}{" "}
            </span>
            makes your click damage stronger!
          </small>
        </p>
      );
    }

    // If the player clicked on the fourth skill, and its cooldown is over
    if (
      skillNumber === 4 &&
      this.state.isHeroSkillFourReady &&
      this.state.heroSkillFourLevel !== 0 &&
      this.state.enemyHasHealth
    ) {
      this.setState({ isHeroSkillFourReady: false });

      let numberOfAttacks = this.state.heroSkillFourNumberOfAttacks;
      // Attack the enemy X times by XXX% of DPS
      let skillFourActivate = () => {
        if (numberOfAttacks !== 1) {
          numberOfAttacks--;
          setTimeout(() => {
            this.setState({
              enemyHealthCurrent:
                this.state.enemyHealthCurrent -
                this.calculateTotalDamagePerSecond() *
                  this.state.heroSkillFourDamageMultiplier
            });
            skillFourActivate();
          }, 250);
        } else {
          setTimeout(() => {
            this.setState({ isHeroSkillFourReady: true });
          }, this.state.heroSkillFourCooldown);
        }
      };
      skillFourActivate();
      // Add a 'Skill used' paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>
            {this.state.heroSkillFourName} deals{" "}
            <span className="text-warning">
              {this.renderNumberWithAbbreviations(
                Math.round(
                  this.calculateTotalDamagePerSecond() *
                    this.state.heroSkillFourDamageMultiplier *
                    this.state.heroSkillFourNumberOfAttacks
                )
              )}{" "}
              DMG
            </span>
            !
          </small>
        </p>
      );
    }
    // Update the stats counter
    this.setState({ totalSkillsUsed: this.state.totalSkillsUsed + 1 });
    // Check if the quests are completed
    this.checkIfQuestConditionsMet("skillsUsed", this.state.totalSkillsUsed);
  };

  renderSkillOneDescription = () => {
    if (this.state.heroSkillOneLevel === 0) {
      return (
        this.state.heroSkillOneName +
        "  -  [Lv. Req: " +
        this.state.heroSkillOneLevelToUnlock +
        "] "
      );
    } else {
      return (
        "Lv. " +
        this.state.heroSkillOneLevel +
        " " +
        this.state.heroSkillOneName +
        "  -  Attack the enemy " +
        this.state.heroSkillOneNumberOfAttacks +
        " times, each time dealing damage equal to " +
        Math.round(this.state.heroSkillOneDamageMultiplier * 100) +
        "% of click damage. [Cooldown: " +
        this.state.heroSkillOneCooldown / 1000 +
        "s]" +
        // Display the player level required for the skills to level up
        "  -  [Skill+ Lv Req: " +
        this.state.heroSkillOneLevelsToUpgrade.find(element => {
          return element > this.state.playerLevel;
        }) +
        "]" +
        "  -  [Hotkey: 1]"
      );
    }
  };

  renderSkillTwoDescription = () => {
    if (this.state.heroSkillTwoLevel === 0) {
      return (
        this.state.heroSkillTwoName +
        "  -  [Lv. Req: " +
        this.state.heroSkillTwoLevelToUnlock +
        "] "
      );
    } else {
      return (
        "Lv. " +
        this.state.heroSkillTwoLevel +
        " " +
        this.state.heroSkillTwoName +
        "  -  Makes your pets angry, causing their DPS to increase by " +
        Math.round(this.state.heroSkillTwoDamageMultiplier * 100) +
        "% for " +
        this.state.heroSkillTwoDuration / 1000 +
        " seconds. [Cooldown: " +
        this.state.heroSkillTwoCooldown / 1000 +
        "s]" +
        // Display the player level required for the skills to level up
        "  -  [Skill+ Lv Req: " +
        this.state.heroSkillTwoLevelsToUpgrade.find(element => {
          return element > this.state.playerLevel;
        }) +
        "]" +
        "  -  [Hotkey: 2]"
      );
    }
  };

  renderSkillThreeDescription = () => {
    if (this.state.heroSkillThreeLevel === 0) {
      return (
        this.state.heroSkillThreeName +
        "  -  [Lv. Req: " +
        this.state.heroSkillThreeLevelToUnlock +
        "] "
      );
    } else {
      return (
        "Lv. " +
        this.state.heroSkillThreeLevel +
        " " +
        this.state.heroSkillThreeName +
        "  -  Become one with your pets, and increase your click damage by " +
        this.state.heroSkillThreeDamageMultiplier +
        "% of their DPS for " +
        this.state.heroSkillThreeDuration / 1000 +
        " seconds. [Cooldown: " +
        this.state.heroSkillThreeCooldown / 1000 +
        "s]" +
        // Display the player level required for the skills to level up
        "  -  [Skill+ Lv Req: " +
        this.state.heroSkillThreeLevelsToUpgrade.find(element => {
          return element > this.state.playerLevel;
        }) +
        "]" +
        "  -  [Hotkey: 3]"
      );
    }
  };

  renderSkillFourDescription = () => {
    if (this.state.heroSkillFourLevel === 0) {
      return (
        this.state.heroSkillFourName +
        "  -  [Lv. Req: " +
        this.state.heroSkillFourLevelToUnlock +
        "] "
      );
    } else {
      return (
        "Lv. " +
        this.state.heroSkillFourLevel +
        " " +
        this.state.heroSkillFourName +
        "  -  All your pets get together to attack the enemy " +
        this.state.heroSkillFourNumberOfAttacks +
        " times, each time dealing damage equal to " +
        Math.round(this.state.heroSkillFourDamageMultiplier * 100) +
        "% of your total DPS. [Cooldown: " +
        this.state.heroSkillFourCooldown / 1000 +
        "s]" +
        // Display the player level required for the skills to level up
        "  -  [Skill+ Lv Req: " +
        this.state.heroSkillFourLevelsToUpgrade.find(element => {
          return element > this.state.playerLevel;
        }) +
        "]" +
        "  -  [Hotkey: 4]"
      );
    }
  };
  // Heal the player using food
  playerHeal = () => {
    let amountHealed;
    if (
      // The player's health is not already max
      this.state.playerHealthCurrent < this.state.playerHealthMax &&
      // The player has food
      this.state.food > 0 &&
      // The enemy is not in the process of respawning
      this.state.enemyHasHealth
    ) {
      // If healing the player by 25% would make the current HP be more than the max HP
      if (
        this.state.playerHealthCurrent +
          (this.state.playerHealthMax / 100) * 25 >
        this.state.playerHealthMax
      ) {
        amountHealed =
          this.state.playerHealthMax - this.state.playerHealthCurrent;

        this.setState({
          // Remove 1 food from the player
          food: this.state.food - 1,
          // Top up the health to max
          playerHealthCurrent: this.state.playerHealthMax
        });

        // If the player is missing more than 25% of the health
      } else {
        amountHealed = (this.state.playerHealthMax / 100) * 25;
        this.setState({
          // Remove 1 food from the player
          food: this.state.food - 1,
          // Increase the health by 25% of the max
          playerHealthCurrent:
            this.state.playerHealthCurrent +
            (this.state.playerHealthMax / 100) * 25
        });
      }
      // Add a 'HP increased' paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>
            Player gains{" "}
            <span className="text-success">
              {this.renderNumberWithAbbreviations(Math.round(amountHealed))} HP
            </span>
            !
          </small>
        </p>
      );
      // Update the stats
      this.setState({ totalTimesHealed: this.state.totalTimesHealed + 1 });
      // Check if the quests are completed
      this.checkIfQuestConditionsMet(
        "timesHealed",
        this.state.totalTimesHealed
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
          this.state.enemyHealthCurrent - this.calculateTotalDamagePerSecond(),
        // Update player stats
        totalPetDamageDealt:
          this.state.totalPetDamageDealt + this.calculateTotalDamagePerSecond()
      });
      // Check if the quests are completed
      this.checkIfQuestConditionsMet(
        "petDamageDealt",
        this.state.totalPetDamageDealt
      );
      if (
        // If enemy is dead
        this.state.enemyHealthCurrent <= 1 &&
        // If XP has not already been given
        this.state.enemyHasHealth !== false
      ) {
        this.enemyDie();
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
        if (this.state.enemyIsBoss) {
          this.setState({
            stageEnemiesKilled: 0,
            enemyIsBoss: false,
            activateAutoStageAdvance: false
          });
        }
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
        // Update player stats
        this.setState({ totalPlayerDeaths: this.state.totalPlayerDeaths + 1 });
      }
    }
  };

  // Create a new random enemy type from the ones available
  generateRandomEnemyIdentity = () => {
    // If the enemy is a normal field enemy, and not a boss
    if (!this.state.enemyIsBoss) {
      // Generate a random number between 0 and 26
      let randomNumber = Math.round(Math.random() * 26);
      this.setState({
        // And use the random number to get a new random enemy (image and name)
        enemyImageCurrent: this.state.enemyImages[randomNumber],
        enemyNameCurrent: this.state.enemyNames[randomNumber]
      });
    } else {
      // Generate a random number between 0 and 3
      let randomNumber = Math.round(Math.random() * 2);
      this.setState({
        // And use the random number to get a new random enemy (image and name)
        enemyImageCurrent: this.state.bossImages[randomNumber],
        enemyNameCurrent: this.state.bossNames[randomNumber]
      });
    }
  };

  /* Create a new enemy with the generateNewEnemy() function.
     The parameter 'level' is used to generate values which are balanced all-over 
  */
  generateNewEnemy = level => {
    // Create a new identity for the next enemy
    this.generateRandomEnemyIdentity();
    // If the enemy is not a boss
    if (!this.state.enemyIsBoss) {
      this.setState({
        // Reinitialise the values of the new enemy
        enemyHasHealth: true,
        enemyLevel: level,
        enemyExperienceHeld: Math.round(100 * Math.pow(1.04, level)),
        enemyHealthCurrent: Math.round(500 * Math.pow(1.07, level)),
        enemyHealthMax: Math.round(500 * Math.pow(1.07, level)),
        enemyAttack: Math.round(50 * Math.pow(1.045, level)),
        enemyCoinsValue: Math.round(25 * Math.pow(1.05, level)),
        // Reinitialise the values of the player
        playerHealthCurrent: this.state.playerHealthMax
      });
      // If the enemy is a boss
    } else {
      this.setState({
        // Reinitialise the values of the new enemy
        enemyHasHealth: true,
        enemyLevel: this.state.stageCurrent,
        enemyExperienceHeld: Math.round(
          300 * Math.pow(1.04, this.state.stageCurrent)
        ),
        enemyHealthCurrent: Math.round(
          2500 * Math.pow(1.07, this.state.stageCurrent)
        ),
        enemyHealthMax: Math.round(
          2500 * Math.pow(1.07, this.state.stageCurrent)
        ),
        enemyAttack: Math.round(100 * Math.pow(1.04, this.state.stageCurrent)),
        enemyCoinsValue: Math.round(
          100 * Math.pow(1.05, this.state.stageCurrent)
        ),
        // Reinitialise the values of the player
        playerHealthCurrent: this.state.playerHealthMax
      });
    }
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
      enemyHealthPercentage
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

  // Drop new lootbags on the floor
  renderLootBagDrop = () => {
    // Only when lootbags have not been collected
    if (!this.state.isLootBagCollected) {
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
        coins: this.state.coins + this.state.coinsToBeCollectedValue,
        totalMoneyEarned:
          // Update the player stats
          this.state.totalMoneyEarned + this.state.coinsToBeCollectedValue,
        // Remove the coins from the ground
        coinsToBeCollected: 0,
        coinsToBeCollectedValue: 0,
        // Prevent coins spawned after to also be animated
        isCoinCollected: false
      });
      // Check if the quests are completed
      this.checkIfQuestConditionsMet(
        "moneyEarned",
        this.state.totalMoneyEarned
      );
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

  // Add lootbags to the inventory
  collectLootBagOnHover = event => {
    // Trigger the animation from renderLootBagDrop()
    this.setState({ isLootBagCollected: true });
    // Wait 1 second for the animation to be over
    setTimeout(() => {
      this.setState({
        // Add the collected lootbag to the lootbags held in the inventory
        lootBags: this.state.lootBags + this.state.lootBagsToBeCollected,
        // Remove the food from the ground
        lootBagsToBeCollected: 0,
        // Prevent food spawned after to also be animated
        isLootBagCollected: false
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
          draggable="false"
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
          draggable="false"
          alt="food"
          className={this.renderFoodDrop()}
          src={resourceThreeImage}
          onMouseOver={this.collectFoodOnHover}
        />
      );
    }
    return foodToBeRendered;
  };

  // Create new lootbag dropped
  generateLootBagDrop = () => {
    let lootbagsToBeRendered = [];
    // All the lootbags which have not been collected yet (by hovering)
    for (let i = 0; i < this.state.lootBagsToBeCollected; i++) {
      // Add a new food
      lootbagsToBeRendered.push(
        <img
          draggable="false"
          alt="lootbag"
          className={this.renderLootBagDrop()}
          src={resourceTwoImage}
          onMouseOver={this.collectLootBagOnHover}
        />
      );
    }
    return lootbagsToBeRendered;
  };

  // Increase the value of the player for debugging
  giveItemDebug = itemName => {
    // Increase coins
    if (itemName === "coins") {
      this.setState({ coins: this.state.coins + 1000000 });
    }
    // Increase potions
    if (itemName === "potions") {
      this.setState({ food: this.state.food + 1000 });
    }
    // Increase stages
    if (itemName === "stages") {
      this.setState({
        stageCurrent: this.state.stageCurrent + 10,
        stageMaxUnlocked: this.state.stageMaxUnlocked + 10
      });
    }
    // Increase level
    if (itemName === "levels") {
      this.playerLevelUp();
    }
  };

  renderDebugMenu = () => {
    if (this.state.isDebugModeActive) {
      return (
        <div className="mx-auto" id="userInterface-userSettings-menu-tab">
          <button
            type="button"
            class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
            onClick={this.fetchLeftMenuSettingSelection}
          >
            <small>Debug</small>
          </button>
        </div>
      );
    }
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
          {/* Upgrade #1 - Click DMG */}
          <div className="userInterface-upgrades-upgrade-div">
            <div className="userInterface-upgrades-upgrade-div-holder mx-auto">
              <img
                draggable="false"
                alt="Upgrade one"
                src={heroUpgradeOneImage}
                className="userInterface-upgrades-upgrade-image mx-auto"
              />
              <small className="userInterface-upgrades-upgrade-name">
                Click DMG
              </small>
              <small className="userInterface-upgrades-upgrade-level">
                Lv. {this.state.heroUpgrades.clickDamage.level}
              </small>
            </div>
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img
                draggable="false"
                alt="click damage"
                src={clickDamageImage}
              />
              {/* Show the increase the upgrade would have on the current player damage */}
              +
              {this.renderNumberWithAbbreviations(
                Math.round(
                  50 *
                    Math.pow(1.045, this.state.heroUpgrades.clickDamage.level)
                ) - this.state.playerAttackPlaceholder
              )}
            </small>
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.renderNumberWithAbbreviations(
                this.state.heroUpgrades.clickDamage.price
              )}
              <img
                draggable="false"
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
            <button
              type="button"
              className={this.renderUpgradeButtonClasses("clickDamage")}
              onClick={() => {
                this.heroUpgradeLevelUp("clickDamage");
              }}
            >
              +
            </button>
          </div>
          {/* Upgrade #2 - Critical Rate */}
          <div className="userInterface-upgrades-upgrade-div">
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
                Lv. {this.state.heroUpgrades.criticalChance.level}
              </small>
            </div>
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img
                draggable="false"
                alt="critical chance"
                src={criticalChanceImage}
              />
              {/* Show the increase the upgrade would have on the current player damage */}
              +0.3%
            </small>
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.renderNumberWithAbbreviations(
                this.state.heroUpgrades.criticalChance.price
              )}
              <img
                draggable="false"
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
            <button
              type="button"
              className={this.renderUpgradeButtonClasses("criticalChance")}
              onClick={() => {
                this.heroUpgradeLevelUp("criticalChance");
              }}
            >
              +
            </button>
          </div>
          {/* Upgrade #3 - Crit Multiplier */}
          <div className="userInterface-upgrades-upgrade-div">
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
                Lv. {this.state.heroUpgrades.criticalMultiplier.level}
              </small>
            </div>
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img
                draggable="false"
                alt="critical multiplier"
                src={criticalMultiplierImage}
              />
              {/* Show the increase the upgrade would have on the current player damage */}
              +5%
            </small>
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.renderNumberWithAbbreviations(
                this.state.heroUpgrades.criticalMultiplier.price
              )}
              <img
                draggable="false"
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
            <button
              type="button"
              className={this.renderUpgradeButtonClasses("criticalMultiplier")}
              onClick={() => {
                this.heroUpgradeLevelUp("criticalMultiplier");
              }}
            >
              +
            </button>
          </div>
          {/* Upgrade #4 - Double attack % */}
          <div className="userInterface-upgrades-upgrade-div">
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
                Lv. {this.state.heroUpgrades.doubleAttackChance.level}
              </small>
            </div>
            <small className="userInterface-upgrades-upgrade-damage mx-auto">
              <img
                draggable="false"
                alt="double attack"
                src={doubleAttackImage}
              />
              {/* Show the increase the upgrade would have on the current double attack chance */}
              +0.5%
            </small>
            <small
              id="userInterface-upgrades-upgradeOne-price"
              className="userInterface-upgrades-upgrade-price mx-auto"
            >
              {this.renderNumberWithAbbreviations(
                this.state.heroUpgrades.doubleAttackChance.price
              )}
              <img
                draggable="false"
                alt="coin"
                className="userInterface-upgrades-upgrade-price-image"
                src={coinImageOne}
              />
            </small>
            <button
              type="button"
              className={this.renderUpgradeButtonClasses("doubleAttackChance")}
              onClick={() => {
                this.heroUpgradeLevelUp("doubleAttackChance");
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
    // Stats tab selected
    if (this.state.leftMenuSettingSelected === "Stats") {
      return (
        <div id="userInterface-stats-div">
          <p>
            <strong>Statistics</strong>
          </p>
          {/* Player summary  */}
          <div id="userInterface-stats-summary-div">
            <div className="userInterface-stats-summary-row">
              <div className="userInterface-stats-summary-section mx-auto">
                <img
                  data-toggle="tooltip"
                  title="Total click damage"
                  data-placement="top"
                  draggable="false"
                  alt="click damage"
                  className="userInterface-stats-summary-section-image"
                  src={clickDamageImage}
                />
                <small className="userInterface-stats-summary-section-paragraph">
                  {this.renderNumberWithAbbreviations(
                    this.calculateTotalClickDamage()
                  )}
                </small>
              </div>
              <div className="userInterface-stats-summary-section mx-auto">
                <img
                  data-toggle="tooltip"
                  title="Critical chance"
                  data-placement="top"
                  draggable="false"
                  alt="critical chance"
                  className="userInterface-stats-summary-section-image"
                  src={criticalChanceImage}
                />
                <small className="userInterface-stats-summary-section-paragraph">
                  {this.renderNumberWithAbbreviations(
                    this.state.playerCriticalChance.toFixed(1)
                  )}
                  %
                </small>
              </div>
              <div className="userInterface-stats-summary-section mx-auto">
                <img
                  data-toggle="tooltip"
                  title="Critical damage"
                  data-placement="top"
                  draggable="false"
                  alt="critical damage"
                  className="userInterface-stats-summary-section-image"
                  src={criticalMultiplierImage}
                />
                <small className="userInterface-stats-summary-section-paragraph">
                  {this.renderNumberWithAbbreviations(
                    Math.round(this.state.playerCriticalMultiplier * 100)
                  )}
                  %
                </small>
              </div>
            </div>
            <div className="userInterface-stats-summary-row">
              <div className="userInterface-stats-summary-section mx-auto">
                <img
                  data-toggle="tooltip"
                  title="Player health"
                  data-placement="top"
                  draggable="false"
                  alt="player health"
                  className="userInterface-stats-summary-section-image"
                  src={playerHealthImage}
                />
                <small className="userInterface-stats-summary-section-paragraph">
                  {this.renderNumberWithAbbreviations(
                    this.state.playerHealthMax
                  )}
                </small>
              </div>
              <div className="userInterface-stats-summary-section mx-auto">
                <img
                  data-toggle="tooltip"
                  title="Total DPS"
                  data-placement="top"
                  draggable="false"
                  alt="click per second"
                  className="userInterface-stats-summary-section-image"
                  src={clickPerSecondDamageImage}
                />
                <small className="userInterface-stats-summary-section-paragraph">
                  {this.renderNumberWithAbbreviations(
                    this.calculateTotalDamagePerSecond()
                  )}
                </small>
              </div>
              <div className="userInterface-stats-summary-section mx-auto">
                <img
                  data-toggle="tooltip"
                  title="Double attack chance"
                  data-placement="top"
                  draggable="false"
                  alt="double attack chance"
                  className="userInterface-stats-summary-section-image"
                  src={doubleAttackImage}
                />
                <small className="userInterface-stats-summary-section-paragraph">
                  {this.renderNumberWithAbbreviations(
                    this.state.playerDoubleAttackChance
                  )}
                  %
                </small>
              </div>
            </div>
          </div>
          <div className="userInterface-stats-row">
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total player attacks
              </small>
              <p>{this.state.totalPlayerAttacks.toLocaleString()}</p>
            </div>
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total player damage
              </small>
              <p>
                {this.renderNumberWithAbbreviations(
                  this.state.totalPlayerDamageDealt
                )}
              </p>
            </div>
          </div>

          <div className="userInterface-stats-row">
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total pet damage
              </small>
              <p>
                {this.renderNumberWithAbbreviations(
                  this.state.totalPetDamageDealt
                )}
              </p>
            </div>
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total kills
              </small>
              <p>{this.state.totalEnemiesKilled.toLocaleString()}</p>
            </div>
          </div>

          <div className="userInterface-stats-row">
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total money earned
              </small>
              <p>
                {this.renderNumberWithAbbreviations(
                  this.state.totalMoneyEarned
                )}
              </p>
            </div>
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total money spent
              </small>
              <p>
                {this.renderNumberWithAbbreviations(this.state.totalMoneySpent)}
              </p>
            </div>
          </div>

          <div className="userInterface-stats-row">
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total skills used
              </small>
              <p>{this.state.totalSkillsUsed.toLocaleString()}</p>
            </div>
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total player deaths
              </small>
              <p>{this.state.totalPlayerDeaths.toLocaleString()}</p>
            </div>
          </div>
          <div className="userInterface-stats-row">
            <div className="userInterface-stats-row-child mx-auto">
              <small className="userInterface-stats-category">
                Total potions used
              </small>
              <p>{this.state.totalTimesHealed.toLocaleString()}</p>
            </div>
          </div>
          <small>Check out your stats to know more about your adventure!</small>
        </div>
      );
    }
    // Quests tab selected
    if (this.state.leftMenuSettingSelected === "Quests") {
      return (
        <div id="userInterface-stats-div">
          <p>
            <strong>Quests</strong>
          </p>
          {/* Total AP */}
          <p>
            {this.state.adventurePoints}
            <img
              className="userInterface-quests-logo"
              src={achievementPointImage}
            />
          </p>
          {/* Quest #1  -  Player attacks */}
          {/* Description */}
          <small className="userInterface-stats-category">
            Attack the enemy{" "}
            {this.renderNumberWithAbbreviations(
              this.state.quests.playerAttacks.nextRequired
            )}{" "}
            times.
          </small>{" "}
          {/* Achievement Points */}
          <small>
            {this.state.achievementPointImage}{" "}
            <img
              className="userInterface-quests-logo"
              src={achievementPointImage}
            />
            {this.state.quests.playerAttacks.adventurePointsHeld} AP
          </small>
          {/* Done/Required summary */}
          <p>
            {this.renderNumberWithAbbreviations(this.state.totalPlayerAttacks)}/
            {this.renderNumberWithAbbreviations(
              this.state.quests.playerAttacks.nextRequired
            )}
          </p>
          {/* Quest #2  -  Pet damage */}
          {/* Description */}
          <small className="userInterface-stats-category">
            Use your pets to deal{" "}
            {this.renderNumberWithAbbreviations(
              this.state.quests.petDamageDealt.nextRequired
            )}{" "}
            damage.
          </small>{" "}
          {/* Achievement Points */}
          <small>
            {this.state.achievementPointImage}{" "}
            <img
              className="userInterface-quests-logo"
              src={achievementPointImage}
            />
            {this.state.quests.petDamageDealt.adventurePointsHeld} AP
          </small>
          {/* Done/Required summary */}
          <p>
            {this.renderNumberWithAbbreviations(this.state.totalPetDamageDealt)}
            /
            {this.renderNumberWithAbbreviations(
              this.state.quests.petDamageDealt.nextRequired
            )}
          </p>
          {/* Quest #3  -  Player damage */}
          {/* Description */}
          <small className="userInterface-stats-category">
            Actively attack the enemy to deal{" "}
            {this.renderNumberWithAbbreviations(
              this.state.quests.playerDamageDealt.nextRequired
            )}{" "}
            damage.
          </small>{" "}
          {/* Achievement Points */}
          <small>
            {this.state.achievementPointImage}{" "}
            <img
              className="userInterface-quests-logo"
              src={achievementPointImage}
            />
            {this.state.quests.playerDamageDealt.adventurePointsHeld} AP
          </small>
          {/* Done/Required summary */}
          <p>
            {this.renderNumberWithAbbreviations(
              this.state.totalPlayerDamageDealt
            )}
            /
            {this.renderNumberWithAbbreviations(
              this.state.quests.playerDamageDealt.nextRequired
            )}
          </p>
          {/* Quest #4  -  Total money earned */}
          {/* Description */}
          <small className="userInterface-stats-category">
            Earn a total of{" "}
            {this.renderNumberWithAbbreviations(
              this.state.quests.moneyEarned.nextRequired
            )}{" "}
            coins.
          </small>{" "}
          {/* Achievement Points */}
          <small>
            {this.state.achievementPointImage}{" "}
            <img
              className="userInterface-quests-logo"
              src={achievementPointImage}
            />
            {this.state.quests.moneyEarned.adventurePointsHeld} AP
          </small>
          {/* Done/Required summary */}
          <p>
            {this.renderNumberWithAbbreviations(this.state.totalMoneyEarned)}/
            {this.renderNumberWithAbbreviations(
              this.state.quests.moneyEarned.nextRequired
            )}
          </p>
          {/* Quest #5  -  Total skills used */}
          {/* Description */}
          <small className="userInterface-stats-category">
            Use your active skills{" "}
            {this.state.quests.skillsUsed.nextRequired.toLocaleString()} times.
          </small>{" "}
          {/* Achievement Points */}
          <small>
            {this.state.achievementPointImage}{" "}
            <img
              className="userInterface-quests-logo"
              src={achievementPointImage}
            />
            {this.state.quests.skillsUsed.adventurePointsHeld} AP
          </small>
          {/* Done/Required summary */}
          <p>
            {this.state.totalSkillsUsed.toLocaleString()}/
            {this.state.quests.skillsUsed.nextRequired.toLocaleString()}
          </p>
          {/* Quest #6  -  Total player heals */}
          {/* Description */}
          <small className="userInterface-stats-category">
            Heal yourself with potions{" "}
            {this.state.quests.timesHealed.nextRequired.toLocaleString()} times.
          </small>{" "}
          {/* Achievement Points */}
          <small>
            {this.state.achievementPointImage}{" "}
            <img
              className="userInterface-quests-logo"
              src={achievementPointImage}
            />
            {this.state.quests.timesHealed.adventurePointsHeld} AP
          </small>
          {/* Done/Required summary */}
          <p>
            {this.state.totalTimesHealed.toLocaleString()}/
            {this.state.quests.timesHealed.nextRequired.toLocaleString()}
          </p>
          {/* Quest #7  -  Total enemies killed */}
          {/* Description */}
          <small className="userInterface-stats-category">
            Kill {this.state.quests.enemiesKilled.nextRequired.toLocaleString()}{" "}
            enemies.
          </small>{" "}
          {/* Achievement Points */}
          <small>
            {this.state.achievementPointImage}{" "}
            <img
              className="userInterface-quests-logo"
              src={achievementPointImage}
            />
            {this.state.quests.enemiesKilled.adventurePointsHeld} AP
          </small>
          {/* Done/Required summary */}
          <p>
            {this.state.totalEnemiesKilled.toLocaleString()}/
            {this.state.quests.enemiesKilled.nextRequired.toLocaleString()}
          </p>
          <small>Collect AP and progress in your adventure!</small>
        </div>
      );
    }
    // Debug tab selected
    if (this.state.leftMenuSettingSelected === "Debug") {
      return (
        <div
          id="userInterface-debug-div"
          data-toggle="tooltip"
          title="The idle interface is currently a work in progress!"
          data-placement="top"
        >
          <p>
            <strong>Debug</strong>
          </p>
          <div />
          <div className="userInterface-debug-div">
            <small className="userInterface-debug-category">
              <button
                type="button"
                class="btn btn-warning btn-sm"
                onClick={() => {
                  this.giveItemDebug("coins");
                }}
              >
                Coins +1,000,000
              </button>
            </small>
          </div>
          <div className="userInterface-debug-div">
            <small className="userInterface-debug-category">
              <button
                type="button"
                class="btn btn-warning btn-sm"
                onClick={() => {
                  this.giveItemDebug("potions");
                }}
              >
                Potions +1,000
              </button>
            </small>
          </div>
          <div className="userInterface-debug-div">
            <small className="userInterface-debug-category">
              <button
                type="button"
                class="btn btn-warning btn-sm"
                onClick={() => {
                  this.giveItemDebug("stages");
                }}
              >
                Stages +10
              </button>
            </small>
          </div>
          <div className="userInterface-debug-div">
            <small className="userInterface-debug-category">
              <button
                type="button"
                class="btn btn-warning btn-sm"
                onClick={() => {
                  this.giveItemDebug("levels");
                }}
              >
                Player level +1
              </button>
            </small>
          </div>
          <small>
            Use the debug screen to speed your progress up in order to test the
            game more efficiently.
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
                Lv. {this.state.pets.petOne.upgradeLevel}
              </small>
            </div>
            <small className="userInterface-pets-pet-dps mx-auto">
              <img
                draggable="false"
                alt="click per second"
                src={clickPerSecondDamageImage}
              />
              {/* The attack which would be added to the pet after the upgrade */}
              {this.renderNumberWithAbbreviations(
                this.state.pets.petOne.damagePerSecondCurrent
              )}{" "}
              (+
              {this.renderPetDamageAfterUpgrade("petOne")})
            </small>
            <small className="userInterface-pets-pet-price mx-auto">
              {this.renderNumberWithAbbreviations(
                this.state.pets.petOne.upgradePrice
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
                this.petLevelUpgrade("petOne");
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
                Lv. {this.state.pets.petTwo.upgradeLevel}
              </small>
            </div>
            <small className="userInterface-pets-pet-dps mx-auto">
              <img
                draggable="false"
                alt="click per second"
                src={clickPerSecondDamageImage}
              />
              {/* The attack which would be added to the pet after the upgrade */}
              {this.renderNumberWithAbbreviations(
                this.state.pets.petTwo.damagePerSecondCurrent
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
                this.petLevelUpgrade("petTwo");
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
                Lv. {this.state.pets.petThree.upgradeLevel}
              </small>
            </div>
            <small className="userInterface-pets-pet-dps mx-auto">
              <img
                draggable="false"
                alt="click per second"
                src={clickPerSecondDamageImage}
              />
              {/* The attack which would be added to the pet after the upgrade */}
              {this.renderNumberWithAbbreviations(
                this.state.pets.petThree.damagePerSecondCurrent
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
                this.petLevelUpgrade("petThree");
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
                Lv. {this.state.pets.petFour.upgradeLevel}
              </small>
            </div>
            <small className="userInterface-pets-pet-dps mx-auto">
              <img
                draggable="false"
                alt="click per second"
                src={clickPerSecondDamageImage}
              />
              {/* The attack which would be added to the pet after the upgrade */}
              {this.renderNumberWithAbbreviations(
                this.state.pets.petFour.damagePerSecondCurrent
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
                this.petLevelUpgrade("petFour");
              }}
            >
              +
            </button>
          </div>
        </div>
      );
    }
  };

  changeToRandomBackground = () => {
    let randomImageNumber = Math.round(Math.random() * 5);
    // If the current background image is not the same as the new randomised one
    if (
      this.state.backgroundImageCurrent !==
      this.state.backgroundImages[randomImageNumber]
    ) {
      // Update the background image
      this.setState({
        backgroundImageCurrent: this.state.backgroundImages[randomImageNumber]
      });
      // If the new random image is the same as the current one
    } else {
      // Recursively call the function until the picture is different
      this.changeToRandomBackground();
    }
  };

  renderBackgroundImage = () => {
    let backgroundDivStyle = {
      backgroundImage: "url(" + this.state.backgroundImageCurrent + ")"
    };
    return backgroundDivStyle;
  };

  componentDidMount() {
    document.addEventListener("keyup", this.handleGlobalKeyboardInput, false);
  }
  componentWillUnmount() {
    document.removeEventListener(
      "keyup",
      this.handleGlobalKeyboardInput,
      false
    );
  }

  // Return the number formatted for readability
  renderNumberWithAbbreviations = number => {
    // 1k - 999k
    if (number >= 1000 && number < 1000000) {
      return Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k";
    }
    // 1m - 999m
    if (number >= 1000000 && number < 1000000000) {
      return Math.sign(number) * (Math.abs(number) / 1000000).toFixed(1) + "m";
    }
    // 1b - 999b
    if (number >= 1000000000 && number < 1000000000000) {
      return (
        Math.sign(number) * (Math.abs(number) / 1000000000).toFixed(1) + "b"
      );
    }
    // 1t - 999t
    if (number >= 1000000000000 && number < 1000000000000000) {
      return (
        Math.sign(number) * (Math.abs(number) / 1000000000000).toFixed(1) + "t"
      );
    } else {
      return number;
    }
  };

  render() {
    return (
      <div style={this.renderBackgroundImage()} id="userInterface-div">
        <h1 id="userInterface-h1">Fantasia</h1>
        {/* Resources [ TOP ] */}
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
              {this.state.relics}
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
              {this.state.lootBags}
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
              {this.state.food}
            </p>
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
                  <small>Quests</small>
                </button>
              </div>
              <div className="mx-auto" id="userInterface-userSettings-menu-tab">
                <button
                  type="button"
                  class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                  onClick={this.fetchLeftMenuSettingSelection}
                >
                  <small>Stats</small>
                </button>
              </div>
              {this.renderDebugMenu()}
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
              <p
                className="mx-auto"
                id="userInterface-inventory-money-paragraph"
              >
                {this.renderNumberWithAbbreviations(this.state.coins)}
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
              Kills for next stage:{" "}
              {this.state.stageEnemiesToKill - this.state.stageEnemiesKilled}
            </small>
          </div>
          <div class="form-check" id="userInterface-stages-stage-checkbox-div">
            <input
              class="form-check-input"
              type="checkbox"
              defaultChecked="true"
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
              draggable="false"
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
              draggable="false"
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
              {this.generateLootBagDrop()}
            </div>
          </div>
        </div>

        {/* Skills [ BOTTOM ] */}
        <div id="userInterface-skills-div">
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              draggable="false"
              alt="skill 1"
              className={this.renderSkillBadge(1)}
              src={skillImageOne}
              onClick={() => {
                this.playerUseActiveSkill(1);
              }}
              data-toggle="tooltip"
              title={this.renderSkillOneDescription()}
              data-placement="top"
            />
          </div>
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              draggable="false"
              alt="skill 2"
              className={this.renderSkillBadge(2)}
              src={skillImageTwo}
              onClick={() => {
                this.playerUseActiveSkill(2);
              }}
              data-toggle="tooltip"
              title={this.renderSkillTwoDescription()}
              data-placement="top"
            />
          </div>
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              draggable="false"
              alt="skill 3"
              className={this.renderSkillBadge(3)}
              src={skillImageThree}
              onClick={() => {
                this.playerUseActiveSkill(3);
              }}
              data-toggle="tooltip"
              title={this.renderSkillThreeDescription()}
              data-placement="top"
            />
          </div>
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              draggable="false"
              alt="skill 4"
              className={this.renderSkillBadge(4)}
              src={skillImageFour}
              onClick={() => {
                this.playerUseActiveSkill(4);
              }}
              data-toggle="tooltip"
              title={this.renderSkillFourDescription()}
              data-placement="top"
            />
          </div>
          <div className="userInterface-skills-skill-div mx-auto">
            <img
              draggable="false"
              alt="skill 5"
              className="userInterface-skills-skill-img scale"
              src={skillImageFive}
              data-toggle="tooltip"
              title="Rebirth is coming soon!"
              data-placement="top"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default UserInterface;
