# Fantasia

Fantasia is an _idle/incremental clicker RPG_.
The mechanic of the games are customised to make the entire adventure as enjoyable as possible - avoiding sudden bumps in the progression or major roadblocks down the way.
Fantasia is a work in progress, so many more features are currently on the way!

## Change log

#### 1.8.5

##### Gameplay

- Items now have 5 different **tiers of rarity**! [1 - White] Common, [2 - Green] Uncommon, [3 - Blue] Special, [4 - Purple] Rare and [5 - Orange] Legendary!
- _Stats_ on new _equipment_ parts are now calculated based on their rarity tier instead of using RNG
- The _level margin_ of newly dropped _equipment_ has been reduced to keep the game balanced
- The _drop rate_ in the early stages has been reduced
- Fix a bug which caused all _rendered damage paragraph_ to share the value assigned to the latest paragraph rendered [Issue #29]

##### Other

- Fix a bug which caused the game to crash when clicking the player to heal
- Round the damage paragraphs before rendering [Issue #28]

### 1.8.0

#### Gameplay

- **Inventory** and **equipment** are now live. Killing enemies now has a chance to drop equipment with randomly generated stats!
- _Progress bars_ in the battle area are now rendered without animation delay, making them more reactive to changes
- Increase _font size_ for readability
- Fix a bug which caused _manual stage progression_ to crash the website
- Fix a bug which caused _deck bonuses_ not to increase upon level up
- Fix a bug which caused a 5s delay before _potions_ would disappear upon collection
- Stats in the _summary menu_ are now rounded to increase readability
- Player experience multiplier and coin drop chance multiplier are now displayed in the _stats screen_
- _Game rebalancing_ to account for extra damage from equipment

#### Other

- The calculation of total multipliers is now handled by a function instead of targeted calculations
- The width of progress bars has now been modified to fit the new rendering of progress bars
- Add Reactstrap as a dependency
- The enemy drops' position has now been fixed to fit the new div rearrangement
- Bootstrap's progress bar rendering is now only used in the deck menu
- Remove outdated sample calculation of player and enemy stats
- Deck bonuses are now added to a global multiplier instead of being multiplier directly
- Remove unnecessary console logs

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
