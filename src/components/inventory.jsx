import React, { Component } from "react";
import InventorySlot from "./inventorySlot";
/* [IMG] Inventory, resources */
import coinImageOne from "../img/coin_1.png";

/* 
  The inventory component renders (currently) 2 rows of inventory, each holding 6 items.
  The props passed to each instance of InventorySlot are:
  
    - itemObject => A reference to the object which is in the inventory, which each InventorySlow is rendering
    - slot => A numeric reference used to dynamically give a value to the attributes of Popovers
    - toggleItemEquippedState() => Sets the component's held reference's equipped state ON/OFF
    - playerSellItem() => Remove the inventory item the component is referencing and give its itemValue as coins
*/

class Inventory extends Component {
  render() {
    return (
      <div id="userInterface-userSettings-div">
        {/* Inventory */}
        <div id="userInterface-inventory-div">
          <p>
            <strong>Inventory</strong>
          </p>
          <div id="userInterface-inventory-money">
            <img
              draggable="false"
              alt="coin"
              className="mx-auto scale"
              id="userInterface-inventory-money-img"
              src={coinImageOne}
            />
            <p className="mx-auto" id="userInterface-inventory-money-paragraph">
              {this.props.renderNumberWithAbbreviations(
                this.props.mainState.coins
              )}
            </p>
          </div>
          {/* Row #1 */}
          <div className="userInterface-inventory-row">
            {/* Slot #1 */}
            <InventorySlot
              itemObject={this.props.mainState.inventory[0]}
              slot={0}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #2 */}
            <InventorySlot
              slot={1}
              itemObject={this.props.mainState.inventory[1]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #3 */}
            <InventorySlot
              slot={2}
              itemObject={this.props.mainState.inventory[2]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #4 */}
            <InventorySlot
              slot={3}
              itemObject={this.props.mainState.inventory[3]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #5 */}
            <InventorySlot
              slot={4}
              itemObject={this.props.mainState.inventory[4]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #6 */}
            <InventorySlot
              slot={5}
              itemObject={this.props.mainState.inventory[5]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
          </div>
          {/* Row #2 */}
          <div className="userInterface-inventory-row">
            {/* Slot #1 */}
            <InventorySlot
              slot={6}
              itemObject={this.props.mainState.inventory[6]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #2 */}
            <InventorySlot
              slot={7}
              itemObject={this.props.mainState.inventory[7]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #3 */}
            <InventorySlot
              slot={8}
              itemObject={this.props.mainState.inventory[8]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #4 */}
            <InventorySlot
              slot={9}
              itemObject={this.props.mainState.inventory[9]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #5 */}
            <InventorySlot
              slot={10}
              itemObject={this.props.mainState.inventory[10]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />{" "}
            {/* Slot #6 */}
            <InventorySlot
              slot={11}
              itemObject={this.props.mainState.inventory[11]}
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
