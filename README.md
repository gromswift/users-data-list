# Aims of the task:
(An archive with json-file, "images" and "videos" folders was provided with the task)

- Fetch asynchronously json-file (a list of users with data).
- Display the users data in form of a table.
- Display the users data in form of a preview. Cards of users which have "video" field should occupy the entire width of the area and contain a player with this video from the “videos” folder.
- Implement sorting by "ID", "Name", "Age" and "Reversed" (works for both table and preview).
- Implement localisation using "react-intl" or "react-i18next" libraries (I chose the second option), so that you can switch between languages without reloading the page.
- Implement filtering (with text input) by first name and / or last name. Provide the possibility that the user can enter in the field first the last name, and then the first name.
- The selected list display type, active sorting and filtering should be stored in the page URL. When the page is opened, the page address should be parsed and the appropriate filters, sorts, etc. are enabled.
- The page should be adaptive for tablets and phones.
- Implement adding / removing from favourites via redux (user object contains "favourite" field).
- Implement animation of interface elements (switches, filter, etc.).
- List animation. When loading, re-sorting, filtering and changing the view, the list items appear one after another (with a slight delay relative to each other).
- Branding. Interface elements (buttons, favorites, etc.) have a color from a variable.

## Additional
- Use only functional components.
- Use redux.
- Design was optional (only structural mockup was provided).

# Getting Started with Create React Sorting

This project was bootstrapped with [Create React Sorting](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React Sorting documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web Sorting

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
