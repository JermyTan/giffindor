<p align="center">
  <img src="./media/giffindor-logo.png" alt="Giffindor" width="500"/>
</p>

<p align="center">
  <img src="./media/iPhone.png" alt="iPhone" height="350"/>
  <img src="./media/iPad.png" alt="iPad" height="350"/>
  <img src="./media/macbook.png" alt="Macbook" height="300"/>
</p>

Website: <https://giffindor.jermytan.com/>

A gif search webapp that supports both mobile and desktop view. For the full mobile experience, trying installing this webapp to home screen. E.g. visit the site -> option -> "Add to Home Screen"

## Features

- View trending gifs
- Custom search for gifs
- Save and load your favourite gifs using your google account
- Share gifs with your friends through common social media platforms (web browser) or other native apps (mobile)

## Setup

1. Clone this repo
2. Create a free GIPHY API key by following this [guide](https://support.giphy.com/hc/en-us/articles/360020283431-Request-A-GIPHY-API-Key)
3. Set up a free firebase project by following this [guide](https://firebase.google.com/docs/web/setup)
4. Create a `keys.js` file with the following content and **replace the sample key/config with your obtained key/config from steps 2 & 3**:

```javascript
module.exports = {
  giphyApiKey: "G7ht93RE230TATza4be7dc", // sample key
  firebaseConfig: {
    apiKey: "AIzaSyDOCAbC123dEf456GhI789jKl01-MnO",
    authDomain: "myapp-project-123.firebaseapp.com",
    databaseURL: "https://myapp-project-123.firebaseio.com",
    projectId: "myapp-project-123",
    storageBucket: "myapp-project-123.appspot.com",
    messagingSenderId: "65211879809",
    appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
    measurementId: "G-8GSGZQ44ST"
  }, // sample config
};
```

5. Place `keys.js` in `giffindor/src`
6. Run `yarn install` to include all dependencies
7. Proceed to run the other available scripts

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install all app dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

