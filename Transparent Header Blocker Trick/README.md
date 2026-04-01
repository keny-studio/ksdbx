## $${\color{red}Transparent \ Header \ Blocker \ Trick}$$

### The core concept

The header itself has a transparent background that never changes. It sits in front of the page using position: fixed.

The effect is created by sticky “blocker” elements: one in the hero and one in the main article area. They sit behind the site header, but in front of the other content.

The hero blocker has a color rectangle that sits right underneath the real header. It uses position: sticky, so it follows the user as they scroll, but critically, it won’t follow the user beyond its container.

When a sticky element reaches the end of its container, it becomes unstuck and scrolls out of view.


So, that’s the core trick! Separate “blocker” elements that are each color-matched to their respective backgrounds. As the user scrolls past the hero, we get this neat hand-off; the first blocker scrolls out of view and the second blocker takes over.
