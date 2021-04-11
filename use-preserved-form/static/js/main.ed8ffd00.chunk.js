(this.webpackJsonpexample = this.webpackJsonpexample || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function (e, t, r) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.usePreservedForm = void 0);
      var n = r(12);
      Object.defineProperty(t, 'usePreservedForm', {
        enumerable: !0,
        get: function () {
          return n.usePreservedForm;
        },
      });
    },
    function (e, t, r) {
      e.exports = r(15);
    },
    ,
    ,
    ,
    ,
    function (e, t, r) {},
    function (e, t, r) {},
    function (e, t, r) {
      'use strict';
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, 'default', {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                'default' !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return a(t, e), t;
          };
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.usePreservedForm = void 0);
      var o = u(r(0)),
        l = r(14);
      t.usePreservedForm = function (e, t) {
        var r = null !== t && void 0 !== t ? t : {},
          n = o.default.useRef(null),
          a = o.useCallback(
            function () {
              return function () {
                if (n.current) {
                  var t = n.current();
                  localStorage.setItem(e, JSON.stringify(t));
                }
              };
            },
            [e],
          );
        o.default.useEffect(a, []);
        var u = localStorage.getItem(e);
        u && (r.defaultValues = JSON.parse(u));
        var i = l.useForm(r),
          s = o.useCallback(function (e) {
            a()();
          }, []),
          c = i.control.fieldsRef.current;
        o.useEffect(
          function () {
            for (var e in c) {
              var t = c[e]._f.ref;
              t.addEventListener('blur', s),
                t.addEventListener('input', s),
                t.addEventListener('reset', s);
            }
            return function () {
              for (var e in c) {
                var t = c[e]._f.ref;
                t.removeEventListener('input', s),
                  t.removeEventListener('blur', s),
                  t.removeEventListener('reset', s);
              }
            };
          },
          [c],
        ),
          a()(),
          o.default.useEffect(
            function () {
              n.current = i.getValues;
            },
            [i.getValues],
          );
        var f = i.reset;
        return (
          (i.reset = o.useCallback(
            function (e) {
              f(e), a()();
            },
            [f, a],
          )),
          i
        );
      };
    },
    ,
    ,
    function (e, t, r) {
      'use strict';
      r.r(t);
      var n = r(0),
        a = r.n(n),
        u = r(3),
        o = r.n(u),
        l = (r(10), r(11), r(4)),
        i = function (e) {
          var t = Object(l.usePreservedForm)('mainForm');
          return a.a.createElement(
            'div',
            null,
            a.a.createElement(
              'form',
              {
                onSubmit: t.handleSubmit(function (e) {
                  t.reset({}), console.log(e);
                }),
                onReset: function () {
                  return t.reset({});
                },
              },
              a.a.createElement(
                'div',
                null,
                'Name:',
                a.a.createElement('input', t.register('name')),
              ),
              a.a.createElement(
                'div',
                null,
                'LastName:',
                a.a.createElement('input', t.register('lastName')),
              ),
              a.a.createElement(
                'div',
                null,
                a.a.createElement('input', { type: 'submit', value: 'Submit' }),
                a.a.createElement('input', { type: 'reset', value: 'Reset' }),
              ),
            ),
            a.a.createElement(
              'p',
              null,
              'Fill in the form and click F5 (to simulate browser crash/closing).',
            ),
            a.a.createElement(
              'p',
              null,
              'You will see that the values you entered are preserved.',
            ),
            a.a.createElement(
              'p',
              null,
              'Then you could submit/reset the form and make sure that values are not saved anymore (after F5).',
            ),
          );
        };
      var s = function () {
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
        a.a.createElement(a.a.StrictMode, null, a.a.createElement(s, null)),
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
//# sourceMappingURL=main.ed8ffd00.chunk.js.map
