!(function (document, arr) {
  /* main function, acts as constructor and factory */
  $ = function (sel, c) {
    return c // true = constructor, false = function
      ? arr.push.apply(
          this,
          sel && sel.nodeType
            ? [sel]
            : "" + sel === sel
            ? c.querySelectorAll(sel)
            : sel
        )
      : /^f/.test(typeof sel)
      ? /c/.test(document.readyState)
        ? sel()
        : $(document).on("DOMContentLoaded", sel)
      : new $(sel, document);
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
