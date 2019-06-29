# Fantasia

Fantasia is an _idle/incremental clicker RPG_.
The mechanic of the games are customised to make the entire adventure as enjoyable as possible - avoiding sudden bumps in the progression or major roadblocks down the way.
Fantasia is a work in progress, so many more features are currently on the way!

## Change log

### 3.0.0 - The Golden Temple Update

#### Gameplay

- **Complete restyling of game graphics** - monsters, backgrounds, icons and many more!
- **More than 70 new enemies** are waiting to be discovered in the world of Fantasia!
- **12** entirely new, **unique pets** are ready to join the fight!
- **24 new bosses** - fight them all to progress through the stages!
- **5** brand **new weapons** have been added to replace the old ones - ready to be used for all-new strategies!
- **Item rarity** now has a much greater effect on final weapon **stats**!
- **Drops**' item rarity **chances** have been changed to reflect their stronger stats
- Stage now changes every 10 stages instead of every 5
- It's now easier to know the **rarity of items** without hovering on them thanks to their **coloured border**!
- Deck cards are now easier to level up - however, they are now boss cards!
- Significantly increase the pet damage's increase over the levels
- The battle area has been rearranged to make more space for the enemies
- **Performance optimisation**

1. Rendering of damage paragraphs is now handled by the main state
2. Reduce calls to _renderNumberWithAbbreviations()_ by directly storing pre-abbreviated references for usage of child components
3. Calls to _checkIfQuestConditionsMet()_ are now scheduled automatically instead of being constantly invoked by each action
4. Pop paragraphs from the battle log when the total number of items rendered surpasses 20
5. Implement a check to make sure the pets' values need rerendering before calling all necessary functions
6. Duration of visual damage rendering has been halved
7. Drops are now automatically collected when they are more than 15 (_was 40_)
8. Equipment parts are now also collected automatically

#### Other

- Debug screen now give 1b coins instead of 1m
- Add an option in debug screen to skip the delay for enemy respawning
- A new font is used to improve the readability of the UI
- The battle area is now 15% bigger
- New icons for coins and weapons
- Progress bar for deck cards is now rendered with a standard bar instead of Bootstrap's
- Progress bars' colors have been changed to better reflect the value they represent
- Increase the font size of player and enemy names
- Rewrite straightforward functions using arrow functions
- Fix a bug which caused the skill #3 to have a much higher multiplier
- Fix a bug which caused skills to level up improperly
- Add recognition of hotkeys when the user has CapsLock activated

## Gameplay

### Player

Level up your character by killing monsters, but be careful! They hit you back - so make sure to drink a potion when you need to heal yourself.
Every time you level up, your HP increase!

### Skills

To **unlock** skills, level up your characted to the required level; once the minumum level is reached, the skill will be automatically unlocked. To **level up** new skills, just level up your character; all skills get different effects upon leveling up.

#### Quick Stab

Quickly attack the enemy multiple times, dealing damage based on the player level; level up the player to raise the skill level. Damage multiplier and attack count increase with level.

#### Mark of the beast

Increases your total DPS by a fixed percentage; the skill can be unlocked at level 5, and can be improved by raising the level of the player. Duration increases with level.

#### Animal Training

Become one with your animals, increasing your Click Damage by a % of your total DPS from pets; duration and percentage of damage received from DPS increase with level.

#### Fruit of Madness

All your pets get together to attack the enemy, dealing damage 3 times based on a % of your total DPS; the amount of attacks, as well as the damage dealt, increase by leveling the skills up.

### Upgrades

Upgrade your character to make it easier to kill enemies. The main upgrade is the one for click damage - more will be added with future updates.
To purchase new upgrades, press on the 'Hero' tab in the left menu.

### Pets

Tame and level up new pets to make it easier to progress. Pets you own will attack the player every second, even while you are away!
To level up or tame new pets, press on the 'Pets' tab in the left menu.

### Deck

Kill enemies of the same type to level up cards in your deck - in return, the cards are going to grant you great bonuses! The stats boosts which can be obtained from deck cards affect player attack, XP received, gold received and many more!

### Stages

Kill enough enemies to advance to the next stage, but be careful! Advancing to the next stage will make the monsters grow stronger - so make sure to prepare well before advancing.
TIP: Auto stage progress is available below the stage list

### Battle Log

If you want to know more about your adventure, you can read through the battle log in the bottom-right of the screen; it holds many valuable information, such as XP received, stage progress and more.

## Future updates

- Rebirth system!
- Player class system
- New hero upgrades
- Inventory system

## License

MIT
