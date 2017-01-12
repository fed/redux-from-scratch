# Redux Example: Implementing Redux from Scratch

![Redux](http://i.imgur.com/jv2qFX8.jpg?1)

The intent of this project is to provide a minimal re-implementation of the [Redux API](http://redux.js.org/docs/api/index.html), as well as the [Redux bindings for React](https://github.com/reactjs/react-redux), in order to get a deep understanding of the magic Redux is doing under the hood.

This implementation is of course simpler than the one on the original libraries — we won't be handling errors nor displaying neat error messages to the user when something goes wrong. We'll only cover the "happy path" of creating a store, dispatching actions, reading the state tree and subscribing to changes in the store by connecting container components to it.

## The case for Redux

So, if React is just a declarative library for building UIs, where are we supposed to keep all of our application state and logic?

You may already be aware of [Flux](https://facebook.github.io/flux/), which is a style/pattern/architecture for designing web applications. There are a handful of frameworks out there that implement the concepts and ideas of Flux, one of them being [Redux](http://redux.js.org/).

Here's a very brief description of how Redux works when we integrate it to React:

1. **Components** are given callback functions as props, which they call when a **UI event** happens.
2. Those callbacks **create and dispatch actions** based on the event.
3. **Reducers** process the actions, computing the new state.
4. The new **state** of the whole application goes into a **single store**.
5. **Components** receive the new state as props and **re-render themselves *where needed***.

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

## License

MIT

