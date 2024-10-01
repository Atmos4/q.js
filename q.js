!(function (document, arr) {
  /* main function, acts as constructor and factory */
  $ = function (sel, root = document, c) {
    return c
      ? arr.push.apply(
          this,
          sel
            ? sel[0]?.nodeType
              ? sel
              : sel.nodeType
              ? [sel]
              : (root[0] ?? root).querySelectorAll(sel)
            : $._?.()
        )
      : /^f/.test(typeof sel)
      ? /c/.test(document.readyState)
        ? sel()
        : $(document).on("DOMContentLoaded", sel)
      : new $(sel, root, 1);
  };

  // set prototype to array to inherit array behavior
  $.prototype = $.fn = arr;

  // add chainables
  Object.assign($.fn, {
    on: function (a, b) {
      return this.each(function (c) {
        c.addEventListener(a, b);
      });
    },
    off: function (a, b) {
      return this.each(function (c) {
        c.removeEventListener(a, b);
      });
    },
    each: function (a, b) {
      arr.forEach.call(this, a, b);
      return this;
    },
  });
})(document, []);
