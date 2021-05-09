# ⚠ DEPRECATION NOTE ⚠

From now on Asyncoload will be deprecated in favour of the native [`object`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object) HTML tag which does the same thing as Asyncoload but in a more optimized manner.

# Asyncoload — Asynchronous media type fetcher

Asyncoload is an Asynchronous React component for fetching media type

## Getting Started

- Run `yarn add asyncoload` or `npm i asyncoload`
- Import it in your React project like so

```js
import AsyncoLoad from "asyncoload";
```

## Simple example

The file that I'll be using will be an image

```js
import AsyncoLoad from "asyncoload";

const App = () => {
  return (
    <AsyncoLoad src="https://audubon.org/sites/default/files/styles/hero_image/public/Hummingbird_Hero_Roger_Levien.jpeg">
      {({ type, src }) => {
        if (type.startsWith("image")) {
          return <img src={src} />;
        }
      }}
    </AsyncoLoad>
  );
};
```

Result:

<img
src="https://i.imgur.com/WeY2nPG.png"
/>

## Contributing

Contributions are more than welcome to this project!
