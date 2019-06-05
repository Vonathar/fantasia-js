import React, { Component } from "react";

class BattleLog extends Component {
  render() {
    return (
      <div id="userInterface-chatlog-div">
        <p>
          <strong>Battle log</strong>
        </p>
        <div id="userInterface-chatlog-div-paragraphs">
          {this.props.mainState.battleLogParagraphsToBeRendered}
        </div>
      </div>
    );
  }
}

export default BattleLog;
