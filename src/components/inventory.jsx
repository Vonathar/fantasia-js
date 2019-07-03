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
              mainState={this.props.mainState}
              itemObject={this.props.mainState.inventory[0]}
              slot={0}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #2 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={1}
              itemObject={this.props.mainState.inventory[1]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #3 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={2}
              itemObject={this.props.mainState.inventory[2]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #4 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={3}
              itemObject={this.props.mainState.inventory[3]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              o0
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #5 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={4}
              itemObject={this.props.mainState.inventory[4]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #6 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={5}
              itemObject={this.props.mainState.inventory[5]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
          </div>
          {/* Row #2 */}
          <div className="userInterface-inventory-row">
            {/* Slot #1 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={6}
              itemObject={this.props.mainState.inventory[6]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #2 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={7}
              itemObject={this.props.mainState.inventory[7]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #3 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={8}
              itemObject={this.props.mainState.inventory[8]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #4 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={9}
              itemObject={this.props.mainState.inventory[9]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #5 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={10}
              itemObject={this.props.mainState.inventory[10]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />{" "}
            {/* Slot #6 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={11}
              itemObject={this.props.mainState.inventory[11]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
          </div>
          {/* Row #3 */}
          <div className="userInterface-inventory-row">
            {/* Slot #1 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={12}
              itemObject={this.props.mainState.inventory[12]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #2 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={13}
              itemObject={this.props.mainState.inventory[13]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #3 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={14}
              itemObject={this.props.mainState.inventory[14]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #4 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={15}
              itemObject={this.props.mainState.inventory[15]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />
            {/* Slot #5 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={16}
              itemObject={this.props.mainState.inventory[16]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
              renderNumberWithAbbreviations={
                this.props.renderNumberWithAbbreviations
              }
            />{" "}
            {/* Slot #6 */}
            <InventorySlot
              mainState={this.props.mainState}
              slot={17}
              itemObject={this.props.mainState.inventory[17]}
              toggleInventoryPopoversRendering={
                this.props.toggleInventoryPopoversRendering
              }
              toggleItemEquippedState={this.props.toggleItemEquippedState}
              playerSellItem={this.props.playerSellItem}
              playerSellAllUnequippedItems={
                this.props.playerSellAllUnequippedItems
              }
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
