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
            onClick={this.playerStageAdvance}
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
          <small>
            Kills for next stage:{" "}
            {this.props.mainState.stageEnemiesToKill -
              this.props.mainState.stageEnemiesKilled}
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
    );
  }
}

export default StagesBar;
