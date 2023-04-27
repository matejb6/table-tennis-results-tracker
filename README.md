# Table Tennis Results Tracker

## About
An Angular web app for tracking table tennis results.

## Content
The app consists of two views: Players and Matches.
Also, there is a Page Not Found view for unavailable routes.
### Players view
It consists of players table and button for adding a player.
Player overview shows by clicking on player table row.
### Matches view
It consists of matches table and button for adding a match.
Player overview shows by clicking on player table row.
Add match form has players selection and sets entry.
When new match is entered, both matches and players data updates.

## App creation
The app was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Package
### Scripts
* `start`: Starts Angular development server and serves the app
* `build`: Builds Angular app
* `watch`: Builds Angular app when files change with development configuration
* `prettier:check`: Checks code formatting with Prettier
* `prettier:write`: Formats code with Prettier
* `lint`: Lints code with ESLint
* `test`: Tests Angular app with Karma
* `test:ci`: Tests Angular app with Karma in headless mode
* `test:coverage`: Tests Angular app with Karma in headless mode and outputs code coverage
* `prepare`: Prepare script to install Husky

### Additional packages
* `Angular Router` added during new app setup with: `ng new`
* `Angular Material` added with: `ng add @angular/material`
* `ESLint` added with: `ng add @angular-eslint/schematics`
* `Husky` added with: `npm install husky --save-dev`
* `Prettier` added with: `npm install prettier --save-dev`

## Commit hooks
Pre commit hooks are used to check code with `Prettier` and `ESLint`.
Before each commit, staged files are checked with defined scripts and committing of unchecked code will be prevented.
To commit code successfully, check `Prettier` and `Lint` paragraphs of this file.

## Git branching strategy
Two branches are present always and they should be merged from pull request:
* `main` branch containing code ready for new versions
* `dev` branch containing development advancements

Other branches (dynamic branches) contain specific changes should have following prefixes, depending on type of changes they contain. Brief and descriptive description should be added after slash (e.g. feature/about-view):
* `feature/` for new features
* `issue/` for issues
* `update/` for updates (files, dependencies, code, etc.)
* `other/` for other changes

## GitHub Actions
Defined workflows:
* `CI` as a general CI workflow
* `Version` for creating new versions

For more details see `.github/workflows/`.

## Requirements
* node.js v14.15.0

## Setup
* In root run `npm install` to install dependencies
* Script `prepare` should run with `npm install` to install husky, if not, run `npm run prepare`

## Start
* In root run `npm start` to start dev server
* Navigate to `http://localhost:4200/`
* The app will automatically reload if you change any of the source files

## Build
* In root run `npm run build` to build the app

## Prettier
* In root run `npm run prettier:check` to check if files are formatted with [Prettier](https://prettier.io)
* In root run `npm run prettier:write` to format files

## Lint
* In root run `npm run lint` to lint the app with [ESLint](https://eslint.org)

## Test
* In root run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
* In root run `npm run test:ci` to execute the unit tests in headless mode
* In root run `npm run test:coverage` to execute the unit tests in headless mode with coverage

## New version
* Go to GitHub repo
* Click on `Actions`
* Click on `Version` workflow
* Click `Run workflow`
* Select branch and enter next version (eg. major, minor, patch)
* New version is created, commit and tag are pushed to repo