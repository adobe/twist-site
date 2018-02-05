# Class

## `exports`

### `getJSXElementName(path: Path<JSXElement>): string`

Return the string name of the given element.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | Path<JSXElement> |  |

### `getJSXAttributeName(attr: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| attr | * | nullable: undefined |

### `getAttribute(path: *, attributeName: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| attributeName | * | nullable: undefined |

### `deleteAttribute(path: *, attributeName: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| attributeName | * | nullable: undefined |

### `getAttributeValue(path: *, attributeName: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| attributeName | * | nullable: undefined |

### `addImportOnce(path: *, exportName: *, moduleName: *, options: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| exportName | * | nullable: undefined |
| moduleName | * | nullable: undefined |
| options | * | nullable: undefined |

### `addGlobalSymbol(path: Path, readableName: string): Identifier`

Adds a new global symbol declaration.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | Path |  |
| readableName | string |  | The readable name of the variable holding the symbol. |

### `hasThisContext(path: Path): Boolean`

Test whether "this" is defined for the given path - we walk up the parent functions, until we find a function that's not an arrow function (in which case this is defined), or we hit the program (in which case it isn't).

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | Path |  |

### `pushToFunctionBody(path: Path): Statement|Array.<Statement>`

Push the given expression(s) to the start of the body of the given function. This handles arrow functions too (it converts the arrow function body to a block with a return statement, if it's an expression).

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | Path |  |

### `jsxChildrenToJS(children: Array<Node>): Expression`

Given an array of [children of a JSX component], return an expression that represents the same children. For instance, the contents of a <repeat> might include multiple elements; they must be serialized into a format suitable as a return value within `collection.map()`. This is typically an array, but in cases where only a single element or text node is contained, we can just return that one item. When no items exist, returns a null expression.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| children | Array<Node> |  |

### `maybeWrapJSXExpression(path: Path, expression: Expression): Expression`

If the parent element of the given `path` is a JSX Element, wrap `expression` in a JSXExpressionContainer (braces).

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | Path |  |
| expression | Expression |  |

### `findParentClassWithDecorator(path: Path, decoratorName: string|regexp): Node<ClassDeclaration> | undefined`

Return the class declaration of a path's parent class, if it has a decorator with the given name. This is often used to find a class with a specific decorator like @Component.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | Path |  |
| decoratorName | string|regexp |  |

### `stripAsIdentifiers(path: Path): Array<Identifier> | undefined`

If the given path has an "as" attribute, this removes said attribute and converts it to an array of identifiers

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | Path |  |

### `warning(path: *, message: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| message | * | nullable: undefined |

## `exports`

### `constructor()`

### `recastOptions: {"quote": string, "arrayBracketSpacing": boolean, "objectCurlySpacing": boolean, "parser": *}`

### `babelPlugins: undefined[]`

### `transformFile(fullPath: *, root: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| fullPath | * | nullable: undefined |
| root | * | nullable: undefined |

## `exports`

Using item definitions from the configuration, automatically import declarations for JSX elements and/or decorators.

### `constructor()`

### `definitions: {}`

### `apply(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

## `exports`

### `constructor(definitions: { decoratorName: DecoratorDefinition })`

Load a bunch of decorator definitions.

### `definitions: {}`

### `apply(path: *)`

Automatically import decorators referenced from this file, matching the provided definitions.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `assertDefinitionFormat(def: *, decoratorName: *)`

Sanity-check the syntax of decorator import definitions.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| def | * | nullable: undefined |
| decoratorName | * | nullable: undefined |

### `visitDecorator(decoratorPath: *, path: *)`

Given this decorator, automatically import the necessary module(s).

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| decoratorPath | * | nullable: undefined |
| path | * | nullable: undefined |

### `getLeftmostIdentifier(node: *): *`

Given a decorator expression, find the root identifier -- the one we want to import.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | * | nullable: undefined |

## `exports`

## `exports`

Detect an attributes that have arrow functions, and lift them to the parent block This ensures that we only create the closure for the event handler once (which is more efficient than having the event handler be recreated on every render).

### `apply(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

## `exports`

### `apply(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

## `exports`

### `apply(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `transformBindAttr(path: *, attrName: *, eventName: *, eventTemplate: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| attrName | * | nullable: undefined |
| eventName | * | nullable: undefined |
| eventTemplate | * | nullable: undefined |

## `exports`

### `apply(path: *, state: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| state | * | nullable: undefined |

## `exports`

Ensure any classes decorated with @Component have (props, context) as constructor arguments.

### `apply(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

## `exports`

### `apply(path: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `transformIf(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `transformRepeat(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `transformUsing(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `transformGroup(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

## `exports`

### `apply(path: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

## `exports`

### `apply(path: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `transformRef(path: *, attr: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| attr | * | nullable: undefined |

## `exports`

Enable string style attributes, style shorthand attributes, and multiple style attributes. 1\. String Attributes: React only allows objects as style attribute values (e.g. `{ color: 'red' }`). This allows the style attribute to be specified as a string (like in plain HTML). 2\. Style Shorthand: `<div style-background-color="red" />` === `<div style={{ backgroundColor: 'red' }} />`. 3\. Multiple Style Attributes: `<div style={A} style={B} />` is roughly equivalent to `<div style={merge(A, B)}>`. Whenever possible, we perform these conversions statically, avoiding any runtime overhead. At compile-time, we: - parse style strings (including `style="..."`, `style={'...'}`, and `style={`...`}`) into objects; - combine multiple style attributes and/or shorthands together Styles are combined at runtime only when necessary (using the "styles" runtime helper). This happens when: - styles are specified as opaque JS expressions, or interpolated template strings; - spread attributes are included along with styles (spreads might include a "style" property). As in React, style attributes and shorthands are evaluated left-to-right. We take care to ensure this order is preserved, even in the presence of spread attributes.

### `apply(path: *, state: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| state | * | nullable: undefined |

## `StyleItem`

A container representing one user-specified attribute related to styles. This includes "style", "style-*", and spreads.

### `constructor()`

### `value: *`

### `index: *`

### `isSpread: *`

### `fromAttribute(attr: JSXAttribute|JSXSpreadAttribute, index: number): StyleItem|null`

If `attr` is a style-related attribute, return a new StyleItem representing the attribute. Otherwise return null.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| attr | JSXAttribute|JSXSpreadAttribute |  |
| index | number |  |

### `tryToMerge(other: StyleItem): boolean`

Attempt to merge another StyleItem's value into this one. We can do this if both are ObjectExpressions whose keys are simple strings or identifiers. Return true if `other` was merged into this.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| other | StyleItem |  |

### `convertStringsToStyleObjects(s: Node): Node|ObjectExpression`

If given a string or StringLiteral, parse it as a CSS string and transform it into an ObjectExpression, returning other nodes unchanged.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| s | Node |  |

### `simplifyStringLiteral(node: Node): Node`

If possible, simplify an expression containing a statically-determinable string into a plain StringLiteral node. Otherwise return the original node.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | Node |  |

## `exports`

### `constructor(contextName: string, options: object, env: object)`

Create a Twist configuration. A "contextName" describes the specific context in which this configuration is being applied, such as "node" or "webpack". The default context is "node"; other build systems (like a webpack plugin) may subclass this configuration and provide additional functionality; libraries should switch on `this.context` to decide how to add any plugins/loaders as necessary.

### `context: *`

### `_options: *`

### `_components: {}`

### `_decorators: {}`

### `_babelPlugins: *[]`

### `_pathAliases: {"babel-runtime/helpers/inherits": *}`

### `_libraryLoader: *`

### `_init(contextName: *, options: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contextName | * | nullable: undefined |
| options | * | nullable: undefined |

### `_forEachConfig(config: Array|Object, callback: function)`

Utility for array entries in .twistrc - we support either: * A map of key-value pairs * An array of [key, value] entries If it's an array, we'll skip over any undefined values

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| config | Array|Object |  | An array or map of items to add |
| callback | function |  | Method to apply to each entry |

### `mergeConfig(config: Object)`

Adds a .twistrc configuration to the Twist configuration This shouldn't be called directly - it's called as a consequence of _libraryLoader.load().

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| config | Object |  | The configuration from the .twistrc file |

### `addLibrary(library: string, options: Object|value): *`

Add more Twist libraries to the configuration, using this method. e.g. `config.addLibrary('@twist/module');` This allows the given library to add to the configuration (e.g. defining new decorators/components). This loads the .twistrc file of the library, and adds it to the configuration.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| library | string |  | The npm name of the library to add (passes in the configuration to `library/config.js`) |
| options | Object|value | optional: true | Options to pass to the library |

### `addBabelPlugin(plugin: BabelPlugin|string, options: object): *`

Add a custom Babel plugin.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| plugin | BabelPlugin|string |  |
| options | object | optional: true |

### `setOption(name: string, value: string|number|Boolean): *`

Set an option in the Twist configuration. Supported options are: includeBabelRuntime [true] Include Babel runtime. polyfill [true] Include Babel polyfill (if including Babel runtime). regenerator [false] Include Babel regenerator (if including Babel runtime). targets [undefined] A babel-preset-env `targets` configuration, e.g. `{ browsers: 'last 2 versions' }`. transformImports [false] Transforms imports to CommonJS requires. useBabelModuleResolver [false] Use the Babel module resolver to resolve imports.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | string |  |
| value | string|number|Boolean |  |

### `getOption(name: string): string|number|Boolean`

Get the value of an option in the Twist configuration.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | string |  |

### `addComponent(name: string, config: Object): *`

Add a global component to the Twist compiler configuration

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | string |  |
| config | Object |  |

### `addDecorator(name: string, config: Object): *`

Add a decorator to the Twist compiler configuration

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | string |  |
| config | Object |  |

## `StoreData`

Private data associated with a store.

### `parent: *`

### `name: *`

### `middleware: *`

### `subStores: *`

## `BaseStore`

A Store is a container of state - users of Twist should extend Store by using the @Store decorator on a class. Within a store, the @State.XXX decorators are used to define how a store should be serialized to/from JSON. In addition to serialization, Store provides a dispatch mechanism, so that actions can be dispatched to a store to mutate it. You can attach middleware to intercept a dispatch. It also keeps track of the store hierarchy, so that when you dispatch an action to a store, it gets routed to the top-level parent store (so it goes through the top-level middleware), before being router back down to the target store. Actions also propagate to sub-stores (unless they return a value, which prevents propagation), so that a single action can be handled by multiple stores.

### `constructor()`

### `__data: *`

### `_isMutable(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `_linkStore(name: *, store: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | * | nullable: undefined |
| store | * | nullable: undefined |

### `_doDispatch(action: *, payload: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| action | * | nullable: undefined |
| payload | * | nullable: undefined |

### `_dispatchDown(action: *, payload: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| action | * | nullable: undefined |
| payload | * | nullable: undefined |

### `_dispatchWithMiddleware(action: *, payload: *, middleware: *, args: ...*): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| action | * | nullable: undefined |
| payload | * | nullable: undefined |
| middleware | * | nullable: undefined |
| args | ...* | nullable: undefined |

### `_dispatchUp(action: *, payload: *, origin: *, route: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| action | * | nullable: undefined |
| payload | * | nullable: undefined |
| origin | * | nullable: undefined |
| route | * | nullable: undefined |

### `dispatch(action: string | Function, payload: ...*): *`

Dispatch the given action to the store, with any arguments passed as the action's payload.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| action | string | Function |  | The name of the action, or a function (asynchronous action). |
| payload | ...* |  | The payload to pass to the action handler (you can pass multiple arguments). |

### `getParentStore(): Store`

Returns the parent store of the currents store. If the store is inside an array or map (e.g. `@State.byRefArray`, or `@State.byRefMap`), this is the store that contains the array/map, not the array/map object itself.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Binder`

### `constructor()`

### `mutatorsStack: *`

### `active: *`

### `mutator: *`

### `previousValue: *`

### `bindings: *[]`

### `dirty: *`

### `disposableParent: *`

### `valueGetter: *`

### `set: *`

### `callback: *`

### `invalidate: *`

### `pushMutator(mutator: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| mutator | * | nullable: undefined |

### `popMutator(mutator: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| mutator | * | nullable: undefined |

### `run(bindings: *, fn: *, context: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| bindings | * | nullable: undefined |
| fn | * | nullable: undefined |
| context | * | nullable: undefined |

### `recordEvent(obj: *, eventName: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| eventName | * | nullable: undefined |

### `recordChange(obj: *, propertyName: *, newValue: *, oldValue: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| propertyName | * | nullable: undefined |
| newValue | * | nullable: undefined |
| oldValue | * | nullable: undefined |

### `removeBindings()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `dispose()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `update(value: *, invokeCallback: boolean): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | * | nullable: undefined |
| invokeCallback | boolean | nullable: undefined, optional: true, default: true |

### `apply(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `_computeInnerValue(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `compute(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `get(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `CollectionBinder`

### `lengthChanged: boolean`

### `previousValue: *`

### `update(value: *, invokeCallback: boolean): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | * | nullable: undefined |
| invokeCallback | boolean | nullable: undefined, optional: true, default: true |

### `onLengthChanged()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `invokeCallback(value: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | * | nullable: undefined |

## `Disposable`

A Disposable instance exposes an interface for cleaning up an object when it is no longer needed. A disposable can be linked to any number of children disposables, so that when the parent is disposed, children will also be disposed, and so on.

### `_isDisposed: *`

### `[_isDisposed]: boolean`

### `[_disposables]: *`

### `link(disposable: Disposable): Disposable`

Link a child Disposable to this disposable. When this class is disposed, the child will also be disposed.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| disposable | Disposable |  |

### `unlink(disposable: Disposable)`

Unlink a child Disposable from this disposable. If the child is already unlinked, do nothing.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| disposable | Disposable |  |

### `disposeLink(disposable: Disposable)`

Unlink a child and dispose it.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| disposable | Disposable |  |

### `dispose()`

Dispose this instance. Any disposables linked to this instance will also be disposed.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ObjectId`

Associate a unique id with an object. This works by storing the id on a hidden property, so the same object will always have the same id.

### `set(obj: *, id: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| id | * | nullable: undefined |

### `get(obj: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |

## `ObservableArray`

### `constructor()`

### `base: *`

### `at(i: number): *`

Proxy method for accessing array elements by index

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| i | number |  | Index number of element to access |

### `setAt(i: number, value: *)`

Sets the element at a given index to provided value

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| i | number |  | The index of the element to set in the array |
| value | * |  | The value to set the element as |

### `toArray(): *`

Creates a clone of the native array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `swapItems(items: Array)`

Replaces the array wrapped by ObservableArray

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| items | Array |  | The new array used to replace the ObservableArray's contents |

### `removeItem(item: *)`

Removes a given item from the array

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| item | * |  | The item to be removed from the array |

### `concat(otherArrays: Array|ObservableArray...): *`

Concatenate this array with other arrays, returning a new ObservableArray.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| otherArrays | Array|ObservableArray... |  |

### `concatToArray(otherArrays: Array|ObservableArray...): *`

Concatenate this array with other arrays, returning a plain array.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| otherArrays | Array|ObservableArray... |  |

### `spliceToArray(): *`

Splice, returning the result a plain array.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `sliceToArray(): *`

Slice, returning the result a plain array.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `mapToArray(): *`

Slice, returning the result a plain array.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `filterToArray(): *`

Slice, returning the result a plain array.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `ObservableMap`

### `constructor()`

### `base: *`

### `_swapItems(base: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| base | * | nullable: undefined |

### `swapItems(items: Map|Object)`

Replaces the Map wrapped by ObservableMap

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| items | Map|Object |  | The new Map or Object used to replace the ObservableMap's contents |

### `has(key: *): *`

Returns a boolean for the presence of a given key

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| key | * |  | The key to check |

### `get(key: *): *`

Returns the value stored for a given key

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| key | * |  | The key to retrieve the value of |

### `set(key: *, value: *): ObservableMap`

Creates a new entry in the map

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| key | * |  | The key of the new entry |
| value | * |  | The value of the new entry |

### `clear()`

Removes all entries from the map

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `delete(key: *): Boolean`

Deletes the entry under a given key

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| key | * |  | The key to be removed |

## `ObservableSet`

### `constructor()`

### `base: *`

### `_swapItems(base: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| base | * | nullable: undefined |

### `swapItems(base: Set|Iterable)`

Replaces the Set wrapped by ObservableSet

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| base | Set|Iterable |  | The new Set or Iterable object used to replace the ObservableSet's contents |

## `Scope`

### `fork(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `clean()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Signal`

### `constructor()`

### `_owner: *`

### `[_owner]: *`

### `handlers: *[]`

### `add(handler: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| handler | * | nullable: undefined |

### `remove(handler: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| handler | * | nullable: undefined |

### `trigger()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `triggerNoArgs()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `triggerWithArray(args: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| args | * | nullable: undefined |

### `trigger(obj: *, name: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |

### `triggerNoArgs(obj: *, name: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |

### `on(obj: *, name: *, handler: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |
| handler | * | nullable: undefined |

### `off(obj: *, name: *, handler: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |
| handler | * | nullable: undefined |

### `listenTo(thisObj: *, obj: *, name: *, method: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| thisObj | * | nullable: undefined |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |
| method | * | nullable: undefined |

### `stopListening(thisObj: *, obj: *, name: *, method: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| thisObj | * | nullable: undefined |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |
| method | * | nullable: undefined |

## `SignalDispatcher`

### `[key]: *`

### `[hiddenKey]: *`

### `watch(valueGetter: *, callback: *, ignoreFirstRun: boolean, invalidate: *, priority: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| valueGetter | * | nullable: undefined |
| callback | * | nullable: undefined, optional: true, default: noop |
| ignoreFirstRun | boolean | nullable: undefined, optional: true, default: false |
| invalidate | * | nullable: undefined, optional: true, default: TaskQueue |
| priority | * | nullable: undefined, optional: true |

### `watchCollection(valueGetter: *, callback: *, ignoreFirstRun: boolean, invalidate: *, priority: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| valueGetter | * | nullable: undefined |
| callback | * | nullable: undefined, optional: true, default: noop |
| ignoreFirstRun | boolean | nullable: undefined, optional: true, default: false |
| invalidate | * | nullable: undefined, optional: true, default: TaskQueue |
| priority | * | nullable: undefined, optional: true |

### `defineObservable(key: *, defaultValue: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| key | * | nullable: undefined |
| defaultValue | * | nullable: undefined |

### `dispose()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `trigger(name: *, args: ...*)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | * | nullable: undefined |
| args | ...* | nullable: undefined |

### `on(name: *, handler: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | * | nullable: undefined |
| handler | * | nullable: undefined |

### `off(name: *, handler: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | * | nullable: undefined |
| handler | * | nullable: undefined |

### `listenTo(obj: *, name: *, method: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |
| method | * | nullable: undefined |

### `stopListening(obj: *, name: *, method: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |
| method | * | nullable: undefined |

## `State`

The @State.xxx decorators.

### `byVal(target: *, property: *, descriptor: *, config: undefined): *`

Value types

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| config | undefined | nullable: undefined, optional: true, default: undefined |

### `byBooleanVal(target: *, property: *, descriptor: *, config: undefined): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| config | undefined | nullable: undefined, optional: true, default: undefined |

### `byNumberVal(target: *, property: *, descriptor: *, config: undefined): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| config | undefined | nullable: undefined, optional: true, default: undefined |

### `bySimpleVal(target: *, property: *, descriptor: *, config: undefined): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| config | undefined | nullable: undefined, optional: true, default: undefined |

### `byCustomVal(target: *, property: *, descriptor: *, type: *, defaultValue: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| type | * | nullable: undefined |
| defaultValue | * | nullable: undefined |

### `byRef(target: *, property: *, descriptor: *, RefType: *): *`

Reference types

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| RefType | * | nullable: undefined |

### `byOptionalRef(target: *, property: *, descriptor: *, RefType: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| RefType | * | nullable: undefined |

### `byCustomRef(target: *, property: *, descriptor: *, typeFn: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| typeFn | * | nullable: undefined |

### `byArray(target: *, property: *, descriptor: *, isStatic: *): *`

Array Types

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| isStatic | * | nullable: undefined |

### `byRefArray(target: *, property: *, descriptor: *, RefType: *, isStatic: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| RefType | * | nullable: undefined |
| isStatic | * | nullable: undefined |

### `byCustomRefArray(target: *, property: *, descriptor: *, typeFn: *, isStatic: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| typeFn | * | nullable: undefined |
| isStatic | * | nullable: undefined |

### `byMap(target: *, property: *, descriptor: *, isStatic: *): *`

Map Types

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| isStatic | * | nullable: undefined |

### `byRefMap(target: *, property: *, descriptor: *, RefType: *, isStatic: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| RefType | * | nullable: undefined |
| isStatic | * | nullable: undefined |

### `alias(target: *, property: *, descriptor: *, jsonName: *)`

Alias

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |
| jsonName | * | nullable: undefined |

## `DevToolConnector`

### `constructor()`

### `store: *`

### `devTools: *`

### `initState: *`

### `handlingMessage: boolean`

### `onAction(action: *, payload: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| action | * | nullable: undefined |
| payload | * | nullable: undefined |

### `setState(state: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| state | * | nullable: undefined |

### `toggleAction(actionId: *, liftedState: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| actionId | * | nullable: undefined |
| liftedState | * | nullable: undefined |

### `onMessage(message: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| message | * | nullable: undefined |

### `dispose()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Component`

### `constructor()`

### `[_props]: *`

### `[_originalRender]: *`

### `[_newProps]: *`

### `[_scope]: *`

### `[_getProp](name: *): *`

Method for obtaining the current value of a prop - this is used by @Attribute so it can read the new props immediately after componentWillUpdate (but before they've been set by React)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | * | nullable: undefined |

### `renderChildren(name: string, args: *): *`

Rendering child elements

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | string | nullable: undefined, optional: true, default: children |
| args | * | nullable: undefined |

### `undeclaredAttributes(prefix: *): *`

Support undeclaredAttributes Note: Right now this takes a prefix, not a namespace, because React doesn't support namespaced attributes

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| prefix | * | nullable: undefined |

### `trigger(eventName: *, args: ...*): *`

Override trigger because we need to handle custom events

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| eventName | * | nullable: undefined |
| args | ...* | nullable: undefined |

## `LinkedData`

### `component: *`

## `BaseVirtualComponent`

A Virtual Component is a special type of component that doesn't render anything to the DOM, but instead exposes a tree of nodes in JavaScript. It still has a render function, but it's not rendered by ReactDOM.

### `constructor()`

### `_dirty: *`

### `_queuedUpdate: *`

### `_items: *`

### `_linked: *`

### `[_dirty]: boolean`

### `[_queuedUpdate]: boolean`

### `forceUpdate()`

Override the React forceUpdate so we do a virtual render (this throttles the rendering to the task queue)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `[_virtualRender]()`

Virtual rendering uses the results of render function (a JSON structure describing the child nodes), and renders them virtually - this just means instantiating the virtual nodes (or updating them if props changed) so we have a virtual tree. DOM nodes (like <div> etc) are not allowed in the virtual tree.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `renderChildren(name: *, args: *): *`

Overrides the renderChildren() of BaseComponent, so it can inject the children from the linked component, if it's linked!

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | * | nullable: undefined |
| args | * | nullable: undefined |

### `render(): *`

Virtual components always just render their children (they're nodes in the virtual tree). If you need custom behavior (e.g. injecting other virtual nodes), you can write a real component that renders virtual components. If you try to override this, you'll get an error.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `linkToComponent(component: BaseComponent): BaseVirtualComponent`

This is the initialization code for a virtual component. Typically a virtual component exists alongside a concrete component, as a mechanism for configuring that component. For example, in a virtual scroller, the concrete component will render actual elements to the DOM (based on what's visible), but its children will be rendered to a virtual tree for doing the layout. A virtual component can't be rendered by ReactDOM, so instead, you need to pass the children of the concrete component to a virtual component, that will render it instead. You only need to call bindToComponent on the root virtual component - this just tells the virtual component to monitor the children of the given component, and render itself whenever they change. This method returns the virtual component, so that you can write (from a component): ``` this.virtualComponent = new MyVirtualComponent().linkToComponent(this); ```

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| component | BaseComponent |  | The component to bind to. |

## `exports`

ReactWebpackPlugin configures Webpack to work with Twist. Its main function is as follows: - Add and configure a Babel plugin to parse ".jsx" files, including any decorators defined by the libraries you have chosen to add. - Add any additional Webpack plugins that libraries have requested. ReactWebpackPlugin extends TwistConfiguration. You may use that class directly if you'd prefer to configure your build system yourself.

### `constructor()`

### `webpack: *`

The local webpack instance.

### `_webpackPlugins: *[]`

### `_nonLibraryRuleExcludes: *[]`

### `_webpackRules: *[]`

### `_babelLoaderExcludes: *[]`

### `_init(contextName: *, options: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| contextName | * | nullable: undefined |
| options | * | nullable: undefined |

### `mergeConfig(config: Object)`

Adds a .twistrc configuration to the Twist configuration This shouldn't be called directly - it's called as a consequence of _libraryLoader.load().

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| config | Object |  | The configuration from the .twistrc file |

### `addBabelLoaderExclude(exclude: RegExp|string): ReactWebpackPlugin`

Add an exclude pattern to Twist's babel loader. Use this only if you need to exclude certain files that would otherwise match Twist files.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| exclude | RegExp|string |  |

### `addWebpackPlugin(plugin: WebpackPlugin): ReactWebpackPlugin`

Add an additional Webpack plugin. This is meant to be used by libraries; if you are not writing a library, just add other plugins to your Webpack config normally.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| plugin | WebpackPlugin |  |

### `addWebpackRule(rule: Rule): ReactWebpackPlugin`

Add a Rule to the Webpack configuration. See <https://webpack.js.org/configuration/module/#rule>. A Rule typically inclues a "test" property and a "loader" property, and can be used to specify loaders for specific files (such as CSS processors). NOTE: Rules are automatically scoped to apply only to files contained within your library's package. This ensures that different libraries don't conflict with each others' loaders. If you intend to provide a loader that applies to files outside the current library, use `addGlobalWebpackRule`, with caution.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| rule | Rule |  | A webpack rule (e.g. { test: /\.css$/, loader: 'style-loader' }) |

### `addGlobalWebpackRule(rule: Rule): ReactWebpackPlugin`

Add a rule to the Webpack configuration that applies to a path _outside_ the current library. Only use this if you must provide a loader for files that don't live within your library's path. The rule you provide MUST have an `include` property, pointing to the absolute path of a directory to which your loader will apply. This ensures that your loader points to a constrained set of files. You can use `require.resolve("some-path-of-a-known-file")` to get the absolute path of a dependency. NOTE: By providing this loader, you're effectively saying that this loader takes ownership of any matching files. If a user provides a similar rule in their config, yours takes precedence.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| rule | Rule |  |

### `addBabelPlugin(plugin: BabelPlugin|string, options: object): *`

Add a custom Babel plugin. Note that in order to use multi-threaded compilation, the plugin parameter must be a string (Babel will automatically require it when it's needed).

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| plugin | BabelPlugin|string |  |
| options | object | optional: true |

### `apply(compiler: Compiler)`

Apply the plugin to a Webpack compiler. (This function is called by Webpack.)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| compiler | Compiler |  |

## `BaseRoute`

### `constructor()`

### `router: *`

### `_keys: *`

### `enter()`

Override this to hook into when we enter the route

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `leave()`

Override this to hook into when we leave the route (i.e. switching to another route) Note that if only the parameters change, this won't get called - instead, you can just watch the parameters

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `History`

History provides a wrapper over the browser history APIs, so that we can listen to and control browser path change events. This emits two events: * change: This is emitted when the path changes, either programmatically, or via a browser event (like the back button) The data for this event is a RouteChangeEvent object, which can be modified (i.e. to abort or redirect the path change). * commit-change: This is emitted when a path change is finalized, so it can be propagated to the router (actually updating the app). The idea is that users can intercept change events (via a route:provider), so that they can abort

### `constructor()`

### `path: *`

### `queryParams: *`

### `_currentPageId: *`

### `_userState: *`

### `_statePrefix: *`

### `_nextPageId: *`

### `_ignoreNextPopEvent: boolean`

### `_useHashUrls: *`

### `fullPath: *`

### `_previousPath: *`

### `init()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `_createNewPageId(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `_stateToPageId(evState: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| evState | * | nullable: undefined |

### `_pageIdToState(pageId: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| pageId | * | nullable: undefined |

### `_getHistoryState(pageId: *): {"id": *, "user": *}`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| pageId | * | nullable: undefined |

### `_onBrowserPathChange(ev: *)`

Get the current path according to the browser

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| ev | * | nullable: undefined |

### `_getChangeEvent(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `_updatePath(path: *, canIntercept: *, abortMethod: *)`

Changing the path - this also parses any query strings appended to the path

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| canIntercept | * | nullable: undefined |
| abortMethod | * | nullable: undefined |

### `_setPath(path: *, replaceState: boolean)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| replaceState | boolean | nullable: undefined, optional: true, default: false |

### `setPath(path: *, replaceState: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| replaceState | * | nullable: undefined |

### `setState(data: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| data | * | nullable: undefined |

### `getState(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `forward()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `back()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Path`

### `constructor()`

### `keys: *[]`

### `pathStr: *`

### `path: *`

### `RouteClass: *`

### `check(path: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `getValuesForPath(path: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

### `create(router: *, path: *): *`

Create a new route instance, passing in the route's parameters as the initial parameter values

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| router | * | nullable: undefined |
| path | * | nullable: undefined |

### `update(route: *, path: *): Boolean`

Update an existing route instance with new values - this only works if it's the exact same @Route() decorator.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| route | * | nullable: undefined |
| path | * | nullable: undefined |

## `RouteChangeEvent`

Event capturing a route change - this provides methods for aborting, or redirecting the route

### `constructor()`

### `ABORT: *`

### `REDIRECT: *`

### `_newPath: *`

### `_oldPath: *`

### `_operation: *`

### `abort()`

Abort the route change - this keeps it on the current route

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `redirect(path: *)`

Redirect the event to a different path

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |

## `RouteManager`

### `defaultPath: *`

### `namespaces: *`

### `register(namespace: string, pathExpr: *, route: *)`

Register a path expression with a Route class. This is called internally by the `@Route` decorator.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| namespace | string | nullable: undefined, optional: true |
| pathExpr | * | nullable: undefined |
| route | * | nullable: undefined |

### `resolve(namespace: string, path: *): *`

Resolve a concrete path to a Route. This is called by the <router> component.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| namespace | string | nullable: undefined, optional: true |
| path | * | nullable: undefined |

### `toString(): *`

Print out a list of the path expressions and the class they correspond to; useful for debugging.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `clear(namespace: *)`

Clear all the registered routes - useful for testing

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| namespace | * | nullable: undefined |

## `BaseLayoutComponent`

The base class of the "model representation of an item" within a VirtualScroll view. This class stores an item's position information and data: a model of the view, but not the actual view itself. An actual view (which would extend {@link BaseViewComponent} - you can use the `@ViewComponent` decorator for this) would be recycled and reused as the VirtualScroll view scrolls.

### `left: *`

### `top: *`

### `width: *`

### `height: *`

### `isBookmark: *`

### `data: *`

Data needed to render the {@link ViewComponent}.

### `expand(): boolean`

Called each time the item is rendered. If this function returns true, VirtualScroll will track its visibility and call `stopPendingItem` when it has fallen out of view.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `stopPendingItem()`

Called when the item falls out of the rendered view, if it has been expanded (by returning true from `expand()`).

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `savePosition()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `layoutAttributes(funcs: ...WatchFunction )`

Begin watching the specified observable attributes, triggering `setNeedsLayout()` when they change.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| funcs | ...WatchFunction |  | A function that references an observable, for passing to `.watch()`. |

### `setNeedsLayout()`

Mark this view as needing layout. (This implicitly notifies the parent that its child needs layout.)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `componentDidMount()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `componentWillUnmount()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `layout(left: *, top: *, width: *, height: *)`

Update the layout and position of this item.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| left | * | nullable: undefined |
| top | * | nullable: undefined |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

### `needsLayout(width: *, height: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

### `updateLayout(width: *, height: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

### `updatePosition(deltaLeft: *, deltaTop: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| deltaLeft | * | nullable: undefined |
| deltaTop | * | nullable: undefined |

### `inViewport(collector: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| collector | * | nullable: undefined |

### `collect(collector: *): boolean`

If this item is within the viewport defined by `collector`, call `addItem(this)` on the collector.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| collector | * |  |

### `toJSON(): {"name": *, "viewName": *, "left": *, "top": *, "width": *, "height": *, "children": *}`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `resolveBookmark(bookmark: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| bookmark | * | nullable: undefined |

## `ContiguousLayout`

Base class for contiguous (side-by-side, non-overlapping) layout. This includes: * List layout (single column/row): {@link VerticalListLayout}, {@link HorizontalListLayout} * Grid layout (grid of fixed-size items): {@link VerticalGridLayout} * Knuth-Plass layout (grid of variable aspect ratio items): {@link VerticalKnuthPlassLayout}, {@link HorizontalKnuthPlassLayout} Internally, this uses a {@link PaginatedList} (to optimize the collection process).

### `constructor()`

### `margin: *`

### `needsLayout(width: *, height: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

### `updatePosition(deltaLeft: *, deltaTop: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| deltaLeft | * | nullable: undefined |
| deltaTop | * | nullable: undefined |

### `collect(collector: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| collector | * | nullable: undefined |

## `GridLayout`

A layout that arranges its children into a grid. Items are placed on a row horizontally with the hMargin spacing to the right of each one. If an item and its hMargin cannot fit on the current row, a new row is created underneath. Each child must provide its own size (e.g. by overriding `updateLayout()` and setting `this.width` and `this.height`).

### `constructor()`

### `hMargin: *`

### `vMargin: *`

### `width: *`

### `height: *`

### `updateLayout(width: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |

## `VerticalGridLayout`

## `KnuthPlassLayout`

A layout that arranges its children like words in a paragraph: from left to right, breaking onto a new line when there isn't enough space at the end of each line.

### `constructor()`

### `size: *`

### `knuthPlass: *`

### `width: *`

### `height: *`

### `getItemAspectRatio(item: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| item | * | nullable: undefined |

### `updateLayout(width: *, height: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

## `HorizontalKnuthPlassLayout`

## `VerticalKnuthPlassLayout`

## `LayoutContainer`

An item that contains children. Parent items are responsible for passing layout and position to their children as needed. This class is fairly low-level; if you're just implementing a VirtualScroll view, you'll want to use a higher-level layout component, like {@link VerticalListLayout}

### `childNeedsLayout: boolean`

### `left: *`

### `top: *`

### `setChildNeedsLayout()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `layoutAttributes()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `willInsertBefore(child: *, before: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| child | * | nullable: undefined |
| before | * | nullable: undefined |

### `layout(left: *, top: *, width: *, height: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| left | * | nullable: undefined |
| top | * | nullable: undefined |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

### `updatePosition(deltaLeft: *, deltaTop: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| deltaLeft | * | nullable: undefined |
| deltaTop | * | nullable: undefined |

### `needsLayout(width: *, height: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

### `updateLayout()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

### `collect(collector: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| collector | * | nullable: undefined |

### `resolveBookmark(bookmark: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| bookmark | * | nullable: undefined |

## `ListLayout`

A layout that arranges its children into a simple list, either vertically or horizontally. Each child must provide its own size (e.g. by overriding `updateLayout()` and setting `this.width` and `this.height`). It may also contain "sticky" items, which act like section headings and "hook" themselves to the top of the view when they reach the top.

### `width: *`

### `height: *`

### `updateLayout(width: *, height: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

### `updatePosition(deltaLeft: *, deltaTop: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| deltaLeft | * | nullable: undefined |
| deltaTop | * | nullable: undefined |

### `collect(collector: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| collector | * | nullable: undefined |

### `updateSticky(view: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| view | * | nullable: undefined |

## `HorizontalListLayout`

## `VerticalListLayout`

## `OverlappingLayout`

A layout that positions its children on top of each another, completely covering its area.

### `width: number`

### `height: number`

### `updateLayout(width: *, height: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

## `StickyItem`

An item that "sticks" itself to the top of the viewport when it reaches the top.

### `constructor()`

### `fixed: *`

### `fixedLeft: *`

### `fixedTop: *`

### `stickyWidth: *`

### `stickyHeight: *`

### `width: *`

### `height: *`

### `updateLayout(width: *, height: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| width | * | nullable: undefined |
| height | * | nullable: undefined |

## `BaseInteractionManager`

An Interaction lets you manage mouse/touch interactions on the virtual scroller Subclasses should implement methods corresponding to drag events * start() - a drag event starts * update() - a drag event updates * end() - a drag event ends * click() - a click event happens

### `active: *`

### `mapper: *`

### `_init(mapper: *)`

Called by the touch mapper to initialize the interaction (so it knows to call it when events happpen)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| mapper | * | nullable: undefined, optional: true |

### `wait(milliseconds: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| milliseconds | * | nullable: undefined |

# Function

## `upperCaseReplacementFn(match: *, x: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| match | * | nullable: undefined |
| x | * | nullable: undefined |

## `camelCaseHyphens(str: *): *`

Convert a potentially-hyphenated string into camelCase, as used conventionally when writing JSX attributes. This does _not_ convert other word separators, such as underscores or spaces. Example: camelCaseHyphens("some-attribute") === "someAttribute" camelCaseHyphens("-webkit-animation") === "WebkitAnimation" camelCaseHyphens("under_score") === "under_score"

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| str | * |  |

## `normalizeOptions(opts: {}): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| opts | {} | nullable: undefined, optional: true, default: {} |

## `programVisitor(path: *, state: *, options: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| path | * | nullable: undefined |
| state | * | nullable: undefined |
| options | * | nullable: undefined |

## `exports(expressions: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| expressions | * | nullable: undefined |

## `camelCase(str: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| str | * | nullable: undefined |

## `mergeStyleIntoObject(value: *, obj: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | * | nullable: undefined |
| obj | * | nullable: undefined |

## `exports(values: ...string|object): object|string`

Merge all arguments into one style object. Strings are converted to style objects; object keys are camelCased. If only one string was provided, and it doesn't look like a CSS string, we'll return the string directly.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| values | ...string|object |  |

## `getCustomEventName(name: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| name | * | nullable: undefined |

## `exports(config: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| config | * | nullable: undefined |

## `noop()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `wrapGetterFunction(fn: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| fn | * | nullable: undefined |

## `wrapSetterFunction(fn: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| fn | * | nullable: undefined |

## `disposeHelper(disposable: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| disposable | * | nullable: undefined |

## `wrapResult(result: *, caller: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| result | * | nullable: undefined |
| caller | * | nullable: undefined |

## `createMethod(fn: *, mutator: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| fn | * | nullable: undefined |
| mutator | * | nullable: undefined |

## `createMethod(fn: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| fn | * | nullable: undefined |

## `createMethod(fn: *, mutator: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| fn | * | nullable: undefined |
| mutator | * | nullable: undefined |

## `noop()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `Abstract(target: *, property: *, descriptor: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |

## `Bind(target: *, property: *, descriptor: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |

## `Cache(target: *, property: *, descriptor: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |

## `Debounce(wait: number, options: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| wait | number | nullable: undefined, optional: true, default: 0 |
| options | * | nullable: undefined |

## `Delay(wait: number): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| wait | number | nullable: undefined, optional: true, default: 0 |

## `Memoize(target: *, property: *, descriptor: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |

## `Observable(target: *, property: *, descriptor: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| target | * | nullable: undefined |
| property | * | nullable: undefined |
| descriptor | * | nullable: undefined |

## `Prototype(args: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| args | * | nullable: undefined |

## `toBoolean(str: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| str | * | nullable: undefined |

## `identity(a: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| a | * | nullable: undefined |

## `slice(a: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| a | * | nullable: undefined |

## `wrapArray(array: *, parent: *, name: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| array | * | nullable: undefined |
| parent | * | nullable: undefined |
| name | * | nullable: undefined |

## `wrapMap(map: *, parent: *, name: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| map | * | nullable: undefined |
| parent | * | nullable: undefined |
| name | * | nullable: undefined |

## `exportables(obj: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |

## `Throttle(wait: number, options: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| wait | number | nullable: undefined, optional: true, default: 0 |
| options | * | nullable: undefined |

## `Wrap(wrapper: *, origSuffix: *, args: ...*): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| wrapper | * | nullable: undefined |
| origSuffix | * | nullable: undefined |
| args | ...* | nullable: undefined |

## `protectorMiddleware(store: *, action: *, payload: *, next: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| store | * | nullable: undefined |
| action | * | nullable: undefined |
| payload | * | nullable: undefined |
| next | * | nullable: undefined |

## `devTools(): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `remoteDevMiddleware(store: *, action: *, payload: *, next: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| store | * | nullable: undefined |
| action | * | nullable: undefined |
| payload | * | nullable: undefined |
| next | * | nullable: undefined |

## `thunkMiddleware(store: *, action: *, payload: *, next: *): *`

Middleware for asynchronous actions. Lets you define actions that are functions, which can dispatch other actions (so you can encapsulate a longer asynchronous operation)

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| store | * | nullable: undefined |
| action | * | nullable: undefined |
| payload | * | nullable: undefined |
| next | * | nullable: undefined |

## `isAutoExtended(classNode: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| classNode | * | nullable: undefined |

## `hasTypeOfOperator(node: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | * | nullable: undefined |

## `isJSXTag(node: *, tag: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | * | nullable: undefined |
| tag | * | nullable: undefined |

## `isDecorator(node: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| node | * | nullable: undefined |

## `isNameInExpression(expression: *, name: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| expression | * | nullable: undefined |
| name | * | nullable: undefined |

## `isNameInAsAttribute(asObject: *, name: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| asObject | * | nullable: undefined |
| name | * | nullable: undefined |

## `isNameInForAttribute(forObject: *, name: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| forObject | * | nullable: undefined |
| name | * | nullable: undefined |

## `exports(config: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| config | * | nullable: undefined |

## `noop()`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |

## `replaceExistingMethod(obj: *, name: *, newMethod: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| obj | * | nullable: undefined |
| name | * | nullable: undefined |
| newMethod | * | nullable: undefined |

## `copyPrototype(prototypeObj: *)`

Copy over the methods from Disposable and SignalDispatcher

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| prototypeObj | * | nullable: undefined |

## `isNullOrWhitespace(item: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| item | * | nullable: undefined |

## `isNullOrNotVirtual(item: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| item | * | nullable: undefined |

## `isConcreteComponent(item: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| item | * | nullable: undefined |

## `concreteItemTransform(item: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| item | * | nullable: undefined |

## `flatten(arr: *, skipTest: *, itemTransform: *, flattenedArr: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| arr | * | nullable: undefined |
| skipTest | * | nullable: undefined |
| itemTransform | * | nullable: undefined |
| flattenedArr | * | nullable: undefined |

## `instantiateContent(content: *, context: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| content | * | nullable: undefined |
| context | * | nullable: undefined |

## `propsDiffer(propsA: *, propsB: *): boolean`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| propsA | * | nullable: undefined |
| propsB | * | nullable: undefined |

## `convertRuleToCondition(rule: Rule): Condition`

Create a Webpack Condition from a Webpack Rule by stripping out any nested Rule properties, keeping only the conditions in which the rule would be applied. In other words, the return value of this function could be passed to `exclude` on another rule, to exclude only the files matched by the input rule.

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| rule | Rule |  |

## `exports(config: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| config | * | nullable: undefined |

## `Route(namespace: *, path: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| namespace | * | nullable: undefined |
| path | * | nullable: undefined |

## `exports(config: *)`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| config | * | nullable: undefined |

## `inRange(value: *, left: *, right: *): *`

| Name | Type | Attribute | Description |
| --- | --- | --- | --- |
| value | * | nullable: undefined |
| left | * | nullable: undefined |
| right | * | nullable: undefined |