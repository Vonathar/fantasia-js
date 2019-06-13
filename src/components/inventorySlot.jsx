import React, { Component } from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";

class InventorySlot extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  // Render the appropriate class for items in the inventory
  renderInventoryItemClass = () => {
    // Check whether the item is equipped or not
    return this.props.itemObject.itemIsEquipped
      ? "inventorySlot-itemImage-equipped scale"
      : "inventorySlot-itemImage scale";
  };

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  renderInventoryItem = () => {
    if (this.props.itemObject) {
      return (
        <div className="inventorySlot mx-auto">
          <img
            id={"Popover" + this.props.slot}
            src={this.props.itemObject.itemImage}
            className={this.renderInventoryItemClass()}
            data-toggle="tooltip"
            data-html="true"
          />
          <Popover
            placement="bottom"
            isOpen={this.state.popoverOpen}
            target={"Popover" + this.props.slot}
            toggle={this.toggle}
          >
            <PopoverHeader>
              <strong>
                {"Lv. " +
                  this.props.itemObject.itemLevel +
                  " " +
                  this.props.itemObject.itemName}
              </strong>
            </PopoverHeader>
            <PopoverBody>
              <em>{this.props.itemObject.itemDescription}</em>
              <br />
              <br />
              <p>
                <span className="text-primary">Click DMG</span>:{" "}
                <span className="text-danger">
                  {this.props.renderNumberWithAbbreviations(
                    Math.round(
                      this.props.itemObject.itemStats.bonusAttack * 100
                    ) / 100
                  )}
                </span>
                <br />
                <span className="text-primary">Double Attack Chance</span>:{" "}
                <span className="text-danger">
                  {this.props.renderNumberWithAbbreviations(
                    Math.round(
                      this.props.itemObject.itemStats.bonusDoubleAttackChance *
                        100
                    ) / 100
                  )}
                </span>
                <br />
                <span className="text-primary">Critical Rate</span>:{" "}
                <span className="text-danger">
                  {this.props.renderNumberWithAbbreviations(
                    Math.round(
                      this.props.itemObject.itemStats.bonusCriticalChance * 100
                    ) / 100
                  )}
                </span>
                <br />
                <br />
                <span className="text-muted">Sell price</span>:{" "}
                <span className="text-success">
                  {this.props.renderNumberWithAbbreviations(
                    Math.round(this.props.itemObject.itemValue * 100) / 100
                  )}
                </span>
              </p>
              <div id="inventorySlot-buttons">
                <button
                  className="btn btn-dark mx-auto"
                  onClick={() => {
                    this.toggle();
                    this.props.toggleItemEquippedState(this.props.itemObject);
                  }}
                >
                  Equip
                </button>
                <button
                  className="btn btn-dark mx-auto"
                  onClick={() => {
                    this.toggle();
                    this.props.playerSellItem(this.props.itemObject);
                  }}
                >
                  Sell
                </button>
              </div>
            </PopoverBody>
          </Popover>
          <div />
        </div>
      );
    }
  };
  render() {
    return <React.Fragment>{this.renderInventoryItem()}</React.Fragment>;
  }
}

export default InventorySlot;
