# Burrito
All your assigned Trello cards wrapped up in a warm shell.

## How to Use It
1. Go to https://burrito.work and click 'Login with Trello'.
2. After logging in, you'll see all the cards assigned to you.
3. Click the card to open it in a new window.
4. Profit?

## Features
- Minimal Design
- Auto Refresh

That's all the features for now.

## Contributing to Burrito
Burrito uses the [yarn](https://yarnpkg.com/) package manager. Clone the repo to your machine and run `yarn` to install all dependencies.

Some developer tools and scripts are already available inside the repo that help with code formatting, code linting, and building.

- `yarn run build`
   This will build a uncompressed version of the app to get it running locally.
- `yarn dev`
    Boots up [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with live reloading.
- `yarn run lint`
    [eslint](https://eslint.org/) will check for errors and issues. Following Airbnb's code style guidelines.
- `yarn run format`
    [prettier](https://github.com/prettier/prettier) will format and write the codebase uniformly.
- `yarn run build:production`
    Builds a production-ready, optimized and minimized version of app. **Run this before submitting your pull request.**

## Infrequently Asked Questions
### Why did you call it "Burrito"?
Trello's mascot is "Taco from Trello." I prefer to eat my Mexican swaddled up burrito style. idk. It's 4 AM.
