import React, { Component } from "react";
import skillImageOne from "../img/skill_1.png";
import skillImageTwo from "../img/skill_2.png";
import skillImageThree from "../img/skill_3.png";
import skillImageFour from "../img/skill_4.png";
import clickDamageTutorialImage from "../img/clickDamageTutorial.png";
import playerHealthImage from "../img/playerHealthTutorial.png";
import playerExperienceImage from "../img/playerExperienceTutorial.png";
import doubleAttackImage from "../img/doubleAttack_1.png";
import criticalMultiplierImage from "../img/critical_1.png";
import criticalChanceImage from "../img/critical_2.png";
import clickDamageImage from "../img/hero_upgrade_1.png";
import enemyImageTwo from "../img/enemy_2.png";
import enemyImageThree from "../img/enemy_3.png";
import enemyImageFour from "../img/enemy_4.png";
import hotkeysIcon from "../img/hotkeysIcon.png";

class TutorialScreen extends Component {
  renderTutorialScreen = () => {
    if (this.props.mainState.isTutorialScreenActive) {
      return (
        <div id="tutorialScreen-div">
          <div id="userInterface-userSettings-menu-holder">
            <div className="mx-auto" id="userInterface-userSettings-menu-tab">
              <button
                type="button"
                class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                onClick={this.props.fetchTutorialScreenSettingSelection}
              >
                <small>Player</small>
              </button>
            </div>
            <div className="mx-auto" id="userInterface-userSettings-menu-tab">
              <button
                type="button"
                class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                onClick={this.props.fetchTutorialScreenSettingSelection}
              >
                <small>Upgrades</small>
              </button>
            </div>
            <div className="mx-auto" id="userInterface-userSettings-menu-tab">
              <button
                type="button"
                class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                onClick={this.props.fetchTutorialScreenSettingSelection}
              >
                <small>Skills</small>
              </button>
            </div>
            <div className="mx-auto" id="userInterface-userSettings-menu-tab">
              <button
                type="button"
                class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                onClick={this.props.fetchTutorialScreenSettingSelection}
              >
                <small>Pets</small>
              </button>
            </div>
            <div className="mx-auto" id="userInterface-userSettings-menu-tab">
              <button
                type="button"
                class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
                onClick={this.props.fetchTutorialScreenSettingSelection}
              >
                <small>Hotkeys</small>
              </button>
            </div>
          </div>
          {this.renderTutorialScreenSettingSelection()}
        </div>
      );
    }
  };
  renderTutorialScreenSettingSelection = () => {
    if (this.props.mainState.isTutorialScreenActive) {
      // Player tab selected
      if (this.props.mainState.tutorialScreenSettingSelected === "Player") {
        return (
          <div>
            <h5 className="tutorialScreen-h5 text-primary">Attack</h5>
            <img
              src={clickDamageTutorialImage}
              className="tutorialScreen-image"
            />
            <p className="tutorialScreen-p">
              Attacking is the main way to deal damage to the enemy. To attack,
              you can either click the enemy icon, or press the keys
              <strong> [W]</strong> or <strong> [E]</strong> on your keyboard.
              <br />
              <br />
              There are two types of attack: <strong> DPS</strong> (damage per
              second) and <strong> CD </strong> (click damage).
              <em> DPS</em> is the damage your pets deal to the enemy every
              second, even when you are not actively playing.
              <br /> <em>CD</em> is the damage you deal the enemy when you are
              playing actively; to maximise it, you can click with your mouse
              and your keyboard at the same time! <br /> <br />
              The main way to increase your attack is by upgrading you pets
              (DPS) and upgrading your hero (CD), but don't forget about other
              upgrades such as Critical Chance, Critical Damage and Double
              Attack!
              <h5 className="tutorialScreen-h5 text-primary">Heal</h5>
              <img src={playerHealthImage} className="tutorialScreen-image" />
              <p />
              Healing is how you recover your character's HP (health points). To
              heal, you can either click the player icon, or press the
              <strong> [H]</strong> key on your keyboard.
              <br />
              <br />
              Remember: <strong> potions</strong> are required for you to heal!
              they can be found by killing enemies, or by opening loot bags.
              <br />
              <h5 className="tutorialScreen-h5 text-primary">Level</h5>
              <img
                src={playerExperienceImage}
                className="tutorialScreen-image"
              />
              <p />
              Your level dictates how many HP you have, as well as how strong
              your skills are.
              <br />
              To level up you have to kill enemies, which drop XP (experience
              points) based on their level; if you find yourself dying too
              easily, spend some time killing enemies to make your characted
              stronger!
            </p>
          </div>
        );
      }
      // Skills tab selected
      if (this.props.mainState.tutorialScreenSettingSelected === "Skills") {
        return (
          <div>
            {/* Skill #1 */}
            <h5 className="tutorialScreen-h5 text-primary">
              {this.props.mainState.skills.skillOne.name}
            </h5>
            <img src={skillImageOne} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              Quickly attack the enemy multiple times, dealing damage based on
              the player level; level up the player to raise the skill level.
              Damage multiplier and attack count increase with level.
              <br />
              <br />
              <span className="text-warning">Cooldown:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillOne.cooldown / 1000} seconds
              </strong>
              <br />
              <span className="text-warning">Unlocked at level:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillOne.levelToUnlock}
              </strong>
              <br />
              <span className="text-warning">Levels up at player level:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillOne.levelsToUpgrade.join(
                  ", "
                )}
              </strong>
            </p>
            {/* Skill #2 */}
            <h5 className="tutorialScreen-h5 text-primary">
              {this.props.mainState.skills.skillTwo.name}
            </h5>
            <img src={skillImageTwo} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              Increases your total DPS by a fixed percentage; the skill can be
              unlocked at level 5, and can be improved by raising the level of
              the player. Duration increases with level.
              <br />
              <br />
              <span className="text-warning">Cooldown:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillTwo.cooldown / 1000} seconds
              </strong>
              <br />
              <span className="text-warning">Unlocked at level:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillTwo.levelToUnlock}
              </strong>
              <br />
              <span className="text-warning">Levels up at player level:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillTwo.levelsToUpgrade.join(
                  ", "
                )}
              </strong>
            </p>
            {/* Skill #3 */}
            <h5 className="tutorialScreen-h5 text-primary">
              {this.props.mainState.skills.skillThree.name}
            </h5>
            <img src={skillImageThree} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              Become one with your animals, increasing your Click Damage by a %
              of your total DPS from pets; duration and percentage of damage
              received from DPS increase with level.
              <br />
              <br />
              <span className="text-warning">Cooldown:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillThree.cooldown / 1000} seconds
              </strong>
              <br />
              <span className="text-warning">Unlocked at level:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillThree.levelToUnlock}
              </strong>
              <br />
              <span className="text-warning">Levels up at player level:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillThree.levelsToUpgrade.join(
                  ", "
                )}
              </strong>
            </p>
            {/* Skill #4 */}
            <h5 className="tutorialScreen-h5 text-primary">
              {this.props.mainState.skills.skillFour.name}
            </h5>
            <img src={skillImageFour} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              All your pets get together to attack the enemy, dealing damage 3
              times based on a % of your total DPS; the amount of attacks, as
              well as the damage dealt, increase by leveling the skills up.
              <br />
              <br />
              <span className="text-warning">Cooldown:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillFour.cooldown / 1000} seconds
              </strong>
              <br />
              <span className="text-warning">Unlocked at level:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillFour.levelToUnlock}
              </strong>
              <br />
              <span className="text-warning">Levels up at player level:</span>
              <br />
              <strong>
                {this.props.mainState.skills.skillFour.levelsToUpgrade.join(
                  ", "
                )}
              </strong>
            </p>
          </div>
        );
      }
      // Pets tab selected
      if (this.props.mainState.tutorialScreenSettingSelected === "Pets") {
        return (
          <div>
            <h5 className="tutorialScreen-h5 text-primary">Pets</h5>
            <img src={enemyImageTwo} className="tutorialScreen-image" />
            <img src={enemyImageThree} className="tutorialScreen-image" />
            <img src={enemyImageFour} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              Pets are amazing creatures which fight alongside you throughout
              your adventure!
              <br />
              <br />
              If you find youself stuck, you can pause stage progression and let
              your pets do the hard work for you; upon your return, your army of
              animals will have lots of gold and XP for you!
              <br />
              <br />
              Every 5 levels, your pets will deal a lot more damage - however,
              their price will increase, too!
            </p>
          </div>
        );
      }
      // Hotkeys tab selected
      if (this.props.mainState.tutorialScreenSettingSelected === "Hotkeys") {
        return (
          <div>
            <h5 className="tutorialScreen-h5 text-primary">Hotkeys</h5>
            <img src={hotkeysIcon} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              The following are the currently registered hotkeys in Fantasia:
              <br />
              <br />
              {/* Hotkey #1 */}
              <p>
                [
                <span className="text-warning">
                  <strong>W</strong>
                </span>
                ] , [
                <span className="text-warning">
                  <strong>E</strong>
                </span>
                ] - Attack
              </p>
              {/* Hotkey #2 */}
              <p>
                [
                <span className="text-warning">
                  <strong>H</strong>
                </span>
                ] - Heal
              </p>
              {/* Hotkey #3 */}
              <p>
                [
                <span className="text-warning">
                  <strong>1</strong>
                </span>
                ] - Quick Stab
              </p>
              {/* Hotkey #4 */}
              <p>
                [
                <span className="text-warning">
                  <strong>2</strong>
                </span>
                ] - Mark of the Beast
              </p>
              {/* Hotkey #5 */}
              <p>
                [
                <span className="text-warning">
                  <strong>3</strong>
                </span>
                ] - Animal Training
              </p>
              {/* Hotkey #6 */}
              <p>
                [
                <span className="text-warning">
                  <strong>4</strong>
                </span>
                ] - Fruit of Madness
              </p>
              {/* Hotkey #7 */}
              <p>
                [
                <span className="text-warning">
                  <strong>T</strong>
                </span>
                ] - Tutorial window
              </p>
            </p>
          </div>
        );
      }
      // Upgrades tab selected
      if (this.props.mainState.tutorialScreenSettingSelected === "Upgrades") {
        return (
          <div>
            {/* Upgrade #1 */}
            <h5 className="tutorialScreen-h5 text-primary">Click Damage</h5>
            <img src={clickDamageImage} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              Increase the damage dealt with every player attack.
              <br />
              <br />
              <span className="text-warning">Current Click DMG:</span>
              <br />
              <strong>
                {this.props.renderNumberWithAbbreviations(
                  this.props.mainState.playerAttackPlaceholder
                )}
              </strong>
            </p>
            {/* Upgrade #2 */}
            <h5 className="tutorialScreen-h5 text-primary">Critical Chance</h5>
            <img src={criticalChanceImage} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              Increase the chances of landing a critical hit.
              <br />
              <br />
              <span className="text-warning">Current Crit %:</span>
              <br />
              <strong>
                {this.props.mainState.playerCriticalChance.toFixed(1)}%
              </strong>
            </p>
            {/* Upgrade #3 */}
            <h5 className="tutorialScreen-h5 text-primary">Critical Damage</h5>
            <img
              src={criticalMultiplierImage}
              className="tutorialScreen-image"
            />
            <p className="tutorialScreen-p">
              Increase the damage dealt by critical hits.
              <br />
              <br />
              <span className="text-warning">Current Crit DMG:</span>
              <br />
              <strong>
                {Math.round(
                  this.props.mainState.playerCriticalMultiplier * 100
                )}
                %
              </strong>
            </p>
            {/* Upgrade #3 */}
            <h5 className="tutorialScreen-h5 text-primary">Double attack</h5>
            <img src={doubleAttackImage} className="tutorialScreen-image" />
            <p className="tutorialScreen-p">
              Increase the chance of attacking twice with a single click.
              <br />
              <br />
              <span className="text-warning">Current Double Hit %:</span>
              <br />
              <strong>
                {this.props.mainState.playerDoubleAttackChance.toFixed(1)}%
              </strong>
            </p>
          </div>
        );
      }
    }
  };
  render() {
    return <React.Fragment>{this.renderTutorialScreen()}</React.Fragment>;
  }
}

export default TutorialScreen;
