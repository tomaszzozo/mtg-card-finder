# Triangles visible area calculator

## Table of contents

- [Introduction](#introduction)
- [Test data](#test-data)
- [Technology](#technology)
- [Launch](#launch)
- [Project structure](#project-structure)

## Introduction

This project's aim is to provide a website for my friends to check Magic the Gathering cards abilities and effects translated and explained in polish. I translate all the cards myself, because they contain very specific wording that automatic translators could potentially not pick up.

## Test data

You can input one of these abilities to search for their translation:

- scry
- bushido
- trample
- haste

You can also use one of these keys to search for specific cards:

- 075264
- 049303
- 163280

If you want to play around more, you can find all data in /src/components/data.json file.

## Technology

- React JS
- HTML
- CSS
- Bulma
- Javascript
- Visual Studio Code
- Filezilla

## Launch

You can see the latest release of this website by visiting http://gh.lesmierz.pl

## Project structure

### data.json

This file contains all card numbers, image sources, names and translations.

### Body.jsx

This file is holding all of the site's body.

### Card.jsx

This component displays card by given id or ability.

### History.jsx

This component is responsible for keeping track of searched cards.

### NumericButtons.jsx

This component is responsible for numeric keyobard that is added for phone users to make using this website easier.
