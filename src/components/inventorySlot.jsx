import React, { Component } from "react";
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";

class InventorySlot extends Component {
  constructor(props) {
    super(props);

    this.toggleByHover = this.toggleByHover.bind(this);
    this.toggleByClick = this.toggleByClick.bind(this);
    this.state = {
      popoverOpenByHover: false,
      popoverOpenByClick: false,
      attackAbbreviated: "",
      valueAbbreviated: ""
    };
  }
  // Render the appropriate class for items in the inventory
  renderInventoryItemClass = () => {
    let classes = "";
    // Check whether the item is equipped or not
    classes += this.props.itemObject.itemIsEquipped
      ? "inventorySlot-itemImage-equipped scale "
      : "inventorySlot-itemImage scale ";

    if (this.props.itemObject.itemRarity === 0) {
      classes += "itemSlot-common";
    }
    if (this.props.itemObject.itemRarity === 1) {
      classes += "itemSlot-uncommon";
    }
    if (this.props.itemObject.itemRarity === 2) {
      classes += "itemSlot-special";
    }
    if (this.props.itemObject.itemRarity === 3) {
      classes += "itemSlot-rare";
    }
    if (this.props.itemObject.itemRarity === 4) {
      classes += "itemSlot-legendary";
    }
    return classes;
  };

  storeAbbreviatedVersionForRendering = () => {
    setTimeout(() => {
      this.setState({
        attackAbbreviated: this.props.renderNumberWithAbbreviations(
          this.props.itemObject.itemStats.bonusAttack
        ),
        valueAbbreviated: this.props.renderNumberWithAbbreviations(
          this.props.itemObject.itemValue
        )
      });
    }, 0);
  };

  renderItemRarityClass = () => {
    let rarityClass = "itemRarity-";
    if (this.props.itemObject.itemRarity === 0) {
      rarityClass += "common";
    }
    if (this.props.itemObject.itemRarity === 1) {
      rarityClass += "uncommon";
    }
    if (this.props.itemObject.itemRarity === 2) {
      rarityClass += "special";
    }
    if (this.props.itemObject.itemRarity === 3) {
      rarityClass += "rare";
    }
    if (this.props.itemObject.itemRarity === 4) {
      rarityClass += "legendary";
    }
    return rarityClass;
  };

  // Opens the popover which immediately disappears whenever the user removes focus from the item
  toggleByHover() {
    if (
      !this.state.popoverOpenByClick &&
      this.props.mainState.canInventoryPopoversBeRendered
    ) {
      setTimeout(() => {
        this.setState({
          popoverOpenByHover: !this.state.popoverOpenByHover
        });
        this.storeAbbreviatedVersionForRendering();
      }, 200);
      setTimeout(() => {
        if (this.state.popoverOpenByHover) {
          this.setState({ popoverOpenByHover: false });
        }
      }, 2000);
    }
  }

  // Keep the popover open until the user clicks the icon again, even if the users forces multiple hovers
  toggleByClick() {
    this.setState({
      popoverOpenByClick: !this.state.popoverOpenByClick
    });
    this.storeAbbreviatedVersionForRendering();
  }

  renderInventoryItem = () => {
    if (this.props.itemObject) {
      return (
        <div className="inventorySlot mx-auto">
          <img
            id={"Popover" + this.props.slot}
            alt="Inventory slot"
            src={this.props.itemObject.itemImage}
            className={this.renderInventoryItemClass()}
            data-toggle="tooltip"
            data-html="true"
            onClick={this.toggleByClick}
            onMouseEnter={this.toggleByHover}
            onMouseLeave={this.toggleByHover}
          />
          <Popover
            placement="bottom"
            isOpen={
              this.state.popoverOpenByHover || this.state.popoverOpenByClick
            }
            target={"Popover" + this.props.slot}
            toggle={this.toggle}
          >
            <PopoverHeader>
              <strong>
                {"Lv. " + this.props.itemObject.itemLevel + " "}
                <span className={this.renderItemRarityClass()}>
                  {this.props.itemObject.itemName}
                </span>
              </strong>
            </PopoverHeader>
            <PopoverBody>
              <em>{this.props.itemObject.itemDescription}</em>
              <br />
              <br />
              <p>
                <span className="text-primary">Click DMG</span>:{" "}
                <span className="text-danger">
                  {this.state.attackAbbreviated}
                </span>
                <br />
                <span className="text-primary">Double Attack Chance</span>:{" "}
                <span className="text-danger">
                  {this.props.itemObject.itemStats.bonusDoubleAttackChance}%
                </span>
                <br />
                <span className="text-primary">Critical Rate</span>:{" "}
                <span className="text-danger">
                  {this.props.itemObject.itemStats.bonusCriticalChance}%
                </span>
                <br />
                <br />
                <span className="text-muted">Sell price</span>:{" "}
                <span className="text-success">
                  {this.state.valueAbbreviated}
                </span>
              </p>
              <div id="inventorySlot-buttons">
                <button
                  className="btn btn-dark mx-auto inventorySlot-button"
                  onClick={() => {
                    this.setState({
                      popoverOpenByHover: false,
                      popoverOpenByClick: false
                    });
                    this.props.toggleItemEquippedState(this.props.itemObject);
                  }}
                >
                  Equip
                </button>
                <button
                  className="btn btn-dark mx-auto inventorySlot-button"
                  onClick={() => {
                    this.setState({
                      popoverOpenByHover: false,
                      popoverOpenByClick: false
                    });
                    this.props.playerSellItem(this.props.itemObject);
                    this.props.toggleInventoryPopoversRendering(false);
                    setTimeout(() => {
                      this.props.toggleInventoryPopoversRendering(true);
                    }, 100);
                  }}
                >
                  Sell
                </button>
                <button
                  className="btn btn-dark mx-auto inventorySlot-button"
                  onClick={() => {
                    this.setState({
                      popoverOpenByHover: false,
                      popoverOpenByClick: false
                    });
                    this.props.playerSellAllUnequippedItems();
                    this.props.toggleInventoryPopoversRendering(false);
                    setTimeout(() => {
                      this.props.toggleInventoryPopoversRendering(true);
                    }, 100);
                  }}
                >
                  Sell All Unequipped
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
