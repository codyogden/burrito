// Import Dependencies
import { createElement } from 'react';
import { render } from 'react-dom';

// Load Internal Dependencies
import App from './App';

((application) => {
  // Get the `body` tag
  const body = document.querySelector('body');

  // Create an application container element.
  const appContainer = document.createElement('div');
  // Give appContainer an ID
  // (__NAME__ is set in webpack)
  appContainer.setAttribute('id', __NAME__);

  // Add the container to the top of the body tag
  body.prepend(appContainer);

  // Create the App
  const app = createElement(
    application,
    null, // props
    null, // children
  );

  // Render the app
  render(
    app,
    appContainer,
  );
})(App);
