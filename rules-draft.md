# Rules and characters

1. Different levels
2. There are ~~grass~~ stone blocks (different color?) on the other side. They should be reached to get a bonus. The number of grass blocks decreases from level to level. Water resets the game with the loss of life.
3. There are several types of enemies (change color on canvas). The weakest ones cause less damage (reduce health), ~~but don't kill you~~. The strongest ones move faster.
4. Rocks make stone blocks unavailable for some time.
5. ~~When the game is reset, the character flickers.~~
6. Gems give points. ~~A certain level of points gives a level-up + healing.~~
7. Gems stay for the 'waterLife' period of time.
8. Hearts give additional lives.
9. A key makes the character invincible for some time. (see 12)
10. A splash when the character reaches the other side.
11. A splash after a level-up.
12. ~~Animation when the character 'dies'. (becomes transparent?)~~
13. Invincibility: lasts 7 seconds, reset after losing life or level-up.
14. If the game feels too easy, add opening water at random spots on the field.

# Dimensions
`canvas` - 851w x 730h (full size);

_starting screen res_ (no need to resize) - 1400w x 900h;

# To testers
Include in the README:
- [ ] How to test all levels:
 - toggle player collisions (or set invincibility to true),
 - decrease hops.
- [ ] Changes in engine, EN-comments.

# To mention in the docs
- All graphics created with **InkScape**
- :bangbang: Maximum 10 lives
- Known issues: of two successive splashes, the first one hinders the second splash if it comes too soon
