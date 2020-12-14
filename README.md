Redux Design:
reducer --> comments
action --> save comments

Design components:
App Component
Comment Component
CommentList Component

Test: methodologies

- Look at each individual part of your application,
- Imaging telling them here is what this piece oof code does
- Write a test to verify each part does what you expect

ex. verify the text is in the text , verify text is save is display

- first test
  https://create-react-app.dev/docs/running-tests/
  install npm install --save @testing-library/react @testing-library/jest-dom

  Enzyme adapter for react 17
  npm install enzyme
  npm install --save-dev @wojtekmaj/enzyme-adapter-react-17

~~ important for your test file setupTests.js ~~~~
~~ C.20 Name the file exactly as setupTests.js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

====== NOTE =======
//Enzyme : static, shallow, fulldom

~~ how to import module to your test file ~~
document : https://create-react-app.dev/docs/importing-a-component/#absolute-imports

~~ Full Dom rendering by Enzyme ~~

~~ Simulate event in Enzyme ~~
.simulate(event[, mock]) => Self
event is the real name from the dom
ex. onChange is in React, we have to use 'change'
mock object will be used to mock that event

https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/simulate.html

call https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/update.html#update--self
update to force the instant re-render

next we need to get the correct prop using prop(key)
https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/prop.html

npm run test
press a

Introducing Root component
reducers/**test**/comment.test.js

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
