# Monorepo-template

## About

This is a monorepo template for Javascript based applications.

## Requirements

- [NodeJs](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Usage

- ### Install the dependencies

      yarn

- ### Build

      yarn build

  For a specific packge

      yarn build-scope [package_name]

- ### Watch (for development)

      yarn watch

  For a specific packge

      yarn watch-scope [package_name]

- ## Add a new package

      yarn generate
      
  Then simply follow the prompt.
  
  **Note**: Re-run `yarn` afterwards to make sure that every package is correctly installed.
