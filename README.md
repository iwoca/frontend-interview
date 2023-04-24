## iwoca frontend interview test (application portal)

### Setup

1. Clone this repo to your local machine, its a partially setup [`create-react-app`](https://github.com/facebook/create-react-app) project
1. Make sure you are using the correct node version:
   1. Manually: `node -v` should return `16.13.0`
   1. If you don't have Node version manager (NVM) [install install it from here](https://github.com/nvm-sh/nvm)
   1. Using `nvm`: Run `nvm install` to install the node version and `nvm use` to use it
1. Install the dependencies with `npm install`
1. Run `npm start` to start the `frontend` on `localhost:3000` and the api server on `localhost:3001`

### The Task

Currently there is only one application which is shown using a fixture in the codebase

The applications api http://localhost:3001/api/applications will return a JSON object of all applications for that user

You can paginate the endpoint using the query string `?_page=2&_limit=5` you must return 5 new applications every time the load more button is clicked, `_page=` is the page you will be returning and `_limit=` is number of applications to return

see attached [Figma Link](https://www.figma.com/file/5NOBLAgL17n4qoR82vhYY5/iwoca---frontend-developer.-test?node-id=0%3A1&t=EMSHOn1fDlCrdgaC-1) for how this should look

1. There is a pre styled `<Button />` component you can use for this.
1. You must write tests to test the integration. Jest is preferred but you can use cypress or another library if more comfortable
1. Any comments you want to pass along to the reviewer add to COMMENTS.md and commit
1. To submit either send us a link to your public fork or another public repo. Alternatively you can zip up your files minus `node_modules` and email it over.

### Notes

- Feel free to alter the technologies used in the code base, eg. we use CSS modules but if you are more comfortable with `styled-components` for example you can install and use that for your portion of the task.
- Attention to detail in the design will go a long way.
- All the tickets features are for desktop but we would be very happy to see mobile considered.
- Remember to check your project runs before submitting. - we will be running it in development mode to review.
- Feel free to refactor the code where appropriate.
