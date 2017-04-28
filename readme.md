# Base for reactjs applications
This project is a base that can be used for all reactjs applications.

## Specifications
- ES6
- Webpack
- React DOM

## Start the project
With NPM:
```
    npm install
```

With Yarn: 
```
yarn install

```

## Personalize
Follow this steps to personalize your project:
1. Open package.json and change the author name and other project variables
1. Open webpack.config.js and change the port information under script

## Get started -- FAST!
1. Run in the project folder
    ```
    yarn install
    yarn start
    ```
1. Go to the URL: 0.0.0.0:4000
1. Start coding! Checkout the SRC folder.

## Known issues:
**Invalid Host header** 
Can be solved by modifying the webpack.config.js file. Change under `devServer` the `public` to your hostname. 