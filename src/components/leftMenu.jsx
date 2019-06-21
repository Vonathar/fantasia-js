import React, { Component } from "react";
import HeroMenu from "./heroMenu";
import SummaryMenu from "./summaryMenu";
import QuestMenu from "./questMenu";
import DebugMenu from "./debugMenu";
import PetsMenu from "./petsMenu";
import DeckMenu from "./deckMenu";

class LeftMenu extends Component {
  renderDebugMenu = () => {
    if (this.props.mainState.isDebugModeActive) {
      return (
        <div className="mx-auto" id="userInterface-userSettings-menu-tab">
          <button
            type="button"
            class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
            onClick={this.props.fetchLeftMenuSettingSelection}
          >
            <small>Debug</small>
          </button>
        </div>
      );
    }
  };
  renderLeftMenuSettingSelection = () => {
    // Hero tab selected
    if (this.props.mainState.leftMenuSettingSelected === "Hero") {
      return (
        <HeroMenu
          mainState={this.props.mainState}
          renderNumberWithAbbreviations={
            this.props.renderNumberWithAbbreviations
          }
          heroUpgradeLevelUp={this.props.heroUpgradeLevelUp}
          heroUpgradeLevelUpgradeByUserSettings={
            this.props.heroUpgradeLevelUpgradeByUserSettings
          }
          fetchHeroMenuUpgradeSettings={this.props.fetchHeroMenuUpgradeSettings}
        />
      );
    }
    // Stats tab selected
    if (this.props.mainState.leftMenuSettingSelected === "Stats") {
      return (
        <SummaryMenu
          mainState={this.props.mainState}
          calculateClickDamageAllSources={
            this.props.calculateClickDamageAllSources
          }
          calculateDamagePerSecondAllSources={
            this.props.calculateDamagePerSecondAllSources
          }
          calculateCriticalChanceAllSources={
            this.props.calculateCriticalChanceAllSources
          }
          calculateCriticalMultiplierAllSources={
            this.props.calculateCriticalMultiplierAllSources
          }
          calculateDoubleAttackChanceAllSources={
            this.props.calculateDoubleAttackChanceAllSources
          }
          calculateExperienceMultiplierAllSources={
            this.props.calculateExperienceMultiplierAllSources
          }
          calculateCoinDropMultiplierAllSources={
            this.props.calculateCoinDropMultiplierAllSources
          }
          renderNumberWithAbbreviations={
            this.props.renderNumberWithAbbreviations
          }
        />
      );
    }
    // Deck tab selected
    if (this.props.mainState.leftMenuSettingSelected === "Deck") {
      return (
        <DeckMenu
          mainState={this.props.mainState}
          renderNumberWithAbbreviations={
            this.props.renderNumberWithAbbreviations
          }
        />
      );
    }
    // Quests tab selected
    if (this.props.mainState.leftMenuSettingSelected === "Quests") {
      return (
        <QuestMenu
          mainState={this.props.mainState}
          renderNumberWithAbbreviations={
            this.props.renderNumberWithAbbreviations
          }
        />
      );
    }
    // Debug tab selected
    if (this.props.mainState.leftMenuSettingSelected === "Debug") {
      return <DebugMenu giveItemDebug={this.props.giveItemDebug} />;
    }
    // Pets tab selected
    if (this.props.mainState.leftMenuSettingSelected === "Pets") {
      return (
        <PetsMenu
          mainState={this.props.mainState}
          fetchPetsMenuUpgradeSettings={this.props.fetchPetsMenuUpgradeSettings}
          renderNumberWithAbbreviations={
            this.props.renderNumberWithAbbreviations
          }
          petLevelUpgrade={this.props.petLevelUpgrade}
          petLevelUpgradeByUserSettings={
            this.props.petLevelUpgradeByUserSettings
          }
        />
      );
    }
  };
  render() {
    return (
      <div id="userInterface-userSettings-menu-div">
        <div id="userInterface-userSettings-menu-holder">
          <div className="mx-auto" id="userInterface-userSettings-menu-tab">
            <button
              type="button"
              class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
              onClick={this.props.fetchLeftMenuSettingSelection}
            >
              <small>Hero</small>
            </button>
          </div>
          <div className="mx-auto" id="userInterface-userSettings-menu-tab">
            <button
              type="button"
              class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
              onClick={this.props.fetchLeftMenuSettingSelection}
            >
              <small>Pets</small>
            </button>
          </div>
          <div className="mx-auto" id="userInterface-userSettings-menu-tab">
            <button
              type="button"
              class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
              onClick={this.props.fetchLeftMenuSettingSelection}
            >
              <small>Quests</small>
            </button>
          </div>
          <div className="mx-auto" id="userInterface-userSettings-menu-tab">
            <button
              type="button"
              class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
              onClick={this.props.fetchLeftMenuSettingSelection}
            >
              <small>Stats</small>
            </button>
          </div>
          <div className="mx-auto" id="userInterface-userSettings-menu-tab">
            <button
              type="button"
              class="userInterface-userSettings-menu-tab-button btn btn-dark mx-auto"
              onClick={this.props.fetchLeftMenuSettingSelection}
            >
              <small>Deck</small>
            </button>
          </div>
          {this.renderDebugMenu()}
        </div>
        {this.renderLeftMenuSettingSelection()}
      </div>
    );
  }
}

export default LeftMenu;
