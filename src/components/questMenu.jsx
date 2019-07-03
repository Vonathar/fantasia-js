import React, { Component } from "react";
/* [IMG] Inventory, resources */
import achievementPointImage from "../img/achievement_1.png";

class QuestMenu extends Component {
  render() {
    return (
      <div id="userInterface-stats-div">
        <p>
          <strong>Quests</strong>
        </p>
        {/* Total AP */}
        <p>
          {this.props.mainState.adventurePoints}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
        </p>
        {/* Quest #1  -  Player attacks */}
        {/* Description */}
        <small className="userInterface-stats-category">
          Attack the enemy{" "}
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.playerAttacks.nextRequired
          )}{" "}
          times.
        </small>{" "}
        {/* Achievement Points */}
        <small>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.playerAttacks.adventurePointsHeld} AP
        </small>
        {/* Done/Required summary */}
        <p>
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.totalPlayerAttacks
          )}
          /
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.playerAttacks.nextRequired
          )}
        </p>
        {/* Quest #2  -  Pet damage */}
        {/* Description */}
        <small className="userInterface-stats-category">
          Use your pets to deal{" "}
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.petDamageDealt.nextRequired
          )}{" "}
          damage.
        </small>{" "}
        {/* Achievement Points */}
        <small>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.petDamageDealt.adventurePointsHeld} AP
        </small>
        {/* Done/Required summary */}
        <p>
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.totalPetDamageDealt
          )}
          /
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.petDamageDealt.nextRequired
          )}
        </p>
        {/* Quest #3  -  Player damage */}
        {/* Description */}
        <small className="userInterface-stats-category">
          Actively attack the enemy to deal{" "}
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.playerDamageDealt.nextRequired
          )}{" "}
          damage.
        </small>{" "}
        {/* Achievement Points */}
        <small>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.playerDamageDealt.adventurePointsHeld} AP
        </small>
        {/* Done/Required summary */}
        <p>
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.totalPlayerDamageDealt
          )}
          /
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.playerDamageDealt.nextRequired
          )}
        </p>
        {/* Quest #4  -  Total money earned */}
        {/* Description */}
        <small className="userInterface-stats-category">
          Earn a total of{" "}
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.moneyEarned.nextRequired
          )}{" "}
          coins.
        </small>{" "}
        {/* Achievement Points */}
        <small>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.moneyEarned.adventurePointsHeld} AP
        </small>
        {/* Done/Required summary */}
        <p>
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.totalMoneyEarned
          )}
          /
          {this.props.renderNumberWithAbbreviations(
            this.props.mainState.quests.moneyEarned.nextRequired
          )}
        </p>
        {/* Quest #5  -  Total skills used */}
        {/* Description */}
        <small className="userInterface-stats-category">
          Use your active skills{" "}
          {this.props.mainState.quests.skillsUsed.nextRequired.toLocaleString()}{" "}
          times.
        </small>{" "}
        {/* Achievement Points */}
        <small>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.skillsUsed.adventurePointsHeld} AP
        </small>
        {/* Done/Required summary */}
        <p>
          {this.props.mainState.totalSkillsUsed.toLocaleString()}/
          {this.props.mainState.quests.skillsUsed.nextRequired.toLocaleString()}
        </p>
        {/* Quest #6  -  Total player heals */}
        {/* Description */}
        <small className="userInterface-stats-category">
          Heal yourself with potions{" "}
          {this.props.mainState.quests.timesHealed.nextRequired.toLocaleString()}{" "}
          times.
        </small>{" "}
        {/* Achievement Points */}
        <small>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.timesHealed.adventurePointsHeld} AP
        </small>
        {/* Done/Required summary */}
        <p>
          {this.props.mainState.totalTimesHealed.toLocaleString()}/
          {this.props.mainState.quests.timesHealed.nextRequired.toLocaleString()}
        </p>
        {/* Quest #7  -  Total enemies killed */}
        {/* Description */}
        <small className="userInterface-stats-category">
          Kill{" "}
          {this.props.mainState.quests.enemiesKilled.nextRequired.toLocaleString()}{" "}
          enemies.
        </small>{" "}
        {/* Achievement Points */}
        <small>
          {this.props.mainState.achievementPointImage}{" "}
          <img
            className="userInterface-quests-logo"
            src={achievementPointImage}
            alt="Quest chest"
          />
          {this.props.mainState.quests.enemiesKilled.adventurePointsHeld} AP
        </small>
        {/* Done/Required summary */}
        <p>
          {this.props.mainState.totalEnemiesKilled.toLocaleString()}/
          {this.props.mainState.quests.enemiesKilled.nextRequired.toLocaleString()}
        </p>
        <small>Collect AP and progress in your adventure!</small>
      </div>
    );
  }
}

export default QuestMenu;
