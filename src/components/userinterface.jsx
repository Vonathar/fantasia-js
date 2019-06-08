import React, { Component } from "react";
import ResourcesBar from "./resourcesBar";
import BattleLog from "./battleLog";
import LeftMenu from "./leftMenu";
import Inventory from "./inventory";
import StagesBar from "./stagesBar";
import BattleArea from "./battleArea";
import SkillBar from "./skillBar";
import TutorialScreen from "./tutorialScreen";
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
// Deck
import playerExperienceImage from "../img/playerExperienceTutorial.png";
import coinImage from "../img/coin_1.png";
import playerHealthImage from "../img/health_1.png";
import healthPotionImage from "../img/resource_3.png";
import doubleAttackImage from "../img/doubleAttack_1.png";
import criticalMultiplierImage from "../img/critical_1.png";
import criticalChanceImage from "../img/critical_2.png";
import clickDamageImage from "../img/cps_1.png";
import clickPerSecondDamageImage from "../img/dps_1.png";

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
          To read the <span className="text-warning">tutorial</span>, press [
          <span className="text-warning">T</span>]!
        </small>
      </p>
    ],
    /* Global settings */
    isDebugModeActive: false,
    isTutorialScreenActive: false,
    tutorialScreenSettingSelected: "Player",
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
          1000000,
          2500000,
          5000000,
          7500000,
          10000000
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
          500000000,
          1000000000,
          5000000000,
          10000000000,
          25000000000,
          50000000000,
          100000000000,
          250000000000,
          500000000000,
          1000000000000,
          2500000000000,
          5000000000000,
          10000000000000,
          25000000000000,
          50000000000000,
          100000000000000
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
          500000000,
          1000000000,
          5000000000,
          10000000000,
          25000000000,
          50000000000,
          100000000000,
          250000000000,
          500000000000,
          1000000000000,
          2500000000000,
          5000000000000,
          10000000000000,
          25000000000000,
          50000000000000,
          100000000000000
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
    playerRankCurrent: "Rogue",
    playerRanks: [
      "Rogue",
      "Hunter",
      "Mercenary",
      "Fighter",
      "Soldier",
      "Assassin",
      "Champion",
      "Knight",
      "Templar",
      "Slayer",
      "Berserker",
      "Hero",
      "Legend"
    ],
    playerHealthCurrent: 500,
    playerHealthMax: 500,
    playerExperienceCurrent: 0,
    playerExperienceRequired: 750,
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
    deck: {
      cardOne: {
        name: "Flager",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusExperience",
        bonusImage: playerExperienceImage,
        currentBonusMultiplier: 0
      },
      cardTwo: {
        name: "Vilkas",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusHealth",
        bonusImage: playerHealthImage,
        currentBonusMultiplier: 0
      },
      cardThree: {
        name: "Serpe",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusClickDamage",
        bonusImage: clickDamageImage,
        currentBonusMultiplier: 0
      },
      cardFour: {
        name: "Escarab",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDamagePerSecond",
        bonusImage: clickPerSecondDamageImage,
        currentBonusMultiplier: 0
      },
      cardFive: {
        name: "Dudu",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCoinDrop",
        bonusImage: coinImage,
        currentBonusMultiplier: 0
      },
      cardSix: {
        name: "Plandai",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalChance",
        bonusImage: criticalChanceImage,
        basicBonusMultiplier: 1.01,
        currentBonusMultiplier: 0
      },
      cardSeven: {
        name: "Gomba",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalDamage",
        bonusImage: criticalMultiplierImage,
        currentBonusMultiplier: 0
      },
      cardEight: {
        name: "Larme",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDoubleAttackChance",
        bonusImage: doubleAttackImage,
        currentBonusMultiplier: 0
      },
      cardNine: {
        name: "Draugur",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusPotionDropRate",
        bonusImage: healthPotionImage,
        currentBonusMultiplier: 0
      },
      cardTen: {
        name: "Slugus",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalDamage",
        bonusImage: criticalMultiplierImage,
        currentBonusMultiplier: 0
      },
      cardEleven: {
        name: "Renard",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDoubleAttackChance",
        bonusImage: doubleAttackImage,
        currentBonusMultiplier: 0
      },
      cardTwelve: {
        name: "Lacerta",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusPotionDropRate",
        bonusImage: healthPotionImage,
        currentBonusMultiplier: 0
      },
      cardThirteen: {
        name: "Rhith",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusExperience",
        bonusImage: playerExperienceImage,
        currentBonusMultiplier: 0
      },
      cardFourteen: {
        name: "Okolo",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusHealth",
        bonusImage: playerHealthImage,
        currentBonusMultiplier: 0
      },
      cardFifteen: {
        name: "Pajaro",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusClickDamage",
        bonusImage: clickDamageImage,
        currentBonusMultiplier: 0
      },
      cardSixteen: {
        name: "Veiviser",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDamagePerSecond",
        bonusImage: clickPerSecondDamageImage,
        currentBonusMultiplier: 0
      },
      cardSeventeen: {
        name: "Arania",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCoinDrop",
        bonusImage: coinImage,
        currentBonusMultiplier: 0
      },
      cardEighteen: {
        name: "Stir",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalChance",
        bonusImage: criticalChanceImage,
        basicBonusMultiplier: 1.01,
        currentBonusMultiplier: 0
      },
      cardNineteen: {
        name: "Nube",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalDamage",
        bonusImage: criticalMultiplierImage,
        currentBonusMultiplier: 0
      },
      cardTwenty: {
        name: "Ovum",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDoubleAttackChance",
        bonusImage: doubleAttackImage,
        currentBonusMultiplier: 0
      },
      cardTwentyone: {
        name: "Skape",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusPotionDropRate",
        bonusImage: healthPotionImage,
        currentBonusMultiplier: 0
      },

      cardTwentytwo: {
        name: "Drysor",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusExperience",
        bonusImage: playerExperienceImage,
        currentBonusMultiplier: 0
      },
      cardTwentythree: {
        name: "Lapis",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusHealth",
        bonusImage: playerHealthImage,
        currentBonusMultiplier: 0
      },
      cardTwentyfour: {
        name: "Maus",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusClickDamage",
        bonusImage: clickDamageImage,
        currentBonusMultiplier: 0
      },
      cardTwentyfive: {
        name: "Frango",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDamagePerSecond",
        bonusImage: clickPerSecondDamageImage,
        currentBonusMultiplier: 0
      },
      cardTwentysix: {
        name: "Helovinas",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCoinDrop",
        bonusImage: coinImage,
        currentBonusMultiplier: 0
      },
      cardTwentyseven: {
        name: "Diabolus",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalChance",
        bonusImage: criticalChanceImage,
        basicBonusMultiplier: 1.01,
        currentBonusMultiplier: 0
      }
    },
    deckBonuses: {
      bonusExperience: 1,
      bonusHealth: 1,
      bonusClickDamage: 1,
      bonusDamagePerSecond: 1,
      bonusCoinDrop: 1,
      bonusCriticalChance: 1,
      bonusCriticalDamage: 1,
      bonusDoubleAttackChance: 1,
      bonusPotionDropRate: 1
    },
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
      },
      petFive: {
        basicPrice: 50000,
        firstPurchasePrice: 250000,
        upgradePrice: 50000,
        upgradeLevel: 0,
        damagePerSecondBase: 10000,
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
      "Flager",
      "Vilkas",
      "Serpe",
      "Escarab",
      "Dudu",
      "Plandai",
      "Gomba",
      "Larme",
      "Draugur",
      "Slugus",
      "Renard",
      "Lacerta",
      "Rhith",
      "Okolo",
      "Pajaro",
      "Veiviser",
      "Arania",
      "Stir",
      "Nube",
      "Ovum",
      "Skape",
      "Drysor",
      "Lapis",
      "Maus",
      "Frango",
      "Helovinas",
      "Diabolus"
    ],
    bossImages: [bossImageOne, bossImageTwo, bossImageThree],
    bossNames: ["Ira", "Superbia", "Avaritia"],
    enemyNameCurrent: "Drysor",
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
        priceMultiplier: 1.5,
        price: 1500,
        purchasePrice: 1000
      },
      criticalChance: {
        level: 0,
        priceMultiplier: 1.5,
        price: 750,
        purchasePrice: 500
      },
      criticalMultiplier: {
        level: 0,
        priceMultiplier: 1.5,
        price: 750,
        purchasePrice: 500
      }
    },
    /* Skill values */

    skills: {
      skillOne: {
        name: "Quick Stab",
        level: 0,
        cooldown: 30000,
        cooldownReductionByLevelUp: 1000,
        isReady: true,
        numberOfAttacks: 3,
        numberOfAttacksLevelsToUpgrade: [10, 50, 100, 200, 350, 500],
        damageMultiplier: 2,
        levelToUnlock: 3,
        levelsToUpgrade: [
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
        ]
      },
      skillTwo: {
        name: "Mark of the Beast",
        level: 0,
        cooldown: 60000,
        cooldownReductionByLevelUp: 2000,
        duration: 10000,
        isReady: true,
        isActive: false,
        damageMultiplier: 1.5,
        levelToUnlock: 5,
        levelsToUpgrade: [
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
        ]
      },
      skillThree: {
        name: "Animal training",
        level: 0,
        cooldown: 120000,
        cooldownReductionByLevelUp: 4000,
        duration: 40000,
        isReady: true,
        isActive: false,
        damageMultiplier: 25,
        levelToUnlock: 12,
        levelsToUpgrade: [
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
        ]
      },
      skillFour: {
        name: "Fruit of Madness",
        level: 0,
        cooldown: 30000,
        cooldownReductionByLevelUp: 1000,
        isReady: true,
        numberOfAttacks: 3,
        numberOfAttacksLevelsToUpgrade: [53, 103, 153, 203, 343, 483],
        damageMultiplier: 1.5,
        levelToUnlock: 21,
        levelsToUpgrade: [
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
        ]
      }
    },

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

  // Card deck UI

  // Check which deck card should receive experience
  deckCardAddExperience = () => {
    // Create a copy of the object from the state
    let deck = { ...this.state.deck };
    // Iterate through each key of the object
    for (let card in deck) {
      // If the name of the card is the same as the enemy which has just been killed
      if (deck[card].name === this.state.enemyNameCurrent) {
        // Add 1 experience point to the relative card
        deck[card].experienceCurrent += 1;
        if (deck[card].experienceCurrent >= deck[card].experienceRequired) {
          this.deckCardLevelUp(card);
        }
      }
    }
    // Set the state with the copy of deck
    this.setState({ deck });
  };

  // Increase the level of the card passes as a parameter
  deckCardLevelUp = cardNumber => {
    // Create a copy of the object from the state
    let deck = { ...this.state.deck };
    // Increase the level
    deck[cardNumber].level += 1;
    // Increase the experience required
    deck[cardNumber].experienceRequired = deck[cardNumber].level * 6;
    // Reset the current experience
    deck[cardNumber].experienceCurrent = 0;
    this.deckBonusIncreaseOnCardLevelUp([cardNumber]);
    // Set the state with the copy of deck
    this.setState({ deck });
    this.pushNewParagraphToBattleLog(
      <p>
        <small className="text-warning">
          Your {deck[cardNumber].name} card reached level{" "}
          {deck[cardNumber].level}!
        </small>
      </p>
    );
  };

  // Increase the overall deck bonus on level up
  deckBonusIncreaseOnCardLevelUp = cardNumber => {
    // Create a copy of the object from the state
    let deckBonuses = { ...this.state.deckBonuses };
    // Iterate through each key of the object
    for (let bonus in deckBonuses) {
      // Find the bonus type of the card passed as a parameter
      if (bonus === this.state.deck.cardOne.bonusType) {
        // Increase it value
        deckBonuses[bonus] += 0.05;
      }
    }
    // Set the state with the copy of deckBonuses
    this.setState({ deckBonuses });
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
    if (
      this.state.coins >= heroUpgrades[upgradeName].price &&
      this.state.coins >= heroUpgrades[upgradeName].purchasePrice
    ) {
      // If it's the first upgrade
      if (heroUpgrades[upgradeName].level === 0) {
        this.setState({
          // Take off the money from the player
          coins: this.state.coins - heroUpgrades[upgradeName].purchasePrice,
          // Update player stats
          totalMoneySpent:
            this.state.totalMoneySpent + heroUpgrades[upgradeName].purchasePrice
        });
        // If it's not the first upgrade
      } else {
        this.setState({
          // Take off the money from the player
          coins: this.state.coins - heroUpgrades[upgradeName].price,
          // Update player stats
          totalMoneySpent:
            this.state.totalMoneySpent + heroUpgrades[upgradeName].price
        });
      }
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
          playerDoubleAttackChance: this.state.playerDoubleAttackChance + 0.3
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

  // Sum of all the DPS sources
  calculateTotalDamagePerSecond = () => {
    if (this.state.isHeroSkillTwoActive) {
      return (
        (this.state.pets.petOne.damagePerSecondCurrent +
          this.state.pets.petTwo.damagePerSecondCurrent +
          this.state.pets.petThree.damagePerSecondCurrent +
          this.state.pets.petFour.damagePerSecondCurrent +
          this.state.pets.petFive.damagePerSecondCurrent) *
        this.state.heroSkillTwoDamageMultiplier
      );
    } else
      return (
        this.state.pets.petOne.damagePerSecondCurrent +
        this.state.pets.petTwo.damagePerSecondCurrent +
        this.state.pets.petThree.damagePerSecondCurrent +
        this.state.pets.petFour.damagePerSecondCurrent +
        this.state.pets.petFive.damagePerSecondCurrent
      );
  };

  // Sum of all the DPS sources
  calculateTotalClickDamage = () => {
    if (this.state.skills.skillThree.isActive) {
      return Math.round(
        this.state.playerAttackPlaceholder +
          (this.calculateTotalDamagePerSecond() / 100) *
            this.state.skills.skillThree.damageMultiplier
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

  checkSkillForLevelUp = skillNumber => {
    let skills = { ...this.state.skills };
    // If the skill has not been unlocked yet
    if (this.state.playerLevel === skills[skillNumber].levelToUnlock) {
      skills[skillNumber].level += 1;
      // Add a skill unlocked paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>You unlocked </small>
          <small className="text-warning">{skills[skillNumber].name}!</small>
        </p>
      );
    }
    // If the skill has already been unlocked
    if (skills[skillNumber].levelsToUpgrade.includes(this.state.playerLevel)) {
      skills[skillNumber].cooldown -=
        skills[skillNumber].cooldownReductionByLevelUp;
      skills[skillNumber].level += 1;

      // Add a skill leveled up paragraph to the Battle Log
      this.pushNewParagraphToBattleLog(
        <p>
          <small>Your skill </small>
          <small className="text-warning">{skills[skillNumber].name}</small>
          <small> reached level </small>{" "}
          <small>{skills[skillNumber].level}</small> <small>!</small>
        </p>
      );

      // Level up attack count
      if (
        skills[skillNumber] === "skillOne" ||
        skills[skillNumber] === "skillThree" ||
        skills[skillNumber] === "skillFour"
      ) {
        if (
          skills[skillNumber].numberOfAttacksLevelsToUpgrade.includes(
            this.state.playerLevel
          )
        ) {
          skills[skillNumber].numberOfAttacks += 1;
        }
      }

      // Skill #1
      if (skills[skillNumber] === "skillOne") {
        skills[skillNumber].damageMultiplier =
          // Round to 2 decimals max (if applies)
          Math.round(2 * Math.pow(1.2, this.state.heroSkillOneLevel) * 100) /
          100;
      }

      // Skill #2
      if (skills[skillNumber] === "skillTwo") {
        skills[skillNumber].damageMultiplier =
          Math.round(2 * Math.pow(1.1, this.state.heroSkillTwoLevel) * 100) /
          100;
      }
      // Skill #3
      if (skills[skillNumber] === "skillThree") {
        skills[skillNumber].damageMultiplier =
          Math.round(25 * Math.pow(1.1, this.state.heroSkillThreeLevel) * 100) /
          100;
      }
      // Skill #4
      if (skills[skillNumber] === "skillFour") {
        skills[skillNumber].damageMultiplier =
          Math.round(1.5 * Math.pow(1.2, this.state.heroSkillFourLevel) * 100) /
          100;
      }
    }
    this.setState({ skills });
  };

  // Change the title of the player
  playerRankUp = () => {
    this.setState({
      playerRankCurrent: this.state.playerRanks[
        this.state.playerRanks.indexOf(this.state.playerRankCurrent) + 1
      ]
    });
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
      playerExperienceRequired: 500 * Math.pow(1.06, this.state.playerLevel),
      // Increase the max health, including the deck health bonus
      playerHealthMax: Math.round(
        500 *
          Math.pow(1.05, this.state.playerLevel) *
          this.state.deckBonuses.bonusHealth
      ),
      playerHealthCurrent: Math.round(
        500 * Math.pow(1.05, this.state.playerLevel)
      )
    });

    // If the player is at the required level
    if (
      this.state.playerLevel === 20 ||
      this.state.playerLevel === 50 ||
      this.state.playerLevel === 80 ||
      this.state.playerLevel === 100 ||
      this.state.playerLevel === 120 ||
      this.state.playerLevel === 150 ||
      this.state.playerLevel === 180 ||
      this.state.playerLevel === 200 ||
      this.state.playerLevel === 230 ||
      this.state.playerLevel === 250 ||
      this.state.playerLevel === 270 ||
      this.state.playerLevel === 300
    ) {
      // Increase the rank
      this.playerRankUp();
    }

    this.checkSkillForLevelUp("skillOne");
    this.checkSkillForLevelUp("skillTwo");
    this.checkSkillForLevelUp("skillThree");
    this.checkSkillForLevelUp("skillFour");
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
      this.playerUseActiveSkill("skillOne");
    }
    if (event.key === "2") {
      this.playerUseActiveSkill("skillTwo");
    }
    if (event.key === "3") {
      this.playerUseActiveSkill("skillThree");
    }
    if (event.key === "4") {
      this.playerUseActiveSkill("skillFour");
    }
    if (event.key === "d") {
      this.setState({
        isDebugModeActive: !this.state.isDebugModeActive,
        leftMenuSettingSelected: "Hero"
      });
    }
    if (event.key === "t") {
      this.setState({
        isTutorialScreenActive: !this.state.isTutorialScreenActive,
        leftMenuSettingSelected: "Hero"
      });
      console.log("Tutorial mode toggled");
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
    if (
      this.calculateRandomDropChance(
        this.state.foodDropChance * this.state.deckBonuses.bonusPotionDropRate
      )
    ) {
      this.setState({
        foodToBeCollected:
          this.state.foodToBeCollected + this.state.enemyFoodHeld
      });
    }

    // If there are more than 50 uncollected drops
    if (this.state.coinsToBeCollected + this.state.foodToBeCollected > 40) {
      // Collect all of them
      this.collectCoinsOnHover();
      this.collectFoodOnHover();
    }

    /* SURE drops - things which are guaranteed, and WILL drop */
    // Give coins, 100% chance
    let coinsDroppedByEnemy;
    if (
      // If the enemy is a Drysor enemy
      this.state.enemyNameCurrent === "Drysor" ||
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
        coinsDroppedByEnemy *
          this.state.enemyCoinsValue *
          this.state.deckBonuses.bonusCoinDrop
    });
    // Give XP, 100% chance
    this.setState({
      playerExperienceCurrent:
        this.state.playerExperienceCurrent +
        this.state.enemyExperienceHeld * this.state.deckBonuses.bonusExperience
    });
  };

  enemyDie = () => {
    this.deckCardAddExperience();
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
      // After 0.5 seconds
    }, 500);
  };

  // Calculate if the hit is critical based on the critical chance
  calculateDamageAfterMultipliers = () => {
    // The damage without any bonus
    let totalDamage = this.calculateTotalClickDamage();
    // Deck damage bonus (if any)
    totalDamage *= this.state.deckBonuses.bonusClickDamage;
    // If double hit
    if (
      this.state.playerDoubleAttackChance *
        this.state.deckBonuses.bonusDoubleAttackChance >=
      Math.random() * 101
    ) {
      totalDamage *= 2;
    }
    // If critical hit
    if (
      this.state.playerCriticalChance *
        this.state.deckBonuses.bonusCriticalChance >=
      Math.random() * 101
    ) {
      totalDamage +=
        this.state.playerCriticalMultiplier *
        this.state.deckBonuses.bonusCriticalDamage;
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
    // Create a copy of the object
    let skills = { ...this.state.skills };
    // Skill is [Ready/Unlocked] and enemy is alive
    if (
      skills[skillNumber].isReady &&
      skills[skillNumber].level !== 0 &&
      this.state.enemyHasHealth
    ) {
      // Set the skill on cooldown
      skills[skillNumber].isReady = false;
      setTimeout(() => {
        skills[skillNumber].isReady = this.setState({ skills });
      }, skills[skillNumber].cooldown);
      // Skills #1 and #4
      if (skillNumber === "skillOne" || skillNumber === "skillFour") {
        let numberOfAttacks = skills[skillNumber].numberOfAttacks;
        let skillActivate = () => {
          if (numberOfAttacks !== 0) {
            numberOfAttacks--;
            setTimeout(() => {
              this.setState({
                enemyHealthCurrent:
                  this.state.enemyHealthCurrent -
                  this.calculateTotalClickDamage() *
                    skills[skillNumber].damageMultiplier
              });
              skillActivate();
            }, 250);
          }
        };
        skillActivate();
        this.setState({ skills });
      }

      if (skillNumber === "skillTwo" || skillNumber === "skillThree") {
        skills[skillNumber].isActive = true;
        this.setState({ skills });
        // Set the skill back to inactive
        setTimeout(() => {
          skills[skillNumber].isActive = false;
          this.setState({ skills });
          // Add a 'Skill finished' paragraph to the Battle Log
          this.pushNewParagraphToBattleLog(
            <p>
              <small className="text-warning">{skills[skillNumber].name}</small>
              <small> expired.</small>
            </p>
          );
        }, this.state.skills[skillNumber].duration);
      }

      if (skillNumber === "skillOne") {
        // Add a 'Skill used' paragraph to the Battle Log
        this.pushNewParagraphToBattleLog(
          <p>
            <small>
              {skills[skillNumber].name} deals{" "}
              <span className="text-warning">
                {this.renderNumberWithAbbreviations(
                  Math.round(
                    this.calculateTotalClickDamage() *
                      skills[skillNumber].damageMultiplier *
                      skills[skillNumber].numberOfAttacks
                  )
                )}{" "}
                DMG
              </span>
              !
            </small>
          </p>
        );
      }

      if (skillNumber === "skillTwo") {
        // Add a 'Skill used' paragraph to the Battle Log
        this.pushNewParagraphToBattleLog(
          <p>
            <small>
              <span className="text-warning">{skills[skillNumber].name} </span>
              makes your pets{" "}
              <span className="text-warning">
                {Math.round(skills[skillNumber].damageMultiplier * 100)}%
              </span>{" "}
              stronger!
            </small>
          </p>
        );
      }

      if (skillNumber === "skillThree") {
        // Add a 'Skill used' paragraph to the Battle Log
        this.pushNewParagraphToBattleLog(
          <p>
            <small>
              <span className="text-warning">
                {this.state.skills[skillNumber].name}{" "}
              </span>
              makes your click damage stronger!
            </small>
          </p>
        );
      }

      if (skillNumber === "skillFour") {
        // Add a 'Skill used' paragraph to the Battle Log
        this.pushNewParagraphToBattleLog(
          <p>
            <small>
              {this.state.skills[skillNumber].name} deals{" "}
              <span className="text-warning">
                {this.renderNumberWithAbbreviations(
                  Math.round(
                    this.calculateTotalDamagePerSecond() *
                      this.state.skills[skillNumber].damageMultiplier *
                      this.state.skills[skillNumber].numberOfAttacks
                  )
                )}{" "}
                DMG
              </span>
              !
            </small>
          </p>
        );
      }
    }

    // Update the stats counter
    this.setState({ totalSkillsUsed: this.state.totalSkillsUsed + 1 });
    // Check if the quests are completed
    this.checkIfQuestConditionsMet("skillsUsed", this.state.totalSkillsUsed);
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
          this.state.enemyHealthCurrent -
          this.calculateTotalDamagePerSecond() *
            this.state.deckBonuses.bonusDamagePerSecond,
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

  /* Enemy drops UI 

     Drops are added to the inventory in the following order:
      1. generateXxxDrop()
      2. renderXxxDrop()
      3. collectXxxOnHover()

      ** NOTE: generateXxxDrop() and renderXxxDrop() are in the BattleArea Component! **

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
          Once the animation in triggered, the function waits 500ms (which is the time the animation takes to complete), and then
          adds the collected item to the inventory

  */

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
    }, 500);
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
    }, 5000);
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
    }, 500);
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

  /* Inventory UI*/
  fetchLeftMenuSettingSelection = event => {
    this.setState({ leftMenuSettingSelected: event.target.textContent });
  };

  fetchTutorialScreenSettingSelection = event => {
    this.setState({ tutorialScreenSettingSelected: event.target.textContent });
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

  renderStageBar = () => {
    if (!this.state.isTutorialScreenActive) {
      return <StagesBar mainState={this.state} />;
    }
  };

  render() {
    return (
      <div style={this.renderBackgroundImage()} id="userInterface-div">
        <h1 id="userInterface-h1">Fantasia</h1>
        {/* Resources bar [ TOP ] */}
        <ResourcesBar mainState={this.state} />
        {/* Battle log [ BOTTOM/RIGHT ] */}
        <BattleLog mainState={this.state} />
        {/* Left menu [ LEFT ] */}
        <LeftMenu
          mainState={this.state}
          fetchLeftMenuSettingSelection={this.fetchLeftMenuSettingSelection}
          renderDebugMenu={this.renderDebugMenu}
          renderNumberWithAbbreviations={this.renderNumberWithAbbreviations}
          heroUpgradeLevelUp={this.heroUpgradeLevelUp}
          petLevelUpgrade={this.petLevelUpgrade}
          calculateTotalClickDamage={this.calculateTotalClickDamage}
          calculateTotalDamagePerSecond={this.calculateTotalDamagePerSecond}
          giveItemDebug={this.giveItemDebug}
          petLevelUpgrade={this.petLevelUpgrade}
          fetchLeftMenuSettingSelection={this.fetchLeftMenuSettingSelection}
        />
        <Inventory
          mainState={this.state}
          renderNumberWithAbbreviations={this.renderNumberWithAbbreviations}
        />
        {/* Stages [ TOP ] */}
        {this.renderStageBar()}

        {/* Battle [ MIDDLE ] */}
        <BattleArea
          mainState={this.state}
          collectCoinsOnHover={this.collectCoinsOnHover}
          collectFoodOnHover={this.collectFoodOnHover}
          collectLootBagOnHover={this.collectLootBagOnHover}
          playerAttack={this.playerAttack}
        />

        {/* Skills [ BOTTOM ] */}
        <SkillBar
          mainState={this.state}
          playerUseActiveSkill={this.playerUseActiveSkill}
        />
        {/* Tutorial [MIDDLE] */}
        <TutorialScreen
          mainState={this.state}
          fetchTutorialScreenSettingSelection={
            this.fetchTutorialScreenSettingSelection
          }
          renderNumberWithAbbreviations={this.renderNumberWithAbbreviations}
        />
      </div>
    );
  }
}
export default UserInterface;
