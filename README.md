## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

# Installation: Clone the Repo and Install Modules Using

## npm install

# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

### Desktop

![desktop](https://github.com/hashmi7917/easybank-landing-page-tailwindcss/assets/38833326/6ca66a8a-547b-4947-908f-7b712e0e3519)

### Mobile

![mobile](https://github.com/hashmi7917/easybank-landing-page-tailwindcss/assets/38833326/82a721d5-05a2-4779-8cb1-91fc98806e3c)

### Links

- Solution URL: [Github](https://github.com/hashmi7917/easybank-landing-page-tailwindcss)
- Live Site URL: [Netlify](https://easybank-landing-page-tailwindcss.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library + Vite
- [Fontawesome](https://fontawesome.com/icons) - Icons
- [Tailwind CSS](https://tailwindcomponents.com/cheatsheet/) - Tailwind CSS Cheatsheet

### What I learned

Tailwind CSS , Flexbox, Layouts, CSS GRIDS.

```html
<nav
  className="flex justify-between items-center py-4 px-2 z-10 max-md:px-8 max-md:py-6 transition-all ease-linear"
>
  <picture className="w-1/3">
    <img src="{Logo}" alt="Logo" />
  </picture>

  <ul className="w-1/3 flex justify-evenly items-center text-sm max-md:hidden">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Blog</li>
    <li>Careers</li>
  </ul>
  <div className="flex justify-end w-1/3 mx-auto">
    <button
      className="text-neutral-White bg-gradient-to-br from-primary-LimeGreen to-primary-BrightCyan hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-10 py-3.5 text-center max-md:hidden"
      type="submit"
    >
      Request Invite
    </button>
  </div>
  <picture className="hidden max-md:block">
    <img src="{HamMenu}" alt="hamburger menu" />
  </picture>
</nav>
```

```css
extend: {
      fontFamily: {
        publicsans: ['Public Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: '300',
        medium: '400',
        extrabold: '700',
      },
      fontSize: {
        md: '16px',
        xxs: '12px',
      },
      colors: {
        primary: {
          DarkBlue: 'hsl(233, 26%, 24%)',
          LimeGreen: 'hsl(136, 65%, 51%)',
          BrightCyan: 'hsl(192, 70%, 51%)',
        },
        neutral: {
          GrayishBlue: 'hsl(233, 8%, 62%)',
          LightGrayishBlue: 'hsl(220, 16%, 96%)',
          VeryLightGray: 'hsl(0, 0%, 98%)',
          White: 'hsl(0, 0%, 100%)',
        },
      },
    },
```

### Continued development

Tailwind CSS, CSS Grids, Flexbox, Layouts

### Useful resources

- [Tailwind CSS Cheatsheet](https://tailwindcomponents.com/cheatsheet/) - This helped me for easily access to tailwind css. I really liked this pattern and will use it going forward.

## Author

- Website - [Github-Profile](https://github.com/hashmi7917)
- Frontend Mentor - [@hashmi7917](https://www.frontendmentor.io/profile/hashmi7917)
- Instagram - [@hashmi.developer](https://www.instagram.com/hashmi.developer/)

## Acknowledgments

Thanks to Tailwind CSS Community and Frontend Mentor Community.
