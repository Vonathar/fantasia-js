import React, { Component } from "react";
/* [IMG] Skills */
import skillImageOne from "../img/skill_1.png";
import skillImageTwo from "../img/skill_2.png";
import skillImageThree from "../img/skill_3.png";
import skillImageFour from "../img/skill_4.png";

class SkillBar extends Component {
  renderSkillOneDescription = () => {
    if (this.props.mainState.skills.skillOne.level === 0) {
      return (
        this.props.mainState.skills.skillOne.name +
        "  -  [Lv. Req: " +
        this.props.mainState.skills.skillOne.levelToUnlock +
        "] "
      );
    } else {
      return (
        "Lv. " +
        this.props.mainState.skills.skillOne.level +
        " " +
        this.props.mainState.skills.skillOne.name +
        "  -  Attack the enemy " +
        this.props.mainState.skills.skillOne.numberOfAttacks +
        " times, each time dealing damage equal to " +
        Math.round(
          this.props.mainState.skills.skillOne.damageMultiplier * 100
        ) +
        "% of click damage. [Cooldown: " +
        this.props.mainState.skills.skillOne.cooldown / 1000 +
        "s]" +
        // Display the player level required for the skills to level up
        "  -  [Skill+ Lv Req: " +
        this.props.mainState.skills.skillOne.levelsToUpgrade.find(element => {
          return element > this.props.mainState.playerLevel;
        }) +
        "]" +
        "  -  [Hotkey: 1]"
      );
    }
  };

  renderSkillTwoDescription = () => {
    if (this.props.mainState.skills.skillTwo.level === 0) {
      return (
        this.props.mainState.skills.skillTwo.name +
        "  -  [Lv. Req: " +
        this.props.mainState.skills.skillTwo.levelToUnlock +
        "] "
      );
    } else {
      return (
        "Lv. " +
        this.props.mainState.skills.skillTwo.level +
        " " +
        this.props.mainState.skills.skillTwo.name +
        "  -  Makes your pets angry, causing their DPS to increase by " +
        Math.round(
          this.props.mainState.skills.skillTwo.damageMultiplier * 100
        ) +
        "% for " +
        this.props.mainState.skills.skillTwo.duration / 1000 +
        " seconds. [Cooldown: " +
        this.props.mainState.skills.skillTwo.cooldown / 1000 +
        "s]" +
        // Display the player level required for the skills to level up
        "  -  [Skill+ Lv Req: " +
        this.props.mainState.skills.skillTwo.levelsToUpgrade.find(element => {
          return element > this.props.mainState.playerLevel;
        }) +
        "]" +
        "  -  [Hotkey: 2]"
      );
    }
  };

  renderSkillThreeDescription = () => {
    if (this.props.mainState.skills.skillThree.level === 0) {
      return (
        this.props.mainState.skills.skillThree.name +
        "  -  [Lv. Req: " +
        this.props.mainState.skills.skillThree.levelToUnlock +
        "] "
      );
    } else {
      return (
        "Lv. " +
        this.props.mainState.skills.skillThree.level +
        " " +
        this.props.mainState.skills.skillThree.name +
        "  -  Become one with your pets, and increase your click damage by " +
        Math.round(
          this.props.mainState.skills.skillThree.damageMultiplier * 100
        ) +
        "% of their DPS for " +
        this.props.mainState.skills.skillThree.duration / 1000 +
        " seconds. [Cooldown: " +
        this.props.mainState.skills.skillThree.cooldown / 1000 +
        "s]" +
        // Display the player level required for the skills to level up
        "  -  [Skill+ Lv Req: " +
        this.props.mainState.skills.skillThree.levelsToUpgrade.find(element => {
          return element > this.props.mainState.playerLevel;
        }) +
        "]" +
        "  -  [Hotkey: 3]"
      );
    }
  };

  renderSkillFourDescription = () => {
    if (this.props.mainState.skills.skillFour.level === 0) {
      return (
        this.props.mainState.skills.skillFour.name +
        "  -  [Lv. Req: " +
        this.props.mainState.skills.skillFour.levelToUnlock +
        "] "
      );
    } else {
      return (
        "Lv. " +
        this.props.mainState.skills.skillFour.level +
        " " +
        this.props.mainState.skills.skillFour.name +
        "  -  All your pets get together to attack the enemy " +
        this.props.mainState.skills.skillFour.numberOfAttacks +
        " times, each time dealing damage equal to " +
        Math.round(
          this.props.mainState.skills.skillFour.damageMultiplier * 100
        ) +
        "% of your total DPS. [Cooldown: " +
        this.props.mainState.skills.skillFour.cooldown / 1000 +
        "s]" +
        // Display the player level required for the skills to level up
        "  -  [Skill+ Lv Req: " +
        this.props.mainState.skills.skillFour.levelsToUpgrade.find(element => {
          return element > this.props.mainState.playerLevel;
        }) +
        "]" +
        "  -  [Hotkey: 4]"
      );
    }
  };
  renderSkillBadge = skillNumber => {
    let classes = "userInterface-skills-skill-img scale ";
    return this.props.mainState.skills[skillNumber].isReady &&
      this.props.mainState.skills[skillNumber].level > 0
      ? classes
      : classes + "cooldown";
  };
  render() {
    return (
      <div id="userInterface-skills-div">
        <div className="userInterface-skills-skill-div mx-auto">
          <img
            draggable="false"
            alt="skill 1"
            className={this.renderSkillBadge("skillOne")}
            src={skillImageOne}
            onClick={() => {
              this.props.playerUseActiveSkill("skillOne");
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
            className={this.renderSkillBadge("skillTwo")}
            src={skillImageTwo}
            onClick={() => {
              this.props.playerUseActiveSkill("skillTwo");
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
            className={this.renderSkillBadge("skillThree")}
            src={skillImageThree}
            onClick={() => {
              this.props.playerUseActiveSkill("skillThree");
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
            className={this.renderSkillBadge("skillFour")}
            src={skillImageFour}
            onClick={() => {
              this.props.playerUseActiveSkill("skillFour");
            }}
            data-toggle="tooltip"
            title={this.renderSkillFourDescription()}
            data-placement="top"
          />
        </div>
      </div>
    );
  }
}

export default SkillBar;
