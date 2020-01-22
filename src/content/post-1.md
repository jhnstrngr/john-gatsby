---
title: "Swwwft | swwwyft.com"
date: "2020-01-07"
draft: false
path: "/portfolio/swwwyft"
---

Swwwyft was a group project I was involved in during a university module called "Netscapes" where we were set to think about the future of web and internet systems.

As a group of four, we created ‘Swwwyft’. An application that allows users to swiftly and efficiently create modern digital resumes. We wanted to make it possible for anyone to expand their digital presence without having to spend too much time or money; in an age where online visibility is invaluable.

#### Swwwyft is currently live at: [www.swwwyft.com](https://www.swwwyft.com/)

#### You can view my demo resume at [www.john.swwwyft.com](https://john.swwwyft.com/)

---

## How do you use it?

We wanted to make the creation process as simple and fast as possible so all it takes are three simple steps.

1. Drag your LinkedIn profile PDF onto the site.

2. Change or add any necessary data.

3. Save and publish if you are happy with it by creating an account.

![image](https://i.imgur.com/i1f7YiQ.png)

![image](https://i.imgur.com/eWgDQ48.png)

![image](https://i.imgur.com/fjEs4po.png)

![image](https://i.imgur.com/EwW48QF.png)

---

## How was it made?

The first challenge we faced was extracting the information from the PDF, as we weren't able to use a publicly available LinkedIn API to get the information we needed. We needed to use a script that would identify regions of the PDF based on positioning and visual information that would work iteratively in order to work on any size PDF.

The application itself is built with Node.js and the MERN stack. The site uses two React applications to handle the main Swwwyft site as well as user's subdomains. The application also uses Stripe for paid subscriptions.

---
## My roles

My roles were to make the themes that users could use in css as well as writing essay content for our group.

I made the themes, using SCSS as a precompiler for my CSS.

This was the file structure I used to organise my themes.

```markup
_base.scss
_layout.scss
_components.scss
main.scss
```

Here you can find code examples of all of the themes: 

[www.github.com/jhnstrngr/sw-themes](https://github.com/jhnstrngr/sw-themes)

These are a couple of examples.

![image](https://i.imgur.com/KONltO2.png)

![image](https://i.imgur.com/4bA4Wll.png)