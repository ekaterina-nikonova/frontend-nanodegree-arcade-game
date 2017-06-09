# Information for testers and reviewers

- There is a way to make testing of all levels easier. Just **toggle collisions** by commenting the line 228 in _my-engine.js_ file:

    ``player.checkCollisions(allEnemies[row][num1]);``

    It's preceded by the comment that says:

    ``Comment the next line to turn off collisions...``

    It also makes sense to decrease the number of hops, so that you don't have to get to the other side 20 times before you complete a level. To do so, find the ``switch`` in _my-engine.js_ (line 40) and reduce the value in:

    ``this.hops = {value: ...};``

    to 3 or 5 for each level.

- I have considerably altered the Udacity's engine and tried to make the comments as detailed as possible. The summary of major changes can be found in the beginning of _my-engine.js_. I haven't removed original comments. The ones I have added begin with _"EN:"_ - also in _app.js_, for consistency.

- A simplified structure of the _app.js_ file is shown below:

  ![App structure](/images/svgs/app-structure.png)

  It displays main functions and properties of objects in _app.js_ and where they are used, also in _my-engine.js_.

  The drawing is stored [here](/images/svgs/app-structure.svg) (/images/svgs/app-structure.svg).
