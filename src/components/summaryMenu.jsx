import React, { Component } from "react";

/* [IMG] Player */
import playerHealthImage from "../img/health_1.png";
import doubleAttackImage from "../img/doubleAttack_1.png";
import criticalMultiplierImage from "../img/critical_1.png";
import criticalChanceImage from "../img/critical_2.png";
import clickDamageImage from "../img/cps_1.png";
import clickPerSecondDamageImage from "../img/dps_1.png";

class SummaryMenu extends Component {
  render() {
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
                {this.props.renderNumberWithAbbreviations(
                  this.props.calculateTotalClickDamage()
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
                {this.props.renderNumberWithAbbreviations(
                  this.props.mainState.playerCriticalChance.toFixed(1)
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
                {this.props.renderNumberWithAbbreviations(
                  Math.round(
                    this.props.mainState.playerCriticalMultiplier * 100
                  )
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
                {this.props.renderNumberWithAbbreviations(
                  this.props.mainState.playerHealthMax
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
                {this.props.renderNumberWithAbbreviations(
                  this.props.calculateTotalDamagePerSecond()
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
                {this.props.renderNumberWithAbbreviations(
                  this.props.mainState.playerDoubleAttackChance.toFixed(1)
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
            <p>{this.props.mainState.totalPlayerAttacks.toLocaleString()}</p>
          </div>
          <div className="userInterface-stats-row-child mx-auto">
            <small className="userInterface-stats-category">
              Total player damage
            </small>
            <p>
              {this.props.renderNumberWithAbbreviations(
                this.props.mainState.totalPlayerDamageDealt
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
              {this.props.renderNumberWithAbbreviations(
                this.props.mainState.totalPetDamageDealt
              )}
            </p>
          </div>
          <div className="userInterface-stats-row-child mx-auto">
            <small className="userInterface-stats-category">Total kills</small>
            <p>{this.props.mainState.totalEnemiesKilled.toLocaleString()}</p>
          </div>
        </div>

        <div className="userInterface-stats-row">
          <div className="userInterface-stats-row-child mx-auto">
            <small className="userInterface-stats-category">
              Total money earned
            </small>
            <p>
              {this.props.renderNumberWithAbbreviations(
                this.props.mainState.totalMoneyEarned
              )}
            </p>
          </div>
          <div className="userInterface-stats-row-child mx-auto">
            <small className="userInterface-stats-category">
              Total money spent
            </small>
            <p>
              {this.props.renderNumberWithAbbreviations(
                this.props.mainState.totalMoneySpent
              )}
            </p>
          </div>
        </div>

        <div className="userInterface-stats-row">
          <div className="userInterface-stats-row-child mx-auto">
            <small className="userInterface-stats-category">
              Total skills used
            </small>
            <p>{this.props.mainState.totalSkillsUsed.toLocaleString()}</p>
          </div>
          <div className="userInterface-stats-row-child mx-auto">
            <small className="userInterface-stats-category">
              Total player deaths
            </small>
            <p>{this.props.mainState.totalPlayerDeaths.toLocaleString()}</p>
          </div>
        </div>
        <div className="userInterface-stats-row">
          <div className="userInterface-stats-row-child mx-auto">
            <small className="userInterface-stats-category">
              Total potions used
            </small>
            <p>{this.props.mainState.totalTimesHealed.toLocaleString()}</p>
          </div>
        </div>
        <small>Check out your stats to know more about your adventure!</small>
      </div>
    );
  }
}

export default SummaryMenu;
