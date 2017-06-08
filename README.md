# Udacity Frogger

This is a simple version of a classic arcade game [Frogger](https://en.wikipedia.org/wiki/Frogger). To play it, just open [this page](https://ekaterina-nikonova.github.io/frontend-nanodegree-arcade-game/), select a character and see if you can complete all 5 levels!

## Selecting a character
![Character selection screen](/images/screenshots/char-select-screenshot.png)
### In a desktop browser
Using arrow keys, select a character and press _Enter_. You can also click the left or the right side of the screen to select a character and then click in the middle to start the game.
### On a mobile device
Tap the left or the right side of the screen to select a character and then tap in the middle to start the game.

## Gameplay
![Level 2 screenshot](/images/screenshots/gameplay-screenshot.png)

### Goal
Help your character cross the paved area while avoiding bugs. Be careful to not drown in the pools! Your destination is one of green stone blocks on the other side. Their number decreases as you progress from one level to another. The number and variety of bugs and bonuses, on the contrary, increase.

When you fall in water, the character loses 1 life and returns to the starting position. The number of remaining lives is displayed as a red splash:

![Red splash](/images/screenshots/drown-splash-screenshot.png)

### How to move

#### In a desktop browser
You can control the character either with arrow keys on your keyboard or by clicking above, below, to the left and to the right of the character. If you're using the mouse, try to align your clicks precisely with the character's position. And remember, you can move backwards too!

#### On a mobile device
Tap above or below the character to move forward and backwards, and to the left or to the right to move side to side. You should align taps precisely with the character's position to make sure he or she moves in the right direction!

### Enemies
Bugs are to be avoided. They don't kill the character, but reduce health. When the character loses all health, he or she also loses a life. The stronger the bug is, the more health it takes away:

Bug|Health reduced
------------ | -------------
![Brown bug](/images/brown-bug.png)|-10
![Blue bug](/images/blue-bug.png)|-15
![Red bug](/images/red-bug.png)|-20
![Rainbow bug](/images/rainbow-bug.png)|-25

After the character gets hit by a bug, he or she returns to the starting position.

### Level up
At each level you have to cross the dangerous area a certain number of times: 5, 10, 15, 20 and 25 times on levels from 1 to 5. Every time you hit a safe green tile on the other side, a green splash shows how many more times you should cross before a level up:

![How much more times to cross](/images/screenshots/crossed-screenshot.png)

When you complete a level, a blue splash shows at which level you are now:

![Level up splash](/images/screenshots/level-up-screenshot.png)

Health is fully restored after a level up.

### Bonuses
Though most bonuses are pleasant or useful items you can collect, some of them are to be avoided. Bonuses appear one at a time.

Bonus|What it does
------------ | -------------
![Yellow gem](/images/Gem Orange.png)|+ 5 points
![Blue gem](/images/Gem Blue.png)|+ 15 points
![Green gem](/images/Gem Green.png)|+ 25 points
![Heart](/images/heart-shadow.png)|+ 1 life
![Key](/images/Key.png)|Invincibility
![Rock](/images/Rock.png)|Block
![Purple rock](/images/Rock Purple.png)|- 5 health

### Invincibility
If you get hold of a golden key, you're a lucky one! It makes you immune to bugs so that you can reach target tiles and collect items without risk of being hit, but only for a **limited time**! Golden glow around the character indicates invincibility:

![Invincible character](/images/screenshots/invincible-screenshot.png)

### Rocks
Rocks are "negative bonuses" that are present at levels 4 and 5. They also appear one at a time and stay for a while. Grey rocks only obstruct the way:
![Grey rock](/images/screenshots/rock-screenshot.png)

Purple rocks are harmful! Unlike bugs, they don't move, but reduce the character's health and return him or her to the starting position:
![Purple rock](/images/screenshots/purple-rock-screenshot.png)

## Tips and tricks
- If the situation looks hopeless, especially at higher levels, be patient and wait for the key bonus to appear close to you. Then all you'll have to worry about for a few seconds is water pools, as you lose invincibility after losing a life.
- Don't rush through lower levels, try to collect as many heart bonuses as you can. Then you can approach higher levels with up to 9 spare lives.
- Remember that invincibility disappears at level up and after losing a life.
- Be aware that slow bugs can suddenly become faster. When they get hit by a peer, they speed up and can sometimes appear like a bat out of hell!
- You might sometimes rush to reach the safety of a green stone, but you should nevertheless be careful with your moves. After the character gets hit by a bug or meets a purple rock, his or her position is reset, and you can unexpectedly end up in front of another bug.

## Acknowledgments
- The game engine, skeleton code and graphic assets were provided by [Udacity](https://www.udacity.com/). They can be obtained [here](https://github.com/udacity/frontend-nanodegree-arcade-game).
- All additional graphics, including the background, were created with [InkScape](https://inkscape.org), free vector graphics software.
- Baloo font was used for all screens, splashes and indicators. It is available via [Google Fonts](https://fonts.google.com/specimen/Baloo).

## Known issues
- Of two successive splashes, the first one hinders the second splash if it comes too soon.
- On mobile devices the game can be slow, but should be playable on more powerful phones and tablets.
