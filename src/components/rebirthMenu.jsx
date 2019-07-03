import React, { Component } from "react";
import tomeImage from "../img/tome_1.png";

class RebirthMenu extends Component {
  renderRebirthButtonClasses = () => {
    let classes = "btn mx-auto ";
    this.props.mainState.stageMaxUnlocked >= 70
      ? (classes += "btn-primary")
      : (classes += "btn-disabled");
    return classes;
  };
  render() {
    return (
      <div id="userInterface-rebirth-div">
        <p>
          <strong>Rebirth menu</strong>
        </p>
        <p className="userInterface-rebirth-tomesParagrph">
          <img
            src={tomeImage}
            alt="Tome"
            className="rebirth-tomesHeld-image scale"
          />
          {this.props.mainState.rebirthTomesHeld}
        </p>
        <p>
          After <span className="text-warning">stage 70</span>, you can trade
          your progress in exchange of tomes - which will allow you to grow your
          hero stronger than ever!
        </p>
        <p>Reset your game progress to obtain:</p>
        <p className="userInterface-rebirth-tomesParagrph">
          <img
            src={tomeImage}
            alt="Tome"
            className="rebirth-tomesObtained-image scale"
          />
          {this.props.mainState.tomesObtainableFromRebirth}
        </p>
        <p>
          <button
            className={this.renderRebirthButtonClasses()}
            onClick={this.props.playerRebirth}
          >
            Rebirth now!
          </button>
        </p>
        <small>
          You will gain an additional{" "}
          <span className="text-primary">1% global bonus damage</span> for each
          tome you collect; however,{" "}
          <span className="text-danger">you will lose everything</span> apart
          from deck cards and skills.
        </small>
      </div>
    );
  }
}

export default RebirthMenu;
