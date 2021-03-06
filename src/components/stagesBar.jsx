import React, { Component } from "react";

class StagesBar extends Component {
  // Change the style of the stage icon based on whether is is unlocked or not
  renderStageUnlockedBadge = stageNumber => {
    // Classes shared by all buttons
    let buttonClasses = "btn btn-dark userInterface-stages-button mx-auto ";
    // The current stage
    if (stageNumber === this.props.mainState.stageCurrent) {
      buttonClasses += "userInterface-stages-button-selected";
      // Next stage, when unlocked
    } else if (stageNumber <= this.props.mainState.stageMaxUnlocked) {
      buttonClasses += "userInterface-stages-unlocked";
    }
    return buttonClasses;
  };

  renderKillsForNextStageParagraph = () => {
    if (
      this.props.mainState.stageEnemiesToKill -
        this.props.mainState.stageEnemiesKilled ===
      1
    ) {
      return (
        <React.Fragment>
          <button
            className="btn mx-auto btn-danger stages-bossFight-button"
            onClick={this.props.quitBossStage}
          >
            Quit boss fight?
          </button>
        </React.Fragment>
      );
    } else if (
      this.props.mainState.stageEnemiesToKill -
        this.props.mainState.stageEnemiesKilled ===
      0
    ) {
      return <small className="text-success">Next stage unlocked!</small>;
    } else {
      return (
        <small>
          Kills for next stage:{" "}
          {this.props.mainState.stageEnemiesToKill -
            this.props.mainState.stageEnemiesKilled}
        </small>
      );
    }
  };

  render() {
    return (
      <div id="userInterface-stages-div">
        <div id="userInterface-stages-stage">
          <button
            className={this.renderStageUnlockedBadge(
              this.props.mainState.stageCurrent
            )}
          >
            <small>{this.props.mainState.stageCurrent}</small>
          </button>
          <button
            className={this.renderStageUnlockedBadge(
              this.props.mainState.stageCurrent + 1
            )}
            onClick={this.props.playerStageAdvance}
          >
            <small>{this.props.mainState.stageCurrent + 1}</small>
          </button>
          <button
            className={this.renderStageUnlockedBadge(
              this.props.mainState.stageCurrent + 2
            )}
          >
            <small>{this.props.mainState.stageCurrent + 2}</small>
          </button>
          <button
            className={this.renderStageUnlockedBadge(
              this.props.mainState.stageCurrent + 3
            )}
          >
            <small>{this.props.mainState.stageCurrent + 3}</small>
          </button>
          <button
            className={this.renderStageUnlockedBadge(
              this.props.mainState.stageCurrent + 4
            )}
          >
            <small>{this.props.mainState.stageCurrent + 4}</small>
          </button>
        </div>
        <div id="userInterface-stages-stage-pragraph">
          <small className="text-primary">
            {this.props.mainState.currentScenario}
          </small>
          <br />
          {this.renderKillsForNextStageParagraph()}
        </div>
        <div class="form-check" id="userInterface-stages-stage-checkbox-div">
          <input
            class="form-check-input"
            type="checkbox"
            defaultChecked="true"
            id="userInterface-stages-stage-checkbox"
            onClick={this.props.activateAutoStageAdvance}
          />
          <label
            class="form-check-label"
            for="userInterface-stages-stage-checkbox"
          >
            <small>Auto progress</small>
          </label>
        </div>
      </div>
    );
  }
}

export default StagesBar;
