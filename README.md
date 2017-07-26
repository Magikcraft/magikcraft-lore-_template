# Magikcraft Lore Package Template

Create an npm package that contains Magikcraft Lore that will be autoloaded at run-time in Magikcraft, and expose additional lore for programmers to use.

## Configuration

Edit `package.json` and update the `description`, `repo`, and `author` fields.

## Developing

Edit your source files and tests in the `src` directory.

You can start the compilation watcher with `npm run watch`. This will transpile your TypeScript code to JavaScript on save.

When you commit, husky will run the compiler to make sure that the code you commit is transpiled to JavaScript in the `dst` directory.