(this.webpackJsonpexample = this.webpackJsonpexample || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = n(12);
      t.usePreservedForm = r.usePreservedForm;
    },
    function (e, t, n) {
      e.exports = n(15);
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    function (e, t, n) {},
    function (e, t, n) {
      'use strict';
      var r =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, '__esModule', { value: !0 });
      var a = r(n(0)),
        u = n(14);
      t.usePreservedForm = function (e, t) {
        var n = null !== t && void 0 !== t ? t : {},
          r = a.default.useRef(null),
          o = a.useCallback(
            function () {
              return function () {
                if (r.current) {
                  var t = r.current();
                  localStorage.setItem(e, JSON.stringify(t));
                }
              };
            },
            [e],
          );
        a.default.useEffect(o, []);
        var l = localStorage.getItem(e);
        l && (n.defaultValues = JSON.parse(l));
        var i = u.useForm(n),
          c = a.useCallback(function (e) {
            o()();
          }, []),
          s = i.control.fieldsRef.current;
        a.useEffect(
          function () {
            for (var e in s) {
              var t = s[e].ref;
              t.addEventListener('blur', c), t.addEventListener('input', c);
            }
            return function () {
              for (var e in s) {
                var t = s[e].ref;
                t.removeEventListener('input', c),
                  t.removeEventListener('blur', c);
              }
            };
          },
          [s],
        ),
          o()(),
          a.default.useEffect(
            function () {
              r.current = i.getValues;
            },
            [i.getValues],
          );
        var f = i.reset;
        return (
          (i.reset = a.useCallback(
            function (e) {
              f(e), console.log('reset'), o()();
            },
            [f, o],
          )),
          i
        );
      };
    },
    ,
    ,
    function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(0),
        a = n.n(r),
        u = n(3),
        o = n.n(u),
        l = (n(10), n(11), n(4)),
        i = function (e) {
          var t = Object(l.usePreservedForm)('mainForm');
          return a.a.createElement(
            'div',
            null,
            a.a.createElement(
              'form',
              {
                onSubmit: t.handleSubmit(function (e) {
                  t.reset(), console.log(e);
                }),
                onReset: function () {
                  return t.reset();
                },
              },
              a.a.createElement(
                'div',
                null,
                'Name:',
                a.a.createElement('input', { name: 'name', ref: t.register }),
              ),
              a.a.createElement(
                'div',
                null,
                'LastName:',
                a.a.createElement('input', {
                  name: 'lastName',
                  ref: t.register,
                }),
              ),
              a.a.createElement(
                'div',
                null,
                a.a.createElement('input', { type: 'submit', value: 'Submit' }),
                a.a.createElement('input', { type: 'reset', value: 'Reset' }),
              ),
            ),
          );
        };
      var c = function () {
        return a.a.createElement(
          'div',
          { className: 'App' },
          a.a.createElement(i, null),
        );
      };
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
          ),
      );
      o.a.render(
        a.a.createElement(a.a.StrictMode, null, a.a.createElement(c, null)),
        document.getElementById('root'),
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  ],
  [[5, 1, 2]],
]);
//# sourceMappingURL=main.882051ce.chunk.js.map
