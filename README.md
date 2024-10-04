# q.js

![](https://img.badgesize.io/Atmos4/q.js/master/dist/q.min.js.svg?label=minified)
![](https://img.badgesize.io/Atmos4/q.js/master/dist/q.min.js.svg?compression=gzip&label=gzip)

`q.js` is a tiny jQuery alternative.

## Usage

Include `q.js` with a script tag in the `head` of your HTML:

```html
<script src="https://cdn.jsdelivr.net/gh/Atmos4/q.js@0.0.1/dist/q.min.js"></script>
```

Then you can use a familiar jQuery API!

### Query selector

```js
q("div");
// any css selector
q("[open]");
q("div:not(.red)");
q("div:first-child");
// element
q(document.body);
// elements
q(document.body.children);
// another q object
q(q("#some-id"));
```

### Array access and methods

```js
q("div")[0]; // First div
q("div").map((e) => e.textContent); //Every div textContent
```

### DOM ready

```js
q(function () {
  // The DOM has loaded
});
```

### Chaining

You can use the `f` method to run a function for every element. It can be chained with other `q.js` methods.

```js
q("div")
  .f((e) => e.addAttribute("aria-label", "Hello"))
  .f((e) => e.classList.toggle("hidden"));
```

### Event listening

```js
function log() {
  console.log("Hello world");
}
q("div").on("click", log); // Turns on the event for all divs
q("div").off("click", log); // Turns off the event for all divs
```

### Build your own plugin

You can add functions to `q.fn`:

```js
q.fn.text = function (t) {
  return this.f((e) => (e.textContent = t));
};
```

Those functions become available to all `q` objects:

```js
q("button").text("Click me");
```

## Browser support

`q.js` uses ES2015 syntax, that every browser supports since 2016.

You can use `q.es5.min.js` for IE9+ support.

## Install locally

To install dependencies:

```bash
bun i
```

To build:

```bash
bun b
```

To serve a very bare-bones test page (for console scripting):

```bash
bun s
```

## Credits and inspiration

`q.js` is named after `querySelectorAll`, it started off as an alias for that method.

The implementation improves on a lot of ideas from [ki.js](https://github.com/dciccale/ki.js/). Go and give him a star!

I wanted to see how small a jQuery API could get. The plan is to build an extended version that covers a lot more functionality and could be used in production.

Contributions are most welcomed, especially in order to save more bytes!
