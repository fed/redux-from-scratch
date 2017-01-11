# Redux Example: Implementing Redux from Scratch

![Redux](http://i.imgur.com/jv2qFX8.jpg?1)

We know that React is just for views (often referred to as the `V` in `MVC`). The obvious question then is, where do I put all my state and logic?

You may already be aware of [Flux](https://facebook.github.io/flux/), which is a style / pattern / architecture for designing web applications. There are several frameworks out there that implement the ideas of Flux, one of them being [Redux](http://redux.js.org/).

Here's a very brief description of how Redux works:

1. **Components** are given callback functions as props, which they call when a **UI event** happens.
2. Those callbacks **create and dispatch actions** based on the event.
3. **Reducers** process the actions, computing the new state.
4. The new **state** of the whole application goes into a **single store**.
5. **Components** receive the new state as props and **re-render themselves *where needed***.

Most of the above concepts are not unique to Redux, but Redux implements them in a very clean and simple way, with a [tiny API](http://redux.js.org/docs/api/index.html).

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start` | Fire up Webpack Dev Server, app will go live on `http://localhost:3000` |
| `yarn run build` | Create a production build |
| `yarn test` | Run test suite |
