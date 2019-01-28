# Webpack 4 Code Splitting using SplitChunksPlugin

The final version of the example highlighted in [this fantastic article on Medium](https://itnext.io/react-router-and-webpack-v4-code-splitting-using-splitchunksplugin-f0a48f110312) by Uday Hiwarale from ITNext.

## Instructions

1. `yarn` to install dependencies
2. Execute command `yarn start` for running development server and preview
3. See network tab of console for what chunks are loaded (sync and async)

## Chunks

Defined in `webpack.config.js`.

- **vendor**: Anything in `node_modules` (sync)
- **common**: Any import shared between 2 or more components (sync)
- **main**: Everything else required at runtime (sync)
- **dynamic imports**: 1 per page route (async)

## Credits

- [Uday Hiwarale](https://itnext.io/@thatisuday)
