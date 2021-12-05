(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './.storybook/preview.js-generated-config-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'parameters',
          function () {
            return parameters;
          }
        );
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptor.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.for-each.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.for-each.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.get-own-property-descriptors.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-properties.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.define-property.js'
        );
      var ClientApi = __webpack_require__(
          './node_modules/@storybook/client-api/dist/esm/ClientApi.js'
        ),
        esm = __webpack_require__(
          './node_modules/@storybook/client-logger/dist/esm/index.js'
        ),
        parameters = { actions: { argTypesRegex: '^on.*' } };
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function (key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value)
            );
          case 'decorators':
            return value.forEach(function (decorator) {
              return Object(ClientApi.d)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function (loader) {
              return Object(ClientApi.e)(loader, !1);
            });
          case 'parameters':
            return Object(ClientApi.f)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function (key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source)
                      )
                    : ownKeys(Object(source)).forEach(function (key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key)
                        );
                      });
                }
                return target;
              })({}, value),
              !1
            );
          case 'argTypesEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.b)(enhancer);
            });
          case 'argsEnhancers':
            return value.forEach(function (enhancer) {
              return Object(ClientApi.c)(enhancer);
            });
          case 'render':
            return Object(ClientApi.g)(value);
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(ClientApi.f)(v, !1);
          case 'decorateStory':
          case 'renderToDOM':
            return null;
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    './generated-stories-entry.js': function (
      module,
      exports,
      __webpack_require__
    ) {
      'use strict';
      (function (module) {
        (0,
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/index.js'
        ).configure)(
          [
            __webpack_require__(
              './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx|js|jsx))$'
            ),
          ],
          module,
          !1
        );
      }.call(
        this,
        __webpack_require__('./node_modules/webpack/buildin/module.js')(module)
      ));
    },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/ui/folder/FolderTreeItemWrapper.css':
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.i,
          ".dnd-sortable-tree_folder_wrapper {\n  list-style: none;\n  box-sizing: border-box;\n  margin-bottom: -1px;\n  display: flex;\n  flex-direction: row;\n}\n\n.dnd-sortable-tree_folder_tree-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 7px 0;\n  box-sizing: border-box;\n}\n\n.dnd-sortable-tree_folder_clone {\n  display: inline-block;\n  pointer-events: none;\n  padding: 5px;\n}\n\n.dnd-sortable-tree_folder_clone > .dnd-sortable-tree_folder_tree-item {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-right: 24px;\n  border-radius: 4px;\n}\n\n.dnd-sortable-tree_folder_ghost {\n  opacity: 0.5;\n}\n\n.dnd-sortable-tree_folder_disable-selection {\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n.dnd-sortable-tree_folder_disable-interaction {\n  pointer-events: none;\n}\n\n.dnd-sortable-tree_folder_line {\n  width: 20px;\n  align-self: stretch;\n  background: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><line stroke='black' style='stroke-width: 1px;' x1='50%' y1='0' x2='50%' y2='100%'/></svg>\");\n}\n\n.dnd-sortable-tree_folder_line-last {\n  width: 20px;\n  align-self: stretch;\n}\n\n.dnd-sortable-tree_folder_line-to_self {\n  width: 20px;\n  align-self: stretch;\n  background: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><line stroke='black' style='stroke-width: 1px;' x1='50%' y1='0' x2='50%' y2='100%'/><line stroke='black' style='stroke-width: 1px;' x1='50%' y1='50%' x2='100%' y2='50%'/></svg>\");\n}\n\n.dnd-sortable-tree_folder_line-to_self-last {\n  width: 20px;\n  align-self: stretch;\n  background: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><line stroke='black' style='stroke-width: 1px;' x1='50%' y1='0' x2='50%' y2='50%'/><line stroke='black' style='stroke-width: 1px;' x1='50%' y1='50%' x2='100%' y2='50%'/></svg>\");\n}\n\n.dnd-sortable-tree_folder_tree-item-collapse_button {\n  border: 0;\n  width: 20px;\n  align-self: stretch;\n  transition: transform 250ms ease;\n  background: url(\"data:image/svg+xml;utf8,<svg width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 41'><path d='M30.76 39.2402C31.885 40.3638 33.41 40.995 35 40.995C36.59 40.995 38.115 40.3638 39.24 39.2402L68.24 10.2402C69.2998 9.10284 69.8768 7.59846 69.8494 6.04406C69.822 4.48965 69.1923 3.00657 68.093 1.90726C66.9937 0.807959 65.5106 0.178263 63.9562 0.150837C62.4018 0.123411 60.8974 0.700397 59.76 1.76024L35 26.5102L10.24 1.76024C9.10259 0.700397 7.59822 0.123411 6.04381 0.150837C4.4894 0.178263 3.00632 0.807959 1.90702 1.90726C0.807714 3.00657 0.178019 4.48965 0.150593 6.04406C0.123167 7.59846 0.700153 9.10284 1.75999 10.2402L30.76 39.2402Z' /></svg>\")\n    no-repeat center;\n}\n\n.dnd-sortable-tree_folder_tree-item-collapse_button-collapsed {\n  transform: rotate(-90deg);\n}\n.dnd-sortable-tree_folder_handle {\n  width: 20px;\n  align-self: stretch;\n  cursor: pointer;\n  background: url(\"data:image/svg+xml;utf8,<svg  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='12'><path d='M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z'></path></svg>\")\n    no-repeat center;\n}\n",
          '',
        ]),
          (module.exports = exports);
      },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/ui/simple/SimpleTreeItemWrapper.css':
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.i,
          ".dnd-sortable-tree_simple_wrapper {\n  list-style: none;\n  box-sizing: border-box;\n  margin-bottom: -1px;\n}\n\n.dnd-sortable-tree_simple_tree-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding: 10px 10px;\n  border: 1px solid #dedede;\n  color: #222;\n  box-sizing: border-box;\n}\n\n.dnd-sortable-tree_simple_clone {\n  display: inline-block;\n  pointer-events: none;\n  padding: 5px;\n}\n\n.dnd-sortable-tree_simple_clone > .dnd-sortable-tree_simple_tree-item {\n  padding-top: 5px;\n  padding-bottom: 5px;\n\n  padding-right: 24px;\n  border-radius: 4px;\n  box-shadow: 0 15px 15px 0 rgba(34, 33, 81, 0.1);\n}\n\n.dnd-sortable-tree_simple_ghost {\n  opacity: 0.5;\n}\n\n.dnd-sortable-tree_simple_disable-selection {\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n.dnd-sortable-tree_simple_disable-interaction {\n  pointer-events: none;\n}\n\n.dnd-sortable-tree_folder_tree-item-collapse_button {\n  border: 0;\n  width: 20px;\n  align-self: stretch;\n  transition: transform 250ms ease;\n  background: url(\"data:image/svg+xml;utf8,<svg width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 70 41'><path d='M30.76 39.2402C31.885 40.3638 33.41 40.995 35 40.995C36.59 40.995 38.115 40.3638 39.24 39.2402L68.24 10.2402C69.2998 9.10284 69.8768 7.59846 69.8494 6.04406C69.822 4.48965 69.1923 3.00657 68.093 1.90726C66.9937 0.807959 65.5106 0.178263 63.9562 0.150837C62.4018 0.123411 60.8974 0.700397 59.76 1.76024L35 26.5102L10.24 1.76024C9.10259 0.700397 7.59822 0.123411 6.04381 0.150837C4.4894 0.178263 3.00632 0.807959 1.90702 1.90726C0.807714 3.00657 0.178019 4.48965 0.150593 6.04406C0.123167 7.59846 0.700153 9.10284 1.75999 10.2402L30.76 39.2402Z' /></svg>\")\n    no-repeat center;\n}\n\n.dnd-sortable-tree_folder_tree-item-collapse_button-collapsed {\n  transform: rotate(-90deg);\n}\n.dnd-sortable-tree_simple_handle {\n  width: 20px;\n  align-self: stretch;\n  cursor: pointer;\n  background: url(\"data:image/svg+xml;utf8,<svg  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' width='12'><path d='M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z'></path></svg>\")\n    no-repeat center;\n}\n",
          '',
        ]),
          (module.exports = exports);
      },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./stories/components/folder/FolderTreeItem.module.scss':
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.i,
          '.FolderTreeItem-module__Text--efhY0{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.FolderTreeItem-module__Count--RWOnw{position:absolute;top:-10px;right:-10px;display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background-color:#2389ff;font-size:.8rem;font-weight:600;color:#fff}',
          '',
        ]),
          (exports.locals = {
            Text: 'FolderTreeItem-module__Text--efhY0',
            Count: 'FolderTreeItem-module__Count--RWOnw',
          }),
          (module.exports = exports);
      },
    './node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./stories/components/tree/TreeItem.module.scss':
      function (module, exports, __webpack_require__) {
        (exports = __webpack_require__(
          './node_modules/css-loader/dist/runtime/api.js'
        )(!1)).push([
          module.i,
          '.TreeItem-module__Text--wQMqg{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.TreeItem-module__Count--1tJUD{position:absolute;top:-10px;right:-10px;display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background-color:#2389ff;font-size:.8rem;font-weight:600;color:#fff}',
          '',
        ]),
          (exports.locals = {
            Text: 'TreeItem-module__Text--wQMqg',
            Count: 'TreeItem-module__Count--1tJUD',
          }),
          (module.exports = exports);
      },
    './src/index.ts': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'c', function () {
        return SortableTree;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function () {
          return SimpleTreeItemWrapper_SimpleTreeItemWrapper;
        }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return FolderTreeItemWrapper_FolderTreeItemWrapper;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.index-of.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.assign.js'
        );
      var clsx_m = __webpack_require__('./node_modules/clsx/dist/clsx.m.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        jsx_runtime =
          (__webpack_require__('./src/ui/simple/SimpleTreeItemWrapper.css'),
          __webpack_require__('./node_modules/react/jsx-runtime.js')),
        _excluded = [
          'clone',
          'depth',
          'disableSelection',
          'disableInteraction',
          'ghost',
          'handleProps',
          'indentationWidth',
          'indicator',
          'collapsed',
          'onCollapse',
          'onRemove',
          'item',
          'wrapperRef',
          'style',
        ];
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var SimpleTreeItemWrapper_SimpleTreeItemWrapper = Object(
        react.forwardRef
      )(function (props, ref) {
        var clone = props.clone,
          depth = props.depth,
          disableSelection = props.disableSelection,
          disableInteraction = props.disableInteraction,
          ghost = props.ghost,
          handleProps = props.handleProps,
          indentationWidth = props.indentationWidth,
          collapsed = (props.indicator, props.collapsed),
          onCollapse = props.onCollapse,
          wrapperRef = (props.onRemove, props.item, props.wrapperRef),
          style = props.style,
          rest = _objectWithoutProperties(props, _excluded);
        return Object(jsx_runtime.jsxs)(
          'li',
          Object.assign(
            {
              className: Object(clsx_m.a)(
                'dnd-sortable-tree_simple_wrapper',
                clone && 'dnd-sortable-tree_simple_clone',
                ghost && 'dnd-sortable-tree_simple_ghost',
                disableSelection &&
                  'dnd-sortable-tree_simple_disable-selection',
                disableInteraction &&
                  'dnd-sortable-tree_simple_disable-interaction'
              ),
              ref: wrapperRef,
            },
            rest,
            {
              style: Object.assign({}, style, {
                paddingLeft: clone
                  ? indentationWidth
                  : indentationWidth * depth,
              }),
              children: [
                props.manualDrag &&
                  props.showDragHandle &&
                  Object(jsx_runtime.jsx)(
                    'div',
                    Object.assign(
                      { className: 'dnd-sortable-tree_simple_handle' },
                      handleProps
                    )
                  ),
                !props.manualDrag &&
                  !props.hideCollapseButton &&
                  onCollapse &&
                  Object(jsx_runtime.jsx)('button', {
                    onClick: function onClick(e) {
                      e.preventDefault(), null == onCollapse || onCollapse();
                    },
                    className: Object(clsx_m.a)(
                      'dnd-sortable-tree_simple_tree-item-collapse_button',
                      collapsed &&
                        'dnd-sortable-tree_folder_simple-item-collapse_button-collapsed'
                    ),
                  }),
                Object(jsx_runtime.jsxs)(
                  'div',
                  Object.assign(
                    {
                      className: 'dnd-sortable-tree_simple_tree-item',
                      ref: ref,
                    },
                    props.manualDrag ? void 0 : handleProps,
                    {
                      onClick: props.disableCollapseOnItemClick
                        ? void 0
                        : props.onCollapse,
                      children: [
                        Object(jsx_runtime.jsx)(
                          'div',
                          Object.assign(
                            { className: 'dnd-sortable-tree_simple_handle' },
                            handleProps
                          )
                        ),
                        props.children,
                      ],
                    }
                  )
                ),
              ],
            }
          )
        );
      });
      try {
        (SimpleTreeItemWrapper_SimpleTreeItemWrapper.displayName =
          'SimpleTreeItemWrapper'),
          (SimpleTreeItemWrapper_SimpleTreeItemWrapper.__docgenInfo = {
            description: '',
            displayName: 'SimpleTreeItemWrapper',
            props: {
              item: {
                defaultValue: null,
                description: '',
                name: 'item',
                required: !0,
                type: {
                  name: '{ children?: ...[] | undefined; id: string; collapsed?: boolean | undefined; canHaveChildren?: boolean | undefined; }',
                },
              },
              parent: {
                defaultValue: null,
                description: '',
                name: 'parent',
                required: !0,
                type: { name: 'FlattenedItem<{}> | null' },
              },
              childCount: {
                defaultValue: null,
                description: '',
                name: 'childCount',
                required: !1,
                type: { name: 'number' },
              },
              clone: {
                defaultValue: null,
                description: '',
                name: 'clone',
                required: !1,
                type: { name: 'boolean' },
              },
              ghost: {
                defaultValue: null,
                description: '',
                name: 'ghost',
                required: !1,
                type: { name: 'boolean' },
              },
              collapsed: {
                defaultValue: null,
                description: '',
                name: 'collapsed',
                required: !1,
                type: { name: 'boolean' },
              },
              depth: {
                defaultValue: null,
                description: '',
                name: 'depth',
                required: !0,
                type: { name: 'number' },
              },
              disableInteraction: {
                defaultValue: null,
                description: '',
                name: 'disableInteraction',
                required: !1,
                type: { name: 'boolean' },
              },
              disableSelection: {
                defaultValue: null,
                description: '',
                name: 'disableSelection',
                required: !1,
                type: { name: 'boolean' },
              },
              isLast: {
                defaultValue: null,
                description: '',
                name: 'isLast',
                required: !0,
                type: { name: 'boolean' },
              },
              manualDrag: {
                defaultValue: null,
                description: '',
                name: 'manualDrag',
                required: !1,
                type: { name: 'boolean' },
              },
              hideCollapseButton: {
                defaultValue: null,
                description: '',
                name: 'hideCollapseButton',
                required: !1,
                type: { name: 'boolean' },
              },
              disableCollapseOnItemClick: {
                defaultValue: null,
                description: '',
                name: 'disableCollapseOnItemClick',
                required: !1,
                type: { name: 'boolean' },
              },
              showDragHandle: {
                defaultValue: null,
                description: '',
                name: 'showDragHandle',
                required: !1,
                type: { name: 'boolean' },
              },
              handleProps: {
                defaultValue: null,
                description: '',
                name: 'handleProps',
                required: !1,
                type: { name: 'any' },
              },
              indicator: {
                defaultValue: null,
                description: '',
                name: 'indicator',
                required: !1,
                type: { name: 'boolean' },
              },
              indentationWidth: {
                defaultValue: null,
                description: '',
                name: 'indentationWidth',
                required: !0,
                type: { name: 'number' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              onCollapse: {
                defaultValue: null,
                description: '',
                name: 'onCollapse',
                required: !1,
                type: { name: '(() => void)' },
              },
              onRemove: {
                defaultValue: null,
                description: '',
                name: 'onRemove',
                required: !1,
                type: { name: '(() => void)' },
              },
              wrapperRef: {
                defaultValue: null,
                description: '',
                name: 'wrapperRef',
                required: !1,
                type: { name: '((node: HTMLLIElement) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/ui/simple/SimpleTreeItemWrapper.tsx#SimpleTreeItemWrapper'
            ] = {
              docgenInfo:
                SimpleTreeItemWrapper_SimpleTreeItemWrapper.__docgenInfo,
              name: 'SimpleTreeItemWrapper',
              path: 'src/ui/simple/SimpleTreeItemWrapper.tsx#SimpleTreeItemWrapper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__(
        './node_modules/core-js/modules/es.array.is-array.js'
      ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.concat.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('./src/ui/folder/FolderTreeItemWrapper.css');
      var FolderTreeItemWrapper_excluded = [
        'clone',
        'depth',
        'disableSelection',
        'disableInteraction',
        'ghost',
        'handleProps',
        'indentationWidth',
        'indicator',
        'collapsed',
        'onCollapse',
        'onRemove',
        'item',
        'wrapperRef',
        'style',
        'isLast',
        'parent',
      ];
      function FolderTreeItemWrapper_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function FolderTreeItemWrapper_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter);
          })(arr) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function flattenParents(parent) {
        return parent
          ? [].concat(_toConsumableArray(flattenParents(parent.parent)), [
              parent,
            ])
          : [];
      }
      var FolderTreeItemWrapper_FolderTreeItemWrapper = Object(
        react.forwardRef
      )(function (props, ref) {
        var clone = props.clone,
          disableSelection = (props.depth, props.disableSelection),
          disableInteraction = props.disableInteraction,
          ghost = props.ghost,
          handleProps = props.handleProps,
          collapsed =
            (props.indentationWidth, props.indicator, props.collapsed),
          onCollapse = props.onCollapse,
          wrapperRef = (props.onRemove, props.item, props.wrapperRef),
          style = props.style,
          isLast = props.isLast,
          parent = props.parent,
          rest = FolderTreeItemWrapper_objectWithoutProperties(
            props,
            FolderTreeItemWrapper_excluded
          ),
          flattenedParents = flattenParents(parent);
        return Object(jsx_runtime.jsxs)(
          'li',
          Object.assign(
            {
              className: Object(clsx_m.a)(
                'dnd-sortable-tree_folder_wrapper',
                clone && 'dnd-sortable-tree_folder_clone',
                ghost && 'dnd-sortable-tree_folder_ghost',
                disableSelection &&
                  'dnd-sortable-tree_folder_disable-selection',
                disableInteraction &&
                  'dnd-sortable-tree_folder_disable-interaction'
              ),
              ref: wrapperRef,
            },
            rest,
            {
              style: style,
              children: [
                flattenedParents.map(function (item) {
                  return Object(jsx_runtime.jsx)('div', {
                    className: item.isLast
                      ? 'dnd-sortable-tree_folder_line-last'
                      : 'dnd-sortable-tree_folder_line',
                  });
                }),
                Object(jsx_runtime.jsx)('div', {
                  className: isLast
                    ? 'dnd-sortable-tree_folder_line-to_self-last'
                    : 'dnd-sortable-tree_folder_line-to_self',
                }),
                props.manualDrag &&
                  props.showDragHandle &&
                  Object(jsx_runtime.jsx)(
                    'div',
                    Object.assign(
                      { className: 'dnd-sortable-tree_folder_handle' },
                      handleProps
                    )
                  ),
                !props.manualDrag &&
                  !props.hideCollapseButton &&
                  onCollapse &&
                  Object(jsx_runtime.jsx)('button', {
                    onClick: function onClick(e) {
                      e.preventDefault(), null == onCollapse || onCollapse();
                    },
                    className: Object(clsx_m.a)(
                      'dnd-sortable-tree_folder_tree-item-collapse_button',
                      collapsed &&
                        'dnd-sortable-tree_folder_tree-item-collapse_button-collapsed'
                    ),
                  }),
                Object(jsx_runtime.jsx)(
                  'div',
                  Object.assign(
                    {
                      className: 'dnd-sortable-tree_folder_tree-item',
                      ref: ref,
                    },
                    props.manualDrag ? void 0 : handleProps,
                    {
                      onClick: props.disableCollapseOnItemClick
                        ? void 0
                        : props.onCollapse,
                      children: props.children,
                    }
                  )
                ),
              ],
            }
          )
        );
      });
      try {
        (FolderTreeItemWrapper_FolderTreeItemWrapper.displayName =
          'FolderTreeItemWrapper'),
          (FolderTreeItemWrapper_FolderTreeItemWrapper.__docgenInfo = {
            description: '',
            displayName: 'FolderTreeItemWrapper',
            props: {
              item: {
                defaultValue: null,
                description: '',
                name: 'item',
                required: !0,
                type: {
                  name: '{ children?: ...[] | undefined; id: string; collapsed?: boolean | undefined; canHaveChildren?: boolean | undefined; }',
                },
              },
              parent: {
                defaultValue: null,
                description: '',
                name: 'parent',
                required: !0,
                type: { name: 'FlattenedItem<{}> | null' },
              },
              childCount: {
                defaultValue: null,
                description: '',
                name: 'childCount',
                required: !1,
                type: { name: 'number' },
              },
              clone: {
                defaultValue: null,
                description: '',
                name: 'clone',
                required: !1,
                type: { name: 'boolean' },
              },
              ghost: {
                defaultValue: null,
                description: '',
                name: 'ghost',
                required: !1,
                type: { name: 'boolean' },
              },
              collapsed: {
                defaultValue: null,
                description: '',
                name: 'collapsed',
                required: !1,
                type: { name: 'boolean' },
              },
              depth: {
                defaultValue: null,
                description: '',
                name: 'depth',
                required: !0,
                type: { name: 'number' },
              },
              disableInteraction: {
                defaultValue: null,
                description: '',
                name: 'disableInteraction',
                required: !1,
                type: { name: 'boolean' },
              },
              disableSelection: {
                defaultValue: null,
                description: '',
                name: 'disableSelection',
                required: !1,
                type: { name: 'boolean' },
              },
              isLast: {
                defaultValue: null,
                description: '',
                name: 'isLast',
                required: !0,
                type: { name: 'boolean' },
              },
              manualDrag: {
                defaultValue: null,
                description: '',
                name: 'manualDrag',
                required: !1,
                type: { name: 'boolean' },
              },
              hideCollapseButton: {
                defaultValue: null,
                description: '',
                name: 'hideCollapseButton',
                required: !1,
                type: { name: 'boolean' },
              },
              disableCollapseOnItemClick: {
                defaultValue: null,
                description: '',
                name: 'disableCollapseOnItemClick',
                required: !1,
                type: { name: 'boolean' },
              },
              showDragHandle: {
                defaultValue: null,
                description: '',
                name: 'showDragHandle',
                required: !1,
                type: { name: 'boolean' },
              },
              handleProps: {
                defaultValue: null,
                description: '',
                name: 'handleProps',
                required: !1,
                type: { name: 'any' },
              },
              indicator: {
                defaultValue: null,
                description: '',
                name: 'indicator',
                required: !1,
                type: { name: 'boolean' },
              },
              indentationWidth: {
                defaultValue: null,
                description: '',
                name: 'indentationWidth',
                required: !0,
                type: { name: 'number' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              onCollapse: {
                defaultValue: null,
                description: '',
                name: 'onCollapse',
                required: !1,
                type: { name: '(() => void)' },
              },
              onRemove: {
                defaultValue: null,
                description: '',
                name: 'onRemove',
                required: !1,
                type: { name: '(() => void)' },
              },
              wrapperRef: {
                defaultValue: null,
                description: '',
                name: 'wrapperRef',
                required: !1,
                type: { name: '((node: HTMLLIElement) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/ui/folder/FolderTreeItemWrapper.tsx#FolderTreeItemWrapper'
            ] = {
              docgenInfo:
                FolderTreeItemWrapper_FolderTreeItemWrapper.__docgenInfo,
              name: 'FolderTreeItemWrapper',
              path: 'src/ui/folder/FolderTreeItemWrapper.tsx#FolderTreeItemWrapper',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__('./node_modules/core-js/modules/es.array.reduce.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.find.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.find-index.js'
        );
      var react_dom = __webpack_require__('./node_modules/react-dom/index.js'),
        core_esm = __webpack_require__(
          './node_modules/@dnd-kit/core/dist/core.esm.js'
        ),
        sortable_esm = __webpack_require__(
          './node_modules/@dnd-kit/sortable/dist/sortable.esm.js'
        );
      __webpack_require__('./node_modules/core-js/modules/es.array.reverse.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.filter.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.includes.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.includes.js'
        );
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it =
          ('undefined' != typeof Symbol && o[Symbol.iterator]) ||
          o['@@iterator'];
        if (!it) {
          if (
            Array.isArray(o) ||
            (it = utilities_unsupportedIterableToArray(o)) ||
            (allowArrayLike && o && 'number' == typeof o.length)
          ) {
            it && (o = it);
            var i = 0,
              F = function F() {};
            return {
              s: F,
              n: function n() {
                return i >= o.length
                  ? { done: !0 }
                  : { done: !1, value: o[i++] };
              },
              e: function e(_e) {
                throw _e;
              },
              f: F,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var err,
          normalCompletion = !0,
          didErr = !1;
        return {
          s: function s() {
            it = it.call(o);
          },
          n: function n() {
            var step = it.next();
            return (normalCompletion = step.done), step;
          },
          e: function e(_e2) {
            (didErr = !0), (err = _e2);
          },
          f: function f() {
            try {
              normalCompletion || null == it.return || it.return();
            } finally {
              if (didErr) throw err;
            }
          },
        };
      }
      function utilities_toConsumableArray(arr) {
        return (
          (function utilities_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return utilities_arrayLikeToArray(arr);
          })(arr) ||
          (function utilities_iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter);
          })(arr) ||
          utilities_unsupportedIterableToArray(arr) ||
          (function utilities_nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function utilities_unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o)
            return utilities_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? utilities_arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function utilities_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var iOS = /iPad|iPhone|iPod/.test(navigator.platform);
      var _revertLastChanges = function _revertLastChanges() {};
      function getProjection(
        items,
        activeId,
        overId,
        dragOffset,
        indentationWidth
      ) {
        var _nextItem$depth;
        if (
          (_revertLastChanges(),
          (_revertLastChanges = function _revertLastChanges() {}),
          !activeId || !overId)
        )
          return null;
        var overItemIndex = items.findIndex(function (_ref) {
            return _ref.id === overId;
          }),
          activeItemIndex = items.findIndex(function (_ref2) {
            return _ref2.id === activeId;
          }),
          activeItem = items[activeItemIndex],
          newItems = Object(sortable_esm.b)(
            items,
            activeItemIndex,
            overItemIndex
          ),
          previousItem = newItems[overItemIndex - 1],
          nextItem = newItems[overItemIndex + 1],
          dragDepth = (function getDragDepth(offset, indentationWidth) {
            return Math.round(offset / indentationWidth);
          })(dragOffset, indentationWidth),
          projectedDepth = activeItem.depth + dragDepth,
          maxDepth = (function getMaxDepth(_ref3) {
            var previousItem = _ref3.previousItem;
            if (previousItem)
              return !1 === previousItem.canHaveChildren
                ? previousItem.depth
                : previousItem.depth + 1;
            return 0;
          })({ previousItem: previousItem }),
          minDepth = (function getMinDepth(_ref4) {
            var nextItem = _ref4.nextItem;
            if (nextItem) return nextItem.depth;
            return 0;
          })({ nextItem: nextItem }),
          depth = projectedDepth;
        projectedDepth >= maxDepth
          ? (depth = maxDepth)
          : projectedDepth < minDepth && (depth = minDepth);
        for (
          var parent = previousItem,
            previousItemOnDepth = null,
            currentDepth = previousItem ? previousItem.depth + 1 : 0,
            isLast =
              (null !==
                (_nextItem$depth =
                  null == nextItem ? void 0 : nextItem.depth) &&
              void 0 !== _nextItem$depth
                ? _nextItem$depth
                : -1) < depth;
          depth !== currentDepth;

        ) {
          var _parent$parent, _parent;
          currentDepth--,
            (previousItemOnDepth = parent),
            (parent =
              null !==
                (_parent$parent =
                  null === (_parent = parent) || void 0 === _parent
                    ? void 0
                    : _parent.parent) && void 0 !== _parent$parent
                ? _parent$parent
                : null);
        }
        return (
          previousItemOnDepth &&
            previousItemOnDepth.isLast &&
            ((_revertLastChanges = function _revertLastChanges() {
              previousItemOnDepth.isLast = !0;
            }),
            (previousItemOnDepth.isLast = !1)),
          {
            depth: depth,
            maxDepth: maxDepth,
            minDepth: minDepth,
            parentId: (function getParentId() {
              var _newItems$slice$rever;
              if (0 === depth || !previousItem) return null;
              if (depth === previousItem.depth) return previousItem.parentId;
              if (depth > previousItem.depth) return previousItem.id;
              var newParent =
                null ===
                  (_newItems$slice$rever = newItems
                    .slice(0, overItemIndex)
                    .reverse()
                    .find(function (item) {
                      return item.depth === depth;
                    })) || void 0 === _newItems$slice$rever
                  ? void 0
                  : _newItems$slice$rever.parentId;
              return null != newParent ? newParent : null;
            })(),
            parent: parent,
            isLast: isLast,
          }
        );
      }
      function flatten(items) {
        var parentId =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          depth =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          parent =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null;
        return items.reduce(function (acc, item, index) {
          var _item$children,
            flattenedItem = Object.assign({}, item, {
              parentId: parentId,
              depth: depth,
              index: index,
              isLast: items.length === index + 1,
              parent: parent,
            });
          return [].concat(
            utilities_toConsumableArray(acc),
            [flattenedItem],
            utilities_toConsumableArray(
              flatten(
                null !== (_item$children = item.children) &&
                  void 0 !== _item$children
                  ? _item$children
                  : [],
                item.id,
                depth + 1,
                flattenedItem
              )
            )
          );
        }, []);
      }
      function flattenTree(items) {
        return flatten(items);
      }
      function findItem(items, itemId) {
        return items.find(function (_ref5) {
          return _ref5.id === itemId;
        });
      }
      function findItemDeep(items, itemId) {
        var _step2,
          _iterator2 = _createForOfIteratorHelper(items);
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var item = _step2.value,
              id = item.id,
              children = item.children;
            if (id === itemId) return item;
            if (null != children && children.length) {
              var child = findItemDeep(children, itemId);
              if (child) return child;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      function removeItem(items, id) {
        var _step3,
          newItems = [],
          _iterator3 = _createForOfIteratorHelper(items);
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var _item$children2,
              item = _step3.value;
            item.id !== id &&
              (null !== (_item$children2 = item.children) &&
                void 0 !== _item$children2 &&
                _item$children2.length &&
                (item.children = removeItem(item.children, id)),
              newItems.push(item));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return newItems;
      }
      function setProperty(items, id, property, setter) {
        var _step4,
          _iterator4 = _createForOfIteratorHelper(items);
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            var _item$children3,
              item = _step4.value;
            item.id !== id
              ? null !== (_item$children3 = item.children) &&
                void 0 !== _item$children3 &&
                _item$children3.length &&
                (item.children = setProperty(
                  item.children,
                  id,
                  property,
                  setter
                ))
              : (item[property] = setter(item[property]));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return utilities_toConsumableArray(items);
      }
      function countChildren(items) {
        var count =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return items.reduce(function (acc, _ref6) {
          var children = _ref6.children;
          return null != children && children.length
            ? countChildren(children, acc + 1)
            : acc + 1;
        }, count);
      }
      function getChildCount(items, id) {
        var _item$children4;
        if (!id) return 0;
        var item = findItemDeep(items, id);
        return item
          ? countChildren(
              null !== (_item$children4 = item.children) &&
                void 0 !== _item$children4
                ? _item$children4
                : []
            )
          : 0;
      }
      __webpack_require__(
        './node_modules/core-js/modules/es.regexp.to-string.js'
      ),
        __webpack_require__(
          './node_modules/core-js/modules/es.date.to-string.js'
        );
      var utilities_esm = __webpack_require__(
          './node_modules/@dnd-kit/utilities/dist/utilities.esm.js'
        ),
        SortableTreeItem_excluded = [
          'id',
          'depth',
          'isLast',
          'TreeItemComponent',
          'parent',
          'disableSorting',
        ];
      function SortableTreeItem_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function SortableTreeItem_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var animateLayoutChanges = function animateLayoutChanges(_ref) {
        var isSorting = _ref.isSorting,
          isDragging = _ref.isDragging;
        return !isSorting && !isDragging;
      };
      function SortableTreeItem(_ref2) {
        var id = _ref2.id,
          depth = _ref2.depth,
          isLast = _ref2.isLast,
          TreeItemComponent = _ref2.TreeItemComponent,
          parent = _ref2.parent,
          disableSorting = _ref2.disableSorting,
          props = SortableTreeItem_objectWithoutProperties(
            _ref2,
            SortableTreeItem_excluded
          ),
          _useSortable = Object(sortable_esm.c)({
            id: id,
            animateLayoutChanges: animateLayoutChanges,
            disabled: disableSorting,
          }),
          attributes = _useSortable.attributes,
          isDragging = _useSortable.isDragging,
          isSorting = _useSortable.isSorting,
          listeners = _useSortable.listeners,
          setDraggableNodeRef = _useSortable.setDraggableNodeRef,
          setDroppableNodeRef = _useSortable.setDroppableNodeRef,
          transform = _useSortable.transform,
          transition = _useSortable.transition,
          style = {
            transform: utilities_esm.a.Translate.toString(transform),
            transition: null != transition ? transition : void 0,
          };
        return Object(jsx_runtime.jsx)(
          TreeItemComponent,
          Object.assign({}, props, {
            ref: setDraggableNodeRef,
            wrapperRef: setDroppableNodeRef,
            style: style,
            depth: depth,
            ghost: isDragging,
            disableSelection: iOS,
            disableInteraction: isSorting,
            isLast: isLast,
            parent: parent,
            handleProps: Object.assign({}, attributes, listeners),
          })
        );
      }
      SortableTreeItem.displayName = 'SortableTreeItem';
      try {
        (SortableTreeItem.displayName = 'SortableTreeItem'),
          (SortableTreeItem.__docgenInfo = {
            description: '',
            displayName: 'SortableTreeItem',
            props: {
              childCount: {
                defaultValue: null,
                description: '',
                name: 'childCount',
                required: !1,
                type: { name: 'number' },
              },
              clone: {
                defaultValue: null,
                description: '',
                name: 'clone',
                required: !1,
                type: { name: 'boolean' },
              },
              collapsed: {
                defaultValue: null,
                description: '',
                name: 'collapsed',
                required: !1,
                type: { name: 'boolean' },
              },
              depth: {
                defaultValue: null,
                description: '',
                name: 'depth',
                required: !0,
                type: { name: 'number' },
              },
              disableInteraction: {
                defaultValue: null,
                description: '',
                name: 'disableInteraction',
                required: !1,
                type: { name: 'boolean' },
              },
              disableSelection: {
                defaultValue: null,
                description: '',
                name: 'disableSelection',
                required: !1,
                type: { name: 'boolean' },
              },
              ghost: {
                defaultValue: null,
                description: '',
                name: 'ghost',
                required: !1,
                type: { name: 'boolean' },
              },
              handleProps: {
                defaultValue: null,
                description: '',
                name: 'handleProps',
                required: !1,
                type: { name: 'any' },
              },
              indicator: {
                defaultValue: null,
                description: '',
                name: 'indicator',
                required: !1,
                type: { name: 'boolean' },
              },
              indentationWidth: {
                defaultValue: null,
                description: '',
                name: 'indentationWidth',
                required: !0,
                type: { name: 'number' },
              },
              item: {
                defaultValue: null,
                description: '',
                name: 'item',
                required: !0,
                type: {
                  name: '{ children?: TreeItem<T>[] | undefined; id: string; collapsed?: boolean | undefined; canHaveChildren?: boolean | undefined; }',
                },
              },
              isLast: {
                defaultValue: null,
                description: '',
                name: 'isLast',
                required: !0,
                type: { name: 'boolean' },
              },
              parent: {
                defaultValue: null,
                description: '',
                name: 'parent',
                required: !0,
                type: {
                  name: '({ parentId: string | null; depth: number; index: number; isLast: boolean; parent: FlattenedItem<T> | null; } & { children?: TreeItem<T>[] | undefined; id: string; collapsed?: boolean | undefined; canHaveChildren?: boolean | undefined; }) | null',
                },
              },
              onCollapse: {
                defaultValue: null,
                description: '',
                name: 'onCollapse',
                required: !1,
                type: { name: '(() => void)' },
              },
              onRemove: {
                defaultValue: null,
                description: '',
                name: 'onRemove',
                required: !1,
                type: { name: '(() => void)' },
              },
              wrapperRef: {
                defaultValue: null,
                description: '',
                name: 'wrapperRef',
                required: !1,
                type: { name: '((node: HTMLLIElement) => void)' },
              },
              TreeItemComponent: {
                defaultValue: null,
                description: '',
                name: 'TreeItemComponent',
                required: !0,
                type: { name: 'TreeItemComponentType<T, TElement>' },
              },
              disableSorting: {
                defaultValue: null,
                description: '',
                name: 'disableSorting',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'src/SortableTreeItem.tsx#SortableTreeItem'
            ] = {
              docgenInfo: SortableTreeItem.__docgenInfo,
              name: 'SortableTreeItem',
              path: 'src/SortableTreeItem.tsx#SortableTreeItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var SortableTree_excluded = [
        'items',
        'indicator',
        'indentationWidth',
        'onItemsChanged',
        'TreeItemComponent',
        'pointerSensorOptions',
        'disableSorting',
      ];
      function SortableTree_toConsumableArray(arr) {
        return (
          (function SortableTree_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return SortableTree_arrayLikeToArray(arr);
          })(arr) ||
          (function SortableTree_iterableToArray(iter) {
            if (
              ('undefined' != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter['@@iterator']
            )
              return Array.from(iter);
          })(arr) ||
          SortableTree_unsupportedIterableToArray(arr) ||
          (function SortableTree_nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          SortableTree_unsupportedIterableToArray(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function SortableTree_unsupportedIterableToArray(o, minLen) {
        if (o) {
          if ('string' == typeof o)
            return SortableTree_arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          return (
            'Object' === n && o.constructor && (n = o.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(o)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? SortableTree_arrayLikeToArray(o, minLen)
              : void 0
          );
        }
      }
      function SortableTree_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      function SortableTree_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function SortableTree_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var dropAnimation = Object.assign({}, core_esm.g, {
          dragSourceOpacity: 0.5,
        }),
        defaultPointerSensorOptions = {
          activationConstraint: { delay: 100, tolerance: 5 },
        };
      function SortableTree(_ref) {
        var items = _ref.items,
          indicator = _ref.indicator,
          _ref$indentationWidth = _ref.indentationWidth,
          indentationWidth =
            void 0 === _ref$indentationWidth ? 20 : _ref$indentationWidth,
          onItemsChanged = _ref.onItemsChanged,
          TreeItemComponent = _ref.TreeItemComponent,
          pointerSensorOptions = _ref.pointerSensorOptions,
          disableSorting = _ref.disableSorting,
          rest = SortableTree_objectWithoutProperties(
            _ref,
            SortableTree_excluded
          ),
          _useState2 = _slicedToArray(Object(react.useState)(null), 2),
          activeId = _useState2[0],
          setActiveId = _useState2[1],
          _useState4 = _slicedToArray(Object(react.useState)(null), 2),
          overId = _useState4[0],
          setOverId = _useState4[1],
          _useState6 = _slicedToArray(Object(react.useState)(0), 2),
          offsetLeft = _useState6[0],
          setOffsetLeft = _useState6[1],
          _useState8 = _slicedToArray(Object(react.useState)(null), 2),
          currentPosition = _useState8[0],
          setCurrentPosition = _useState8[1],
          flattenedItems = Object(react.useMemo)(
            function () {
              var flattenedTree = flattenTree(items),
                collapsedItems = flattenedTree.reduce(function (acc, _ref2) {
                  var children = _ref2.children,
                    collapsed = _ref2.collapsed,
                    id = _ref2.id;
                  return collapsed && null != children && children.length
                    ? [].concat(SortableTree_toConsumableArray(acc), [id])
                    : acc;
                }, []),
                result = (function removeChildrenOf(items, ids) {
                  var excludeParentIds = utilities_toConsumableArray(ids);
                  return items.filter(function (item) {
                    var _item$children5;
                    return (
                      !item.parentId ||
                      !excludeParentIds.includes(item.parentId) ||
                      (null !== (_item$children5 = item.children) &&
                        void 0 !== _item$children5 &&
                        _item$children5.length &&
                        excludeParentIds.push(item.id),
                      !1)
                    );
                  });
                })(
                  flattenedTree,
                  activeId
                    ? [activeId].concat(
                        SortableTree_toConsumableArray(collapsedItems)
                      )
                    : collapsedItems
                );
              return result;
            },
            [activeId, items]
          ),
          projected = getProjection(
            flattenedItems,
            activeId,
            overId,
            offsetLeft,
            indentationWidth
          ),
          sensorContext = Object(react.useRef)({
            items: flattenedItems,
            offset: offsetLeft,
          }),
          sensors = Object(core_esm.o)(
            Object(core_esm.n)(
              core_esm.d,
              null != pointerSensorOptions
                ? pointerSensorOptions
                : defaultPointerSensorOptions
            )
          ),
          sortedIds = Object(react.useMemo)(
            function () {
              return flattenedItems.map(function (_ref3) {
                return _ref3.id;
              });
            },
            [flattenedItems]
          ),
          activeItem = activeId
            ? flattenedItems.find(function (_ref4) {
                return _ref4.id === activeId;
              })
            : null;
        Object(react.useEffect)(
          function () {
            sensorContext.current = {
              items: flattenedItems,
              offset: offsetLeft,
            };
          },
          [flattenedItems, offsetLeft]
        );
        var announcements = {
          onDragStart: function onDragStart(id) {
            return 'Picked up ' + id + '.';
          },
          onDragMove: function onDragMove(id, overId) {
            return getMovementAnnouncement('onDragMove', id, overId);
          },
          onDragOver: function onDragOver(id, overId) {
            return getMovementAnnouncement('onDragOver', id, overId);
          },
          onDragEnd: function onDragEnd(id, overId) {
            return getMovementAnnouncement('onDragEnd', id, overId);
          },
          onDragCancel: function onDragCancel(id) {
            return (
              'Moving was cancelled. ' +
              id +
              ' was dropped in its original position.'
            );
          },
        };
        return Object(jsx_runtime.jsx)(core_esm.a, {
          announcements: announcements,
          sensors: disableSorting ? void 0 : sensors,
          modifiers: indicator ? [adjustTranslate] : void 0,
          collisionDetection: core_esm.e,
          onDragStart: disableSorting
            ? void 0
            : function handleDragStart(_ref5) {
                var activeId = _ref5.active.id;
                setActiveId(activeId), setOverId(activeId);
                var activeItem = flattenedItems.find(function (_ref6) {
                  return _ref6.id === activeId;
                });
                activeItem &&
                  setCurrentPosition({
                    parentId: activeItem.parentId,
                    overId: activeId,
                  });
                document.body.style.setProperty('cursor', 'grabbing');
              },
          onDragMove: disableSorting
            ? void 0
            : function handleDragMove(_ref7) {
                var delta = _ref7.delta;
                setOffsetLeft(delta.x);
              },
          onDragOver: disableSorting
            ? void 0
            : function handleDragOver(_ref8) {
                var _over$id,
                  over = _ref8.over;
                setOverId(
                  null !== (_over$id = null == over ? void 0 : over.id) &&
                    void 0 !== _over$id
                    ? _over$id
                    : null
                );
              },
          onDragEnd: disableSorting
            ? void 0
            : function handleDragEnd(_ref9) {
                var active = _ref9.active,
                  over = _ref9.over;
                if ((resetState(), projected && over)) {
                  var depth = projected.depth,
                    parentId = projected.parentId,
                    clonedItems = flattenTree(items),
                    overIndex = clonedItems.findIndex(function (_ref10) {
                      return _ref10.id === over.id;
                    }),
                    activeIndex = clonedItems.findIndex(function (_ref11) {
                      return _ref11.id === active.id;
                    }),
                    activeTreeItem = clonedItems[activeIndex];
                  clonedItems[activeIndex] = Object.assign({}, activeTreeItem, {
                    depth: depth,
                    parentId: parentId,
                  });
                  var newItems = (function buildTree(flattenedItems) {
                    var _nodes,
                      _root$children,
                      _step,
                      root = { id: 'root', children: [] },
                      nodes = (((_nodes = {})[root.id] = root), _nodes),
                      items = flattenedItems.map(function (item) {
                        return Object.assign({}, item, { children: [] });
                      }),
                      _iterator = _createForOfIteratorHelper(items);
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                        var _item$parentId,
                          _nodes$parentId,
                          _parent$children,
                          item = _step.value,
                          id = item.id,
                          parentId =
                            null !== (_item$parentId = item.parentId) &&
                            void 0 !== _item$parentId
                              ? _item$parentId
                              : root.id,
                          parent =
                            null !== (_nodes$parentId = nodes[parentId]) &&
                            void 0 !== _nodes$parentId
                              ? _nodes$parentId
                              : findItem(items, parentId);
                        (nodes[id] = item),
                          null == parent ||
                            null === (_parent$children = parent.children) ||
                            void 0 === _parent$children ||
                            _parent$children.push(item);
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                    return null !== (_root$children = root.children) &&
                      void 0 !== _root$children
                      ? _root$children
                      : [];
                  })(
                    Object(sortable_esm.b)(clonedItems, activeIndex, overIndex)
                  );
                  onItemsChanged(newItems);
                }
              },
          onDragCancel: disableSorting
            ? void 0
            : function handleDragCancel() {
                resetState();
              },
          children: Object(jsx_runtime.jsxs)(sortable_esm.a, {
            items: sortedIds,
            strategy: disableSorting ? void 0 : sortable_esm.d,
            children: [
              flattenedItems.map(function (item) {
                var _item$children, _item$children2;
                return Object(react.createElement)(
                  SortableTreeItem,
                  Object.assign({}, rest, {
                    key: item.id,
                    id: item.id,
                    item: item,
                    depth:
                      item.id === activeId && projected
                        ? projected.depth
                        : item.depth,
                    indentationWidth: indentationWidth,
                    indicator: indicator,
                    collapsed: Boolean(
                      item.collapsed &&
                        (null === (_item$children = item.children) ||
                        void 0 === _item$children
                          ? void 0
                          : _item$children.length)
                    ),
                    onCollapse:
                      null !== (_item$children2 = item.children) &&
                      void 0 !== _item$children2 &&
                      _item$children2.length
                        ? function () {
                            return (function handleCollapse(id) {
                              onItemsChanged(
                                setProperty(
                                  items,
                                  id,
                                  'collapsed',
                                  function (value) {
                                    return !value;
                                  }
                                )
                              );
                            })(item.id);
                          }
                        : void 0,
                    onRemove: function onRemove() {
                      return (function handleRemove(id) {
                        onItemsChanged(removeItem(items, id));
                      })(item.id);
                    },
                    isLast:
                      item.id === activeId && projected
                        ? projected.isLast
                        : item.isLast,
                    parent:
                      item.id === activeId && projected
                        ? projected.parent
                        : item.parent,
                    TreeItemComponent: TreeItemComponent,
                    disableSorting: disableSorting,
                  })
                );
              }),
              Object(react_dom.createPortal)(
                Object(jsx_runtime.jsx)(core_esm.b, {
                  dropAnimation: dropAnimation,
                  children:
                    activeId && activeItem
                      ? Object(jsx_runtime.jsx)(
                          TreeItemComponent,
                          Object.assign({}, rest, {
                            item: activeItem,
                            children: [],
                            depth: activeItem.depth,
                            clone: !0,
                            childCount: getChildCount(items, activeId) + 1,
                            indentationWidth: indentationWidth,
                            isLast: !1,
                            parent: activeItem.parent,
                          })
                        )
                      : null,
                }),
                document.body
              ),
            ],
          }),
        });
        function resetState() {
          setOverId(null),
            setActiveId(null),
            setOffsetLeft(0),
            setCurrentPosition(null),
            document.body.style.setProperty('cursor', '');
        }
        function getMovementAnnouncement(eventName, activeId, overId) {
          if (overId && projected) {
            if ('onDragEnd' !== eventName) {
              if (
                currentPosition &&
                projected.parentId === currentPosition.parentId &&
                overId === currentPosition.overId
              )
                return;
              setCurrentPosition({
                parentId: projected.parentId,
                overId: overId,
              });
            }
            var announcement,
              clonedItems = flattenTree(items),
              overIndex = clonedItems.findIndex(function (_ref12) {
                return _ref12.id === overId;
              }),
              activeIndex = clonedItems.findIndex(function (_ref13) {
                return _ref13.id === activeId;
              }),
              sortedItems = Object(sortable_esm.b)(
                clonedItems,
                activeIndex,
                overIndex
              ),
              previousItem = sortedItems[overIndex - 1],
              movedVerb = 'onDragEnd' === eventName ? 'dropped' : 'moved',
              nestedVerb = 'onDragEnd' === eventName ? 'dropped' : 'nested';
            if (previousItem)
              if (projected.depth > previousItem.depth)
                announcement =
                  activeId +
                  ' was ' +
                  nestedVerb +
                  ' under ' +
                  previousItem.id +
                  '.';
              else {
                for (
                  var previousSibling = previousItem,
                    _loop = function _loop() {
                      var parentId = previousSibling.parentId;
                      previousSibling = sortedItems.find(function (_ref14) {
                        return _ref14.id === parentId;
                      });
                    };
                  previousSibling && projected.depth < previousSibling.depth;

                )
                  _loop();
                previousSibling &&
                  (announcement =
                    activeId +
                    ' was ' +
                    movedVerb +
                    ' after ' +
                    previousSibling.id +
                    '.');
              }
            else {
              var nextItem = sortedItems[overIndex + 1];
              announcement =
                activeId + ' was ' + movedVerb + ' before ' + nextItem.id + '.';
            }
            return announcement;
          }
        }
      }
      var adjustTranslate = function adjustTranslate(_ref15) {
        var transform = _ref15.transform;
        return Object.assign({}, transform, { y: transform.y - 25 });
      };
      try {
        (SortableTree.displayName = 'SortableTree'),
          (SortableTree.__docgenInfo = {
            description: '',
            displayName: 'SortableTree',
            props: {
              items: {
                defaultValue: null,
                description: '',
                name: 'items',
                required: !0,
                type: { name: 'TreeItems<TreeItemData>' },
              },
              onItemsChanged: {
                defaultValue: null,
                description: '',
                name: 'onItemsChanged',
                required: !0,
                type: { name: '(items: TreeItems<TreeItemData>) => void' },
              },
              TreeItemComponent: {
                defaultValue: null,
                description: '',
                name: 'TreeItemComponent',
                required: !0,
                type: { name: 'TreeItemComponentType<TreeItemData, TElement>' },
              },
              indentationWidth: {
                defaultValue: { value: '20' },
                description: '',
                name: 'indentationWidth',
                required: !1,
                type: { name: 'number' },
              },
              indicator: {
                defaultValue: null,
                description: '',
                name: 'indicator',
                required: !1,
                type: { name: 'boolean' },
              },
              pointerSensorOptions: {
                defaultValue: null,
                description: '',
                name: 'pointerSensorOptions',
                required: !1,
                type: { name: 'PointerSensorOptions' },
              },
              disableSorting: {
                defaultValue: null,
                description: '',
                name: 'disableSorting',
                required: !1,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES['src/SortableTree.tsx#SortableTree'] = {
              docgenInfo: SortableTree.__docgenInfo,
              name: 'SortableTree',
              path: 'src/SortableTree.tsx#SortableTree',
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    './src/ui/folder/FolderTreeItemWrapper.css': function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/ui/folder/FolderTreeItemWrapper.css'
        );
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './src/ui/simple/SimpleTreeItemWrapper.css': function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js?!./node_modules/@storybook/builder-webpack4/node_modules/postcss-loader/dist/cjs.js?!./src/ui/simple/SimpleTreeItemWrapper.css'
        );
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx|js|jsx))$':
      function (module, exports, __webpack_require__) {
        var map = {
          './Folder.stories.tsx': './stories/Folder.stories.tsx',
          './Simple.stories.tsx': './stories/Simple.stories.tsx',
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = 'MODULE_NOT_FOUND'), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            './stories sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(ts|tsx|js|jsx))$');
      },
    './stories/Folder.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Folder', function () {
          return Folder;
        });
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        );
      var react = __webpack_require__('./node_modules/react/index.js'),
        src =
          (__webpack_require__(
            './node_modules/core-js/modules/es.date.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.is-array.js'
          ),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.description.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.object.to-string.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.symbol.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.string.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/web.dom-collections.iterator.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.slice.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.function.name.js'
          ),
          __webpack_require__(
            './node_modules/core-js/modules/es.array.from.js'
          ),
          __webpack_require__('./src/index.ts')),
        FolderTreeItem_module = __webpack_require__(
          './stories/components/folder/FolderTreeItem.module.scss'
        ),
        FolderTreeItem_module_default = __webpack_require__.n(
          FolderTreeItem_module
        ),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        FolderTreeItem = Object(react.forwardRef)(function (props, ref) {
          var childCount = props.childCount,
            clone = props.clone,
            onRemove = props.onRemove,
            item = props.item;
          return Object(jsx_runtime.jsxs)(
            src.a,
            Object.assign({}, props, {
              ref: ref,
              children: [
                Object(jsx_runtime.jsx)('span', {
                  className: FolderTreeItem_module_default.a.Text,
                  children: item.text,
                }),
                Object(jsx_runtime.jsx)('span', {
                  className: FolderTreeItem_module_default.a.Text,
                  children: item.date.getDate(),
                }),
                !clone &&
                  onRemove &&
                  Object(jsx_runtime.jsx)('button', {
                    onClick: onRemove,
                    children: 'X',
                  }),
                clone && childCount && childCount > 1
                  ? Object(jsx_runtime.jsx)('span', {
                      className: FolderTreeItem_module_default.a.Count,
                      children: childCount,
                    })
                  : null,
              ],
            })
          );
        });
      try {
        (FolderTreeItem.displayName = 'FolderTreeItem'),
          (FolderTreeItem.__docgenInfo = {
            description: '',
            displayName: 'FolderTreeItem',
            props: {
              item: {
                defaultValue: null,
                description: '',
                name: 'item',
                required: !0,
                type: { name: 'TreeItem<TreeItemData>' },
              },
              parent: {
                defaultValue: null,
                description: '',
                name: 'parent',
                required: !0,
                type: { name: 'FlattenedItem<TreeItemData> | null' },
              },
              childCount: {
                defaultValue: null,
                description: '',
                name: 'childCount',
                required: !1,
                type: { name: 'number' },
              },
              clone: {
                defaultValue: null,
                description: '',
                name: 'clone',
                required: !1,
                type: { name: 'boolean' },
              },
              ghost: {
                defaultValue: null,
                description: '',
                name: 'ghost',
                required: !1,
                type: { name: 'boolean' },
              },
              collapsed: {
                defaultValue: null,
                description: '',
                name: 'collapsed',
                required: !1,
                type: { name: 'boolean' },
              },
              depth: {
                defaultValue: null,
                description: '',
                name: 'depth',
                required: !0,
                type: { name: 'number' },
              },
              disableInteraction: {
                defaultValue: null,
                description: '',
                name: 'disableInteraction',
                required: !1,
                type: { name: 'boolean' },
              },
              disableSelection: {
                defaultValue: null,
                description: '',
                name: 'disableSelection',
                required: !1,
                type: { name: 'boolean' },
              },
              isLast: {
                defaultValue: null,
                description: '',
                name: 'isLast',
                required: !0,
                type: { name: 'boolean' },
              },
              manualDrag: {
                defaultValue: null,
                description: '',
                name: 'manualDrag',
                required: !1,
                type: { name: 'boolean' },
              },
              hideCollapseButton: {
                defaultValue: null,
                description: '',
                name: 'hideCollapseButton',
                required: !1,
                type: { name: 'boolean' },
              },
              disableCollapseOnItemClick: {
                defaultValue: null,
                description: '',
                name: 'disableCollapseOnItemClick',
                required: !1,
                type: { name: 'boolean' },
              },
              showDragHandle: {
                defaultValue: null,
                description: '',
                name: 'showDragHandle',
                required: !1,
                type: { name: 'boolean' },
              },
              handleProps: {
                defaultValue: null,
                description: '',
                name: 'handleProps',
                required: !1,
                type: { name: 'any' },
              },
              indicator: {
                defaultValue: null,
                description: '',
                name: 'indicator',
                required: !1,
                type: { name: 'boolean' },
              },
              indentationWidth: {
                defaultValue: null,
                description: '',
                name: 'indentationWidth',
                required: !0,
                type: { name: 'number' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              onCollapse: {
                defaultValue: null,
                description: '',
                name: 'onCollapse',
                required: !1,
                type: { name: '(() => void)' },
              },
              onRemove: {
                defaultValue: null,
                description: '',
                name: 'onRemove',
                required: !1,
                type: { name: '(() => void)' },
              },
              wrapperRef: {
                defaultValue: null,
                description: '',
                name: 'wrapperRef',
                required: !1,
                type: { name: '((node: HTMLLIElement) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/components/folder/FolderTreeItem.tsx#FolderTreeItem'
            ] = {
              docgenInfo: FolderTreeItem.__docgenInfo,
              name: 'FolderTreeItem',
              path: 'stories/components/folder/FolderTreeItem.tsx#FolderTreeItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var initialItems = [
          { id: 'Home', children: [], text: 'Home1', date: new Date() },
          {
            id: 'Collections',
            text: 'Collections1',
            date: new Date(),
            children: [
              {
                id: 'Spring',
                children: [],
                text: 'Spring1',
                date: new Date(),
                canHaveChildren: !1,
              },
              { id: 'Summer', children: [], text: 'Summer1', date: new Date() },
              {
                id: 'Fall',
                children: [],
                text: 'Fall1',
                date: new Date(),
                canHaveChildren: !1,
              },
              { id: 'Winter', children: [], text: 'Winter1', date: new Date() },
            ],
          },
          { id: 'About Us', text: 'About Us1', date: new Date(), children: [] },
          {
            id: 'My Account',
            text: 'My Account1',
            date: new Date(),
            children: [
              {
                id: 'Addresses',
                children: [],
                text: 'Addresses3',
                date: new Date(),
              },
              {
                id: 'Order History',
                children: [],
                text: 'Order History2',
                date: new Date(),
              },
            ],
          },
        ],
        FolderRoot_FolderRoot = function FolderRoot(props) {
          var _useState2 = _slicedToArray(
              Object(react.useState)(initialItems),
              2
            ),
            items = _useState2[0],
            setItems = _useState2[1];
          return Object(jsx_runtime.jsx)(
            src.c,
            Object.assign({}, props, {
              items: items,
              onItemsChanged: setItems,
              TreeItemComponent: FolderTreeItem,
            })
          );
        };
      FolderRoot_FolderRoot.displayName = 'FolderRoot';
      try {
        (FolderRoot_FolderRoot.displayName = 'FolderRoot'),
          (FolderRoot_FolderRoot.__docgenInfo = {
            description: '',
            displayName: 'FolderRoot',
            props: {
              indentationWidth: {
                defaultValue: null,
                description: '',
                name: 'indentationWidth',
                required: !0,
                type: { name: 'number' },
              },
              indicator: {
                defaultValue: null,
                description: '',
                name: 'indicator',
                required: !0,
                type: { name: 'boolean' },
              },
              disableSorting: {
                defaultValue: null,
                description: '',
                name: 'disableSorting',
                required: !0,
                type: { name: 'boolean' },
              },
              hideCollapseButton: {
                defaultValue: null,
                description: '',
                name: 'hideCollapseButton',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/components/folder/FolderRoot.tsx#FolderRoot'
            ] = {
              docgenInfo: FolderRoot_FolderRoot.__docgenInfo,
              name: 'FolderRoot',
              path: 'stories/components/folder/FolderRoot.tsx#FolderRoot',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_exports__.default = {
        title: 'Folder',
        component: FolderRoot_FolderRoot,
      };
      var Folder_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(
          FolderRoot_FolderRoot,
          Object.assign({}, args)
        );
      };
      Folder_stories_Template.displayName = 'Template';
      var Folder = Folder_stories_Template.bind({});
      Folder.args = {
        disableSorting: !1,
        indicator: !1,
        indentationWidth: 10,
        hideCollapseButton: !1,
      };
    },
    './stories/Simple.stories.tsx': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'Simple', function () {
          return Simple;
        }),
        __webpack_require__.d(__webpack_exports__, 'Simple2', function () {
          return Simple2;
        }),
        __webpack_require__.d(__webpack_exports__, 'Minimal', function () {
          return Simple_stories_Minimal;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'MinimalViable',
          function () {
            return Simple_stories_MinimalViable;
          }
        );
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.bind.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.is-array.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.description.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.object.to-string.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.symbol.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.string.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/es.array.iterator.js'
        ),
        __webpack_require__(
          './node_modules/core-js/modules/web.dom-collections.iterator.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
        __webpack_require__(
          './node_modules/core-js/modules/es.function.name.js'
        ),
        __webpack_require__('./node_modules/core-js/modules/es.array.from.js');
      var react = __webpack_require__('./node_modules/react/index.js'),
        react_default = __webpack_require__.n(react),
        TreeItem_module =
          (__webpack_require__(
            './node_modules/core-js/modules/es.date.to-string.js'
          ),
          __webpack_require__(
            './stories/components/tree/TreeItem.module.scss'
          )),
        TreeItem_module_default = __webpack_require__.n(TreeItem_module),
        src = __webpack_require__('./src/index.ts'),
        jsx_runtime = __webpack_require__(
          './node_modules/react/jsx-runtime.js'
        ),
        TreeItem = Object(react.forwardRef)(function (props, ref) {
          var childCount = props.childCount,
            clone = props.clone,
            onRemove = props.onRemove,
            item = props.item;
          return Object(jsx_runtime.jsxs)(
            src.b,
            Object.assign({}, props, {
              ref: ref,
              hideCollapseButton: !0,
              showDragHandle: !0,
              children: [
                Object(jsx_runtime.jsx)('span', {
                  className: TreeItem_module_default.a.Text,
                  children: item.text,
                }),
                Object(jsx_runtime.jsx)('span', {
                  className: TreeItem_module_default.a.Text,
                  children: item.date.getDate(),
                }),
                !clone &&
                  onRemove &&
                  Object(jsx_runtime.jsx)('button', {
                    onClick: onRemove,
                    children: 'X',
                  }),
                clone && childCount && childCount > 1
                  ? Object(jsx_runtime.jsx)('span', {
                      className: TreeItem_module_default.a.Count,
                      children: childCount,
                    })
                  : null,
              ],
            })
          );
        });
      try {
        (TreeItem.displayName = 'TreeItem'),
          (TreeItem.__docgenInfo = {
            description: '',
            displayName: 'TreeItem',
            props: {
              item: {
                defaultValue: null,
                description: '',
                name: 'item',
                required: !0,
                type: { name: 'TreeItem<TreeItemData>' },
              },
              parent: {
                defaultValue: null,
                description: '',
                name: 'parent',
                required: !0,
                type: { name: 'FlattenedItem<TreeItemData> | null' },
              },
              childCount: {
                defaultValue: null,
                description: '',
                name: 'childCount',
                required: !1,
                type: { name: 'number' },
              },
              clone: {
                defaultValue: null,
                description: '',
                name: 'clone',
                required: !1,
                type: { name: 'boolean' },
              },
              ghost: {
                defaultValue: null,
                description: '',
                name: 'ghost',
                required: !1,
                type: { name: 'boolean' },
              },
              collapsed: {
                defaultValue: null,
                description: '',
                name: 'collapsed',
                required: !1,
                type: { name: 'boolean' },
              },
              depth: {
                defaultValue: null,
                description: '',
                name: 'depth',
                required: !0,
                type: { name: 'number' },
              },
              disableInteraction: {
                defaultValue: null,
                description: '',
                name: 'disableInteraction',
                required: !1,
                type: { name: 'boolean' },
              },
              disableSelection: {
                defaultValue: null,
                description: '',
                name: 'disableSelection',
                required: !1,
                type: { name: 'boolean' },
              },
              isLast: {
                defaultValue: null,
                description: '',
                name: 'isLast',
                required: !0,
                type: { name: 'boolean' },
              },
              manualDrag: {
                defaultValue: null,
                description: '',
                name: 'manualDrag',
                required: !1,
                type: { name: 'boolean' },
              },
              hideCollapseButton: {
                defaultValue: null,
                description: '',
                name: 'hideCollapseButton',
                required: !1,
                type: { name: 'boolean' },
              },
              disableCollapseOnItemClick: {
                defaultValue: null,
                description: '',
                name: 'disableCollapseOnItemClick',
                required: !1,
                type: { name: 'boolean' },
              },
              showDragHandle: {
                defaultValue: null,
                description: '',
                name: 'showDragHandle',
                required: !1,
                type: { name: 'boolean' },
              },
              handleProps: {
                defaultValue: null,
                description: '',
                name: 'handleProps',
                required: !1,
                type: { name: 'any' },
              },
              indicator: {
                defaultValue: null,
                description: '',
                name: 'indicator',
                required: !1,
                type: { name: 'boolean' },
              },
              indentationWidth: {
                defaultValue: null,
                description: '',
                name: 'indentationWidth',
                required: !0,
                type: { name: 'number' },
              },
              style: {
                defaultValue: null,
                description: '',
                name: 'style',
                required: !1,
                type: { name: 'CSSProperties' },
              },
              onCollapse: {
                defaultValue: null,
                description: '',
                name: 'onCollapse',
                required: !1,
                type: { name: '(() => void)' },
              },
              onRemove: {
                defaultValue: null,
                description: '',
                name: 'onRemove',
                required: !1,
                type: { name: '(() => void)' },
              },
              wrapperRef: {
                defaultValue: null,
                description: '',
                name: 'wrapperRef',
                required: !1,
                type: { name: '((node: HTMLLIElement) => void)' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/components/tree/TreeItem.tsx#TreeItem'
            ] = {
              docgenInfo: TreeItem.__docgenInfo,
              name: 'TreeItem',
              path: 'stories/components/tree/TreeItem.tsx#TreeItem',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var initialItems = [
          { id: 'Home', children: [], text: 'Home1', date: new Date() },
          {
            id: 'Collections',
            text: 'Collections1',
            date: new Date(),
            children: [
              {
                id: 'Spring',
                children: [],
                text: 'Spring1',
                date: new Date(),
                canHaveChildren: !1,
              },
              { id: 'Summer', children: [], text: 'Summer1', date: new Date() },
              {
                id: 'Fall',
                children: [],
                text: 'Fall1',
                date: new Date(),
                canHaveChildren: !1,
              },
              { id: 'Winter', children: [], text: 'Winter1', date: new Date() },
            ],
          },
          { id: 'About Us', text: 'About Us1', date: new Date(), children: [] },
          {
            id: 'My Account',
            text: 'My Account01',
            date: new Date(),
            children: [
              {
                id: 'Addresses',
                children: [],
                text: 'Addresses3',
                date: new Date(),
              },
              {
                id: 'Order History',
                children: [],
                text: 'Order History2',
                date: new Date(),
              },
            ],
          },
        ],
        TreeRoot_TreeRoot = function TreeRoot(props) {
          var _useState2 = _slicedToArray(
              Object(react.useState)(initialItems),
              2
            ),
            items = _useState2[0],
            setItems = _useState2[1];
          return Object(jsx_runtime.jsx)(src.c, {
            indentationWidth: props.indentationWidth,
            indicator: props.indicator,
            disableSorting: props.disableSorting,
            items: items,
            onItemsChanged: setItems,
            TreeItemComponent: TreeItem,
          });
        };
      TreeRoot_TreeRoot.displayName = 'TreeRoot';
      try {
        (TreeRoot_TreeRoot.displayName = 'TreeRoot'),
          (TreeRoot_TreeRoot.__docgenInfo = {
            description: '',
            displayName: 'TreeRoot',
            props: {
              indentationWidth: {
                defaultValue: null,
                description: '',
                name: 'indentationWidth',
                required: !0,
                type: { name: 'number' },
              },
              indicator: {
                defaultValue: null,
                description: '',
                name: 'indicator',
                required: !0,
                type: { name: 'boolean' },
              },
              disableSorting: {
                defaultValue: null,
                description: '',
                name: 'disableSorting',
                required: !0,
                type: { name: 'boolean' },
              },
            },
          }),
          'undefined' != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              'stories/components/tree/TreeRoot.tsx#TreeRoot'
            ] = {
              docgenInfo: TreeRoot_TreeRoot.__docgenInfo,
              name: 'TreeRoot',
              path: 'stories/components/tree/TreeRoot.tsx#TreeRoot',
            });
      } catch (__react_docgen_typescript_loader_error) {}
      function Simple_stories_slicedToArray(arr, i) {
        return (
          (function Simple_stories_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function Simple_stories_iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
                  arr['@@iterator'];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function Simple_stories_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ('string' == typeof o)
              return Simple_stories_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(o);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Simple_stories_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function Simple_stories_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Simple_stories_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      __webpack_exports__.default = {
        title: 'Simple',
        component: TreeRoot_TreeRoot,
      };
      var Simple_stories_Template = function Template(args) {
        return Object(jsx_runtime.jsx)(
          TreeRoot_TreeRoot,
          Object.assign({}, args)
        );
      };
      Simple_stories_Template.displayName = 'Template';
      var Simple = Simple_stories_Template.bind({});
      Simple.args = { disableSorting: !1, indicator: !1, indentationWidth: 10 };
      var Simple2 = Simple_stories_Template.bind({});
      Simple2.args = {
        disableSorting: !1,
        indicator: !1,
        indentationWidth: 20,
      };
      var Simple_stories_Minimal = function Minimal() {
        var _useState2 = Simple_stories_slicedToArray(
            Object(react.useState)(initialMinimalData),
            2
          ),
          items = _useState2[0],
          setItems = _useState2[1];
        return Object(jsx_runtime.jsx)(src.c, {
          items: items,
          onItemsChanged: setItems,
          TreeItemComponent: react_default.a.forwardRef(function (props, ref) {
            return Object(jsx_runtime.jsx)(
              src.b,
              Object.assign({}, props, {
                ref: ref,
                children: Object(jsx_runtime.jsx)('div', {
                  children: props.item.id,
                }),
              })
            );
          }),
        });
      };
      Simple_stories_Minimal.displayName = 'Minimal';
      var initialMinimalData = [
          { id: '1', children: [{ id: '4' }, { id: '5' }] },
          { id: '2' },
          { id: '3' },
        ],
        Simple_stories_MinimalViable = function MinimalViable() {
          var _useState4 = Simple_stories_slicedToArray(
              Object(react.useState)(initialViableMinimalData),
              2
            ),
            items = _useState4[0],
            setItems = _useState4[1];
          return Object(jsx_runtime.jsx)(src.c, {
            items: items,
            onItemsChanged: setItems,
            TreeItemComponent: MinimalTreeItemComponent,
          });
        };
      Simple_stories_MinimalViable.displayName = 'MinimalViable';
      var MinimalTreeItemComponent = react_default.a.forwardRef(function (
          props,
          ref
        ) {
          return Object(jsx_runtime.jsx)(
            src.b,
            Object.assign({}, props, {
              ref: ref,
              children: Object(jsx_runtime.jsx)('div', {
                children: props.item.value,
              }),
            })
          );
        }),
        initialViableMinimalData = [
          {
            id: '1',
            value: 'Jane',
            children: [
              { id: '4', value: 'John' },
              { id: '5', value: 'Sally' },
            ],
          },
          { id: '2', value: 'Fred', children: [{ id: '6', value: 'Eugene' }] },
          { id: '3', value: 'Helen' },
        ];
    },
    './stories/components/folder/FolderTreeItem.module.scss': function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./stories/components/folder/FolderTreeItem.module.scss'
        );
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './stories/components/tree/TreeItem.module.scss': function (
      module,
      exports,
      __webpack_require__
    ) {
      var api = __webpack_require__(
          './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'
        ),
        content = __webpack_require__(
          './node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./stories/components/tree/TreeItem.module.scss'
        );
      'string' ==
        typeof (content = content.__esModule ? content.default : content) &&
        (content = [[module.i, content, '']]);
      var options = { insert: 'head', singleton: !1 };
      api(content, options);
      module.exports = content.locals || {};
    },
    './storybook-init-framework-entry.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(
        './node_modules/@storybook/react/dist/esm/client/index.js'
      );
    },
    0: function (module, exports, __webpack_require__) {
      __webpack_require__(
        './node_modules/@storybook/core-client/dist/esm/globals/polyfills.js'
      ),
        __webpack_require__(
          './node_modules/@storybook/core-client/dist/esm/globals/globals.js'
        ),
        __webpack_require__('./storybook-init-framework-entry.js'),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js'
        ),
        __webpack_require__(
          './.storybook/preview.js-generated-config-entry.js'
        ),
        (module.exports = __webpack_require__('./generated-stories-entry.js'));
    },
    1: function (module, exports) {},
  },
  [[0, 5, 6]],
]);
