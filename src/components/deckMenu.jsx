import React, { Component } from "react";
import DeckCard from "./deckCard";
/* [IMG] Enemy */
import enemyImageOne from "../img/enemy_1.png";
import enemyImageTwo from "../img/enemy_2.png";
import enemyImageThree from "../img/enemy_3.png";
import enemyImageFour from "../img/enemy_4.png";
import enemyImageFive from "../img/enemy_5.png";
import enemyImageSix from "../img/enemy_6.png";
import enemyImageSeven from "../img/enemy_7.png";
import enemyImageEight from "../img/enemy_8.png";
import enemyImageNine from "../img/enemy_9.png";
import enemyImageTen from "../img/enemy_10.png";
import enemyImageEleven from "../img/enemy_11.png";
import enemyImageTwelve from "../img/enemy_12.png";
import enemyImageThirteen from "../img/enemy_13.png";
import enemyImageFourteen from "../img/enemy_14.png";
import enemyImageFifteen from "../img/enemy_15.png";
import enemyImageSixteen from "../img/enemy_16.png";
import enemyImageSeventeen from "../img/enemy_17.png";
import enemyImageEighteen from "../img/enemy_18.png";
import enemyImageNineteen from "../img/enemy_19.png";
import enemyImageTwenty from "../img/enemy_20.png";
import enemyImageTwentyone from "../img/enemy_21.png";
import enemyImageTwentytwo from "../img/enemy_22.png";
import enemyImageTwentythree from "../img/enemy_23.png";
import enemyImageTwentyfour from "../img/enemy_24.png";
import enemyImageTwentyfive from "../img/enemy_25.png";
import enemyImageTwentysix from "../img/enemy_26.png";
import enemyImageTwentyseven from "../img/enemy_27.png";

class DeckMenu extends Component {
  render() {
    return (
      <div id="userInterface-stats-div">
        <p>
          <strong>Card decks</strong>
        </p>

        {/* Deck menu  */}
        <div id="deckMenu-div">
          {/* Row #1 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardOne"}
              cardImage={enemyImageOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwo"}
              cardImage={enemyImageTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardThree"}
              cardImage={enemyImageThree}
            />
          </div>
          {/* Row #2 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardFour"}
              cardImage={enemyImageFour}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardFive"}
              cardImage={enemyImageFive}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardSix"}
              cardImage={enemyImageSix}
            />
          </div>
          {/* Row #3 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardSeven"}
              cardImage={enemyImageSeven}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardEight"}
              cardImage={enemyImageEight}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardNine"}
              cardImage={enemyImageNine}
            />
          </div>
          {/* Row #4 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTen"}
              cardImage={enemyImageTen}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardEleven"}
              cardImage={enemyImageEleven}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwelve"}
              cardImage={enemyImageTwelve}
            />
          </div>
          {/* Row #5 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardThirteen"}
              cardImage={enemyImageThirteen}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardFourteen"}
              cardImage={enemyImageFourteen}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardFifteen"}
              cardImage={enemyImageFifteen}
            />
          </div>
          {/* Row #6 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardSixteen"}
              cardImage={enemyImageSixteen}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardSeventeen"}
              cardImage={enemyImageSeventeen}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardEighteen"}
              cardImage={enemyImageEighteen}
            />
          </div>
          {/* Row #7 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardNineteen"}
              cardImage={enemyImageNineteen}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwenty"}
              cardImage={enemyImageTwenty}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentyone"}
              cardImage={enemyImageTwentyone}
            />
          </div>
          {/* Row #8 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentytwo"}
              cardImage={enemyImageTwentytwo}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentythree"}
              cardImage={enemyImageTwentythree}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentyfour"}
              cardImage={enemyImageTwentyfour}
            />
          </div>
          {/* Row #9 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentyfive"}
              cardImage={enemyImageTwentyfive}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentysix"}
              cardImage={enemyImageTwentysix}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentyseven"}
              cardImage={enemyImageTwentyseven}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DeckMenu;
