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
      : /nc/.test(typeof sel)
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
      return this.f((c) => c.addEventListener(a, b));
    },
    off(a, b) {
      return this.f((c) => c.removeEventListener(a, b));
    },
    f(a, b) {
      this.forEach(a, b);
      return this;
    },
  });
})(document, []);
