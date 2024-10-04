!(function (document, arr) {
  /* main function, acts as constructor and factory */
  q = function (sel, c) {
    return c
      ? arr.push.apply(
          this,
          "" + sel === sel // string
            ? c.querySelectorAll(sel)
            : sel && sel[0] // array
            ? sel
            : [sel]
        )
      : /nc/.test(typeof sel) // only matches function. better than ^f for gzip
      ? /c/.test(document.readyState) // only matches complete
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
