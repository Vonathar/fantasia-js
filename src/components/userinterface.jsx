import React, { Component } from "react";
import ResourcesBar from "./resourcesBar";
import BattleLog from "./battleLog";
import LeftMenu from "./leftMenu";
import Inventory from "./inventory";
import StagesBar from "./stagesBar";
import BattleArea from "./battleArea";
import SkillBar from "./skillBar";
import TutorialScreen from "./tutorialScreen";
/* Backgrounds [IMG] */
// Green forest
import backgroundImageOne from "../img/stages/background_1.jpg";
// Dark forest
import backgroundImageTwo from "../img/stages/background_2.jpg";
// Magic forest
import backgroundImageThree from "../img/stages/background_3.jpg";
// Entrance to the city
import backgroundImageFour from "../img/stages/background_4.jpg";
// Forgotten road
import backgroundImageFive from "../img/stages/background_5.jpg";
// Haunted marketplace
import backgroundImageSix from "../img/stages/background_6.jpg";
// Inside the temple
import backgroundImageSeven from "../img/stages/background_7.jpg";
// Inferno
import backgroundImageEight from "../img/stages/background_8.jpg";
/* Enemy [IMG] */
// Green forest
import greenForestEnemyOne from "../img/stages/Green forest/greenForestEnemy_1.png";
import greenForestEnemyTwo from "../img/stages/Green forest/greenForestEnemy_2.png";
import greenForestEnemyThree from "../img/stages/Green forest/greenForestEnemy_3.png";
import greenForestEnemyFour from "../img/stages/Green forest/greenForestEnemy_4.png";
import greenForestEnemyFive from "../img/stages/Green forest/greenForestEnemy_5.png";
import greenForestEnemySix from "../img/stages/Green forest/greenForestEnemy_6.png";
import greenForestEnemySeven from "../img/stages/Green forest/greenForestEnemy_7.png";
import greenForestBossOne from "../img/stages/Green forest/greenForestBoss_1.png";
import greenForestBossTwo from "../img/stages/Green forest/greenForestBoss_2.png";
import greenForestBossThree from "../img/stages/Green forest/greenForestBoss_3.png";
// Dark forest
import darkForestEnemyOne from "../img/stages/Dark forest/darkForestEnemy_1.png";
import darkForestEnemyTwo from "../img/stages/Dark forest/darkForestEnemy_2.png";
import darkForestEnemyThree from "../img/stages/Dark forest/darkForestEnemy_3.png";
import darkForestEnemyFour from "../img/stages/Dark forest/darkForestEnemy_4.png";
import darkForestEnemyFive from "../img/stages/Dark forest/darkForestEnemy_5.png";
import darkForestEnemySix from "../img/stages/Dark forest/darkForestEnemy_6.png";
import darkForestEnemySeven from "../img/stages/Dark forest/darkForestEnemy_7.png";
import darkForestEnemyEight from "../img/stages/Dark forest/darkForestEnemy_8.png";
import darkForestBossOne from "../img/stages/Dark forest/darkForestBoss_1.png";
import darkForestBossTwo from "../img/stages/Dark forest/darkForestBoss_2.png";
import darkForestBossThree from "../img/stages/Dark forest/darkForestBoss_3.png";
// Magic forest
import magicForestEnemyOne from "../img/stages/Magic forest/magicForestEnemy_1.png";
import magicForestEnemyTwo from "../img/stages/Magic forest/magicForestEnemy_2.png";
import magicForestEnemyThree from "../img/stages/Magic forest/magicForestEnemy_3.png";
import magicForestEnemyFour from "../img/stages/Magic forest/magicForestEnemy_4.png";
import magicForestEnemyFive from "../img/stages/Magic forest/magicForestEnemy_5.png";
import magicForestEnemySix from "../img/stages/Magic forest/magicForestEnemy_6.png";
import magicForestEnemySeven from "../img/stages/Magic forest/magicForestEnemy_7.png";
import magicForestEnemyEight from "../img/stages/Magic forest/magicForestEnemy_8.png";
import magicForestEnemyNine from "../img/stages/Magic forest/magicForestEnemy_9.png";
import magicForestEnemyTen from "../img/stages/Magic forest/magicForestEnemy_10.png";
import magicForestBossOne from "../img/stages/Magic forest/magicForestBoss_1.png";
import magicForestBossTwo from "../img/stages/Magic forest/magicForestBoss_2.png";
import magicForestBossThree from "../img/stages/Magic forest/magicForestBoss_3.png";
// City entrance
import cityEntranceEnemyOne from "../img/stages/City entrance/cityEntranceEnemy_1.png";
import cityEntranceEnemyTwo from "../img/stages/City entrance/cityEntranceEnemy_2.png";
import cityEntranceEnemyThree from "../img/stages/City entrance/cityEntranceEnemy_3.png";
import cityEntranceEnemyFour from "../img/stages/City entrance/cityEntranceEnemy_4.png";
import cityEntranceEnemyFive from "../img/stages/City entrance/cityEntranceEnemy_5.png";
import cityEntranceEnemySix from "../img/stages/City entrance/cityEntranceEnemy_6.png";
import cityEntranceEnemySeven from "../img/stages/City entrance/cityEntranceEnemy_7.png";
import cityEntranceEnemyEight from "../img/stages/City entrance/cityEntranceEnemy_8.png";
import cityEntranceBossOne from "../img/stages/City entrance/cityEntranceBoss_1.png";
import cityEntranceBossTwo from "../img/stages/City entrance/cityEntranceBoss_2.png";
import cityEntranceBossThree from "../img/stages/City entrance/cityEntranceBoss_3.png";
// Forgotten road
import forgottenRoadEnemyOne from "../img/stages/Forgotten road/forgottenRoadEnemy_1.png";
import forgottenRoadEnemyTwo from "../img/stages/Forgotten road/forgottenRoadEnemy_2.png";
import forgottenRoadEnemyThree from "../img/stages/Forgotten road/forgottenRoadEnemy_3.png";
import forgottenRoadEnemyFour from "../img/stages/Forgotten road/forgottenRoadEnemy_4.png";
import forgottenRoadEnemyFive from "../img/stages/Forgotten road/forgottenRoadEnemy_5.png";
import forgottenRoadEnemySix from "../img/stages/Forgotten road/forgottenRoadEnemy_6.png";
import forgottenRoadEnemySeven from "../img/stages/Forgotten road/forgottenRoadEnemy_7.png";
import forgottenRoadEnemyEight from "../img/stages/Forgotten road/forgottenRoadEnemy_8.png";
import forgottenRoadEnemyNine from "../img/stages/Forgotten road/forgottenRoadEnemy_9.png";
import forgottenRoadEnemyTen from "../img/stages/Forgotten road/forgottenRoadEnemy_10.png";
import forgottenRoadBossOne from "../img/stages/Forgotten road/forgottenRoadBoss_1.png";
import forgottenRoadBossTwo from "../img/stages/Forgotten road/forgottenRoadBoss_2.png";
import forgottenRoadBossThree from "../img/stages/Forgotten road/forgottenRoadBoss_3.png";
// Haunted marketplace
import hauntedMarketplaceEnemyOne from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_1.png";
import hauntedMarketplaceEnemyTwo from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_2.png";
import hauntedMarketplaceEnemyThree from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_3.png";
import hauntedMarketplaceEnemyFour from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_4.png";
import hauntedMarketplaceEnemyFive from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_5.png";
import hauntedMarketplaceEnemySix from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_6.png";
import hauntedMarketplaceEnemySeven from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_7.png";
import hauntedMarketplaceEnemyEight from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_8.png";
import hauntedMarketplaceEnemyNine from "../img/stages/Haunted marketplace/hauntedMarketplaceEnemy_9.png";
import hauntedMarketplaceBossOne from "../img/stages/Haunted marketplace/hauntedMarketplaceBoss_1.png";
import hauntedMarketplaceBossTwo from "../img/stages/Haunted marketplace/hauntedMarketplaceBoss_2.png";
import hauntedMarketplaceBossThree from "../img/stages/Haunted marketplace/hauntedMarketplaceBoss_3.png";
// Golden temple
import goldenTempleEnemyOne from "../img/stages/Golden temple/goldenTempleEnemy_1.png";
import goldenTempleEnemyTwo from "../img/stages/Golden temple/goldenTempleEnemy_2.png";
import goldenTempleEnemyThree from "../img/stages/Golden temple/goldenTempleEnemy_3.png";
import goldenTempleEnemyFour from "../img/stages/Golden temple/goldenTempleEnemy_4.png";
import goldenTempleEnemyFive from "../img/stages/Golden temple/goldenTempleEnemy_5.png";
import goldenTempleEnemySix from "../img/stages/Golden temple/goldenTempleEnemy_6.png";
import goldenTempleEnemySeven from "../img/stages/Golden temple/goldenTempleEnemy_7.png";
import goldenTempleEnemyEight from "../img/stages/Golden temple/goldenTempleEnemy_8.png";
import goldenTempleBossOne from "../img/stages/Golden temple/goldenTempleBoss_1.png";
import goldenTempleBossTwo from "../img/stages/Golden temple/goldenTempleBoss_2.png";
import goldenTempleBossThree from "../img/stages/Golden temple/goldenTempleBoss_3.png";
// Inferno
import infernoEnemyOne from "../img/stages/Inferno/infernoEnemy_1.png";
import infernoEnemyTwo from "../img/stages/Inferno/infernoEnemy_2.png";
import infernoEnemyThree from "../img/stages/Inferno/infernoEnemy_3.png";
import infernoEnemyFour from "../img/stages/Inferno/infernoEnemy_4.png";
import infernoEnemyFive from "../img/stages/Inferno/infernoEnemy_5.png";
import infernoEnemySix from "../img/stages/Inferno/infernoEnemy_6.png";
import infernoEnemySeven from "../img/stages/Inferno/infernoEnemy_7.png";
import infernoEnemyEight from "../img/stages/Inferno/infernoEnemy_8.png";
import infernoEnemyNine from "../img/stages/Inferno/infernoEnemy_9.png";
import infernoEnemyTen from "../img/stages/Inferno/infernoEnemy_10.png";
import infernoBossOne from "../img/stages/Inferno/infernoBoss_1.png";
import infernoBossTwo from "../img/stages/Inferno/infernoBoss_2.png";
import infernoBossThree from "../img/stages/Inferno/infernoBoss_3.png";
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
// Inventory
import daggerOneImage from "../img/dagger_1.png";
import maceOneImage from "../img/mace_1.png";
import axeOneImage from "../img/axe_1.png";
import bowOneImage from "../img/bow_1.png";
import swordOneImage from "../img/sword_1.png";
class UserInterface extends Component {
  state = {
    /* Battle log UI */
    // Introduction paragraphs
    battleLogParagraphsToBeRendered: [
      <p>
        <small>Welcome to Fantasia!</small>
      </p>,
      <p>
        <small className="text-primary">Version: 3.1.0</small>
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
    gameVersion: "3.1.0",
    gameVersionAllowedByUser: "",
    isGamePaused: false,
    isFirstGameSession: false,
    isDebugModeActive: false,
    isTutorialScreenActive: false,
    tutorialScreenSettingSelected: "Player",
    canInventoryPopoversBeRendered: true,
    backgroundImageCurrent: backgroundImageOne,
    backgroundImages: [
      backgroundImageOne,
      backgroundImageTwo,
      backgroundImageThree,
      backgroundImageFour,
      backgroundImageFive,
      backgroundImageSix,
      backgroundImageSeven,
      backgroundImageEight
    ],
    /* Rebirth values */
    rebirthTomesHeld: 0,
    tomesObtainableFromRebirth: 0,
    totalPlayerRebirths: 0,
    isPlayerRebirting: false,
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
          100000000000000,
          1000000000000000,
          2500000000000000,
          5000000000000000,
          10000000000000000
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
          100000000000000,
          1000000000000000,
          2500000000000000,
          5000000000000000,
          10000000000000000
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
    /* Player values */
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
    playerExperienceRequired: 250,
    playerAttack: 50,
    playerLastAttack: {
      damage: 50,
      isCritical: false,
      isDouble: false
    },
    playerCanAttack: true,
    playerDoubleAttackChance: 0,
    playerCriticalChance: 0.1,
    playerCriticalMultiplier: 1.2,
    damageMultiplierFromTomes: 0,
    playerAttackPerSecond: 50,
    /* Pet values */
    deck: {
      cardOne: {
        name: "Rukkha",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusExperience",
        bonusImage: playerExperienceImage,
        currentBonusMultiplier: 0
      },
      cardTwo: {
        name: "Daidarabotchi",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusHealth",
        bonusImage: playerHealthImage,
        currentBonusMultiplier: 0
      },
      cardThree: {
        name: "Tellia",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusClickDamage",
        bonusImage: clickDamageImage,
        currentBonusMultiplier: 0
      },
      cardFour: {
        name: "Blood Feral",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDamagePerSecond",
        bonusImage: clickPerSecondDamageImage,
        currentBonusMultiplier: 0
      },
      cardFive: {
        name: "Dark Queen Yoa",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCoinDrop",
        bonusImage: coinImage,
        currentBonusMultiplier: 0
      },
      cardSix: {
        name: "Knight Remment",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalChance",
        bonusImage: criticalChanceImage,
        basicBonusMultiplier: 1.01,
        currentBonusMultiplier: 0
      },
      cardSeven: {
        name: "Queen Rafflesia",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalDamage",
        bonusImage: criticalMultiplierImage,
        currentBonusMultiplier: 0
      },
      cardEight: {
        name: "Queen Yggdrasil",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDoubleAttackChance",
        bonusImage: doubleAttackImage,
        currentBonusMultiplier: 0
      },
      cardNine: {
        name: "Gemstone Golem",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusPotionDropRate",
        bonusImage: healthPotionImage,
        currentBonusMultiplier: 0
      },
      cardTen: {
        name: "Bonemask",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalDamage",
        bonusImage: criticalMultiplierImage,
        currentBonusMultiplier: 0
      },
      cardEleven: {
        name: "The Fallen",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDoubleAttackChance",
        bonusImage: doubleAttackImage,
        currentBonusMultiplier: 0
      },
      cardTwelve: {
        name: "Ancient Automaton",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusPotionDropRate",
        bonusImage: healthPotionImage,
        currentBonusMultiplier: 0
      },
      cardThirteen: {
        name: "Celestial Beatrix",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusExperience",
        bonusImage: playerExperienceImage,
        currentBonusMultiplier: 0
      },
      cardFourteen: {
        name: "Alfadriel",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusHealth",
        bonusImage: playerHealthImage,
        currentBonusMultiplier: 0
      },
      cardFifteen: {
        name: "Son of Valhalla",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusClickDamage",
        bonusImage: clickDamageImage,
        currentBonusMultiplier: 0
      },
      cardSixteen: {
        name: "Astral Lich",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDamagePerSecond",
        bonusImage: clickPerSecondDamageImage,
        currentBonusMultiplier: 0
      },
      cardSeventeen: {
        name: "Eldritch God",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCoinDrop",
        bonusImage: coinImage,
        currentBonusMultiplier: 0
      },
      cardEighteen: {
        name: "Reaper Nihilo",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalChance",
        bonusImage: criticalChanceImage,
        basicBonusMultiplier: 1.01,
        currentBonusMultiplier: 0
      },
      cardNineteen: {
        name: "Golden Huanglong",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusCriticalDamage",
        bonusImage: criticalMultiplierImage,
        currentBonusMultiplier: 0
      },
      cardTwenty: {
        name: "Golden Ladon",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusDoubleAttackChance",
        bonusImage: doubleAttackImage,
        currentBonusMultiplier: 0
      },
      cardTwentyone: {
        name: "Golden Emperor",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusPotionDropRate",
        bonusImage: healthPotionImage,
        currentBonusMultiplier: 0
      },

      cardTwentytwo: {
        name: "Nuckelavee",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusExperience",
        bonusImage: playerExperienceImage,
        currentBonusMultiplier: 0
      },
      cardTwentythree: {
        name: "Ilnoct",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusHealth",
        bonusImage: playerHealthImage,
        currentBonusMultiplier: 0
      },
      cardTwentyfour: {
        name: "Hellhound Garm",
        level: 0,
        experienceCurrent: 0,
        experienceRequired: 3,
        bonusType: "bonusClickDamage",
        bonusImage: clickDamageImage,
        currentBonusMultiplier: 0
      }
    },
    deckBonuses: {
      bonusExperience: 0,
      bonusHealth: 0,
      bonusClickDamage: 0,
      bonusDamagePerSecond: 0,
      bonusCoinDrop: 0,
      bonusCriticalChance: 0,
      bonusCriticalDamage: 0,
      bonusDoubleAttackChance: 0,
      bonusPotionDropRate: 0
    },
    equipmentBonuses: {
      bonusAttack: 0,
      bonusDoubleAttackChance: 0,
      bonusCriticalChance: 0
    },
    pets: {
      petOne: {
        name: "Cyber Slime",
        basicPrice: 250,
        upgradePrice: 250,
        upgradeLevel: 1,
        damagePerSecondBase: 25,
        damagePerSecondCurrent: 25,
        damagePerSecondPlaceholder: 25
      },
      petTwo: {
        name: "Cyber Hawk",
        basicPrice: 1000,
        firstPurchasePrice: 1000,
        upgradePrice: 1000,
        upgradeLevel: 0,
        damagePerSecondBase: 100,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petThree: {
        name: "Cybermancer",
        basicPrice: 2500,
        firstPurchasePrice: 2500,
        upgradePrice: 2500,
        upgradeLevel: 0,
        damagePerSecondBase: 250,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petFour: {
        name: "Cyber Blader",
        basicPrice: 10000,
        firstPurchasePrice: 10000,
        upgradePrice: 10000,
        upgradeLevel: 0,
        damagePerSecondBase: 1000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petFive: {
        name: "Cyber Ogre",
        basicPrice: 25000,
        firstPurchasePrice: 25000,
        upgradePrice: 25000,
        upgradeLevel: 0,
        damagePerSecondBase: 2500,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petSix: {
        name: "Cyber Pegasus",
        basicPrice: 50000,
        firstPurchasePrice: 50000,
        upgradePrice: 50000,
        upgradeLevel: 0,
        damagePerSecondBase: 5000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petSeven: {
        name: "Light Slime",
        basicPrice: 100000,
        firstPurchasePrice: 100000,
        upgradePrice: 100000,
        upgradeLevel: 0,
        damagePerSecondBase: 10000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petEight: {
        name: "Light Snake",
        basicPrice: 200000,
        firstPurchasePrice: 200000,
        upgradePrice: 200000,
        upgradeLevel: 0,
        damagePerSecondBase: 20000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petNine: {
        name: "Light Wisp",
        basicPrice: 500000,
        firstPurchasePrice: 500000,
        upgradePrice: 500000,
        upgradeLevel: 0,
        damagePerSecondBase: 50000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petTen: {
        name: "Light Scholar",
        basicPrice: 1000000,
        firstPurchasePrice: 1000000,
        upgradePrice: 1000000,
        upgradeLevel: 0,
        damagePerSecondBase: 100000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petEleven: {
        name: "Light Wolf",
        basicPrice: 2500000,
        firstPurchasePrice: 2500000,
        upgradePrice: 2500000,
        upgradeLevel: 0,
        damagePerSecondBase: 250000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      },
      petTwelve: {
        name: "Light Devourer",
        basicPrice: 5000000,
        firstPurchasePrice: 5000000,
        upgradePrice: 5000000,
        upgradeLevel: 0,
        damagePerSecondBase: 500000,
        damagePerSecondCurrent: 0,
        damagePerSecondPlaceholder: 0
      }
    },
    petDamageValueToBeRendered: 0,
    /* Enemy values */
    enemyImages: {
      greenForest: [
        greenForestEnemyOne,
        greenForestEnemyTwo,
        greenForestEnemyThree,
        greenForestEnemyFour,
        greenForestEnemyFive,
        greenForestEnemySix,
        greenForestEnemySeven
      ],
      darkForest: [
        darkForestEnemyOne,
        darkForestEnemyTwo,
        darkForestEnemyThree,
        darkForestEnemyFour,
        darkForestEnemyFive,
        darkForestEnemySix,
        darkForestEnemySeven,
        darkForestEnemyEight
      ],
      magicForest: [
        magicForestEnemyOne,
        magicForestEnemyTwo,
        magicForestEnemyThree,
        magicForestEnemyFour,
        magicForestEnemyFive,
        magicForestEnemySix,
        magicForestEnemySeven,
        magicForestEnemyEight,
        magicForestEnemyNine,
        magicForestEnemyTen
      ],
      cityEntrance: [
        cityEntranceEnemyOne,
        cityEntranceEnemyTwo,
        cityEntranceEnemyThree,
        cityEntranceEnemyFour,
        cityEntranceEnemyFive,
        cityEntranceEnemySix,
        cityEntranceEnemySeven,
        cityEntranceEnemyEight
      ],
      forgottenRoad: [
        forgottenRoadEnemyOne,
        forgottenRoadEnemyTwo,
        forgottenRoadEnemyThree,
        forgottenRoadEnemyFour,
        forgottenRoadEnemyFive,
        forgottenRoadEnemySix,
        forgottenRoadEnemySeven,
        forgottenRoadEnemyEight,
        forgottenRoadEnemyNine,
        forgottenRoadEnemyTen
      ],
      hauntedMarketplace: [
        hauntedMarketplaceEnemyOne,
        hauntedMarketplaceEnemyTwo,
        hauntedMarketplaceEnemyThree,
        hauntedMarketplaceEnemyFour,
        hauntedMarketplaceEnemyFive,
        hauntedMarketplaceEnemySix,
        hauntedMarketplaceEnemySeven,
        hauntedMarketplaceEnemyEight,
        hauntedMarketplaceEnemyNine
      ],
      goldenTemple: [
        goldenTempleEnemyOne,
        goldenTempleEnemyTwo,
        goldenTempleEnemyThree,
        goldenTempleEnemyFour,
        goldenTempleEnemyFive,
        goldenTempleEnemySix,
        goldenTempleEnemySeven,
        goldenTempleEnemyEight
      ],
      inferno: [
        infernoEnemyOne,
        infernoEnemyTwo,
        infernoEnemyThree,
        infernoEnemyFour,
        infernoEnemyFive,
        infernoEnemySix,
        infernoEnemySeven,
        infernoEnemyEight,
        infernoEnemyNine,
        infernoEnemyTen
      ]
    },
    enemyImageCurrent: greenForestEnemyOne,
    enemyNames: {
      greenForest: [
        "Fairy Filia",
        "Grasshopper",
        "Green Spider",
        "Imperial Widow",
        "Mothy",
        "Shroomy",
        "Spora"
      ],
      darkForest: [
        "Dark Angel",
        "Reaper",
        "Banshee",
        "Imp",
        "Ghaul",
        "Seeker",
        "Succubus",
        "Ogre"
      ],
      magicForest: [
        "Earth Bull",
        "Bush Wisp",
        "Leaf Imp",
        "Earth Lion",
        "Mandrake",
        "Rock Golem",
        "Earth Snake",
        "Earth Spawn",
        "Earth Turtle",
        "Earth Wisp"
      ],
      cityEntrance: [
        "Goblin Archer",
        "Goblin Elite",
        "Goblin Grunt",
        "Goblin Mage",
        "Goblin Raider",
        "Rogue Swordman",
        "Rogue Monk",
        "Rogue Assassin"
      ],
      forgottenRoad: [
        "Elf Archer",
        "Elf Assassin",
        "Crossbow Elf",
        "Dual Sword Elf",
        "Elf Mage",
        "Spear Elf",
        "Sword Elf",
        "Nature Linker",
        "Rogue Elf",
        "Spellcaster"
      ],
      hauntedMarketplace: [
        "Gazers Eyewing",
        "Gazers Skull",
        "Tenteye",
        "Ghostus",
        "Knight Destrand",
        "Knight Galpha",
        "Knight Goliath",
        "Ghost Puppet Pailo",
        "Ghost Revelator"
      ],
      goldenTemple: [
        "Axe Knight",
        "Golden Axe Knight",
        "Gunner Knight  ",
        "Golden Gunner Knight",
        "Spear Knight",
        "Golden Spear Knight",
        "Sword Knight",
        "Golden Sword Knight"
      ],
      inferno: [
        "Fire Bull",
        "Fire Dragonspawn",
        "Fire Lion",
        "Fire Ogre",
        "Fire Sabretooth",
        "Fire Salamander",
        "Fire Turtle",
        "Volcanic Maiden",
        "Fire Vulture",
        "Fire Wisp"
      ]
    },
    bossImages: {
      greenForest: [
        greenForestBossOne,
        greenForestBossTwo,
        greenForestBossThree
      ],
      darkForest: [darkForestBossOne, darkForestBossTwo, darkForestBossThree],
      magicForest: [
        magicForestBossOne,
        magicForestBossTwo,
        magicForestBossThree
      ],
      cityEntrance: [
        cityEntranceBossOne,
        cityEntranceBossTwo,
        cityEntranceBossThree
      ],
      forgottenRoad: [
        forgottenRoadBossOne,
        forgottenRoadBossTwo,
        forgottenRoadBossThree
      ],
      hauntedMarketplace: [
        hauntedMarketplaceBossOne,
        hauntedMarketplaceBossTwo,
        hauntedMarketplaceBossThree
      ],
      goldenTemple: [
        goldenTempleBossOne,
        goldenTempleBossTwo,
        goldenTempleBossThree
      ],
      inferno: [infernoBossOne, infernoBossTwo, infernoBossThree]
    },
    bossNames: {
      greenForest: ["Rukkha", "Daidarabotchi", "Tellia"],
      darkForest: ["Blood Feral", "Dark Queen Yoa", "Knight Remment"],
      magicForest: ["Queen Rafflesia", "Queen Yggdrasil", "Gemstone Golem"],
      cityEntrance: ["Bonemask", "The Fallen", "Ancient Automaton"],
      forgottenRoad: ["Celestial Beatrix", "Alfadriel", "Son of Valhalla"],
      hauntedMarketplace: ["Astral Lich", "Eldritch God", "Reaper Nihilo"],
      goldenTemple: ["Golden Huanglong", "Golden Ladon", "Golden Emperor"],
      inferno: ["Nuckelavee", "Ilnoct", "Hellhound Garm"]
    },
    enemyNameCurrent: "Fairy Filia",
    enemyLevel: 1,
    enemyIsBoss: false,
    enemyHasHealth: true,
    enemyHealthCurrent: 500,
    enemyHealthMax: 500,
    enemyExperienceHeld: 27,
    enemyCoinsValue: 25,
    enemyFoodHeld: 1,
    enemyFoodValue: 1,
    enemyAttack: 3,
    enemySpawnTime: 500,
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
        price: 1500,
        purchasePrice: 1000
      },
      criticalMultiplier: {
        level: 0,
        priceMultiplier: 1.5,
        price: 1500,
        purchasePrice: 1000
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
        damageMultiplier: 1.8,
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
        damageMultiplier: 1.1,
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
        cooldownReductionByLevelUp: 1000,
        duration: 20000,
        isReady: true,
        isActive: false,
        damageMultiplier: 1.1,
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
        damageMultiplier: 1.8,
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
    inventory: [],
    inventoryFullParagraphSent: false,
    equipmentToBeCollected: {
      weapon: []
    },
    isEquipmentCollected: false,
    playerEquipment: {
      weapon: null
    },
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
    /* Possible settings:
        "X[n]" => Normal upgrade step
        "To Bonus" => Enough levels to reach the next upgrade
     */
    petsMenuUpgradeSettingSelected: "X1",
    heroMenuUpgradeSettingSelected: "X1",
    isPetPriceParagraphRendered: false,
    isHeroUpgradePriceParagraphRendered: false,
    playerDamageParagraphsToBeRendered: [],
    petDamageParagraphsToBeRendered: [],
    hasPlayerAttacked: false,
    /* Value placeholders 
       (used when temporarily setting a value to a different one) */
    enemyAttackPlaceholder: 50,
    enemyHealthCurrentPlaceholder: 500,
    enemyHealthMaxPlaceholder: 500,
    playerAttackPlaceholder: 50,
    playerAttackPerSecondPlaceholder: 50,
    /* Global game settings */
    currentScenario: "Green Forest",
    allScenarios: [
      "Green Forest",
      "Dark Forest",
      "Magic Forest",
      "City Entrance",
      "Forgotten Road",
      "Haunted Marketplace",
      "Golden Temple",
      "Inferno"
    ],
    shouldRerender: {
      petMenuParagraphs: {
        petOne: false,
        petTwo: false,
        petThree: false,
        petFour: false,
        petFive: false,
        petSix: false,
        petSeven: false,
        petEight: false,
        petNine: false,
        petTen: false,
        petEleven: false,
        petTwelve: false
      }
    },
    enemyAttackInterval: setInterval(() => {
      if (!this.state.isGamePaused) {
        this.enemyAttack();
      }
    }, 1000),
    playerAttackInterval: setInterval(() => {
      if (!this.state.isGamePaused) {
        this.addPetDamageRenderingItem();
        this.playerAttackPerSecond();
      }
    }, 500),
    automaticProgressSave: setInterval(() => {
      setTimeout(() => {
        this.saveProgressToLocalStorage();
      }, 0);
    }, 10000),
    // Check if the quests are completed
    checkAllQuestsProgress: setInterval(() => {
      // Enemies killed
      this.checkIfQuestConditionsMet(
        "enemiesKilled",
        this.state.totalEnemiesKilled
      );
      // Player attacks
      this.checkIfQuestConditionsMet(
        "playerAttacks",
        this.state.totalPlayerAttacks
      );
      // Player damage
      this.checkIfQuestConditionsMet(
        "playerDamageDealt",
        this.state.totalPlayerDamageDealt
      );
      // Times healed
      this.checkIfQuestConditionsMet("skillsUsed", this.state.totalSkillsUsed);
      this.checkIfQuestConditionsMet(
        "timesHealed",
        this.state.totalTimesHealed
      );
      // Pet damage dealt
      this.checkIfQuestConditionsMet(
        "petDamageDealt",
        this.state.totalPetDamageDealt
      );
      // Money earned
      this.checkIfQuestConditionsMet(
        "moneyEarned",
        this.state.totalMoneyEarned
      );
    }, 1000)
    // Pet price / pet damage / potential pet damage / pet level
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
    this.deckBonusIncreaseOnCardLevelUp(cardNumber);
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
      if (bonus === this.state.deck[cardNumber].bonusType) {
        // Increase it value
        deckBonuses[bonus] += 0.02;
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
    // If there are more than 20 paragraphs, pop one from the stack
    if (newParagraphList.length >= 20) {
      newParagraphList.pop();
    }
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
      // Upgrade is level 0
      if (heroUpgrades[upgradeName].level === 0) {
        this.setState({
          // Take off the money from the player
          coins: this.state.coins - heroUpgrades[upgradeName].purchasePrice,
          // Update player stats
          totalMoneySpent:
            this.state.totalMoneySpent + heroUpgrades[upgradeName].purchasePrice
        });
        // Upgrade is level 1 or more
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

  heroUpgradeLevelUpgradeByUserSettings = upgradeName => {
    if (this.state.heroMenuUpgradeSettingSelected === "X1") {
      this.heroUpgradeLevelUp(upgradeName);
    }
    if (this.state.heroMenuUpgradeSettingSelected === "X5") {
      for (let i = 0; i < 5; i++) {
        if (this.state.coins >= this.state.heroUpgrades[upgradeName].price) {
          setTimeout(() => {
            this.heroUpgradeLevelUp(upgradeName);
          }, 0);
        } else {
          break;
        }
      }
    }
    if (this.state.heroMenuUpgradeSettingSelected === "X25") {
      for (let i = 0; i < 25; i++) {
        if (this.state.coins >= this.state.heroUpgrades[upgradeName].price) {
          setTimeout(() => {
            this.heroUpgradeLevelUp(upgradeName);
          }, 0);
        } else {
          break;
        }
      }
    }
  };

  /* Pets UI */

  fetchPetsMenuUpgradeSettings = event => {
    this.setState({
      petsMenuUpgradeSettingSelected: event.target.textContent,
      isPetPriceParagraphRendered: false
    });
    this.forceRerenderPetParagraphs();
  };

  petLevelUpgradeByUserSettings = petNumber => {
    if (this.state.petsMenuUpgradeSettingSelected === "X1") {
      this.petLevelUpgrade(petNumber);
    }
    if (this.state.petsMenuUpgradeSettingSelected === "To Bonus") {
      let levelsToNextUpgrade =
        5 - (this.state.pets[petNumber].upgradeLevel % 5);
      for (let i = 0; i < levelsToNextUpgrade; i++) {
        setTimeout(() => {
          this.petLevelUpgrade(petNumber);
        }, 0);
      }
    }
    if (this.state.petsMenuUpgradeSettingSelected === "X5") {
      for (let i = 0; i < 5; i++) {
        if (this.state.coins >= this.state.pets[petNumber].upgradePrice) {
          setTimeout(() => {
            this.petLevelUpgrade(petNumber);
          }, 0);
        } else {
          break;
        }
      }
    }
    if (this.state.petsMenuUpgradeSettingSelected === "X25") {
      for (let i = 0; i < 25; i++) {
        if (this.state.coins >= this.state.pets[petNumber].upgradePrice) {
          setTimeout(() => {
            this.petLevelUpgrade(petNumber);
          }, 0);
        } else {
          break;
        }
      }
    }
    this.forceRerenderPetParagraphs();
  };

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
        pets[petNumber].damagePerSecondCurrent =
          pets[petNumber].damagePerSecondBase;
        // Increase pet damage
        pets[petNumber].damagePerSecondPlaceholder =
          pets[petNumber].damagePerSecondBase;
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
        // Before every 5th level
        if (pets[petNumber].upgradeLevel % 5 === 4) {
          // Increase the basic price
          pets[petNumber].basicPrice *= 1.25;
          pets[petNumber].upgradePrice *= 2;
        }
        // Increase pet price
        pets[petNumber].upgradePrice = Math.round(
          pets[petNumber].basicPrice *
            Math.pow(1.06, pets[petNumber].upgradeLevel)
        );
        // Increase base damage every 5 levels
        if (pets[petNumber].upgradeLevel % 5 === 0) {
          pets[petNumber].damagePerSecondBase *= 1.25;
        }
        // Increase pet damage
        pets[petNumber].damagePerSecondCurrent = Math.round(
          pets[petNumber].damagePerSecondBase *
            Math.pow(1.1, pets[petNumber].upgradeLevel)
        );
        // Increase pet damage
        pets[petNumber].damagePerSecondPlaceholder = Math.round(
          pets[petNumber].damagePerSecondBase *
            Math.pow(1.1, pets[petNumber].upgradeLevel)
        );
      } else {
        return false;
      }
    }

    this.setState({ pets });
  };

  /* Player UI */

  fetchHeroMenuUpgradeSettings = event => {
    this.setState({
      heroMenuUpgradeSettingSelected: event.target.textContent,
      isHeroUpgradePriceParagraphRendered: false
    });
    setTimeout(() => {
      this.setState({
        isHeroUpgradePriceParagraphRendered: true
      });
    }, 0);
  };

  // Player stage progress
  playerStageProgress = () => {
    // If the stage is not completed yet
    if (this.state.stageEnemiesKilled < this.state.stageEnemiesToKill) {
      // Add a kill to the counter
      this.setState({ stageEnemiesKilled: this.state.stageEnemiesKilled + 1 });
      // If the next stage is going to be the last one, make it a boss stage
      if (this.state.stageEnemiesKilled === this.state.stageEnemiesToKill - 1) {
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
      if (this.state.stageCurrent <= 70 && this.state.stageCurrent % 5 === 0) {
        this.setState({
          tomesObtainableFromRebirth: this.state.tomesObtainableFromRebirth + 1
        });
      }
      if (
        this.state.stageCurrent > 70 &&
        this.state.stageCurrent <= 100 &&
        this.state.stageCurrent % 3 === 0
      ) {
        this.setState({
          tomesObtainableFromRebirth: this.state.tomesObtainableFromRebirth + 1
        });
      }
      if (
        this.state.stageCurrent > 100 &&
        this.state.stageCurrent <= 120 &&
        this.state.stageCurrent % 2 === 0
      ) {
        this.setState({
          tomesObtainableFromRebirth: this.state.tomesObtainableFromRebirth + 1
        });
      }
      if (
        this.state.stageCurrent > 120 &&
        this.state.stageCurrent <= 150 &&
        this.state.stageCurrent % 1 === 0
      ) {
        this.setState({
          tomesObtainableFromRebirth: this.state.tomesObtainableFromRebirth + 1
        });
      }
      if (this.state.stageCurrent > 150 && this.state.stageCurrent % 1 === 0) {
        this.setState({
          tomesObtainableFromRebirth: Math.round(
            this.state.tomesObtainableFromRebirth +
              1 * Math.pow(1.0055, this.state.stageMaxUnlocked)
          )
        });
      }
    }
  };

  quitBossStage = () => {
    this.setState({
      enemyIsBoss: false,
      stageEnemiesKilled: 0
    });
    this.generateNewEnemy(this.state.stageCurrent);
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
      // If the stage is a multiple of 10
      if (this.state.stageCurrent % 10 === 0) {
        if (this.state.stageCurrent < 80) {
          // Set a new background
          this.setState({
            currentScenario: this.state.allScenarios[
              this.state.allScenarios.indexOf(this.state.currentScenario) + 1
            ]
          });
          // If the player reached the last stage
        } else {
          // Calculate a random scenario index
          let randomScenarioIndex = Math.round(
            Math.random() * this.state.allScenarios.length
          );
          // If the random index is a valid number
          randomScenarioIndex >= 0 &&
          randomScenarioIndex < this.state.allScenarios.length &&
          // If the random index is not the same as the current scenario index
          this.state.allScenarios[randomScenarioIndex] !==
            this.state.allScenarios.indexOf(this.state.currentScenario)
            ? // Set the current scenario to the randomly generated one
              this.setState({
                currentScenario: this.state.allScenarios[randomScenarioIndex]
              })
            : // Recursively call the function
              this.playerStageAdvance();
        }
        this.changeToNextBackground();
      }
    }
  };

  // Toggle the automatic stage progression
  activateAutoStageAdvance = event => {
    this.setState({
      isStageProgressAuto: event.target.checked
    });
  };

  playerRebirth = () => {
    // If the player reached at least stage 70
    if (this.state.stageMaxUnlocked >= 70) {
      // Toggle the rebirthing animation
      setTimeout(() => {
        this.setState({ isPlayerRebirting: true });
        setTimeout(() => {
          this.setState({ isPlayerRebirting: false });
        }, 5000);
      }, 0);
      // And reset all game values
      setTimeout(() => {
        // Reset global values
        this.setState({
          currentScenario: "Green Forest",
          backgroundImageCurrent: this.state.backgroundImages[0],
          stageCurrent: 1,
          stageEnemiesKilled: 0,
          stageEnemiesToKill: 5,
          stageMaxUnlocked: 1,
          isStageProgressAuto: true,
          playerLevel: 1,
          playerRankCurrent: "Rogue",
          playerHealthCurrent: 500,
          playerHealthMax: 500,
          playerExperienceCurrent: 0,
          playerExperienceRequired: 250,
          playerAttack: 50,
          playerCanAttack: true,
          playerDoubleAttackChance: 0,
          playerCriticalChance: 0.1,
          playerCriticalMultiplier: 1.2,
          playerAttackMultiplier: 1,
          playerAttackPerSecond: 50,
          rebirthTomesHeld:
            this.state.rebirthTomesHeld + this.state.tomesObtainableFromRebirth,
          tomesObtainableFromRebirth: 0,
          inventory: [],
          coinsToBeCollected: 0,
          coinsToBeCollectedValue: 0,
          foodToBeCollected: 0,
          coins: 0,
          totalPlayerRebirths: this.state.totalPlayerRebirths + 1,
          battleLogParagraphsToBeRendered: [],
          enemyNameCurrent: "Fairy Filia",
          enemyImageCurrent: this.state.enemyImages.greenForest[0],
          enemyLevel: 1,
          enemyIsBoss: false,
          enemyHasHealth: true,
          enemyHealthCurrent: 500,
          enemyHealthMax: 500,
          enemyExperienceHeld: 27,
          enemyCoinsValue: 25,
          enemyFoodHeld: 1,
          enemyFoodValue: 1,
          enemyAttack: 3,
          enemySpawnTime: 500
        });
        // Reset inventory
        let equipmentToBeCollected = { ...this.state.equipmentToBeCollected };
        equipmentToBeCollected.weapon = [];
        // Reset pets
        let pets = { ...this.state.pets };
        for (let pet in pets) {
          if (pets[pet] !== this.state.pets.petOne) {
            pets[pet].upgradeLevel = 0;
            pets[pet].damagePerSecondCurrent = 0;
            pets[pet].damagePerSecondPlaceholder = 0;
          } else {
            pets[pet].upgradeLevel = 1;
            pets[pet].damagePerSecondCurrent = 25;
            pets[pet].damagePerSecondPlaceholder = 25;
          }
          if (pet === this.state.pets.petOne) {
            pets[pet].upgradePrice = 250;
            pets[pet].basicPrice = 250;
            pets[pet].damagePerSecondBase = 25;
          }
          if (pet === this.state.pets.petTwo) {
            pets[pet].basicPrice = 1000;
            pets[pet].firstPurchasePrice = 1000;
            pets[pet].upgradePrice = 1000;
            pets[pet].damagePerSecondBase = 100;
          }
          if (pet === this.state.pets.petThree) {
            pets[pet].basicPrice = 2500;
            pets[pet].firstPurchasePrice = 2500;
            pets[pet].upgradePrice = 2500;
            pets[pet].damagePerSecondBase = 250;
          }
          if (pet === this.state.pets.petFour) {
            pets[pet].basicPrice = 10000;
            pets[pet].firstPurchasePrice = 10000;
            pets[pet].upgradePrice = 10000;
            pets[pet].damagePerSecondBase = 1000;
          }
          if (pet === this.state.pets.petFive) {
            pets[pet].basicPrice = 25000;
            pets[pet].firstPurchasePrice = 25000;
            pets[pet].upgradePrice = 25000;
            pets[pet].damagePerSecondBase = 2500;
          }
          if (pet === this.state.pets.petSix) {
            pets[pet].basicPrice = 50000;
            pets[pet].firstPurchasePrice = 50000;
            pets[pet].upgradePrice = 50000;
            pets[pet].damagePerSecondBase = 5000;
          }
          if (pet === this.state.pets.petSeven) {
            pets[pet].basicPrice = 100000;
            pets[pet].firstPurchasePrice = 100000;
            pets[pet].upgradePrice = 100000;
            pets[pet].damagePerSecondBase = 10000;
          }
          if (pet === this.state.pets.petEight) {
            pets[pet].basicPrice = 200000;
            pets[pet].firstPurchasePrice = 200000;
            pets[pet].upgradePrice = 200000;
            pets[pet].damagePerSecondBase = 20000;
          }
          if (pet === this.state.pets.petNine) {
            pets[pet].basicPrice = 500000;
            pets[pet].firstPurchasePrice = 500000;
            pets[pet].upgradePrice = 500000;
            pets[pet].damagePerSecondBase = 50000;
          }
          if (pet === this.state.pets.petTen) {
            pets[pet].basicPrice = 1000000;
            pets[pet].firstPurchasePrice = 1000000;
            pets[pet].upgradePrice = 1000000;
            pets[pet].damagePerSecondBase = 100000;
          }
          if (pet === this.state.pets.petEleven) {
            pets[pet].basicPrice = 2500000;
            pets[pet].firstPurchasePrice = 2500000;
            pets[pet].upgradePrice = 2500000;
            pets[pet].damagePerSecondBase = 250000;
          }
          if (pet === this.state.pets.petTwelve) {
            pets[pet].basicPrice = 5000000;
            pets[pet].firstPurchasePrice = 5000000;
            pets[pet].upgradePrice = 5000000;
            pets[pet].damagePerSecondBase = 500000;
          }
        }
        // Reset skills
        let skills = { ...this.state.skills };
        skills.skillTwo.isActive = false;
        skills.skillThree.isActive = false;
        for (let skill in skills) {
          skills[skill].level = 0;
          skills[skill].isReady = true;
          if (skills[skill] === "skillOne") {
            skills[skills].cooldown = 30000;
            skills[skills].cooldownReductionByLevelUp = 1000;
            skills[skills].numberOfAttacks = 3;
            skills[skills].damageMultiplier = 1.8;
          }
          if (skills[skill] === "skillTwo") {
            skills[skills].cooldown = 60000;
            skills[skills].cooldownReductionByLevelUp = 2000;
            skills[skills].duration = 10000;
            skills[skills].damageMultiplier = 1.1;
          }
          if (skills[skill] === "skillThree") {
            skills[skills].cooldown = 120000;
            skills[skills].cooldownReductionByLevelUp = 1000;
            skills[skills].duration = 20000;
            skills[skills].damageMultiplier = 1.1;
          }
          if (skills[skill] === "skillFour") {
            skills[skills].cooldown = 30000;
            skills[skills].cooldownReductionByLevelUp = 1000;
            skills[skills].numberOfAttacks = 3;
            skills[skills].damageMultiplier = 1.8;
          }
        }
        // Reset hero upgrades
        let heroUpgrades = { ...this.state.heroUpgrades };
        for (let upgrade in heroUpgrades) {
          if (upgrade !== "clickDamage") {
            heroUpgrades[upgrade].level = 0;
            heroUpgrades[upgrade].priceMultiplier = 1.5;
            heroUpgrades[upgrade].price = 1500;
            heroUpgrades[upgrade].purchasePrice = 1000;
          } else {
            heroUpgrades[upgrade].level = 1;
            heroUpgrades[upgrade].priceMultiplier = 1.045;
            heroUpgrades[upgrade].price = 100;
            heroUpgrades[upgrade].purchasePrice = 100;
          }
        }
        // Reset equipment bonuses
        let equipmentBonuses = { ...this.state.equipmentBonuses };
        for (let bonus in equipmentBonuses) {
          equipmentBonuses[bonus] = 0;
        }
        this.setState({
          heroUpgrades,
          pets,
          skills,
          equipmentBonuses,
          equipmentToBeCollected,
          damageMultiplierFromTomes: this.state.rebirthTomesHeld / 100
        });
      }, 4000);
    } else {
      this.pushNewParagraphToBattleLog(
        <p>
          <small>Reach </small>
          <small className="text-warning">stage 70</small>{" "}
          <small>to unlock rebirth! </small>
        </p>
      );
    }
  };

  // Calculate a random level to be given to the equipment which this function is called on
  calculateNewEquipmentDropLevel = () => {
    // Initialise the level to be that of the enemy which dropped it
    let itemLevel =
      this.state.enemyLevel +
      // + 0-3 // - 0-2 levels
      (this.calculateRandomDropChance(50)
        ? Math.round(Math.random() * 3)
        : Math.round(Math.random() * -2));
    // If the result is one (easy to happen in the first stages), return 1; else, return the calculated level
    return itemLevel > 0 ? itemLevel : 1;
  };

  /* Since every equipment has randomly generated stats, calls to calculateNewEquipmentStatsRange
     are meant to make the randomisation of these much easier.

     basicStat => The basic stat of each weapon
     itemLevel => Used to calculate the basic value of the stat (basicStat * coefficient^itemLevel)
     increaseCoefficient => The steepness of the curve; a higher coefficient will lead to much higher numbers in the long run
     maxDifferenceMargin => How much is the object allowed to stray from the original values; expressed in percentage
     
     */
  calculateNewEquipmentStatsRange = (
    // The original value of the stat.
    basicStat,
    // Level of the item which calls this function.
    itemLevel,
    // How steep the increase of the value is based on the level.
    increaseCoefficient,
    // How much of a margin of difference there can be between the original value and the output value
    // e.g. MAX +20% // MAX -20% of standard value.
    maxDifferenceMargin,
    itemRarity
  ) => {
    let statsValue = Math.round(
      // Calculate the power of the item
      (basicStat + (basicStat / 100) * ((itemRarity * 3 + 1) * 9)) *
        Math.pow(increaseCoefficient, itemLevel) +
        ((basicStat * Math.pow(increaseCoefficient, itemLevel)) / 100) *
          (this.calculateRandomDropChance(50)
            ? Math.round(Math.random() * (maxDifferenceMargin * -1))
            : Math.round(Math.random() * maxDifferenceMargin))
    );
    return statsValue;
  };

  /* Different drop rates are used to allow players to find more equipment in the earlier stages, and consequentially
       less in higher stages.

       All multiplier which might be applied in the future have to be added to this function directly.
     
     */
  calculateNewEquipmentDropRate = type => {
    let equipmentDropRate;
    if (type === "weapon") {
      if (this.state.enemyLevel <= 10) {
        equipmentDropRate = 20;
      }
      if (this.state.enemyLevel > 10 && this.state.enemyLevel < 40) {
        equipmentDropRate = 15;
      }
      if (this.state.enemyLevel > 40 && this.state.enemyLevel < 70) {
        equipmentDropRate = 13;
      }
      if (this.state.enemyLevel > 70 && this.state.enemyLevel < 100) {
        equipmentDropRate = 12;
      }
      if (this.state.enemyLevel > 100 && this.state.enemyLevel < 150) {
        equipmentDropRate = 11;
      }
      if (this.state.enemyLevel > 150 && this.state.enemyLevel < 200) {
        equipmentDropRate = 9;
      }
      if (this.state.enemyLevel > 200 && this.state.enemyLevel < 300) {
        equipmentDropRate = 6;
      }
      if (this.state.enemyLevel > 300 && this.state.enemyLevel < 400) {
        equipmentDropRate = 4;
      }
      if (this.state.enemyLevel > 400 && this.state.enemyLevel < 500) {
        equipmentDropRate = 2;
      }
      if (this.state.enemyLevel > 400 && this.state.enemyLevel < 500) {
        equipmentDropRate = 1;
      }
    }
    return equipmentDropRate;
  };

  // Calculate a rarity level for the new dropped items
  calculateNewItemRarity = () => {
    // Random number between 0 and 100
    let randomItemRarity = Math.round(Math.random() * 100);
    // 70% chance of common
    if (randomItemRarity <= 70) {
      return 0;
    }
    // 15% chance of uncommon
    if (randomItemRarity > 70 && randomItemRarity <= 85) {
      return 1;
    }
    // 10% chance of special
    if (randomItemRarity > 85 && randomItemRarity <= 95) {
      return 2;
    }
    // 4% chance of rare
    if (randomItemRarity > 95 && randomItemRarity <= 99) {
      return 3;
    }
    // 1% chance of legendary
    if (randomItemRarity > 99 && randomItemRarity <= 100) {
      return 4;
    }
  };

  /* Drop a new piece of equipment.
     
     To add a new piece of equipment:
      - Increase the randomly generated number's maximum value by 1
      - Create a new if statement which accounts for the newly added numeric range
      - Add the relevant object keys, excluding the ones which are shared (already added at the beginning)

     */
  generateNewEquipmentDropByType = type => {
    let equipmentToBeCollected = { ...this.state.equipmentToBeCollected };
    // Generate a random number which represents the kind of equipment found
    let randomNumber = Math.round(Math.random() * 5);
    let randomItemRarity = this.calculateNewItemRarity();
    /* Weapon Drop */
    if (type === "weapon") {
      // Create a blueprint with the shared keys of all weapons
      let equipmentPiece = {
        itemType: "weapon",
        /* Item stats are calculated based on their assigned rarity.
          0 - Common
          1 - Uncommon
          2 - Special
          3 - Rare
          4 - Legendary 
        */
        itemRarity: randomItemRarity,
        itemLevel: this.calculateNewEquipmentDropLevel(),
        itemIsEquipped: false,
        itemValue: this.calculateNewEquipmentStatsRange(
          500,
          this.state.enemyLevel,
          1.05,
          5,
          randomItemRarity
        )
      };
      // Weapon Type #1 - Dagger
      if (randomNumber <= 1) {
        equipmentPiece.itemName = "Training Dagger";
        equipmentPiece.itemImage = daggerOneImage;
        equipmentPiece.itemDescription =
          "A weak weapon with great attack speed";
        equipmentPiece.itemStats = {
          bonusAttack: this.calculateNewEquipmentStatsRange(
            10 * Math.pow(1.04, this.state.enemyLevel),
            equipmentPiece.itemLevel,
            1.07,
            3,
            randomItemRarity
          ),
          bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(
            5,
            equipmentPiece.itemLevel,
            1.005,
            10,
            randomItemRarity
          ),
          bonusCriticalChance: this.calculateNewEquipmentStatsRange(
            1,
            equipmentPiece.itemLevel,
            1.005,
            10,
            randomItemRarity
          )
        };
      }
      // Weapon Type #2 - Mace
      if (randomNumber > 1 && randomNumber <= 2) {
        equipmentPiece.itemName = "Training Mace";
        equipmentPiece.itemImage = maceOneImage;
        equipmentPiece.itemDescription = "A sturdy weapon with balanced stats";
        equipmentPiece.itemStats = {
          bonusAttack: this.calculateNewEquipmentStatsRange(
            15 * Math.pow(1.04, this.state.enemyLevel),
            equipmentPiece.itemLevel,
            1.07,
            3,
            randomItemRarity
          ),
          bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(
            2,
            equipmentPiece.itemLevel,
            1.005,
            10,
            randomItemRarity
          ),
          bonusCriticalChance: this.calculateNewEquipmentStatsRange(
            2,
            equipmentPiece.itemLevel,
            1.005,
            10,
            randomItemRarity
          )
        };
      }
      // Weapon Type #3 - Axe
      if (randomNumber > 2 && randomNumber <= 3) {
        equipmentPiece.itemName = "Training Axe";
        equipmentPiece.itemImage = axeOneImage;
        equipmentPiece.itemDescription =
          "A long Axe with great critical capabilities";
        equipmentPiece.itemStats = {
          bonusAttack: this.calculateNewEquipmentStatsRange(
            10 * Math.pow(1.04, this.state.enemyLevel),
            equipmentPiece.itemLevel,
            1.07,
            3,
            randomItemRarity
          ),
          bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(
            1,
            equipmentPiece.itemLevel,
            1.005,
            10,
            randomItemRarity
          ),
          bonusCriticalChance: this.calculateNewEquipmentStatsRange(
            5,
            equipmentPiece.itemLevel,
            1.005,
            10,
            randomItemRarity
          )
        };
      }
      // Weapon Type #4 - Sword
      if (randomNumber > 3 && randomNumber <= 4) {
        equipmentPiece.itemName = "Training Sword";
        equipmentPiece.itemImage = swordOneImage;
        equipmentPiece.itemDescription =
          "A sword which balances damage and attack speed";
        equipmentPiece.itemStats = {
          bonusAttack: this.calculateNewEquipmentStatsRange(
            15 * Math.pow(1.04, this.state.enemyLevel),
            equipmentPiece.itemLevel,
            1.07,
            3,
            randomItemRarity
          ),
          bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(
            3,
            equipmentPiece.itemLevel,
            1.005,
            10,
            randomItemRarity
          ),
          bonusCriticalChance: this.calculateNewEquipmentStatsRange(
            1,
            equipmentPiece.itemLevel,
            1.005,
            10,
            randomItemRarity
          )
        };
      }
      // Weapon Type #5 - Bow
      if (randomNumber > 4 && randomNumber <= 5) {
        equipmentPiece.itemName = "Training Bow";
        equipmentPiece.itemImage = bowOneImage;
        equipmentPiece.itemDescription =
          "A bow with incredible damage but slow speed and critical capabilities";
        equipmentPiece.itemStats = {
          bonusAttack: this.calculateNewEquipmentStatsRange(
            20 * Math.pow(1.04, this.state.enemyLevel),
            equipmentPiece.itemLevel,
            1.07,
            3,
            randomItemRarity
          ),
          bonusDoubleAttackChance: this.calculateNewEquipmentStatsRange(
            1,
            equipmentPiece.itemLevel,
            1.005,
            3,
            randomItemRarity
          ),
          bonusCriticalChance: this.calculateNewEquipmentStatsRange(
            1,
            equipmentPiece.itemLevel,
            1.005,
            3,
            randomItemRarity
          )
        };
      }
      // Add the dropped item(s) to the array
      equipmentToBeCollected[type].push(equipmentPiece);
      // Return the array
    }
    this.setState({ equipmentToBeCollected });
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
      if (skillNumber === "skillOne" || skillNumber === "skillFour") {
        if (
          skills[skillNumber].numberOfAttacksLevelsToUpgrade.includes(
            this.state.playerLevel
          )
        ) {
          skills[skillNumber].numberOfAttacks += 1;
        }
      }

      // Skill #1
      if (skillNumber === "skillOne") {
        skills[skillNumber].damageMultiplier =
          // Round to 2 decimals max (if applies)
          Math.round(
            1.8 * Math.pow(1.1, this.state.skills.skillOne.level) * 100
          ) / 100;
      }

      // Skill #2
      if (skillNumber === "skillTwo") {
        skills[skillNumber].damageMultiplier =
          Math.round(
            1.2 * Math.pow(1.1, this.state.skills.skillTwo.level) * 100
          ) / 100;
      }
      // Skill #3
      if (skillNumber === "skillThree") {
        skills[skillNumber].damageMultiplier =
          Math.round(1.2 * Math.pow(1.1, skills[skillNumber].level) * 100) /
          100;
      }
      // Skill #4
      if (skillNumber === "skillFour") {
        skills[skillNumber].damageMultiplier =
          Math.round(
            1.8 * Math.pow(1.1, this.state.skills.skillFour.level) * 100
          ) / 100;
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
      playerExperienceRequired: 250 * Math.pow(1.1, this.state.playerLevel),
      // Increase the max health, including the deck health bonus
      playerHealthMax: Math.round(
        500 *
          Math.pow(1.05, this.state.playerLevel) *
          this.calculateExperienceMultiplierAllSources()
      ),
      playerHealthCurrent: Math.round(
        500 *
          Math.pow(1.05, this.state.playerLevel) *
          this.state.deckBonuses.bonusHealth
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

  // Player damage
  addPlayerDamageRenderingItem = () => {
    // If the enemy has health
    if (this.state.enemyHasHealth && !this.state.isGamePaused) {
      this.setState(state => ({
        playerDamageParagraphsToBeRendered: [
          ...state.playerDamageParagraphsToBeRendered,
          { id: Date.now() }
        ]
      }));
    }
  };

  removePlayerDamageRenderingItem = id => {
    this.setState(state => ({
      playerDamageParagraphsToBeRendered: state.playerDamageParagraphsToBeRendered.filter(
        ({ id: itemid }) => itemid !== id
      )
    }));
  };

  // Pet damage
  addPetDamageRenderingItem = () => {
    // If the enemy has health
    if (this.state.enemyHasHealth) {
      this.setState(state => ({
        petDamageParagraphsToBeRendered: [
          ...state.petDamageParagraphsToBeRendered,
          { id: Date.now() }
        ]
      }));
    }
  };
  removePetDamageRenderingItem = id => {
    this.setState(state => ({
      petDamageParagraphsToBeRendered: state.petDamageParagraphsToBeRendered.filter(
        ({ id: itemid }) => itemid !== id
      )
    }));
  };

  // Scale the image whenever the player attacks using the keyboard shortcuts
  scaleEnemyImageOnPlayerAttack = () => {
    this.setState({ hasPlayerAttacked: true });
    setTimeout(() => {
      this.setState({ hasPlayerAttacked: false });
    }, 25);
  };

  // Get the input from the keyboard, document-wide
  handleGlobalKeyboardInput = event => {
    // Use [W/E] to attack
    if (
      event.key === "w" ||
      event.key === "W" ||
      event.key === "e" ||
      event.key === "E"
    ) {
      this.addPlayerDamageRenderingItem();
      this.playerAttack();
      this.scaleEnemyImageOnPlayerAttack();
    }
    // Use [H] to heal
    if (event.key === "h" || event.key === "H") {
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
    if (event.key === "d" || event.key === "D") {
      this.setState({
        isDebugModeActive: !this.state.isDebugModeActive,
        leftMenuSettingSelected: "Hero"
      });
    }
    if (event.key === "t" || event.key === "T") {
      this.setState({
        isTutorialScreenActive: !this.state.isTutorialScreenActive,
        leftMenuSettingSelected: "Hero"
      });
      this.togglePause();
    }
    if (event.key === "p" || event.key === "P") {
      this.togglePause();
    }
  };

  togglePause = () => {
    this.setState({ isGamePaused: !this.state.isGamePaused });
    if (this.state.isGamePaused) {
      this.pushNewParagraphToBattleLog(
        <p>
          <small className="text-warning">Game paused.</small>
        </p>
      );
    } else {
      this.pushNewParagraphToBattleLog(
        <p>
          <small className="text-warning">Game unpaused.</small>
        </p>
      );
    }
  };

  calculateRandomDropChance = chanceInPercentage => {
    return chanceInPercentage > Math.random() * 100;
  };

  // Include all EXP multipliers to return the final multiplier
  calculateExperienceMultiplierAllSources = () => {
    let experienceMultiplier = 1;
    experienceMultiplier += this.state.deckBonuses.bonusExperience;
    return experienceMultiplier;
  };

  // Include all Coin Drop % multipliers to return the final multiplier
  calculateCoinDropMultiplierAllSources = () => {
    let coinDropMultiplier = 1;
    coinDropMultiplier += this.state.deckBonuses.bonusCoinDrop;
    return coinDropMultiplier;
  };
  // Include all Potion Drop % multipliers to return the final multiplier
  calculatePotionDropChanceAllSources = () => {
    let potionDropChance = 1;
    potionDropChance += this.state.deckBonuses.bonusPotionDropRate;
    return potionDropChance;
  };

  calculateAllDrops = () => {
    /* LUCK drops - things which are not guaranteed, and might NOT be dropped */
    // Calculate lootbag drops
    if (this.calculateRandomDropChance(this.state.lootBagsDropChance)) {
      this.setState({
        lootBagsToBeCollected: this.state.lootBagsToBeCollected + 1
      });
    }
    // Calculate weapon drops
    if (
      this.calculateRandomDropChance(
        this.calculateNewEquipmentDropRate("weapon")
      ) ||
      this.state.totalEnemiesKilled === 0
    ) {
      this.generateNewEquipmentDropByType("weapon");
    }
    // Calculate food drops
    if (
      this.calculateRandomDropChance(
        this.state.foodDropChance * this.calculatePotionDropChanceAllSources()
      )
    ) {
      this.setState({
        foodToBeCollected:
          this.state.foodToBeCollected + this.state.enemyFoodHeld
      });
    }

    // If there are more than 10 uncollected drops
    if (
      this.state.coinsToBeCollected +
        this.state.foodToBeCollected +
        this.state.equipmentToBeCollected.weapon.length >
      10
    ) {
      // Collect all of them
      this.collectCoinsOnHover();
      this.collectFoodOnHover();
      this.collectEquipmentOnHover();
    }

    /* SURE drops - things which are guaranteed, and WILL drop */
    // Give coins, 100% chance
    let coinsDroppedByEnemy;
    if (
      // If the enemy is a boss
      this.state.enemyIsBoss
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
        Math.round(
          coinsDroppedByEnemy *
            this.state.enemyCoinsValue *
            this.calculateCoinDropMultiplierAllSources()
        )
    });
    // Give XP, 100% chance
    this.setState({
      playerExperienceCurrent:
        this.state.playerExperienceCurrent +
        this.state.enemyExperienceHeld *
          this.calculateExperienceMultiplierAllSources()
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
      playerCanAttack: false
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
    try {
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
          playerCanAttack: true
        });
        // After 0.5 seconds
      }, this.state.enemySpawnTime);
      // If the enemy was a boss, change it back to normal
      if (this.state.enemyIsBoss) {
        this.setState({ enemyIsBoss: false });
      }
      setTimeout(() => {
        if (this.state.enemyHasHealth && this.state.enemyHealthCurrent <= 0) {
          throw new Error(
            "The new enemy failed to generate. Attempting new generation."
          );
        }
      }, 100);
    } catch (error) {
      setTimeout(() => {
        console.log(error);
        this.generateNewEnemy();
      }, 0);
    }
  };

  // Calculate the final chance in % of landing a double attack
  calculateDoubleAttackChanceAllSources = () => {
    let doubleAttackChance = this.state.playerDoubleAttackChance;
    doubleAttackChance += this.state.deckBonuses.bonusDoubleAttackChance;
    doubleAttackChance += this.state.equipmentBonuses.bonusDoubleAttackChance;
    return doubleAttackChance;
  };

  // Calculate the final chance in % of landing a critical hit
  calculateCriticalChanceAllSources = () => {
    let criticalChance = this.state.playerCriticalChance;
    criticalChance += this.state.deckBonuses.bonusCriticalChance;
    criticalChance += this.state.equipmentBonuses.bonusCriticalChance;
    return criticalChance;
  };

  // Calculate the final critical damage multiplier
  calculateCriticalMultiplierAllSources = () => {
    let criticalMultiplier = this.state.playerCriticalMultiplier;
    criticalMultiplier += this.state.deckBonuses.bonusCriticalDamage;
    return criticalMultiplier;
  };

  // Calculate the total click damage multiplier
  calculateClickDamageAllSources = () => {
    // Basic damage
    let damage =
      this.state.playerAttack + this.state.equipmentBonuses.bonusAttack;
    if (this.state.skills.skillThree.isActive) {
      // Add to the basic the skill's extra damage
      damage +=
        (this.calculateDamagePerSecondAllSources() / 100) *
        this.state.skills.skillThree.damageMultiplier;
    }

    // Basic multiplier
    let damageMultiplier = 1;
    damageMultiplier += this.state.deckBonuses.bonusClickDamage;
    damageMultiplier += this.state.damageMultiplierFromTomes;

    return damage * damageMultiplier;
  };

  // Sum of all the DPS sources
  calculateDamagePerSecondAllSources = () => {
    let damage =
      this.state.pets.petOne.damagePerSecondCurrent +
      this.state.pets.petTwo.damagePerSecondCurrent +
      this.state.pets.petThree.damagePerSecondCurrent +
      this.state.pets.petFour.damagePerSecondCurrent +
      this.state.pets.petFive.damagePerSecondCurrent +
      this.state.pets.petSix.damagePerSecondCurrent +
      this.state.pets.petSeven.damagePerSecondCurrent +
      this.state.pets.petEight.damagePerSecondCurrent +
      this.state.pets.petNine.damagePerSecondCurrent +
      this.state.pets.petTen.damagePerSecondCurrent +
      this.state.pets.petEleven.damagePerSecondCurrent +
      this.state.pets.petTwelve.damagePerSecondCurrent;
    let multiplier = 1;
    multiplier += this.state.deckBonuses.bonusDamagePerSecond;
    multiplier += this.state.damageMultiplierFromTomes;
    if (this.state.skills.skillTwo.isActive) {
      multiplier += this.state.skills.skillTwo.damageMultiplier;
    }
    return damage * multiplier;
  };

  // Calculate the final click damage after adding up all sources
  calculateClickDamageAfterMultipliers = () => {
    let playerLastAttack = { ...this.state.playerLastAttack };
    let totalDamage = this.calculateClickDamageAllSources();
    if (this.state.skills.skillThree.isActive) {
      totalDamage *= this.state.skills.skillThree.damageMultiplier;
    }
    // Randomise the damage by +/- 25%
    totalDamage +=
      (totalDamage / 100) *
      (Math.random() * 25 * (Math.random() >= 0.5 ? 1 : -1));
    // If double hit
    if (this.calculateDoubleAttackChanceAllSources() >= Math.random() * 101) {
      playerLastAttack.isDouble = true;
      totalDamage *= 2;
    } else {
      playerLastAttack.isDouble = false;
    }
    // If critical hit
    if (this.calculateCriticalChanceAllSources() >= Math.random() * 101) {
      totalDamage +=
        this.calculateCriticalMultiplierAllSources() * this.state.playerAttack;
      playerLastAttack.isCritical = true;
    } else {
      playerLastAttack.isCritical = false;
    }
    // Store a reference to the last attack
    playerLastAttack.damage = this.renderNumberWithAbbreviations(
      Math.round(totalDamage)
    );
    this.setState({ playerLastAttack });
    return Math.round(totalDamage);
  };

  // Attack the enemy
  playerAttack = () => {
    // If the enemy is not in the process of respawning
    if (this.state.playerCanAttack && !this.state.isGamePaused) {
      let damageDealt = this.calculateClickDamageAfterMultipliers();
      if (damageDealt !== null) {
        this.setState({
          // Remove the player damage from the enemy's health
          enemyHealthCurrent: this.state.enemyHealthCurrent - damageDealt,
          totalPlayerAttacks: this.state.totalPlayerAttacks + 1,
          totalPlayerDamageDealt:
            this.state.totalPlayerDamageDealt + damageDealt
        });
        if (
          // When enemy is dead
          this.state.enemyHealthCurrent <= 0 &&
          // When XP has not already been given
          this.state.enemyHasHealth !== false
        ) {
          this.enemyDie();
        }
      }
    }
  };

  saveProgressToLocalStorage = () => {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  };

  loadProgressFromLocalStorage = () => {
    // Loop through all items stored in the local storage
    for (let key in localStorage) {
      // If the key found is part of the current state,
      // && is not a key which should not be loaded
      if (
        this.state.hasOwnProperty(key) &&
        key !== "battleLogParagraphsToBeRendered" &&
        key !== "enemyAttackInterval" &&
        key !== "playerAttackInterval" &&
        key !== "petDamageParagraphsToBeRendered" &&
        key !== "playerDamageParagraphsToBeRendered" &&
        key !== "enemyHealthCurrent" &&
        key !== "enemyHasHealth" &&
        key !== "playerCanAttack"
      ) {
        // Get the key's value from localStorage
        let value = JSON.parse(localStorage.getItem(key));
        // Set the state with it
        this.setState({ [key]: value });
      }
    }
    // Load skills
    let skills = { ...this.state.skills };
    // Load player level
    let playerLevel = localStorage.playerLevel;
    // Iterate through each skill
    for (let skill in skills) {
      // Set it to inactive
      skills[skill].isActive = false;
      // If the skill level is less than Lv. 1
      if (playerLevel < skills[skill].levelsToUpgrade[1]) {
        // If the player level is enough to unlock the skill
        if (playerLevel > skills[skill].levelToUnlock) {
          // Unlock it
          skills[skill].level = 1;
        }
        // If the skill level is higher than Lv. 1
      } else {
        let skillLevelStorage = 0;
        if (playerLevel > skills[skill].levelToUnlock) {
          skillLevelStorage = 1;
        }
        // Initiate a new variable to store the level of the skill
        // Find the level of the skill and assign it to skillLevelStorage
        skills[skill].level = skills[skill].levelsToUpgrade.reduce(
          (total, value) => {
            if (playerLevel > value) {
              skillLevelStorage++;
            }
          }
        );
        // Set the level of the skill to the loaded one
        skills[skill].level = skillLevelStorage;
        // Set the cooldown of the skill to the loaded one
        skills[skill].cooldown -=
          skills[skill].cooldownReductionByLevelUp * skillLevelStorage;
        // Set the number of attacks to the loaded one
        if (
          skills[skill].name === "Quick Stab" ||
          skills[skill].name === "Fruit of Madness"
        ) {
          // Initiate a new variable to store the number of attacks of the skill
          let skillNumberOfAttacks = 0;
          // Find the added number of attacks of the skill and assign it to skillNumberOfAttacks
          skills[skill].numberOfAttacksLevelsToUpgrade.reduce(
            (total, value) => {
              if (playerLevel > value) {
                skillNumberOfAttacks++;
              }
            }
          );
          // Set the number of attacks of the skill to the loaded one
          skills[skill].numberOfAttacks += skillNumberOfAttacks;
        }
        // Skill #1 & Skill #4
        if (
          skills[skill].name === "Quick Stab" ||
          skills[skill].name === "Fruit of Madness"
        ) {
          skills[skill].damageMultiplier =
            // Round to 2 decimals max (if applies)
            Math.round(1.8 * Math.pow(1.1, skills[skill].level) * 100) / 100;
        }

        // Skill #2 & Skill #3
        if (
          skills[skill].name === "Mark of the Beast" ||
          skills[skill].name === "Animal training"
        ) {
          skills[skill].damageMultiplier =
            Math.round(1.2 * Math.pow(1.1, skills[skill].level) * 100) / 100;
        }
      }
    }
    this.setState({ skills });
    // Reinitialise all values
    setTimeout(() => {
      this.forceRerenderPetParagraphs();
      this.enemyAttack();
    }, 0);
  };

  // Cause a forced rerendering of pets' values
  forceRerenderPetParagraphs = () => {
    let shouldRerender = { ...this.state.shouldRerender };
    for (let petNumber in shouldRerender.petMenuParagraphs) {
      shouldRerender.petMenuParagraphs[petNumber] = true;
    }
    this.setState({ shouldRerender });
    setTimeout(() => {
      for (let petNumber in shouldRerender.petMenuParagraphs) {
        shouldRerender.petMenuParagraphs[petNumber] = false;
        this.setState({ shouldRerender });
      }
    }, 100);
  };

  playerUseActiveSkill = skillNumber => {
    if (!this.state.isGamePaused) {
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
          skills[skillNumber].isReady = true;
          this.setState({ skills });
        }, skills[skillNumber].cooldown);
        // Skills #1 and #4
        if (skillNumber === "skillOne" || skillNumber === "skillFour") {
          let numberOfAttacks = skills[skillNumber].numberOfAttacks;
          let skillActivate = () => {
            if (numberOfAttacks !== 0) {
              let damage =
                this.calculateClickDamageAllSources() *
                skills[skillNumber].damageMultiplier;
              if (damage !== null) {
                numberOfAttacks--;
                setTimeout(() => {
                  this.setState({
                    enemyHealthCurrent:
                      this.state.enemyHealthCurrent -
                      this.calculateClickDamageAllSources() *
                        skills[skillNumber].damageMultiplier
                  });
                  skillActivate();
                }, 250);
              }
            }
          };
          skillActivate();
          this.setState({ skills });
        }
        // Skills #2 and #3
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
                <small className="text-warning">
                  {skills[skillNumber].name}
                </small>
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
                      this.calculateClickDamageAllSources() *
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
                <span className="text-warning">
                  {skills[skillNumber].name}{" "}
                </span>
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
                      this.calculateDamagePerSecondAllSources() *
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
    }
  };

  // DPS (Damage Per Second)
  playerAttackPerSecond = () => {
    let damageDealt = this.calculateDamagePerSecondAllSources() / 2;
    // Randomise the damage by +/- 25%
    damageDealt +=
      (damageDealt / 100) *
      (Math.random() * 25 * (Math.random() * 1 >= 0.5 ? 1 : -1));
    // Store a reference in the state of the random number generate to be rendered in petVisualDamage.jsx
    damageDealt = Math.round(damageDealt);
    this.setState({
      petDamageValueToBeRendered: this.renderNumberWithAbbreviations(
        damageDealt
      )
    });
    // If the enemy is not respawning
    if (this.state.playerCanAttack && !this.state.isGamePaused) {
      if (damageDealt !== null) {
        this.setState({
          // Damage the enemy by the amount of player DPS
          enemyHealthCurrent: this.state.enemyHealthCurrent - damageDealt,
          // Update player stats
          totalPetDamageDealt: this.state.totalPetDamageDealt + damageDealt
        });
        if (
          // If enemy is dead
          this.state.enemyHealthCurrent <= 1 &&
          // If XP has not already been given
          this.state.enemyHasHealth !== false
        ) {
          this.enemyDie();
        }
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
            enemyIsBoss: false
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
    let currentStageIndex = this.state.allScenarios.indexOf(
      this.state.currentScenario
    );

    // Normal enemy
    if (!this.state.enemyIsBoss) {
      let possibleEnemiesInStage = this.state.enemyImages[
        Object.keys(this.state.enemyImages)[currentStageIndex]
      ].length;
      let randomEnemyIndex = Math.floor(Math.random() * possibleEnemiesInStage);
      this.setState({
        // And use the random number to get a new random enemy (image and name)
        enemyImageCurrent: this.state.enemyImages[
          Object.keys(this.state.enemyImages)[currentStageIndex]
        ][randomEnemyIndex],
        enemyNameCurrent: this.state.enemyNames[
          Object.keys(this.state.enemyImages)[currentStageIndex]
        ][randomEnemyIndex]
      });
      // Boss enemy
    } else {
      let possibleBossesInStage = this.state.bossImages[
        Object.keys(this.state.enemyImages)[currentStageIndex]
      ].length;
      let randomBossIndex = Math.floor(Math.random() * possibleBossesInStage);
      this.setState({
        // And use the random number to get a new random enemy (image and name)
        enemyImageCurrent: this.state.bossImages[
          Object.keys(this.state.bossImages)[currentStageIndex]
        ][randomBossIndex],
        enemyNameCurrent: this.state.bossNames[
          Object.keys(this.state.bossImages)[currentStageIndex]
        ][randomBossIndex]
      });
    }
  };

  /* Create a new enemy with the generateNewEnemy() function.
     The parameter 'level' is used to generate values which are balanced all-over 
  */
  generateNewEnemy = level => {
    setTimeout(() => {
      // Create a new identity for the next enemy
      this.generateRandomEnemyIdentity();
      // If the enemy is not a boss
      if (!this.state.enemyIsBoss) {
        this.setState({
          // Reinitialise the values of the new enemy
          enemyHasHealth: true,
          enemyLevel: level,
          enemyExperienceHeld: Math.round(25 * Math.pow(1.08, level)),
          enemyHealthCurrent: Math.round(500 * Math.pow(1.12, level)),
          enemyHealthMax: Math.round(500 * Math.pow(1.12, level)),
          enemyAttack: Math.round(3 * Math.pow(1.045, level)),
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
            75 * Math.pow(1.08, this.state.stageCurrent)
          ),
          enemyHealthCurrent: Math.round(
            2500 * Math.pow(1.12, this.state.stageCurrent)
          ),
          enemyHealthMax: Math.round(
            2500 * Math.pow(1.12, this.state.stageCurrent)
          ),
          enemyAttack: Math.round(
            50 * Math.pow(1.045, this.state.stageCurrent)
          ),
          enemyCoinsValue: Math.round(
            100 * Math.pow(1.05, this.state.stageCurrent)
          ),
          // Reinitialise the values of the player
          playerHealthCurrent: this.state.playerHealthMax
        });
      }
    }, 0);
  };

  toggleInventoryPopoversRendering = boolean => {
    this.setState({ canInventoryPopoversBeRendered: boolean });
  };

  // Equip the player with all items who's isItemEquipped boolean resolves to true
  addEquippedItemsToPlayer = () => {
    // Create a copy of the object from the state
    let playerEquipment = { ...this.state.playerEquipment };
    let inventory = { ...this.state.inventory };
    // Iterate through each key of the object
    for (let item in inventory) {
      // If the item is equipped
      if (inventory[item].itemIsEquipped) {
        playerEquipment[inventory[item].itemType] = inventory[item];
      }
    }
    // Set the state with the copy of the object
    this.setState({ playerEquipment });
  };

  // Fetch and apply all the equipment bonuses granted by worn equipment
  addEquipmentBonusesToPlayer = () => {
    // Create a copy of the object from the state
    let playerEquipment = { ...this.state.playerEquipment };
    let equipmentBonuses = { ...this.state.equipmentBonuses };
    // Iterate through each bonus category
    for (let bonus in equipmentBonuses) {
      // And reset them to 0
      equipmentBonuses[bonus] = 0;
    }
    // Iterate through each equipped item
    for (let item in playerEquipment) {
      // Iterate through each stat bonus granted by the item
      for (let bonus in playerEquipment[item].itemStats) {
        // Add the bonus to the relevant category
        equipmentBonuses[bonus] += playerEquipment[item].itemStats[bonus];
      }
    }
    // Set the state with the copy of the object
    this.setState({ equipmentBonuses });
  };

  // Set's the item's equipped state in order to equip/unequip
  toggleItemEquippedState = item => {
    // Create a copy of the object from the state
    let inventory = { ...this.state.inventory };
    // If the item passed as a parameter is not already equipped
    if (!item.itemIsEquipped) {
      // Loop through every slot of the inventory
      for (let slot in inventory) {
        // When the item passed as a parameter in the inventory is found
        if (inventory[slot] === item) {
          // Set it as equipped
          inventory[slot].itemIsEquipped = true;
          // When all other items are found
        } else {
          // Set them as not equipped
          inventory[slot].itemIsEquipped = false;
        }
      }
    }
    this.setState({ inventory });
    this.addEquippedItemsToPlayer();
    // Add to the end of the queue
    setTimeout(() => {
      this.addEquipmentBonusesToPlayer();
    }, 0);
  };

  // Sell an item from the inventory (unequipped) for it's itemValue prop
  playerSellItem = item => {
    let inventory = [];
    for (let item in this.state.inventory) {
      inventory.push(this.state.inventory[item]);
    }
    // If the item passed as a parameter is equipped
    if (!item.itemIsEquipped) {
      // Loop through every item in the inventory
      for (let slot in inventory) {
        // And when the item is found
        if (inventory[slot] === item) {
          // Delete it from the list and rearrange the whole array
          this.setState({
            coins: this.state.coins + inventory[slot].itemValue
          });
          inventory.splice(inventory.indexOf(inventory[slot]), 1);
        }
      }
      this.setState({ inventory });
    }
  };

  // Sell all items from the inventory (unequipped) for their itemValue prop
  playerSellAllUnequippedItems = () => {
    // Create a copy of the object from the state
    let inventory = [];
    let totalSaleValue = 0;
    for (let item in this.state.inventory) {
      inventory.push(this.state.inventory[item]);
    }

    // Loop through every item in the inventory
    for (let slot in inventory) {
      if (!inventory[slot].itemIsEquipped) {
        totalSaleValue += inventory[slot].itemValue;
      }
    }

    inventory = [];
    for (let item in this.state.inventory) {
      if (this.state.inventory[item].itemIsEquipped) {
        inventory.push(this.state.inventory[item]);
      }
    }

    this.setState({ inventory, coins: this.state.coins + totalSaleValue });
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
    }, 500);
  };

  // Push a paragraph to the battle log to notify of a full inventory
  pushInventoryFullParagraphToBattleLog = () => {
    // If an alert has not already been sent
    if (!this.state.inventoryFullParagraphSent) {
      // Push to the battle log
      this.pushNewParagraphToBattleLog(
        <p>
          <small className="text-warning">Inventory full!</small>
        </p>
      );
      // Set the alert as sent
      this.setState({ inventoryFullParagraphSent: true });
      // Allow another alert to be sent only after 1000ms
      setTimeout(() => {
        this.setState({ inventoryFullParagraphSent: false });
      }, 1000);
    }
  };

  // Add the equipment to the inventory when the player hovers on uncollected equipment
  collectEquipmentOnHover = event => {
    // Weapons
    let uncollectedEquipment = [];
    // Create a copy of the object from the state
    let equipmentToBeCollected = { ...this.state.equipmentToBeCollected };
    // Clone the inventory's current state into a newly declared variable
    let inventory = [];
    for (let item in this.state.inventory) {
      inventory.push(this.state.inventory[item]);
    }
    // Set the equipment on the floor as collected
    this.setState({ isEquipmentCollected: true });
    // After 500ms
    setTimeout(() => {
      // Loop through every item in the array
      for (let item in equipmentToBeCollected.weapon) {
        // If the inventory is not full
        if (inventory.length < 18) {
          // Add the uncollected item to the inventory
          inventory.push(equipmentToBeCollected.weapon[item]);
          // If the inventory full
        } else {
          // Add the uncollected item to an 'uncollected items' array
          uncollectedEquipment.push(equipmentToBeCollected.weapon[item]);
        }
      }
      //  Reinitialise the array of equipment to be collected
      equipmentToBeCollected.weapon = [];
      // If there is any uncollected equipment
      if (uncollectedEquipment.length > 1) {
        equipmentToBeCollected.weapon = uncollectedEquipment;
        this.pushInventoryFullParagraphToBattleLog();
      }
      // Set the state with the modified array
      this.setState({ inventory, equipmentToBeCollected });
    }, 0);
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
    }, 500);
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
      this.setState({ coins: this.state.coins + 1000000000 });
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
    // Reset localStorage
    if (itemName === "reset") {
      localStorage.clear();
      document.location.reload(true);
    }
    // Set enemy spawn no-delay
    if (itemName === "enemySpawnNoDelay") {
      this.setState({ enemySpawnTime: 0 });
    }
  };

  /* Inventory UI*/
  fetchLeftMenuSettingSelection = event => {
    this.setState({ leftMenuSettingSelected: event.target.textContent });
  };

  fetchTutorialScreenSettingSelection = event => {
    this.setState({ tutorialScreenSettingSelected: event.target.textContent });
  };

  changeToNextBackground = () => {
    let backgroundImageIndex = this.state.allScenarios.indexOf(
      this.state.currentScenario
    );

    // Update the background image
    this.setState({
      backgroundImageCurrent: this.state.backgroundImages[backgroundImageIndex]
    });
  };

  renderBackgroundImage = () => {
    let backgroundDivStyle = {
      backgroundImage: "url(" + this.state.backgroundImageCurrent + ")"
    };
    return backgroundDivStyle;
  };

  componentDidMount() {
    document.addEventListener("keyup", this.handleGlobalKeyboardInput, false);
    this.loadProgressFromLocalStorage();
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
      return (number / 1000).toFixed(1) + "k";
    }
    // 1m - 999m
    if (number >= 1000000 && number < 1000000000) {
      return (number / 1000000).toFixed(1) + "m";
    }
    // 1b - 999b
    if (number >= 1000000000 && number < 1000000000000) {
      return (number / 1000000000).toFixed(1) + "b";
    }
    // 1t - 999t
    if (number >= 1000000000000 && number < 1000000000000000) {
      return (number / 1000000000000).toFixed(1) + "t";
    } else {
      return number;
    }
  };

  renderStageBar = () => {
    return (
      <StagesBar
        mainState={this.state}
        activateAutoStageAdvance={this.activateAutoStageAdvance}
        playerStageAdvance={this.playerStageAdvance}
        quitBossStage={this.quitBossStage}
      />
    );
  };

  renderBattleArea = () => {
    if (
      this.state.gameVersion === "3.1.0" ||
      this.state.gameVersionAllowedByUser === this.state.gameVersion
    ) {
      return (
        <BattleArea
          mainState={this.state}
          collectCoinsOnHover={this.collectCoinsOnHover}
          collectFoodOnHover={this.collectFoodOnHover}
          collectLootBagOnHover={this.collectLootBagOnHover}
          collectEquipmentOnHover={this.collectEquipmentOnHover}
          addPlayerDamageRenderingItem={this.addPlayerDamageRenderingItem}
          removePlayerDamageRenderingItem={this.removePlayerDamageRenderingItem}
          addPetDamageRenderingItem={this.addPetDamageRenderingItem}
          removePetDamageRenderingItem={this.removePetDamageRenderingItem}
          playerAttack={this.playerAttack}
          playerHeal={this.playerHeal}
          calculateRandomDropChance={this.calculateRandomDropChance}
          calculateClickDamageAllSources={this.calculateClickDamageAllSources}
          calculateDamagePerSecondAllSources={
            this.calculateDamagePerSecondAllSources
          }
          renderNumberWithAbbreviations={this.renderNumberWithAbbreviations}
        />
      );
    } else {
      return (
        <div id="differentGameVersionLoad-div">
          <h4 className="text-primary">Welcome back!</h4>
          <br />
          <p>
            The current version of the game is{" "}
            <span className="text-warning">3.1.0</span>, but we detected a game
            save from an older version which might not be compatible with the
            current one. Would you like delete your progress and start over, or
            continue your game?
          </p>

          <br />
          <div id="differentGameVersionLoad-buttons">
            <button
              className="btn btn-dark mx-auto text-warning"
              onClick={() => {
                localStorage.clear();
                document.location.reload(true);
              }}
            >
              Delete my saved data
            </button>
            <button
              className="btn btn-dark mx-auto text-primary"
              onClick={() => {
                this.setState({
                  gameVersionAllowedByUser: this.state.gameVersion
                });
              }}
            >
              Keep playing
            </button>
          </div>
          <br />
          <br />

          <small className="text-danger">
            Please remember that using your saved game on the newer version{" "}
            <em>might</em> cause parts of the game to behave unexpectedly.
          </small>
        </div>
      );
    }
  };

  renderUserInterfaceClasses = () => {
    return this.state.isPlayerRebirting ? "userInterface-div-rebirth" : "";
  };

  render() {
    return (
      <div
        style={this.renderBackgroundImage()}
        id="userInterface-div"
        className={this.renderUserInterfaceClasses()}
      >
        <h1 id="userInterface-h1">Fantasia</h1>
        {/* Resources bar [ TOP ] */}
        <ResourcesBar mainState={this.state} />
        {/* Battle log [ BOTTOM/RIGHT ] */}
        <BattleLog mainState={this.state} />
        {/* Left menu [ LEFT ] */}
        <LeftMenu
          mainState={this.state}
          fetchLeftMenuSettingSelection={this.fetchLeftMenuSettingSelection}
          fetchPetsMenuUpgradeSettings={this.fetchPetsMenuUpgradeSettings}
          fetchHeroMenuUpgradeSettings={this.fetchHeroMenuUpgradeSettings}
          renderDebugMenu={this.renderDebugMenu}
          renderNumberWithAbbreviations={this.renderNumberWithAbbreviations}
          heroUpgradeLevelUp={this.heroUpgradeLevelUp}
          heroUpgradeLevelUpgradeByUserSettings={
            this.heroUpgradeLevelUpgradeByUserSettings
          }
          petLevelUpgrade={this.petLevelUpgrade}
          petLevelUpgradeByUserSettings={this.petLevelUpgradeByUserSettings}
          calculateClickDamageAllSources={this.calculateClickDamageAllSources}
          calculateDamagePerSecondAllSources={
            this.calculateDamagePerSecondAllSources
          }
          calculateCriticalChanceAllSources={
            this.calculateCriticalChanceAllSources
          }
          calculateCriticalMultiplierAllSources={
            this.calculateCriticalMultiplierAllSources
          }
          calculateDoubleAttackChanceAllSources={
            this.calculateDoubleAttackChanceAllSources
          }
          calculateExperienceMultiplierAllSources={
            this.calculateExperienceMultiplierAllSources
          }
          calculateCoinDropMultiplierAllSources={
            this.calculateCoinDropMultiplierAllSources
          }
          giveItemDebug={this.giveItemDebug}
          playerRebirth={this.playerRebirth}
          petLevelUpgrade={this.petLevelUpgrade}
          fetchLeftMenuSettingSelection={this.fetchLeftMenuSettingSelection}
        />
        <Inventory
          mainState={this.state}
          renderNumberWithAbbreviations={this.renderNumberWithAbbreviations}
          toggleInventoryPopoversRendering={
            this.toggleInventoryPopoversRendering
          }
          toggleItemEquippedState={this.toggleItemEquippedState}
          playerSellItem={this.playerSellItem}
          playerSellAllUnequippedItems={this.playerSellAllUnequippedItems}
        />
        {/* Stages [ TOP ] */}
        {this.renderStageBar()}
        {/* Battle [ MIDDLE ] */}
        {this.renderBattleArea()}
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
