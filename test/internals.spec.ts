import { test, expect } from "bun:test";

test("dom test", () => {
  document.body.innerHTML = `<button>My button</button>`;
  const button = $("button");
  expect(button?.innerText).toEqual("My button");
});
