import React, { Component } from "react";
import DeckCard from "./deckCard";
/* [IMG] Enemy */
import greenForestBossOne from "../img/stages/Green forest/greenForestBoss_1.png";
import greenForestBossTwo from "../img/stages/Green forest/greenForestBoss_2.png";
import greenForestBossThree from "../img/stages/Green forest/greenForestBoss_3.png";
import darkForestBossOne from "../img/stages/Dark forest/darkForestBoss_1.png";
import darkForestBossTwo from "../img/stages/Dark forest/darkForestBoss_2.png";
import darkForestBossThree from "../img/stages/Dark forest/darkForestBoss_3.png";
import magicForestBossOne from "../img/stages/Magic forest/magicForestBoss_1.png";
import magicForestBossTwo from "../img/stages/Magic forest/magicForestBoss_2.png";
import magicForestBossThree from "../img/stages/Magic forest/magicForestBoss_3.png";
import cityEntranceBossOne from "../img/stages/City entrance/cityEntranceBoss_1.png";
import cityEntranceBossTwo from "../img/stages/City entrance/cityEntranceBoss_2.png";
import cityEntranceBossThree from "../img/stages/City entrance/cityEntranceBoss_3.png";
import forgottenRoadBossOne from "../img/stages/Forgotten road/forgottenRoadBoss_1.png";
import forgottenRoadBossTwo from "../img/stages/Forgotten road/forgottenRoadBoss_2.png";
import forgottenRoadBossThree from "../img/stages/Forgotten road/forgottenRoadBoss_3.png";
import hauntedMarketplaceBossOne from "../img/stages/Haunted marketplace/hauntedMarketplaceBoss_1.png";
import hauntedMarketplaceBossTwo from "../img/stages/Haunted marketplace/hauntedMarketplaceBoss_2.png";
import hauntedMarketplaceBossThree from "../img/stages/Haunted marketplace/hauntedMarketplaceBoss_3.png";
import goldenTempleBossOne from "../img/stages/Golden temple/goldenTempleBoss_1.png";
import goldenTempleBossTwo from "../img/stages/Golden temple/goldenTempleBoss_2.png";
import goldenTempleBossThree from "../img/stages/Golden temple/goldenTempleBoss_3.png";
import infernoBossOne from "../img/stages/Inferno/infernoBoss_1.png";
import infernoBossTwo from "../img/stages/Inferno/infernoBoss_2.png";
import infernoBossThree from "../img/stages/Inferno/infernoBoss_3.png";

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
              cardImage={greenForestBossOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwo"}
              cardImage={greenForestBossTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardThree"}
              cardImage={greenForestBossThree}
            />
          </div>
          {/* Row #2 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardFour"}
              cardImage={darkForestBossOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardFive"}
              cardImage={darkForestBossTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardSix"}
              cardImage={darkForestBossThree}
            />
          </div>
          {/* Row #3 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardSeven"}
              cardImage={magicForestBossOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardEight"}
              cardImage={magicForestBossTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardNine"}
              cardImage={magicForestBossThree}
            />
          </div>
          {/* Row #4 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTen"}
              cardImage={cityEntranceBossOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardEleven"}
              cardImage={cityEntranceBossTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwelve"}
              cardImage={cityEntranceBossThree}
            />
          </div>
          {/* Row #5 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardThirteen"}
              cardImage={forgottenRoadBossOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardFourteen"}
              cardImage={forgottenRoadBossTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardFifteen"}
              cardImage={forgottenRoadBossThree}
            />
          </div>
          {/* Row #6 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardSixteen"}
              cardImage={hauntedMarketplaceBossOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardSeventeen"}
              cardImage={hauntedMarketplaceBossTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardEighteen"}
              cardImage={hauntedMarketplaceBossThree}
            />
          </div>
          {/* Row #7 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardNineteen"}
              cardImage={goldenTempleBossOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwenty"}
              cardImage={goldenTempleBossTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentyone"}
              cardImage={goldenTempleBossThree}
            />
          </div>
          {/* Row #8 */}
          <div className="deckMenu-row">
            {/* Card #1 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentytwo"}
              cardImage={infernoBossOne}
            />
            {/* Card #2 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentythree"}
              cardImage={infernoBossTwo}
            />
            {/* Card #3 */}
            <DeckCard
              mainState={this.props.mainState}
              cardNumber={"cardTwentyfour"}
              cardImage={infernoBossThree}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DeckMenu;
