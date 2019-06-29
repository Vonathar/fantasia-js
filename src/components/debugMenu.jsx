import React, { Component } from "react";

class DebugMenu extends Component {
  render() {
    return (
      <div id="userInterface-debug-div">
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
                this.props.giveItemDebug("coins");
              }}
            >
              Coins +1b
            </button>
          </small>
        </div>
        <div className="userInterface-debug-div">
          <small className="userInterface-debug-category">
            <button
              type="button"
              class="btn btn-warning btn-sm"
              onClick={() => {
                this.props.giveItemDebug("potions");
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
                this.props.giveItemDebug("stages");
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
                this.props.giveItemDebug("levels");
              }}
            >
              Player level +1
            </button>
          </small>
        </div>
        <div className="userInterface-debug-div">
          <small className="userInterface-debug-category">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={() => {
                this.props.giveItemDebug("enemySpawnNoDelay");
              }}
            >
              Enemy Spawn No Delay
            </button>
          </small>
        </div>
        <div className="userInterface-debug-div">
          <small className="userInterface-debug-category">
            <button
              type="button"
              class="btn btn-danger btn-sm"
              data-placement="top"
              data-toggle="tooltip"
              title="Reset everything and start the game from the beginning."
              onClick={() => {
                this.props.giveItemDebug("reset");
              }}
            >
              Reset game
            </button>
          </small>
        </div>
        <small>
          Use the debug screen to speed your progress up in order to test the
          game more efficiently.
        </small>
        <br />
        <small class="text-danger">
          Warning: once you reset your game there is no way to go back!
        </small>
      </div>
    );
  }
}

export default DebugMenu;
