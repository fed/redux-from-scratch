# Redux Example: Implementing Redux from Scratch

![Redux](http://i.imgur.com/jv2qFX8.jpg?1)

The intent of this project is to provide a minimal re-implementation of the [Redux API](http://redux.js.org/docs/api/index.html) and the [bindings for React](https://github.com/reactjs/react-redux), in order to get a deeper understanding of the magic Redux is doing under the hood.

This implementation is of course simpler than the one on the original libraries — we won't be handling errors nor displaying neat error messages to the user when something goes wrong. We'll only cover the "happy path" of creating a store, dispatching actions, reading the state tree and subscribing to changes in the store by connecting container components to it.

## Prerequisites

* Node.js (https://nodejs.org/)
* Yarn (https://yarnpkg.com/)

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start` | Fire up Webpack Dev Server, app will go live on `http://localhost:3000` |
| `yarn run build` | Create a production build |
| `yarn test` | Run test suite |

This project was bootstrapped using [create-react-app](https://github.com/facebookincubator/create-react-app).

## License

MIT

