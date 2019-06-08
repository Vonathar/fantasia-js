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
        <small>
          Use the debug screen to speed your progress up in order to test the
          game more efficiently.
        </small>
      </div>
    );
  }
}

export default DebugMenu;
