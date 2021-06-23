# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![PC Version](./screenshot_pc.jpg)
![Mobile Version](./screenshot_mobile.jpg)


### Links

- Solution URL: [https://github.com/DamianErasmus/easybank-lp](https://github.com/DamianErasmus/easybank-lp)
- Live Site URL: [https://deeasybanklp.netlify.app/](https://deeasybanklp.netlify.app/)

## My process

Originally, I wanted to post a video of my process. However I didn't record my process correctly, so the video didn't work.
I will do so next time.

My process was, doing the page, with a width of 1440px first. Starting with the header and working my way down to the footer.
I made a utility class for when ever I would need to repeat CSS.
I then worked on the mobile screen.
Then committed it to GitHub, afterwards deployed it with Netlify

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript
- Utility CSS 

### What I learned

```html
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
	<g fill="#2D314D" fill-rule="evenodd">
	   <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
	</g>
</svg>
```
So this was extremely profound for me because this was how I was able to change the color of the icons, I never knew this was possible. Now I do.

```css
.hero {
    padding-top: 55px;
    position: relative;
    max-width: 100vw;
    max-height: 600px;
    background-image: url(/images/bg-intro-desktop.svg);
    background-repeat: no-repeat;
    background-size: 1400px 850px;
    background-position: 620px -150px;
}
```
I knew about using an image as a background in css, but I didn't really understand how to effectively manipulate, resize and align it before the project.

```js
for (var i = 0; i < menuButtons.length; i++) {
    let count = i;

    menuButtons[count].onmouseenter = function () {
        menuButtons[count].classList.add("hover_border");
    };

    menuButtons[count].onmouseleave = function () {
        menuButtons[count].classList.remove("hover_border");
    };
};
```
This took me ages to figure out, but now I know how to add a function to multiple classes in html

## Author

- Website - [Damian](https://damianerasmus.com)
- Frontend Mentor - [@DamianErasmus](https://www.frontendmentor.io/profile/DamianErasmus)
- Github- [Damian Erasmus](https://github.com/DamianErasmus)

