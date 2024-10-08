/** Extended version of q.js.
 * For now it's the same. I will add functionality until
 * I feel like I can replicate most of jQuery API */
!(function (document, arr) {
  /* main function, acts as constructor and factory */
  q = function (sel, c) {
    return c
      ? arr.push.apply(
          this,
          "" + sel === sel
            ? c.querySelectorAll(sel)
            : sel && sel[0]
            ? sel
            : [sel]
        )
      : /^f/.test(typeof sel)
      ? /c/.test(document.readyState)
        ? sel()
        : q(document).on("DOMContentLoaded", sel)
      : new q(sel, document);
  };

  // set prototype to array to inherit array behavior
  q.prototype = q.fn = arr;

  // add chainables
  Object.assign(q.fn, {
    on(a, b) {
      return this.f(function (c) {
        c.addEventListener(a, b);
      });
    },
    off(a, b) {
      return this.f(function (c) {
        c.removeEventListener(a, b);
      });
    },
    f(a, b) {
      this.forEach(a, b);
      return this;
    },
  });
})(document, []);
